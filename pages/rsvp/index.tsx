import type { NextPage } from "next";
import type { SubmitHandler } from "react-hook-form";
import {
  Button,
  Head,
  Form,
  FormInput,
  Radio,
  Row,
  Col,
  RadioGroup,
} from "components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RSVPFormData, rsvpFormDataSchema } from "utils";
import { useRouter } from "next/router";

const RSVPPage: NextPage = () => {
  const form = useForm({
    resolver: yupResolver(rsvpFormDataSchema),
  });
  const router = useRouter();

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
        const route = data.rsvpStatus === "Accepted" ? "/?rsvp=success" : "/";
        router.push(route);
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
            <Button
              className="mt-2 sm:mt-4"
              isSubmitting={form.formState.isSubmitting}
              disabled={!rsvpStatus}
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
