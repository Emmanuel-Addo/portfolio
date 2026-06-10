"use client";

import { useEffect, useRef, useState } from "react";

const EXPERIENCES = [
  {
    company: "Jnard IT Consultant",
    role: "Fullstack Developer Intern",
    date: "Oct 2025 — Jan 2026",
    location: "Accra, Ghana",
    description: [
      "Coordinated with design, backend, and QA teams to develop a dynamic internship platform using the MERN stack, resulting in a comprehensive prototype that demonstrated seamless user interactions and improved system responsiveness by 40%.",
      "Led the integration of React.js components with Node.js APIs, optimizing data flow and reducing page load times by 35%, thereby enhancing overall user engagement during the project phase.",
      "Managed version control and collaborative coding efforts on GitHub, facilitating streamlined development workflows that increased team productivity by 25% and ensured timely completion of project milestones.",
    ],
  },
  {
    company: "Ghana Meteorological Agency",
    role: "Operational Marine Forecaster Intern",
    date: "Nov 2025 — Dec 2025",
    location: "Accra, Ghana",
    description: [],
  },
  {
    company: "AmaliTech",
    role: "Frontend Developer Intern",
    date: "Sep 2025 — Oct 2025",
    location: "Accra, Ghana",
    description: [
      "Collaborated with Python backend teams to seamlessly integrate API endpoints, resulting in a responsive room-booking platform that enhanced user experience and reduced booking time by 30%.",
      "Designed and implemented a modern, mobile-friendly interface using React.js and Tailwind CSS, increasing user engagement metrics by 25% during the testing phase.",
      "Coordinated cross-functional development efforts to deliver a fully functional prototype within two months, demonstrating efficient teamwork and contributing to streamlined project workflows.",
    ],
  },
];

function TimelineItem({ exp, index, visible }: { exp: (typeof EXPERIENCES)[0]; index: number; visible: boolean }) {
  return (
    <div
      style={{
        position: "relative",
        paddingLeft: "clamp(2rem, 5vw, 3rem)",
        paddingBottom: index === EXPERIENCES.length - 1 ? "0" : "clamp(3rem, 6vw, 4rem)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${index * 150}ms, transform 0.7s ease ${index * 150}ms`,
      }}
    >
      {/* Timeline Line */}
      {index !== EXPERIENCES.length - 1 && (
        <div
          style={{
            position: "absolute",
            left: "5px",
            top: "24px",
            bottom: "0",
            width: "1px",
            background: "rgba(255,255,255,0.1)",
          }}
        />
      )}

      {/* Timeline Dot */}
      <div
        style={{
          position: "absolute",
          left: "0",
          top: "6px",
          width: "11px",
          height: "11px",
          borderRadius: "50%",
          background: "#0f0f0d",
          border: "2px solid #a8c828",
          boxShadow: "0 0 10px rgba(168,200,40,0.3)",
        }}
      />

      {/* Content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
              fontWeight: 700,
              color: "#f0ede8",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {exp.role}
          </h3>
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.15em",
              fontWeight: 600,
              textTransform: "uppercase",
              color: "#a8c828",
              background: "rgba(168,200,40,0.05)",
              padding: "4px 12px",
              borderRadius: "999px",
              border: "1px solid rgba(168,200,40,0.2)",
            }}
          >
            {exp.date}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1rem" }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              color: "rgba(240,237,232,0.8)",
            }}
          >
            {exp.company}
          </span>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "10px" }}>•</span>
          <span
            style={{
              fontSize: "12px",
              color: "rgba(240,237,232,0.4)",
              fontWeight: 300,
            }}
          >
            {exp.location}
          </span>
        </div>

        {exp.description.length > 0 && (
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
            }}
          >
            {exp.description.map((point, i) => (
              <li
                key={i}
                style={{
                  fontSize: "13px",
                  lineHeight: 1.7,
                  color: "rgba(240,237,232,0.6)",
                  fontWeight: 300,
                  position: "relative",
                  paddingLeft: "1.2rem",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "8px",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "rgba(168,200,40,0.5)",
                  }}
                />
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Timeline() {
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
      id="journey"
      ref={sectionRef}
      style={{
        background: "#0d0d0b",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        paddingTop: "clamp(5rem, 10vw, 9rem)",
        paddingBottom: "clamp(5rem, 10vw, 9rem)",
        paddingLeft: "clamp(2rem, 8vw, 7rem)",
        paddingRight: "clamp(2rem, 8vw, 7rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow right */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,200,40,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Section header */}
        <div
          style={{
            marginBottom: "clamp(4rem, 8vw, 6rem)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
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
              04 — Experience
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#f0ede8",
              fontWeight: 700,
              margin: 0,
            }}
          >
            My Journey
          </h2>
        </div>

        {/* Timeline items */}
        <div style={{ position: "relative" }}>
          {EXPERIENCES.map((exp, index) => (
            <TimelineItem key={index} exp={exp} index={index} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
