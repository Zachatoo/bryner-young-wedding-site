import * as Yup from "yup";

export const rsvpFormDataSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Name is required.")
    .max(100, "Is your name really that long?")
    .required("Name is required."),
  rsvpStatus: Yup.string()
    .oneOf(["Accepted", "Rejected"], "RSVP status is required.")
    .required("RSVP status is required."),
  email: Yup.string().email("Email must be a valid email."),
  guestCount: Yup.number()
    .nullable()
    .when("rsvpStatus", {
      is: "Accepted",
      then: Yup.number()
        .min(1, "That's... not possible.")
        .integer("Number of guests must be an integer.")
        .max(
          20,
          "Seriously? Please don't bring that many people to our wedding."
        )
        .required("Number of guests is required.")
        .typeError("Number of guests is required."),
    }),
  notes: Yup.string(),
});

export type RSVPFormData = Yup.InferType<typeof rsvpFormDataSchema>;
