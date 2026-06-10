"use client";

import { useEffect, useRef, useState } from "react";

const CATEGORIES = [
  {
    label: "Frontend",
    items: ["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "FRAMER MOTION", "HTML & CSS"],
  },
  {
    label: "Backend",
    items: ["NODE.JS", "EXPRESS.JS", "PYTHON", "FASTAPI", "REST APIS", "GRAPHQL", "PRISMA ORM", "JWT AUTH"],
  },
  {
    label: "Database",
    items: ["POSTGRESQL", "MONGODB", "REDIS", "SUPABASE", "FIREBASE", "SQL"],
  },
  {
    label: "AI / RAG & Data",
    items: ["LANGCHAIN", "OPENAI API", "CHROMADB", "PANDAS", "NUMPY", "VECTOR EMBEDDINGS"],
  },
  {
    label: "Tools & DevOps",
    items: ["GIT & GITHUB", "GITHUB ACTIONS", "CI/CD", "AWS", "DOCKER", "VERCEL", "PLAYWRIGHT", "PYTEST", "LINUX / CLI"],
  },
];

function CategorySection({
  category,
  delay,
  visible,
}: {
  category: (typeof CATEGORIES)[0];
  delay: number;
  visible: boolean;
}) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      {/* Category Header */}
      <h3
        style={{
          fontSize: "11px",
          letterSpacing: "0.25em",
          fontWeight: 700,
          textTransform: "uppercase",
          color: "#a8c828", // Lime green matching the image
          margin: 0,
        }}
      >
        {category.label}
      </h3>

      {/* Chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        {category.items.map((item) => (
          <span
            key={item}
            style={{
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              color: "rgba(240,237,232,0.4)", // Muted grey text
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.08)", // Faint border
              padding: "10px 20px",
              borderRadius: "999px",
              textTransform: "uppercase",
              transition: "all 0.2s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "rgba(240,237,232,0.8)";
              el.style.borderColor = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "rgba(240,237,232,0.4)";
              el.style.borderColor = "rgba(255,255,255,0.08)";
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Stack() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        background: "#0d0d0b", // Match overall dark background seamlessly
        paddingTop: "clamp(5rem, 10vw, 9rem)",
        paddingBottom: "clamp(5rem, 10vw, 9rem)",
        paddingLeft: "clamp(2rem, 8vw, 7rem)",
        paddingRight: "clamp(2rem, 8vw, 7rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section header exactly matching the layout style */}
        <div
          style={{
            marginBottom: "clamp(4rem, 8vw, 6rem)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Top Marker */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{ display: "block", width: "30px", height: "1px", background: "#a8c828" }} />
            <span
              style={{
                fontSize: "9px",
                letterSpacing: "0.3em",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "rgba(240,237,232,0.3)", // Muted grey for marker
              }}
            >
              03 — Core Stack
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            {/* Serif Title */}
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#f0ede8",
                fontWeight: 700,
                margin: 0,
              }}
            >
              Tools of the trade
            </h2>

            {/* Right aligned description text */}
            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.75,
                color: "rgba(240,237,232,0.4)",
                maxWidth: "340px",
                margin: 0,
                fontWeight: 300,
              }}
            >
              A structured breakdown of the languages, frameworks, and systems I use to ship scalable products.
            </p>
          </div>
        </div>

        {/* Categories Grid - using masonry-like or standard grid layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(3rem, 6vw, 5rem)",
            rowGap: "clamp(4rem, 8vw, 6rem)",
          }}
        >
          {CATEGORIES.map((cat, i) => (
            <CategorySection key={cat.label} category={cat} delay={i * 100} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
