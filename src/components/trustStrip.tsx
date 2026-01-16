export default function TrustStrip() {
    return (
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-8 md:grid-cols-3">
          <TrustCard title="Compliance-first">
            Up-to-date processes to keep filings accurate and on time.
          </TrustCard>
          <TrustCard title="Transparent pricing">
            Clear quotes with no surprise add-ons.
          </TrustCard>
          <TrustCard title="Human support">
            Speak to an accountant, not a ticketing system.
          </TrustCard>
        </div>
      </section>
    );
  }
  
  function TrustCard({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <div className="text-sm font-semibold">{title}</div>
        <div className="mt-2 text-sm text-slate-600">{children}</div>
      </div>
    );
  }
  