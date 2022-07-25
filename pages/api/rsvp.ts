// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { MailDataRequired } from "@sendgrid/mail";
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

    if (body.rsvpStatus === "Accepted") {
      await _sendConfirmationEmail(body);
    }
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

async function _sendConfirmationEmail(body: RSVPFormData) {
  if (!isValidEmail(body.email)) {
    console.log("Did not send rsvp email to invalid email", body.email);
    return;
  }
  const mailService = new MailService();
  mailService.setApiKey(process.env.SENDGRID_API_KEY || "");

  const message = {
    to: body.email,
    from: process.env.EMAIL_RSVP,
    templateId: process.env.SENDGRID_TEMPLATE_RSVP_CONFIRMATION,
    dynamicTemplateData: {
      baseUrl: process.env.BASE_URL,
      name: body.name,
    },
  } as MailDataRequired;

  await mailService.send(message);
}
