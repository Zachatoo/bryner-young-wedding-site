import type { NextPage } from "next";
import type { ErrorOption, SubmitHandler } from "react-hook-form";
import type { RSVPFormData } from "utils";
import {
  Button,
  Head,
  Form,
  FormInput,
  Radio,
  Row,
  Col,
  RadioGroup,
  ValidationText,
} from "components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { rsvpFormDataSchema } from "utils";
import Link from "next/link";

const RSVPPage: NextPage = () => {
  const form = useForm({
    resolver: yupResolver(rsvpFormDataSchema),
  });

  const _onSubmit: SubmitHandler<RSVPFormData> = async (data) => {
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const parsedBody = await res.json();
        throw new Error(
          parsedBody.message || "An unexpected error has occured."
        );
      }
    } catch (err) {
      let errorOption = err as ErrorOption;
      form.setError("submission", errorOption);
    }
  };

  const rsvpStatus = form.watch("rsvpStatus");
  const isRsvping = rsvpStatus === "Accepted";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head description="RSVP to the Bryner-Young wedding!"></Head>

      <main className="flex flex-col flex-1 w-full max-w-3xl text-center px-auto">
        <div className="px-8 py-4 sm:py-12">
          <h1 className="pb-4 text-2xl sm:text-4xl sm:pb-8">
            RSVP for the wedding of
          </h1>
          <div className="flex flex-col text-center font-great-vibes">
            <span className="text-3xl sm:text-5xl">Mary Katherine Bryner</span>
            <span className="text-lg sm:text-2xl">&amp;</span>
            <span className="text-3xl sm:text-5xl">Zachary Matthew Young</span>
          </div>
        </div>

        <div className="px-2 py-3">
          {form.formState.isSubmitSuccessful ? (
            <div>
              <div className="pb-6 text-lg sm:text-xl">
                Thank you for RSVPing!
              </div>
              <Link href="/" className="text-lg">
                Read our story
              </Link>
            </div>
          ) : (
            <Form form={form} onSubmit={_onSubmit}>
              <Row>
                <Col sm="1/2">
                  <FormInput
                    name="name"
                    label="First and last name"
                    icon="user"
                  />
                </Col>
                <Col sm="1/2">
                  <RadioGroup>
                    <Radio
                      name="rsvpStatus"
                      value="Accepted"
                      label="I can make it 😍"
                    />
                    <Radio
                      name="rsvpStatus"
                      value="Rejected"
                      label="I can't make it 😔"
                    />
                  </RadioGroup>
                </Col>
              </Row>
              {isRsvping && (
                <>
                  <Row>
                    <Col sm="1/2">
                      <FormInput
                        name="guestCount"
                        label="Number of guests"
                        icon="users"
                        type="tel"
                      />
                    </Col>
                    <Col sm="1/2">
                      <FormInput
                        name="email"
                        label="Email (optional)"
                        icon="envelope"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormInput
                        name="notes"
                        label="Additional notes (dietary restrictions, etc)"
                        icon="pencil"
                        type="textarea"
                      />
                    </Col>
                  </Row>
                </>
              )}
              {rsvpStatus && (
                <>
                  <Button
                    className="mt-2 sm:mt-4"
                    isSubmitting={form.formState.isSubmitting}
                    type="submit"
                  >
                    RSVP
                  </Button>
                  {form.formState.errors.submission && (
                    <div className="pt-2">
                      <ValidationText>
                        An unexpected error has occured. Please try again.
                      </ValidationText>
                    </div>
                  )}
                </>
              )}
            </Form>
          )}
        </div>
      </main>
    </div>
  );
};

export default RSVPPage;
