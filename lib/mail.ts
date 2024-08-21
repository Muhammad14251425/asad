"use server";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { useAppointmentContext } from "@/context/AppointmentContext";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: process.env.EMAIL,
  to: ["asadomer214@gmail.com"],
};

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

export async function sendContactUsMail(
  state: { status: string; message: string },
  formData: FormData
) {
  const name = formData.get("name") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const address = formData.get("address") as string;
  const email = formData.get("email") as string;
  const deliveryType = formData.get("deliveryType") as string;
  const from = formData.get("from") as string;
  const to = formData.get("to") as string;
  const vehicle = formData.get("vehicle") as string;

  try {
    const mail = await transporter.sendMail({
      ...mailOptions,
      subject: "🚀 New Vehicle Booking Request",
      text: `Hi Team, A new booking request has been received. Here are the details:\n\nName: ${name}\nPhone Number: ${phoneNumber}\nAddress: ${address}\nEmail: ${email}\nDelivery Type: ${deliveryType}\nFrom: ${from}\nTo: ${to}\nSelected Vehicle: ${vehicle}\n\nPlease review and process the request accordingly.`,
      html: `
        <div style="font-family: 'Segoe UI', Roboto, Arial, sans-serif; color: #333; background-color: #f7f8fa; padding: 40px; text-align: center;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 15px; overflow: hidden; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); color: #ffffff; padding: 40px 30px;">
              <h1 style="font-size: 32px; margin: 0;">🚀 New Vehicle Booking Request!</h1>
              <p style="font-size: 18px; margin: 15px 0 0;">You've got a new booking request.</p>
            </div>
            <div style="padding: 30px;">
              <p style="font-size: 18px; color: #555; margin: 0 0 15px; text-align: left;">Hello Team,</p>
              <p style="font-size: 16px; line-height: 1.6; color: #777; text-align: left;">
                We have received a new vehicle booking request with the following details:
              </p>
              <table style="width: 100%; margin: 20px 0; text-align: left; color: #555;">
                <tr>
                  <td style="padding: 8px 0;"><strong>Name:</strong></td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Phone Number:</strong></td>
                  <td>${phoneNumber}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Address:</strong></td>
                  <td>${address}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Email:</strong></td>
                  <td>${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Delivery Type:</strong></td>
                  <td>${deliveryType}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>From:</strong></td>
                  <td>${from}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>To:</strong></td>
                  <td>${to}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Selected Vehicle:</strong></td>
                  <td>${vehicle}</td>
                </tr>
              </table>
              <p style="font-size: 16px; line-height: 1.6; color: #555555; margin: 0 0 20px;">
                Please review the request and proceed with the necessary arrangements.
              </p>
              <a href="https://asadullah.vercel.app/" style="display: inline-block; padding: 12px 25px; background-color: #2575fc; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 16px; font-weight: bold; margin-top: 20px;">View Request</a>
            </div>
            <div style="background-color: #f7f8fa; padding: 20px; text-align: center; color: #999; font-size: 14px;">
              <p style="margin: 0 0 10px;">Stay connected:</p>
              <div>
                <a href="https://twitter.com/yourcompany" style="margin: 0 10px; text-decoration: none;">
                  <img src="https://yourcompany.com/icons/twitter.png" alt="Twitter" style="width: 30px; height: 30px;">
                </a>
                <a href="https://facebook.com/yourcompany" style="margin: 0 10px; text-decoration: none;">
                  <img src="https://yourcompany.com/icons/facebook.png" alt="Facebook" style="width: 30px; height: 30px;">
                </a>
                <a href="https://instagram.com/yourcompany" style="margin: 0 10px; text-decoration: none;">
                  <img src="https://yourcompany.com/icons/instagram.png" alt="Instagram" style="width: 30px; height: 30px;">
                </a>
              </div>
              <p style="margin-top: 20px; color: #aaa;">
                © 2024 Your Company. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (mail.accepted) {
      return { status: "success", message: "Todo added successfully" };
    } else if (mail.rejected) {
      return { status: "error", message: "Something went wrong" };
    } else {
      return { status: "error", message: "Something went wrong" };
    }
  } catch (error) {
    return { status: "error", message: "Something went wrong" };
  }
}

export async function contactUsForm(
  state: { status: string; message: string },
  formData: FormData
) {
  const firstname = formData.get("firstName") as string;
  const lastname = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const reason = formData.get("reason") as string;

  try {
    const mail = await transporter.sendMail({
      ...mailOptions,
      subject: "🚀 New Inquiry from the Contact Form",
      text: `Hi Team, 
  A new inquiry has been submitted. Here are the details:
  
  Name: ${firstname} ${lastname}
  Email: ${email}
  Phone Number: ${phoneNumber}
  Message: ${reason}
  
  Please review and respond accordingly.`,
      html: `
        <div style="font-family: 'Segoe UI', Roboto, Arial, sans-serif; color: #333; background-color: #f7f8fa; padding: 40px; text-align: center;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 15px; overflow: hidden; box-shadow: 0 8px 20px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(135deg, #ff8a00 0%, #e52e71 100%); color: #ffffff; padding: 40px 30px;">
              <h1 style="font-size: 32px; margin: 0;">🚀 New Inquiry Received!</h1>
              <p style="font-size: 18px; margin: 15px 0 0;">You've got a new message from your website's contact form.</p>
            </div>
            <div style="padding: 30px;">
              <p style="font-size: 18px; color: #555; margin: 0 0 15px; text-align: left;">Hello Team,</p>
              <p style="font-size: 16px; line-height: 1.6; color: #777; text-align: left;">
                We have received a new inquiry with the following details:
              </p>
              <table style="width: 100%; margin: 20px 0; text-align: left; color: #555;">
                <tr>
                  <td style="padding: 8px 0;"><strong>Name:</strong></td>
                  <td>${firstname} ${lastname}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Email:</strong></td>
                  <td>${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Phone Number:</strong></td>
                  <td>${phoneNumber}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Message:</strong></td>
                  <td>${reason}</td>
                </tr>
              </table>
              <a href="https://asadullah.vercel.app/contactus" style="display: inline-block; padding: 12px 25px; background-color: #ff8a00; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 16px; font-weight: bold; margin-top: 20px;">View Submission</a>
            </div>
            <div style="background-color: #f7f8fa; padding: 20px; text-align: center; color: #999; font-size: 14px;">
              <p style="margin: 0 0 10px;">Stay connected:</p>
              <div>
                <a href="https://twitter.com/yourcompany" style="margin: 0 10px; text-decoration: none;">
                  <img src="https://yourcompany.com/icons/twitter.png" alt="Twitter" style="width: 30px; height: 30px;">
                </a>
                <a href="https://facebook.com/yourcompany" style="margin: 0 10px; text-decoration: none;">
                  <img src="https://yourcompany.com/icons/facebook.png" alt="Facebook" style="width: 30px; height: 30px;">
                </a>
                <a href="https://instagram.com/yourcompany" style="margin: 0 10px; text-decoration: none;">
                  <img src="https://yourcompany.com/icons/instagram.png" alt="Instagram" style="width: 30px; height: 30px;">
                </a>
              </div>
              <p style="margin-top: 20px; color: #aaa;">
                © 2024 Your Company. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      `,
    });
    return { status: "success", message: mail.messageId };
  } catch (error) {
    return { status: "error", message: "Something went wrong" };
  }
}
