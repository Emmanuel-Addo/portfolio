"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#intro", active: true },
  { label: "Story", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Stack", href: "#skills" },
  { label: "Timeline", href: "#journey" },
  { label: "Connect", href: "#contact" },
];

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      id="intro"
      className="relative h-screen w-full flex flex-col overflow-hidden bg-glow-radial"
    >
      {/* ── Navbar ── */}
      <header className="w-full flex-shrink-0 z-50">
        <div className="w-full h-20 flex items-center justify-between" style={{ paddingLeft: "clamp(2rem, 8vw, 7rem)", paddingRight: "clamp(2rem, 8vw, 7rem)" }}>
          {/* Logo */}
          <a
            href="#intro"
            className="text-[13px] font-extrabold tracking-[0.2em] uppercase text-white hover:opacity-80 transition-opacity"
          >
            Emmanuel<span className="text-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-[10px] tracking-[0.22em] font-bold uppercase transition-all duration-200 hover:text-white ${
                  item.active ? "text-accent" : "text-[#6b7260]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Resume / CV button — same pill style as CTA buttons */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex"
            style={{
              alignItems: "center",
              fontWeight: 700,
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              padding: "13px 28px",
              borderRadius: "999px",
              border: "1.5px solid #3a3d33",
              color: "#a0a89a",
              backgroundColor: "transparent",
              transition: "all 0.2s ease",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#c8f135"; (e.currentTarget as HTMLElement).style.color = "#c8f135"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#3a3d33"; (e.currentTarget as HTMLElement).style.color = "#a0a89a"; }}
          >
            My CV
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-[2px] bg-[#6b7260] rounded transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[9px] bg-white" : ""
                }`}
              />
              <span
                className={`w-full h-[2px] bg-[#6b7260] rounded transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-[2px] bg-[#6b7260] rounded transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[9px] bg-white" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed inset-0 top-20 z-40 bg-[#0d0e0b]/98 backdrop-blur-lg transition-all duration-300 md:hidden ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-xs tracking-[0.25em] font-bold uppercase ${
                  item.active ? "text-accent" : "text-[#6b7260] hover:text-white"
                } transition-colors duration-200`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-3 text-[10px] font-bold tracking-[0.25em] uppercase border border-[#2e3229] rounded-full text-[#a0a89a] hover:border-accent hover:text-accent transition-all duration-200"
            >
              Resume
            </a>
          </nav>
        </div>
      </header>

      {/* ── Hero Body ── */}
      <section className="flex-1 flex items-center w-full min-h-0" style={{ paddingLeft: "clamp(2rem, 8vw, 7rem)", paddingRight: "clamp(2rem, 8vw, 7rem)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full animate-fade-in-up">

          {/* Left — Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Tag */}
            <p className="text-[10px] sm:text-[11px] tracking-[0.3em] font-semibold uppercase text-[#6b7260] mb-6">
              Emmanuel Addo&nbsp;&nbsp;—&nbsp;&nbsp;Software Engineer
            </p>

            {/* Headline */}
            <h1 className="font-serif text-[2.8rem] sm:text-[3.8rem] md:text-[4.8rem] lg:text-[5.2rem] leading-[1.05] tracking-tight text-[#f0ede8] mb-6">
              Building software<br />
              that{" "}
              <span className="relative inline-block">
                scales
                <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-accent rounded-sm" />
              </span>
              {" "}&amp; endures.
            </h1>

            {/* Sub text */}
            <p className="text-sm md:text-[15px] leading-[1.75] text-[#6b7260] max-w-[440px]" style={{ marginBottom: "3rem" }}>
              Full-stack engineer crafting performant, user-centred web products —
              from clean React frontends to robust Node.js &amp; PostgreSQL backends.
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px", marginTop: "1.5rem" }}>
              <a
                href="#work"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "#a8c828",
                  color: "#0d0e0b",
                  fontWeight: 800,
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  padding: "18px 40px",
                  borderRadius: "999px",
                  border: "none",
                  boxShadow: "0 0 24px rgba(168,200,40,0.18)",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#bada30"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#a8c828"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                See My Work
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  padding: "17px 40px",
                  borderRadius: "999px",
                  border: "1.5px solid #3a3d33",
                  color: "#a0a89a",
                  backgroundColor: "transparent",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#a8c828"; (e.currentTarget as HTMLElement).style.color = "#a8c828"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#3a3d33"; (e.currentTarget as HTMLElement).style.color = "#a0a89a"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                Say Hello
              </a>
            </div>
          </div>

          {/* Right — Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <div className="relative group">
              {/* Offset border */}
              <div className="absolute inset-0 border border-accent/25 rounded-[36px] translate-x-4 translate-y-4 rotate-[2deg] transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:rotate-0 group-hover:border-accent/50" />
              {/* Image */}
              <div className="relative rounded-[30px] overflow-hidden border border-[#2a2c26] bg-[#12130f] w-[260px] sm:w-[310px] md:w-[330px] h-[360px] sm:h-[420px] md:h-[450px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img
                  src="/image.jpg"
                  alt="Emmanuel Addo — Software Engineer"
                  className="w-full h-full object-cover object-top grayscale contrast-105 transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600";
                  }}
                />
              </div>
              {/* Corner dot */}
              <div className="absolute -top-3 -right-3 w-[10px] h-[10px] rounded-full bg-accent" />
            </div>
          </div>

        </div>
      </section>

      {/* ── Scroll Indicator ── */}
      <div className="flex-shrink-0 flex flex-col items-center pb-6 gap-2 opacity-50">
        <span className="text-[9px] tracking-[0.3em] text-[#6b7260] font-bold uppercase">
          Scroll
        </span>
        <div className="scroll-line" />
      </div>
    </div>
  );
}
