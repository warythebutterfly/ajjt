const services = [
  {
    title: "Tax Returns",
    desc: "Self-Assessment, Corporation Tax, and annual filings done right.",
  },
  {
    title: "Self Assessment",
    desc: "Preparation and submission of personal Self Assessment tax returns, ensuring accuracy and compliance.",
  },
  {
    title: "Director’s Tax Return",
    desc: "Specialist tax returns for company directors, including dividends and allowable expenses.",
  },
  {
    title: "Confirmation Statement Filing",
    desc: "Timely preparation and submission of Companies House confirmation statements.",
  },
  {
    title: "Payroll",
    desc: "Payslips, RTI submissions, and employer compliance handled for you.",
  },
  {
    title: "Year-End Accounts",
    desc: "Statutory accounts, management reports, and clean year-end close.",
  },
  {
    title: "Bookkeeping & VAT",
    desc: "Accurate monthly bookkeeping, VAT returns, and reconciliations.",
  },
  {
    title: "Business Advisory",
    desc: "Cashflow planning, budgeting, pricing, and growth decisions.",
  },
  {
    title: "New Business Setup",
    desc: "Company registration, systems setup, and ongoing support.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Services built for peace of mind
        </h2>
        <p className="mt-3 text-slate-600">
          Whether you’re a sole trader, limited company, or growing business —
          we’ll keep your finances organised and compliant.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="text-sm font-semibold">{s.title}</div>
            <div className="mt-2 text-sm text-slate-600">{s.desc}</div>
            <a
              href="#contact"
              className="mt-4 inline-flex text-sm font-medium text-slate-900 underline underline-offset-4 hover:opacity-80"
            >
              Ask about this
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
