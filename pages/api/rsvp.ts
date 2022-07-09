// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  guestCount: string;
  inviteCode: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FormData>
) {
  const body = req.body as FormData;
  console.log("body: ", body);
  res.status(200).json(body);
}
