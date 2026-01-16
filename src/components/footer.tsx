import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172b] border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/ajtt-logo.png"
              alt="AJTT Accountants logo"
              width={42}
              height={42}
            />
            <span className="font-brand text-[15px] font-semibold uppercase tracking-wider text-[#efa555]">
              AJT&T Accountants
            </span>
          </div>
          <p className="text-sm text-neutral-400 max-w-xs">
            Professional accounting, tax and business advisory services across
            the UK.
          </p>
        </div>

        {/* Quick links */}
        <div className="space-y-3 text-sm">
          <h4 className="text-neutral-200 font-medium">Quick Links</h4>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="#services"
              className="text-neutral-400 hover:text-[#efa555]"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-neutral-400 hover:text-[#efa555]"
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="text-neutral-400 hover:text-[#efa555]"
            >
              Reviews
            </Link>
            <Link href="#faq" className="text-neutral-400 hover:text-[#efa555]">
              FAQ
            </Link>
            <Link
              href="#contact"
              className="text-neutral-400 hover:text-[#efa555]"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Legal */}
        <div className="space-y-2 text-sm">
          <h4 className="text-neutral-200 font-medium">Legal</h4>
          <p className="text-neutral-400">
            © {new Date().getFullYear()} AJT&T Accountants
          </p>
          <p className="text-neutral-500">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
