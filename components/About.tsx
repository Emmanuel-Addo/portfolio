import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className=" text-[#f0ede8] py-32 font-sans relative border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto w-full px-8 md:px-16 lg:px-24">
        {/* Top Header Label */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="w-12 h-[1px] bg-[#38bdf8]"></span>
          <h2 className="text-[0.75rem] tracking-[0.3em] text-[#38bdf8] uppercase font-semibold">
            01 &mdash; About Me
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-16 lg:gap-24 items-start">
          {/* Left Column - Large Typography */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <h3 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-[1.1] text-[#f0ede8] tracking-tight">
              Engineering with precision. <br />
              <span className="text-white/40 italic">
                Designing with purpose.
              </span>
            </h3>

            <div className="flex flex-wrap gap-4 mt-2">
              <span className="px-4 py-2 rounded-full border border-[#38bdf8]/30 text-[0.7rem] tracking-widest uppercase text-[#38bdf8] font-medium">
                Emmanuel Addo
              </span>
              <span className="px-4 py-2 rounded-full border border-white/10 text-[0.7rem] tracking-widest uppercase text-white/60">
                Software Engineer
              </span>
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:pt-2">
            <p className="text-[1.1rem] md:text-[1.3rem] leading-[1.7] text-[#f0ede8]/90 font-light">
              I bridge the gap between pixel-perfect user interfaces and robust
              backend architectures. My focus is on building full-stack web
              products that are fast, accessible, and scalable from day one.
            </p>

            {/* Small divider */}
            <div className="w-12 h-[2px] bg-[#38bdf8]/50" />

            <p className="text-[0.95rem] md:text-[1.05rem] leading-[1.8] text-[#f0ede8]/50 font-light max-w-[600px]">
              My daily toolkit revolves around the modern JavaScript ecosystem. I
              write end-to-end TypeScript, crafting frontends with React and
              Next.js, and powering them with Node.js and PostgreSQL. I care
              deeply about clean code, intuitive information hierarchy, and
              products that deliver real value to users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
