export default function Hero() {
    return (
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-24 relative">
          <div>
            <p className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
              Trusted accounting for individuals & businesses
            </p>
  
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Clear books. Confident taxes.{" "}
              <span className="text-slate-500">Year-round support.</span>
            </h1>
  
            <p className="mt-4 text-slate-600 md:text-lg">
              We help you stay compliant, reduce stress, and make smarter
              financial decisions — from bookkeeping to tax returns and advisory.
            </p>
  
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                Request a call back
              </a>
              <a
                href="#services"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                View services
              </a>
            </div>
  
            <div className="mt-10 grid grid-cols-3 gap-4">
              <Stat value="10+ yrs" label="Experience" />
              <Stat value="Fast" label="Response time" />
              <Stat value="Secure" label="Data handling" />
            </div>
          </div>
  
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="rounded-2xl bg-slate-900 p-6 text-white">
              <div className="text-sm opacity-80">Free initial guidance</div>
              <div className="mt-2 text-2xl font-semibold">
                Tell us what you need — we’ll reply within 24 hours.
              </div>
            </div>
  
            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <Bullet>Self-Assessment & Corporation Tax</Bullet>
              <Bullet>Bookkeeping, VAT, Payroll</Bullet>
              <Bullet>Business set-up & advisory</Bullet>
              <Bullet>Year-end accounts & compliance</Bullet>
            </div>
  
            <div className="mt-6 rounded-2xl border border-slate-200 p-4 text-sm text-slate-600">
              <strong className="text-slate-900">Office hours:</strong> Mon–Fri,
              9am–5pm • Remote & in-person appointments
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  function Stat({ value, label }: { value: string; label: string }) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="text-lg font-semibold">{value}</div>
        <div className="text-xs text-slate-500">{label}</div>
      </div>
    );
  }
  
  function Bullet({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex items-start gap-2">
        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-slate-900" />
        <span>{children}</span>
      </div>
    );
  }
  