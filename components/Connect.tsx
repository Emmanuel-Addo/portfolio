"use client";

import { useEffect, useRef, useState } from "react";

export default function Connect() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
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
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "clamp(4rem, 8vw, 8rem)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          alignItems: "center", // Align items vertically in the middle
        }}
      >
        {/* Left Column: Contact Form (Swapped for originality) */}
        <div
          style={{
            background: "rgba(255,255,255,0.01)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "16px",
            padding: "clamp(2rem, 5vw, 3.5rem)",
          }}
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
          >
            {/* Name Input */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label
                htmlFor="name"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "rgba(240,237,232,0.4)",
                }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  padding: "0.5rem 0",
                  fontSize: "14px",
                  color: "#f0ede8",
                  outline: "none",
                  fontFamily: "inherit",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) => (e.target.style.borderBottomColor = "#a8c828")}
                onBlur={(e) => (e.target.style.borderBottomColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {/* Email Input */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label
                htmlFor="email"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "rgba(240,237,232,0.4)",
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  padding: "0.5rem 0",
                  fontSize: "14px",
                  color: "#f0ede8",
                  outline: "none",
                  fontFamily: "inherit",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) => (e.target.style.borderBottomColor = "#a8c828")}
                onBlur={(e) => (e.target.style.borderBottomColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {/* Message Input */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1rem" }}>
              <label
                htmlFor="message"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "rgba(240,237,232,0.4)",
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  padding: "0.5rem 0",
                  fontSize: "14px",
                  color: "#f0ede8",
                  outline: "none",
                  fontFamily: "inherit",
                  resize: "none",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) => (e.target.style.borderBottomColor = "#a8c828")}
                onBlur={(e) => (e.target.style.borderBottomColor = "rgba(255,255,255,0.1)")}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                alignSelf: "flex-start",
                padding: "1rem 2.5rem",
                fontSize: "10px",
                letterSpacing: "0.25em",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#0d0d0b",
                background: "#a8c828",
                border: "none",
                borderRadius: "999px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#b9db2c";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#a8c828";
                el.style.transform = "translateY(0)";
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column: Text & Contact Info */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
          {/* Section Marker */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.3em",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#a8c828",
              }}
            >
              05 — Contact
            </span>
            <span style={{ display: "block", width: "30px", height: "1px", background: "#a8c828" }} />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#f0ede8",
              fontWeight: 700,
              marginBottom: "1.5rem",
            }}
          >
            Start a conversation.
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
              lineHeight: 1.8,
              color: "rgba(240,237,232,0.5)",
              fontWeight: 300,
              marginBottom: "3.5rem",
              maxWidth: "400px",
            }}
          >
            I'm actively looking for new opportunities, freelance contracts, and exciting side projects. Let me know what you're working on and how I can help you ship it.
          </p>

          {/* Contact Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <a
              href="mailto:emma141509@gmail.com"
              style={{
                fontFamily: "monospace",
                fontSize: "13px",
                color: "rgba(240,237,232,0.8)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#a8c828")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(240,237,232,0.8)")}
            >
              emma141509@gmail.com
            </a>
            <a
              href="tel:+233550122715"
              style={{
                fontFamily: "monospace",
                fontSize: "13px",
                color: "rgba(240,237,232,0.8)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#a8c828")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(240,237,232,0.8)")}
            >
              +233 550 122715
            </a>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "13px",
                color: "rgba(240,237,232,0.5)",
              }}
            >
              Accra, Ghana
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
