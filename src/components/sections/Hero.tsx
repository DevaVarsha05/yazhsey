"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const floatingTech = [
  { label: "React",    x: "7%",  y: "24%", factor: 15 },
  { label: "Next.js",  x: "79%", y: "19%", factor: -20 },
  { label: "Node.js",  x: "5%",  y: "67%", factor: 25 },
  { label: "Python",   x: "75%", y: "65%", factor: -15 },
  { label: "Flutter",  x: "15%", y: "47%", factor: 18 },
  { label: "AWS",      x: "83%", y: "44%", factor: -22 },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  // useScroll warning fix: window base tracking layout mapping
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Mouse Parallax Trackers
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 15 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    
    // Naming conflict-ah avoid panna variable names-ah 'calcX' and 'calcY' nu maathiyirukaen
    const calcX = (e.clientX - width / 2) / (width / 2);
    const calcY = (e.clientY - height / 2) / (height / 2);
    
    mouseX.set(calcX);
    mouseY.set(calcY);
  }

  // Parallax transform for Rings
  const ringX = useTransform(springX, [-1, 1], [-25, 25]);
  const ringY = useTransform(springY, [-1, 1], [-25, 25]);

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } };
  const item = { 
  hidden: { opacity: 0, y: 40 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } } // Added 'as const' here
};

  return (
    <section 
  ref={containerRef} 
  id="home"
  onMouseMove={handleMouseMove}
  className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
  style={{ background: "#FFFFFF", position: "relative" }} // Idhu romba mukkiyam
>
      <div className="absolute inset-0 tech-grid-bg pointer-events-none" />

      {/* Ambient neon glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full" style={{ background: "radial-gradient(circle, rgba(5,150,105,0.08) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(5,150,105,0.06) 0%, transparent 70%)" }} />
      </div>

      {/* Geometric ring — top-right reacting to mouse */}
      <motion.div
        className="absolute top-16 right-16 hidden xl:block"
        style={{ width: 220, height: 220, x: ringX, y: ringY, position: "absolute" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke="#2D3134" strokeWidth="0.5" opacity="0.6"/>
          <circle cx="100" cy="100" r="70" stroke="#059669" strokeWidth="0.4" opacity="0.25"/>
          <circle cx="100" cy="100" r="50" stroke="#059669" strokeWidth="0.4" opacity="0.2"/>
          {[0,45,90,135,180,225,270,315].map((a) => (
            <circle key={`d${a}`} cx={100 + 90 * Math.cos((a * Math.PI) / 180)} cy={100 + 90 * Math.sin((a * Math.PI) / 180)} r="2.5" fill="#059669" opacity="0.4" />
          ))}
        </svg>
      </motion.div>

      {/* Second ring — bottom-left reacting to mouse */}
      <motion.div
        className="absolute bottom-20 left-12 hidden xl:block"
        style={{ width: 140, height: 140, x: useTransform(springX, [-1, 1], [20, -20]), y: useTransform(springY, [-1, 1], [20, -20]), position: "absolute" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="70" r="60" stroke="#059669" strokeWidth="0.5" opacity="0.25"/>
          <circle cx="70" cy="70" r="40" stroke="#2D3134" strokeWidth="0.4" opacity="0.3"/>
        </svg>
      </motion.div>

      {/* Floating tech chips */}
      {floatingTech.map((tech) => {
        const chipX = useTransform(springX, [-1, 1], [-tech.factor, tech.factor]);
        const chipY = useTransform(springY, [-1, 1], [-tech.factor, tech.factor]);
        return (
          <motion.div
            key={tech.label}
            className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold font-body shadow-2xl backdrop-blur-sm"
            style={{
              left: tech.x, top: tech.y, x: chipX, y: chipY,
              position: "absolute",
              background: "rgba(243, 244, 246, 0.9)",
border: "1px solid #D1D5DB",
color: "#4B5563",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#059669" }} />
            {tech.label}
          </motion.div>
        );
      })}

      {/* Main Content */}
      <motion.div style={{ y, opacity, position: "relative" }} className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col items-center gap-8">
          <motion.div variants={item}>
            <div className="pill">
              <span className="w-2 h-2 rounded-full" style={{ background: "#059669" }} />
              Now Accepting New Projects · Tamil Nadu&apos;s Premium IT Partner
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-2">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.04] font-heading" style={{ color: "#111827" }}>
              Engineered for
            </h1>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.04] font-heading gradient-text">
              Digital Impact
            </h1>
            <p className="text-xl sm:text-2xl font-medium mt-4 font-body" style={{ color: "#9CA3AF" }}>
              by <span className="font-mono" style={{ color: "#059669" }}>YazhSey  Technologies</span>
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap justify-center gap-2.5">
            {["Websites", "Mobile Apps", "Custom Software", "CRM / ERP", "Billing Software"].map((label) => (
              <span key={label} className="px-4 py-1.5 rounded-lg text-sm font-semibold font-body transition-transform duration-300 hover:scale-105" style={{ background: `rgba(5, 150, 105, 0.1)`, border: `1px solid rgba(5, 150, 105, 0.25)`, color: "#059669" }}>
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4">
            <motion.a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary">
              Start Your Project <ArrowRight size={16} />
            </motion.a>
          
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5" style={{ color: "#9CA3AF" }}>
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium font-mono">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}