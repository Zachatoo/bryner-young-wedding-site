import type { NextPage } from "next";
import { Button, Head, Form, FormInput, Row, Col } from "components";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RSVPFormData, rsvpFormDataSchema } from "utils";

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
      const parsedBody = await res.json();
      if (res.ok) {
        form.reset();
      } else {
        throw new Error(
          parsedBody.message || "An unexpected error has occured."
        );
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head description="RSVP to the Bryner-Young wedding!"></Head>

      <main className="flex flex-col flex-1 w-full max-w-3xl text-center px-auto">
        <div className="px-8 py-4 sm:pt-12 sm:pb-16">
          <h1 className="pb-4 text-2xl sm:text-3xl sm:pb-6">
            RSVP for the wedding of
          </h1>
          <div className="flex flex-col text-center font-great-vibes">
            <span className="text-3xl sm:text-4xl">Mary Katherine Bryner</span>
            <span className="text-lg sm:text-xl">&</span>
            <span className="text-3xl sm:text-4xl">Zachary Matthew Young</span>
          </div>
        </div>

        <div className="px-2 py-3">
          <Form form={form} onSubmit={_onSubmit}>
            <Row>
              <Col sm="1/2">
                <FormInput name="name" label="Name" icon="user" />
              </Col>
              <Col sm="1/2">
                <FormInput
                  name="guestCount"
                  label="Number of guests"
                  icon="users"
                  type="tel"
                />
              </Col>
            </Row>
            <Row>
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
                  label="Additional notes (optional)"
                  icon="pencil"
                  type="textarea"
                />
              </Col>
            </Row>
            <Button
              className="mt-2 sm:mt-4"
              isSubmitting={form.formState.isSubmitting}
              type="submit"
            >
              RSVP
            </Button>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default RSVPPage;
