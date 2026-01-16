export default function About() {
    return (
      <section id="about" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold">How we work</div>
            <ol className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <strong className="text-slate-900">1) Quick discovery:</strong>{" "}
                understand your situation and deadlines.
              </li>
              <li>
                <strong className="text-slate-900">2) Clear plan:</strong> you get
                a checklist of what we need, plus timeline.
              </li>
              <li>
                <strong className="text-slate-900">3) Delivery:</strong> filing,
                reports, and next-step guidance.
              </li>
            </ol>
          </div>
  
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Reliable, professional, and easy to work with
            </h2>
            <p className="mt-3 text-slate-600">
              We focus on accuracy, deadlines, and helping you understand your
              numbers. Our clients stay with us because we’re responsive, clear,
              and proactive.
            </p>
  
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Badge title="Secure handling">Your data is treated carefully.</Badge>
              <Badge title="Deadline-driven">No last-minute panic.</Badge>
              <Badge title="Plain English">We explain without jargon.</Badge>
              <Badge title="Flexible meetings">Remote or in-person.</Badge>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  function Badge({ title, children }: { title: string; children: string }) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="text-sm font-semibold">{title}</div>
        <div className="mt-1 text-sm text-slate-600">{children}</div>
      </div>
    );
  }
  