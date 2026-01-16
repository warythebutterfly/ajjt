"use client";

import { useMemo, useState } from "react";

const services = [
  "Tax Returns",
  "Self Assesment",
  "Director's Tax Return",
  "Confirmation Statement Filing",
  "Payroll",
  "Year-End Accounts",
  "Bookkeeping & VAT",
  "Business Advisory",
  "New Business Setup",
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState<string>("");

  const canSubmit = useMemo(() => status !== "sending", [status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed");

      e.currentTarget.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError("Sorry — something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Book a consultation
          </h2>
          <p className="mt-3 text-slate-600">
            Tell us what you need and we’ll get back quickly with next steps.
          </p>

          <div className="mt-8 space-y-3 text-sm text-slate-700">
            <Info label="Name" value="Eddie Oyediran" />
            <Info label="Phone" value="+44 7786 919490" />
            <Info label="Email" value="eddie.ajtt@gmail.com" />
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
            Prefer email? Use the form — it goes directly to our inbox.
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <form onSubmit={onSubmit} className="space-y-4">
            {/* honeypot */}
            <input
              name="website"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Full name">
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-slate-200 px-3 py-2"
                  placeholder="John Smith"
                />
              </Field>

              <Field label="Email">
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-slate-200 px-3 py-2"
                  placeholder="john@email.com"
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Phone (optional)">
                <input
                  name="phone"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2"
                  placeholder="+44..."
                />
              </Field>

              <Field label="Company (optional)">
                <input
                  name="company"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2"
                  placeholder="Company name"
                />
              </Field>
            </div>

            <Field label="Service (optional)">
              <select
                name="service"
                className="w-full rounded-xl border border-slate-200 px-3 py-2"
                defaultValue=""
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Message">
              <textarea
                name="message"
                required
                className="min-h-[130px] w-full rounded-xl border border-slate-200 px-3 py-2"
                placeholder="Briefly describe what you need help with and any deadlines…"
              />
            </Field>

            <button
              disabled={!canSubmit}
              className="w-full rounded-xl bg-[#0f172b] py-3 text-sm font-medium text-white hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "sent" && (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
                Message sent — we’ll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">
                {error}
              </div>
            )}

            <p className="text-xs text-slate-500">
              By submitting, you consent to being contacted about your enquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-1 text-xs font-medium text-slate-700">{label}</div>
      {children}
    </label>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
      <div className="text-slate-500">{label}</div>
      <div className="font-medium text-slate-900">{value}</div>
    </div>
  );
}
