"use client";

export default function Footer() {
  const LINKS = [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "mailto:emmanuel.addo@example.com" },
    { label: "Work", href: "#work" },
  ];

  return (
    <footer
      style={{
        background: "#0a0a08", // Slightly darker than the main body for distinction
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "clamp(3rem, 6vw, 4rem)",
        paddingBottom: "clamp(2rem, 4vw, 3rem)",
        paddingLeft: "clamp(2rem, 8vw, 7rem)",
        paddingRight: "clamp(2rem, 8vw, 7rem)",
        color: "rgba(240,237,232,0.6)",
        fontSize: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "3rem",
        }}
      >
        {/* Left Side: Name & Location */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "1.5rem",
              color: "#f0ede8",
              margin: "0 0 8px 0",
              fontWeight: 500,
            }}
          >
            Emmanuel Addo
          </h3>
          <p style={{ margin: 0, letterSpacing: "0.05em", color: "rgba(240,237,232,0.4)" }}>
            Accra, Ghana
          </p>
        </div>

        {/* Right Side: Links & Copyright */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1.5rem" }}>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    color: "rgba(240,237,232,0.5)",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    fontSize: "10px",
                    fontWeight: 600,
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#a8c828";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(240,237,232,0.5)";
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <p style={{ margin: 0, fontSize: "10px", color: "rgba(240,237,232,0.3)", letterSpacing: "0.1em" }}>
            &copy; {new Date().getFullYear()} — Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
