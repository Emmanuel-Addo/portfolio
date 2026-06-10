"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: "2+", label: "Years Building" },
  { value: "15+", label: "Projects Shipped" },
  { value: "5+", label: "Tech Stacks" },
  { value: "100%", label: "Passion for Code" },
];

const TRAITS = [
  "Clean Architecture",
  "TypeScript",
  "Scalable APIs",
  "React & Next.js",
  "Problem Solver",
  "Node.js",
  "PostgreSQL",
  "UI Precision",
];

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        background: "#0f0f0d",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        paddingTop: "clamp(5rem, 10vw, 9rem)",
        paddingBottom: "clamp(5rem, 10vw, 9rem)",
        paddingLeft: "clamp(2rem, 8vw, 7rem)",
        paddingRight: "clamp(2rem, 8vw, 7rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,200,40,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Section marker */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "clamp(3rem, 6vw, 5rem)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <span
          style={{
            display: "block",
            width: "48px",
            height: "1px",
            background: "#a8c828",
          }}
        />
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.3em",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#a8c828",
          }}
        >
          01 — My Story
        </span>
      </div>

      {/* Big editorial headline */}
      <div
        style={{
          marginBottom: "clamp(3rem, 6vw, 5rem)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#f0ede8",
            fontWeight: 700,
            margin: 0,
          }}
        >
          Engineer by craft.
          <br />
          <span style={{ color: "rgba(240,237,232,0.35)", fontStyle: "italic" }}>
            Builder by nature.
          </span>
        </h2>
      </div>

      {/* Main two-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "clamp(3rem, 6vw, 6rem)",
          alignItems: "start",
          marginBottom: "clamp(4rem, 8vw, 7rem)",
        }}
      >
        {/* Left — Personal bio */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              lineHeight: 1.8,
              color: "rgba(240,237,232,0.85)",
              fontWeight: 300,
              marginBottom: "1.8rem",
            }}
          >
            I&apos;m Emmanuel Addo, a software engineer based in Ghana who
            loves turning complex problems into clean, elegant code. I started
            my journey writing simple HTML pages and quickly fell in love with
            the entire web ecosystem — both the art of the frontend and the
            logic of the backend.
          </p>
          <p
            style={{
              fontSize: "clamp(0.88rem, 1.4vw, 1rem)",
              lineHeight: 1.85,
              color: "rgba(240,237,232,0.45)",
              fontWeight: 300,
            }}
          >
            Today I build full-stack products with React, Next.js, Node.js, and
            PostgreSQL. I care deeply about performance, clean architecture, and
            writing code that the next developer can understand without a manual.
            When I&apos;m not coding, I&apos;m learning, mentoring, or exploring
            new tools that push the web forward.
          </p>
        </div>

        {/* Right — Trait chips */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
          }}
        >
          {/* Divider line + label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.6rem",
            }}
          >
            <span
              style={{
                fontSize: "9px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "rgba(240,237,232,0.3)",
              }}
            >
              What I bring
            </span>
            <span
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(255,255,255,0.06)",
              }}
            />
          </div>

          {/* Chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {TRAITS.map((trait) => (
              <span
                key={trait}
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  border: "1px solid rgba(168,200,40,0.2)",
                  color: "rgba(168,200,40,0.8)",
                  background: "rgba(168,200,40,0.04)",
                  whiteSpace: "nowrap",
                }}
              >
                {trait}
              </span>
            ))}
          </div>

          {/* CTA link */}
          <a
            href="#work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "2.5rem",
              fontSize: "11px",
              letterSpacing: "0.22em",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "rgba(240,237,232,0.45)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#a8c828";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "rgba(240,237,232,0.45)";
            }}
          >
            See what I&apos;ve built
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Stats row */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "clamp(2.5rem, 5vw, 4rem)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
          gap: "2rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
        }}
      >
        {STATS.map((stat, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#a8c828",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                fontSize: "9px",
                letterSpacing: "0.25em",
                fontWeight: 600,
                textTransform: "uppercase",
                color: "rgba(240,237,232,0.35)",
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
