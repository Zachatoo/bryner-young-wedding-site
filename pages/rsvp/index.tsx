import type { NextPage } from "next";
import { Head, Form, FormHandle, FormInput, Row, Col } from "components";
import { SubmitHandler } from "react-hook-form";
import { useRef } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  guestCount: string;
  inviteCode: number;
}

const RSVPPage: NextPage = () => {
  const formRef = useRef<FormHandle>(null);

  const _onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await fetch("/api/rsvp", {
        method: "POST",
        body: JSON.stringify(data),
      });
      formRef.current?.reset();
    } catch {}
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
          <Form onSubmit={_onSubmit} ref={formRef}>
            <Row>
              <Col sm="1/2">
                <FormInput
                  name="firstName"
                  label="First name"
                  icon="user"
                  registerOptions={{
                    required: true,
                    maxLength: 100,
                  }}
                />
              </Col>
              <Col sm="1/2">
                <FormInput
                  name="lastName"
                  label="Last name"
                  icon="user"
                  registerOptions={{
                    required: true,
                    maxLength: 100,
                  }}
                />
              </Col>
              <Col sm="1/2">
                <FormInput
                  name="email"
                  label="Email"
                  icon="envelope"
                  registerOptions={{
                    required: true,
                    maxLength: 100,
                  }}
                />
              </Col>
              <Col sm="1/2">
                <FormInput
                  name="guestCount"
                  label="Number of guests"
                  icon="users"
                  type="tel"
                  registerOptions={{
                    required: true,
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Number of guests must be a number",
                    },
                    min: 1,
                    max: 20,
                  }}
                />
              </Col>
              <Col sm="1/2">
                <FormInput
                  name="inviteCode"
                  label="Invite code"
                  icon="key"
                  type="tel"
                  registerOptions={{
                    required: true,
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Invite code must be a number",
                    },
                    maxLength: 5,
                  }}
                />
              </Col>
            </Row>
            <button
              className="mt-2 sm:mt-4 px-4 py-1.5 text-white rounded-md hover:bg-green focus-visible:bg-green bg-green-dark"
              type="submit"
            >
              RSVP
            </button>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default RSVPPage;
