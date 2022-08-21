import type { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";
import { MailService } from "@sendgrid/mail";
import { isValidEmail, RSVPFormData, rsvpFormDataSchema } from "utils";

interface Data {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method !== "POST") {
      res.status(405).json({ message: "Only POST requests allowed." });
      return;
    }

    const body = await rsvpFormDataSchema.validate(req.body);

    await _addToAirtable(body);
    await _sendEmails(body);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "An unexpected error has occured." });
    return;
  }

  res.status(200).json({ message: "Successfully submitted RSVP request." });
}

async function _addToAirtable(body: RSVPFormData) {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseID = process.env.AIRTABLE_BASE || "";
  const guestListTableID = process.env.AIRTABLE_GUEST_TABLE || "";
  const nameKey = process.env.AIRTABLE_GUEST_TABLE_NAME || "";
  const emailKey = process.env.AIRTABLE_GUEST_TABLE_EMAIL || "";
  const countKey = process.env.AIRTABLE_GUEST_TABLE_COUNT || "";
  const notesKey = process.env.AIRTABLE_GUEST_TABLE_NOTES || "";
  const rsvpKey = process.env.AIRTABLE_GUEST_TABLE_RSVP || "";

  const base = new Airtable({ apiKey }).base(baseID);

  await base(guestListTableID).create([
    {
      fields: {
        [nameKey]: body.name,
        [emailKey]: body.email,
        [countKey]: body.guestCount || 0,
        [notesKey]: body.notes,
        [rsvpKey]: body.rsvpStatus,
      },
    },
  ]);
}

async function _sendEmails(body: RSVPFormData) {
  const mailService = new MailService();
  mailService.setApiKey(process.env.SENDGRID_API_KEY || "");

  const promises = [];
  if (body.rsvpStatus === "Accepted" && body.email) {
    promises.push(_sendConfirmationEmail(body, mailService));
  }
  promises.push(_sendGuestRsvpdEmail(body, mailService));
  await Promise.all(promises);
}

async function _sendConfirmationEmail(
  { email, name }: RSVPFormData,
  mailService: MailService
) {
  if (!isValidEmail(email)) {
    console.log("Did not send rsvp email to invalid email", email);
    return;
  }

  const emailRsvp = process.env.EMAIL_RSVP ?? "";
  const templateId = process.env.SENDGRID_TEMPLATE_RSVP_CONFIRMATION ?? "";
  const baseUrl = process.env.BASE_URL ?? "";

  const message = {
    to: email,
    from: emailRsvp,
    templateId,
    dynamicTemplateData: {
      baseUrl,
      name,
    },
  };

  mailService.send(message);
}

async function _sendGuestRsvpdEmail(
  { name, rsvpStatus, guestCount, notes }: RSVPFormData,
  mailService: MailService
) {
  const emailRsvp = process.env.EMAIL_RSVP ?? "";
  const templateId = process.env.SENDGRID_TEMPLATE_GUEST_RSVPD ?? "";

  const message = {
    to: emailRsvp,
    from: emailRsvp,
    templateId,
    dynamicTemplateData: {
      name,
      rsvpStatus,
      guestCount,
      notes,
    },
  };

  mailService.send(message);
}
