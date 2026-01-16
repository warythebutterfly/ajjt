export default function Footer() {
    return (
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="font-semibold text-slate-900">Ajjt</span>{" "}
              • Accounting & Tax
            </div>
            <div className="text-xs">
              © {new Date().getFullYear()} • All rights reserved
            </div>
          </div>
        </div>
      </footer>
    );
  }
  