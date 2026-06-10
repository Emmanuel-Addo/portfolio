"use client";

import { useState } from "react";

const PROJECTS = [
  {
    title: "GameHub",
    tag: "Full-Stack",
    description: "A game discovery platform with real-time ratings, filters, and a sleek dark UI.",
    image: "https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "AI Image Studio",
    tag: "AI / SaaS",
    description: "A SaaS tool that lets users generate, edit, and export AI-powered images at scale.",
    image: "https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "Node.js", "OpenAI API"],
  },
  {
    title: "DevFlow",
    tag: "Productivity",
    description: "A developer task manager with Kanban boards, GitHub sync, and team collaboration.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "Prisma", "Supabase"],
  },
  {
    title: "StoreKit",
    tag: "E-Commerce",
    description: "A headless e-commerce engine with Stripe payments, inventory management, and a custom CMS.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "Stripe", "Node.js"],
  },
  {
    title: "ChartDesk",
    tag: "Data / Analytics",
    description: "Real-time crypto and stock dashboard with WebSocket feeds, interactive charts, and alerts.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "WebSockets", "Chart.js"],
  },
];

export default function Projects() {
  const [paused, setPaused] = useState(false);

  const doubled = [...PROJECTS, ...PROJECTS];

  return (
    <section
      id="work"
      style={{
        background: "#0d0d0b",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        paddingTop: "clamp(5rem, 10vw, 9rem)",
        paddingBottom: "clamp(5rem, 10vw, 9rem)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Section header */}
      <div
        style={{
          paddingLeft: "clamp(2rem, 8vw, 7rem)",
          paddingRight: "clamp(2rem, 8vw, 7rem)",
          marginBottom: "clamp(3rem, 6vw, 5rem)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <div>
          {/* marker */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.4rem" }}>
            <span style={{ display: "block", width: "48px", height: "1px", background: "#a8c828" }} />
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.3em",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#a8c828",
              }}
            >
              02 — Projects
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#f0ede8",
              fontWeight: 700,
              margin: 0,
            }}
          >
            Selected work
          </h2>
        </div>

        <a
          href="#"
          style={{
            fontSize: "10px",
            letterSpacing: "0.22em",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "rgba(240,237,232,0.4)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            paddingBottom: "6px",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#a8c828"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(240,237,232,0.4)"; }}
        >
          All Projects
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Marquee track */}
      <div
        style={{ position: "relative", width: "100%" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: "clamp(3rem, 8vw, 7rem)",
            background: "linear-gradient(to right, #0d0d0b, transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        {/* Scrolling row */}
        <div
          style={{
            display: "flex",
            width: "fit-content",
            animation: "marqueeScroll linear infinite",
            animationDuration: `${PROJECTS.length * 3500}ms`,
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {doubled.map((project, index) => (
            <div
              key={index}
              style={{
                width: "clamp(280px, 28vw, 400px)",
                height: "clamp(320px, 35vw, 460px)",
                marginRight: "24px",
                flexShrink: 0,
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              className="project-card"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: "grayscale(30%) brightness(0.75)",
                  transition: "transform 0.6s ease, filter 0.4s ease",
                }}
                className="project-img"
              />

              {/* Overlay on hover */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "clamp(1.2rem, 3vw, 2rem)",
                  background:
                    "linear-gradient(to top, rgba(13,13,11,0.95) 0%, rgba(13,13,11,0.5) 50%, transparent 100%)",
                }}
              >
                {/* Tag chip */}
                <span
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.22em",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#a8c828",
                    border: "1px solid rgba(168,200,40,0.35)",
                    padding: "5px 12px",
                    borderRadius: "999px",
                    width: "fit-content",
                    marginBottom: "12px",
                  }}
                >
                  {project.tag}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)",
                    fontWeight: 700,
                    color: "#f0ede8",
                    margin: "0 0 10px",
                    lineHeight: 1.15,
                  }}
                >
                  {project.title}
                </h3>

                {/* Description — visible only on hover via CSS class */}
                <p
                  className="project-desc"
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.65,
                    color: "rgba(240,237,232,0.65)",
                    margin: "0 0 16px",
                    fontWeight: 300,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.15em",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        color: "rgba(240,237,232,0.45)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        padding: "4px 10px",
                        borderRadius: "999px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right fade */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: "clamp(3rem, 8vw, 7rem)",
            background: "linear-gradient(to left, #0d0d0b, transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Marquee keyframe + hover effects */}
      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .project-card:hover .project-img {
          transform: scale(1.06);
          filter: grayscale(0%) brightness(0.6);
        }
        .project-desc {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.4s ease, opacity 0.4s ease;
        }
        .project-card:hover .project-desc {
          max-height: 80px;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
