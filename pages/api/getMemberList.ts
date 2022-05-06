// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sendData = data.slice(0, req.body.num);
  res.status(200).json(sendData);
}
