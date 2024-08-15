"use server";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendMail({
  to,
  name,
  message,
  status,
}: {
  to: string;
  name: string;
  message: string;
  status: string;
}) {
  const mailOptions = {
    from: process.env.EMAIL,
    to: ["muhammadfawwad5353@gmail.com"],
  };
  try {
    const mail = await transporter.sendMail({
      ...mailOptions,
      subject: `Payment ${status}`,
      text: `Hi ${name}, The Payment Status of Your Order is ${status}. For more details, please contact us.`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #333; background-color: #f4f4f4; padding: 20px;">
          <table style="width: 100%; max-width: 600px; margin: auto; border-collapse: collapse; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
            <thead>
              <tr>
                <th style="padding: 30px; text-align: center; background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); color: #ffffff;">
                  <h1 style="margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 1px;">Payment ${status}</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 30px; text-align: left; background-color: #ffffff;">
                  <p style="font-size: 20px; margin: 0 0 15px;">Hello <strong>${name}</strong>,</p>
                  <p style="font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                    We wanted to let you know that the payment status of your order is <strong style="color: #6a11cb;">${status}</strong>.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6; color: #555555; margin: 0 0 20px;">
                    If you have any questions or need further assistance, please don't hesitate to reach out to us. We're here to help you!
                  </p>
                  <a href="https://asadullah.vercel.app/" style="display: inline-block; padding: 10px 20px; background-color: #2575fc; color: #ffffff; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold; margin-top: 20px;">Contact Us</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 20px; background-color: #f4f4f4; text-align: center; color: #777777; font-size: 14px;">
                  <p style="margin: 0 0 10px;">Connect with us:</p>
                  <a href="https://twitter.com/yourcompany" style="margin: 0 5px; text-decoration: none;">
                    <img src="https://yourcompany.com/icons/twitter.png" alt="Twitter" style="width: 24px; height: 24px;">
                  </a>
                  <a href="https://facebook.com/yourcompany" style="margin: 0 5px; text-decoration: none;">
                    <img src="https://yourcompany.com/icons/facebook.png" alt="Facebook" style="width: 24px; height: 24px;">
                  </a>
                  <a href="https://instagram.com/yourcompany" style="margin: 0 5px; text-decoration: none;">
                    <img src="https://yourcompany.com/icons/instagram.png" alt="Instagram" style="width: 24px; height: 24px;">
                  </a>
                  <p style="margin-top: 20px; color: #aaaaaa;">
                    © 2024 Your Company. All rights reserved.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
    });
    return mail;
  } catch (error) {
    console.log(error);
    // return NextResponse.error();
  }
  console.log(to, name, message, status);
}


// ["asadomer214@gmail.com","obaidullahomer475@gmail.com","umer.farooq@sapphiretextiles.com","abdullah.umar8448@gmail.com "],