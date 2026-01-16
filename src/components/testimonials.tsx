const reviews = [
    {
      name: "Small business owner",
      text: "Super responsive and helped us get our books in order quickly. Tax time is finally stress-free.",
    },
    {
      name: "Freelancer",
      text: "Clear explanations and great guidance on allowable expenses. Saved me time and money.",
    },
    {
      name: "Limited company director",
      text: "Professional year-end accounts and proactive reminders. Highly recommend.",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Clients trust us
        </h2>
        <p className="mt-3 text-slate-600">
          A calm, professional service that keeps you compliant and informed.
        </p>
  
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-semibold">{r.name}</div>
              <p className="mt-2 text-sm text-slate-600">{r.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  