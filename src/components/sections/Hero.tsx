"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const floatingTech = [
  { label: "React",    x: "7%",  y: "24%", delay: 0   },
  { label: "Next.js",  x: "79%", y: "19%", delay: 0.5 },
  { label: "Node.js",  x: "5%",  y: "67%", delay: 1.0 },
  { label: "Python",   x: "75%", y: "65%", delay: 1.5 },
  { label: "Flutter",  x: "15%", y: "47%", delay: 0.8 },
  { label: "AWS",      x: "83%", y: "44%", delay: 1.3 },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } };
  const item      = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#181A1B" }}
    >
      {/* ── Tech grid background ── */}
      <div
        className="absolute inset-0 tech-grid-bg animate-grid-fade pointer-events-none"
      />

      {/* ── Ambient neon glows ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full animate-glow-pulse"
          style={{ background: "radial-gradient(circle, rgba(5,150,105,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full animate-glow-pulse"
          style={{ background: "radial-gradient(circle, rgba(5,150,105,0.06) 0%, transparent 70%)", animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(34,37,39,0.8) 0%, transparent 65%)" }}
        />
      </div>

      {/* ── Spinning geometric ring — top-right ── */}
      <motion.div
        className="absolute top-16 right-16 hidden xl:block"
        style={{ width: 220, height: 220 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90"  stroke="#2D3134" strokeWidth="0.5" opacity="0.6"/>
          <circle cx="100" cy="100" r="70"  stroke="#059669" strokeWidth="0.4" opacity="0.25"/>
          <circle cx="100" cy="100" r="50"  stroke="#059669" strokeWidth="0.4" opacity="0.2"/>
          <circle cx="100" cy="100" r="30"  stroke="#2D3134" strokeWidth="0.5" opacity="0.4"/>
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((a) => (
            <line
              key={a}
              x1="100" y1="10"
              x2="100" y2="190"
              stroke="#2D3134"
              strokeWidth="0.3"
              opacity="0.25"
              transform={`rotate(${a} 100 100)`}
            />
          ))}
          {[0,45,90,135,180,225,270,315].map((a) => (
            <circle
              key={`d${a}`}
              cx={100 + 90 * Math.cos((a * Math.PI) / 180)}
              cy={100 + 90 * Math.sin((a * Math.PI) / 180)}
              r="2.5"
              fill="#059669"
              opacity="0.4"
            />
          ))}
        </svg>
      </motion.div>

      {/* ── Second ring — bottom-left ── */}
      <motion.div
        className="absolute bottom-20 left-12 hidden xl:block"
        style={{ width: 140, height: 140 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="70" r="60" stroke="#059669" strokeWidth="0.5" opacity="0.25"/>
          <circle cx="70" cy="70" r="40" stroke="#2D3134" strokeWidth="0.4" opacity="0.3"/>
          {[0,60,120,180,240,300].map((a) => (
            <line
              key={a}
              x1="70" y1="10"
              x2="70" y2="130"
              stroke="#059669"
              strokeWidth="0.4"
              opacity="0.2"
              transform={`rotate(${a} 70 70)`}
            />
          ))}
        </svg>
      </motion.div>

      {/* ── Floating tech chips ── */}
      {floatingTech.map((tech) => (
        <motion.div
          key={tech.label}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold font-body"
          style={{
            left: tech.x, top: tech.y,
            background: "#222527",
            border: "1px solid #2D3134",
            color: "#9CA3AF",
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: [0, 1, 1, 0.85, 1],
            y: [0, -8, 0, -4, 0],
          }}
          transition={{
            delay: tech.delay + 1.4,
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse-soft" style={{ background: "#059669" }} />
          {tech.label}
        </motion.div>
      ))}

      {/* ── Main Content ── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-8"
        >
          {/* Status badge */}
          <motion.div variants={item}>
            <div className="pill">
              <span className="w-2 h-2 rounded-full animate-pulse-soft" style={{ background: "#059669" }} />
              Now Accepting New Projects · Tamil Nadu&apos;s Premium IT Partner
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={item} className="space-y-2">
            <h1
              className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.04] font-heading"
              style={{ color: "#E5E7EB" }}
            >
              Engineered for
            </h1>
            <h1
              className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.04] font-heading gradient-text"
            >
              Digital Impact
            </h1>
            <p
              className="text-xl sm:text-2xl font-medium mt-4 font-body"
              style={{ color: "#9CA3AF" }}
            >
              by <span className="font-mono" style={{ color: "#059669" }}>Yazhsey Technologies</span>
            </p>
          </motion.div>

          {/* Service tags */}
          <motion.div variants={item} className="flex flex-wrap justify-center gap-2.5">
            {[
              { label: "Websites",         color: "#059669" },
              { label: "Mobile Apps",      color: "#059669" },
              { label: "Custom Software",  color: "#059669" },
              { label: "CRM / ERP",        color: "#059669" },
              { label: "Billing Software", color: "#059669" },
            ].map((s) => (
              <span
                key={s.label}
                className="px-4 py-1.5 rounded-lg text-sm font-semibold font-body"
                style={{
                  background: `${s.color}10`,
                  border: `1px solid ${s.color}25`,
                  color: s.color,
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
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary"
            >
              Start Your Project <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#portfolio"
              onClick={(e) => { e.preventDefault(); document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" }); }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-secondary"
            >
              View Our Work
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="flex items-center gap-10 sm:gap-16 pt-2">
            {[
              { num: "50+",  label: "Projects Delivered" },
              { num: "100%", label: "Client Satisfaction" },
              { num: "5+",   label: "Years Experience"   },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center relative">
                {i > 0 && (
                  <div
                    className="absolute -left-5 sm:-left-8 top-1/2 -translate-y-1/2 w-px h-8"
                    style={{ background: "#2D3134" }}
                  />
                )}
                <div className="text-2xl sm:text-3xl font-black font-heading glow-text">{stat.num}</div>
                <div className="text-xs mt-1 font-body" style={{ color: "#9CA3AF" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color: "#9CA3AF" }}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium font-mono">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
