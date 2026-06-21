import nodemailer from "nodemailer";
import type { ContactFormValues } from "@/lib/contact-schema";
import { getContactReceiver, getSmtpConfig } from "@/lib/env";

function buildEmailHtml(data: ContactFormValues, timestamp: string): string {
  return `
    <h2>New Website Inquiry - Gleama</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
    <hr />
    <p><strong>Submitted:</strong> ${escapeHtml(timestamp)}</p>
  `;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactEmail(data: ContactFormValues): Promise<void> {
  const smtp = getSmtpConfig();
  const receiver = getContactReceiver();
  const timestamp = new Date().toISOString();

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.port === 465,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
  });

  await transporter.sendMail({
    from: `"Gleama Website" <${smtp.user}>`,
    to: receiver,
    replyTo: data.email,
    subject: "New Website Inquiry - Gleama",
    text: [
      `Name: ${data.fullName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Subject: ${data.subject}`,
      "",
      "Message:",
      data.message,
      "",
      `Submitted: ${timestamp}`,
    ].join("\n"),
    html: buildEmailHtml(data, timestamp),
  });
}
