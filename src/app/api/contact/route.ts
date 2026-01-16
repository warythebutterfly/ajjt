import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs"; // important for nodemailer

const ContactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  phone: z.string().max(30).optional().or(z.literal("")),
  company: z.string().max(80).optional().or(z.literal("")),
  service: z.string().max(80).optional().or(z.literal("")),
  message: z.string().min(10).max(2000),
  website: z.string().optional().or(z.literal("")), // honeypot
});

function env(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid form data." },
        { status: 400 }
      );
    }

    // basic spam: honeypot should be empty
    if (parsed.data.website && parsed.data.website.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      host: env("SMTP_HOST"),
      port: Number(env("SMTP_PORT")),
      secure: Number(env("SMTP_PORT")) === 465, // 465 = true, 587 = false
      auth: {
        user: env("SMTP_USER"),
        pass: env("SMTP_PASS"),
      },
    });

    const to = env("CONTACT_TO_EMAIL");
    const from = env("CONTACT_FROM_EMAIL");

    const { name, email, phone, company, service, message } = parsed.data;

    const subject = `New enquiry${service ? ` (${service})` : ""} — ${name}`;

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      company ? `Company: ${company}` : null,
      service ? `Service: ${service}` : null,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    await transporter.sendMail({
      to,
      from,
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}
