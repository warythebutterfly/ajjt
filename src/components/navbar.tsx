"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-neutral-800 bg-[#0f172b]">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/ajtt-logo.png"
              alt="AJTT Accountants logo"
              width={40}
              height={40}
              priority
            />
            <span className="font-brand text-[15px] font-semibold uppercase tracking-wider text-[#efa555]">
              AJT&T Accountants
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <DesktopLinks />
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative h-6 w-6 text-[#efa555]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <HamburgerIcon open={open} />
          </button>
        </div>

        {/* Mobile menu (smooth + professional) */}
        <div
          className={`
            md:hidden overflow-hidden border-t
            transition-all duration-300 ease-in-out
            ${open ? "max-h-64 opacity-100 mt-6 pt-6" : "max-h-0 opacity-0 mt-0 pt-0"}
          `}
        >
          <div
            className={`
              flex flex-col gap-5 text-sm text-neutral-300
              transition-all duration-300 ease-in-out
              ${open ? "translate-y-0" : "-translate-y-2"}
            `}
          >
            <MobileLink href="#services" onClick={() => setOpen(false)}>
              Services
            </MobileLink>
            <MobileLink href="#about" onClick={() => setOpen(false)}>
              About
            </MobileLink>
            <MobileLink href="#testimonials" onClick={() => setOpen(false)}>
              Reviews
            </MobileLink>
            <MobileLink href="#faq" onClick={() => setOpen(false)}>
              FAQ
            </MobileLink>
            <MobileLink href="#contact" onClick={() => setOpen(false)}>
              Contact
            </MobileLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

/* ---------- Subcomponents ---------- */

function DesktopLinks() {
  return (
    <>
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
    </>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="font-medium tracking-wide hover:text-[#efa555]"
    >
      {children}
    </Link>
  );
}

/* ---------- Hamburger → X icon ---------- */

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="absolute inset-0 flex items-center justify-center">
      <span
        className={`
          absolute h-[2px] w-6 bg-current transition-all duration-300 ease-in-out
          ${open ? "rotate-45" : "-translate-y-2"}
        `}
      />
      <span
        className={`
          absolute h-[2px] w-6 bg-current transition-all duration-300 ease-in-out
          ${open ? "opacity-0" : "opacity-100"}
        `}
      />
      <span
        className={`
          absolute h-[2px] w-6 bg-current transition-all duration-300 ease-in-out
          ${open ? "-rotate-45" : "translate-y-2"}
        `}
      />
    </span>
  );
}
