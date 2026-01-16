import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-neutral-800 bg-[#0f172b]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/ajtt-logo.png"
            alt="AJTT Accountants logo"
            width={42}
            height={42}
            priority
          />
          <span className="font-brand text-[15px] font-semibold uppercase tracking-wider text-[#efa555]">
            AJT&T Accountants
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
          <Link href="#services" className="hover:text-[#efa555]">
            Services
          </Link>
          <Link href="#about" className="hover:text-[#efa555]">
            About
          </Link>
          <Link href="#testimonials" className="hover:text-[#efa555]">
            Reviews
          </Link>
          <Link href="#faq" className="hover:text-[#efa555]">
            FAQ
          </Link>
          <Link href="#contact" className="hover:text-[#efa555]">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
