import * as Yup from "yup";

export const rsvpFormDataSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Name is required.")
    .max(100, "Name must not exceed ${max} characters.")
    .required("Name is required."),
  email: Yup.string().email("Email must be a valid email."),
  guestCount: Yup.number()
    .positive()
    .integer("Number of guests must be an integer.")
    .max(20, "Number of guests must not exceed ${max}.")
    .required("Number of guests is required.")
    .typeError("Number of guests is required."),
  notes: Yup.string(),
});

export type RSVPFormData = Yup.InferType<typeof rsvpFormDataSchema>;
