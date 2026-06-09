"use client";

import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Intro", href: "#intro", active: true },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      id="intro"
      className="min-h-screen bg-[#0d0d0d] text-[#f0ede8] flex flex-col font-sans"
    >
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-5 bg-[#0d0d0d]/85 backdrop-blur-md border-b border-white/5">
        {/* Logo */}
        <span className="font-bold text-sm tracking-[0.08em] uppercase text-[#f0ede8]">
          Emmanuel<span className="text-[#c8f135]">.</span>
        </span>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-8 list-none text-[0.7rem] tracking-[0.14em] uppercase">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`transition-colors duration-200 no-underline ${
                  link.active
                    ? "text-[#c8f135] font-semibold"
                    : "text-[#f0ede8]/50 hover:text-[#c8f135]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume button — desktop */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center text-[0.7rem] tracking-[0.14em] uppercase text-[#f0ede8]/70 border border-[#f0ede8]/20 px-4 py-2 rounded hover:border-[#c8f135] hover:text-[#c8f135] transition-all duration-200"
        >
          Resume
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
        >
          <span
            className={`block w-[22px] h-[2px] bg-[#f0ede8] transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-[#f0ede8] transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-[#f0ede8] transition-transform duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0d0d0d] flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl tracking-[0.1em] uppercase no-underline ${
                link.active ? "text-[#c8f135]" : "text-[#f0ede8]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* ── Hero body ── */}
      <div className="flex-1 flex items-center justify-between gap-16 px-10 md:px-20 lg:px-28 py-20 max-w-[1400px] mx-auto w-full">

        {/* Left — text (takes ~half the width) */}
        <div className="flex flex-col max-w-[520px] w-full">
          {/* Tag line */}
          <p className="text-[0.68rem] tracking-[0.2em] uppercase text-[#f0ede8]/40 mb-6">
            Emmanuel Addo — Software Engineer
          </p>

          {/* Headline */}
          <h1 className="font-serif text-[clamp(1.9rem,3vw,2.6rem)] font-bold leading-[1.18] tracking-[-0.01em] text-[#f0ede8] mb-6">
            Crafting{" "}
            <span className="relative inline-block">
              scalable
              <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-[#c8f135] rounded-sm" />
            </span>{" "}
            software with purpose &amp; precision.
          </h1>

          {/* Sub-text */}
          <p className="text-base leading-[1.75] text-[#f0ede8]/55 max-w-[420px] mb-10">
            Software engineer focused on building performant, user-centered
            digital products — from elegant frontends to robust backend systems.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#work"
              className="inline-flex items-center bg-[#c8f135] text-[#0d0d0d] font-bold text-[0.75rem] tracking-[0.14em] uppercase px-7 py-4 rounded-[5px] border-2 border-[#c8f135] no-underline hover:bg-[#b8e020] hover:-translate-y-[2px] transition-all duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center bg-transparent text-[#f0ede8] font-medium text-[0.75rem] tracking-[0.14em] uppercase px-7 py-4 rounded-[5px] border-2 border-[#f0ede8]/20 no-underline hover:border-[#c8f135] hover:text-[#c8f135] hover:-translate-y-[2px] transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right — photo (pushed far right with generous space) */}
        <div className="relative flex-shrink-0 hidden md:block">
          {/* Glow border ring */}
          <div className="absolute -inset-[7px] rounded-[20px] border border-[#c8f135]/30 pointer-events-none" />
          {/* Corner accent dot */}
          <div className="absolute -top-3 -right-3 w-[10px] h-[10px] rounded-full bg-[#c8f135]" />
          <Image
            src="/image.jpg"
            alt="Emmanuel Addo — Software Engineer"
            width={340}
            height={460}
            priority
            className="rounded-[14px] object-cover object-top border border-white/8 grayscale contrast-105"
            style={{ height: "460px", width: "340px" }}
          />
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="flex flex-col items-center pb-8 gap-2 opacity-35">
        <span className="text-[0.58rem] tracking-[0.22em] uppercase">
          Scroll
        </span>
        <div className="w-px h-9 bg-gradient-to-b from-[#f0ede8]/60 to-transparent" />
      </div>
    </section>
  );
}
