const faqs = [
    {
      q: "Do you offer fixed pricing?",
      a: "Yes. We’ll confirm a clear quote after understanding what you need.",
    },
    {
      q: "Can you help if my books are behind?",
      a: "Absolutely — we can catch up historical bookkeeping and get you compliant.",
    },
    {
      q: "Do you work with small businesses and freelancers?",
      a: "Yes. We support sole traders, limited companies, contractors, and growing teams.",
    },
  ];
  
  export default function FAQ() {
    return (
      <section id="faq" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">FAQ</h2>
  
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <div className="text-sm font-semibold">{f.q}</div>
                <div className="mt-2 text-sm text-slate-600">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  