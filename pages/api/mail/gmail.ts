import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_ID,
    pass: process.env.GMAIL_PW,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    email,
    title,
    contents,
    // , html
  } = req.body;
  const html = `
        <div>
          <h1>G-Mail HTML Str Test</h1>
          <div style="width:500px; height:500px; background-color:pink"></div>
        </div>
    `;

  console.log("API => process.env.GMAIL_ID =>", process.env.GMAIL_ID);
  console.log("API => process.env.GMAIL_PW =>", process.env.GMAIL_PW);
  console.log("API => email =>", email);
  console.log("API => title =>", title);
  console.log("API => contents =>", contents);

  const mailOptions = {
    from: process.env.GMAIL_ID,
    to: email,
    subject: title,
    html: html,
    text: contents,
  };

  const info = await transporter.sendMail(mailOptions).catch((err) => {
    res.status(300).json(false);
  });
  // console.log("info  =>", info);

  res.status(200).json(true);
}
