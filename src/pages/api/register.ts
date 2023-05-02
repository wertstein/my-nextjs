// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;
  const { email, eventId } = req.body;

  if (method === "POST") {
    res.status(200).json({ message: `Registered successfully email ${email}` });
  }

  res.status(200).json({ message: "John Doe" });
}
