"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

const floatingTech = [
  { label: "React", x: "6%", y: "22%", delay: 0 },
  { label: "Next.js", x: "80%", y: "18%", delay: 0.4 },
  { label: "Node.js", x: "4%", y: "68%", delay: 0.9 },
  { label: "Python", x: "76%", y: "64%", delay: 1.4 },
  { label: "Flutter", x: "14%", y: "46%", delay: 0.7 },
  { label: "AWS", x: "84%", y: "42%", delay: 1.1 },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.11, delayChildren: 0.25 } },
  };
  const item = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#FAF9F6" }}
    >
      {/* Soft background geometry — Tamil-inspired geometric arcs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large warm circle top-right */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(225,29,138,0.06) 0%, transparent 70%)" }}
        />
        {/* Lime accent bottom-left */}
        <div
          className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(163,230,53,0.08) 0%, transparent 70%)" }}
        />
        {/* Center soft warm glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(245,242,235,0.8) 0%, transparent 70%)" }}
        />

        {/* Tamil mandala — minimal, monochrome dots */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.05 }} viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="geo" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#E11D8A" strokeWidth="0.6" />
              <circle cx="60" cy="60" r="30" fill="none" stroke="#111111" strokeWidth="0.4" />
              {[0, 60, 120, 180, 240, 300].map((a) => (
                <line
                  key={a}
                  x1="60" y1="60"
                  x2={60 + 50 * Math.cos((a * Math.PI) / 180)}
                  y2={60 + 50 * Math.sin((a * Math.PI) / 180)}
                  stroke="#E11D8A" strokeWidth="0.4"
                />
              ))}
              {[0, 60, 120, 180, 240, 300].map((a) => (
                <circle
                  key={`d${a}`}
                  cx={60 + 50 * Math.cos((a * Math.PI) / 180)}
                  cy={60 + 50 * Math.sin((a * Math.PI) / 180)}
                  r="1.5" fill="#A3E635"
                />
              ))}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geo)" />
        </svg>

        {/* Fine dot grid */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.06 }} viewBox="0 0 1200 800">
          <defs>
            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="1" fill="#111111" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Floating Tech Badges */}
      {floatingTech.map((tech) => (
        <motion.div
          key={tech.label}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{
            left: tech.x, top: tech.y,
            background: "#F5F2EB",
            border: "1px solid #E5E0D8",
            color: "#666666",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 1, 0.8, 1], y: [0, -8, 0, -4, 0] }}
          transition={{ delay: tech.delay + 1.2, duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#A3E635" }} />
          {tech.label}
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center"
      >
        <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col items-center gap-7">

          {/* Status badge */}
          <motion.div variants={item}>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ background: "#F5F2EB", border: "1px solid #E5E0D8", color: "#666666" }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: "#A3E635" }} />
              Now Accepting New Projects · Tamil Nadu&apos;s Premium IT Partner
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={item} className="space-y-3">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.02]" style={{ color: "#111111" }}>
              Crafting{" "}
              <span className="gradient-text">Digital</span>
            </h1>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.02]" style={{ color: "#111111" }}>
              <span className="gradient-text">Excellence</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium mt-2" style={{ color: "#666666" }}>
              with Yazhsey Technologies
            </h2>
          </motion.div>

          {/* Subheadline pills */}
          <motion.div variants={item} className="flex flex-wrap justify-center gap-2">
            {[
              { label: "Websites", color: "#E11D8A" },
              { label: "Mobile Apps", color: "#A3E635" },
              { label: "Custom Software", color: "#FF5E6B" },
              { label: "CRM / ERP", color: "#E11D8A" },
              { label: "Billing Software", color: "#A3E635" },
            ].map((s) => (
              <span
                key={s.label}
                className="px-4 py-1.5 rounded-full text-sm font-semibold"
                style={{
                  background: `${s.color}12`,
                  border: `1px solid ${s.color}30`,
                  color: s.color === "#A3E635" ? "#5a7a1a" : s.color,
                }}
              >
                {s.label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4">
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              whileHover={{ scale: 1.04, boxShadow: "0 10px 32px rgba(225,29,138,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary"
            >
              Start Your Project
              <ArrowRight size={17} />
            </motion.a>

            <motion.a
              href="#portfolio"
              onClick={(e) => { e.preventDefault(); document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" }); }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-secondary"
            >
              <Play size={15} style={{ color: "#E11D8A" }} />
              View Our Work
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="flex items-center gap-10 sm:gap-16 pt-4">
            {[
              { num: "50+", label: "Projects Delivered" },
              { num: "100%", label: "Client Satisfaction" },
              { num: "5+", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center">
                {i > 0 && (
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8"
                    style={{ background: "#E5E0D8" }}
                  />
                )}
                <div className="text-2xl sm:text-3xl font-black gradient-text">{stat.num}</div>
                <div className="text-xs mt-1" style={{ color: "#666666" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color: "#666666" }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
