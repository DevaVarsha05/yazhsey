"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

const floatingTech = [
  { label: "React",    x: "7%",  y: "24%", factor: 15 },
  { label: "Next.js",  x: "79%", y: "19%", factor: -20 },
  { label: "Node.js",  x: "5%",  y: "67%", factor: 25 },
  { label: "Python",   x: "75%", y: "65%", factor: -15 },
  { label: "Flutter",  x: "15%", y: "47%", factor: 18 },
  { label: "AWS",      x: "83%", y: "44%", factor: -22 },
];

const serviceMap: { [key: string]: string } = {
  "Websites": "website-development",
  "Mobile Apps": "mobile-app-development",
  "Custom Software": "custom-software-development",
  "CRM / ERP": "crm-solutions",
  "Billing Software": "billing-inventory-software"
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [clickedService, setClickedService] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const backgroundImages = [
    "/home.png",
    "/background 1.jpg",
    "/background 2.png"
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Background image auto-switch - every 5 seconds (changed from 4)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Changed to 5 seconds for slower rotation
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 15 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    const calcX = (e.clientX - width / 2) / (width / 2);
    const calcY = (e.clientY - height / 2) / (height / 2);
    mouseX.set(calcX);
    mouseY.set(calcY);
  }

  function navigateToService(serviceLabel: string) {
    const serviceId = serviceMap[serviceLabel];
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const ringX = useTransform(springX, [-1, 1], [-25, 25]);
  const ringY = useTransform(springY, [-1, 1], [-25, 25]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
      style={{
        position: "relative",
        backgroundColor: "transparent"
      }}
    >
      {/* Background Images with Smooth Fade */}
      {backgroundImages.map((image, index) => (
        <motion.div
          key={image}
          initial={{ opacity: 0 }}
          animate={{ opacity: activeImageIndex === index ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }} // Slower fade
          className="absolute inset-0 w-full h-full will-change-transform"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%)",
          pointerEvents: "none"
        }}
      />

      <div className="absolute inset-0 tech-grid-bg pointer-events-none" />

      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6,79,59,0.06) 0%, transparent 70%)"
          }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6,79,59,0.04) 0%, transparent 70%)"
          }}
        />
      </div>

      {/* Geometric Ring - Top Right */}
      <motion.div
        className="absolute top-16 right-16 hidden xl:block"
        style={{ width: 220, height: 220, x: ringX, y: ringY, position: "absolute" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke="#064E3B" strokeWidth="0.5" opacity="0.6" />
          <circle cx="100" cy="100" r="70" stroke="#059669" strokeWidth="0.4" opacity="0.25" />
          <circle cx="100" cy="100" r="50" stroke="#059669" strokeWidth="0.4" opacity="0.2" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
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

      {/* Geometric Ring - Bottom Left */}
      <motion.div
        className="absolute bottom-20 left-12 hidden xl:block"
        style={{
          width: 140,
          height: 140,
          x: useTransform(springX, [-1, 1], [20, -20]),
          y: useTransform(springY, [-1, 1], [20, -20]),
          position: "absolute"
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="70" r="60" stroke="#059669" strokeWidth="0.5" opacity="0.25" />
          <circle cx="70" cy="70" r="40" stroke="#064E3B" strokeWidth="0.4" opacity="0.3" />
        </svg>
      </motion.div>

      {/* Floating Tech Chips */}
      {floatingTech.map((tech) => {
        const chipX = useTransform(springX, [-1, 1], [-tech.factor, tech.factor]);
        const chipY = useTransform(springY, [-1, 1], [-tech.factor, tech.factor]);
        return (
          <motion.div
            key={tech.label}
            className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold font-body shadow-2xl backdrop-blur-sm"
            style={{
              left: tech.x,
              top: tech.y,
              x: chipX,
              y: chipY,
              position: "absolute",
              background: "rgba(255, 255, 255, 0.9)",
              border: "1px solid #A7F3D0",
              color: "#065F46"
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
          {/* Tagline */}
          <motion.div
            variants={item}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50/50 backdrop-blur-sm"
          >
            <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
              Precision-Engineered Software for Enterprise Growth.
            </span>
          </motion.div>

          {/* Main Headings */}
          <motion.div variants={item} className="space-y-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#064E3B] font-heading">
              Engineered for
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 font-heading">
              Digital Impact
            </h1>
            <p className="text-base sm:text-lg font-medium mt-6 text-emerald-900/80 font-body">
              by <span className="font-bold text-emerald-600 ml-1">YazhSey Technologies</span>
            </p>
          </motion.div>

          {/* Service Buttons */}
          <motion.div variants={item} className="flex flex-wrap justify-center gap-2.5">
            {["Websites", "Mobile Apps", "Custom Software", "CRM / ERP", "Billing Software"].map((label) => (
              <motion.button
                key={label}
                onClick={() => {
                  setClickedService(label);
                  setTimeout(() => setClickedService(null), 600);
                  navigateToService(label);
                }}
                onMouseEnter={() => setHoveredService(label)}
                onMouseLeave={() => setHoveredService(null)}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(5, 150, 105, 0.15)" }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 rounded-xl text-sm font-semibold font-body transition-all duration-300 cursor-pointer relative overflow-hidden"
                style={{
                  background:
                    clickedService === label
                      ? "linear-gradient(135deg, #059669 0%, #10B981 100%)"
                      : hoveredService === label
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(255, 255, 255, 0.05)",
                  border:
                    clickedService === label
                      ? "1px solid #047857"
                      : hoveredService === label
                      ? "1px solid #059669"
                      : "1px solid #A7F3D0",
                  color:
                    clickedService === label
                      ? "#FFFFFF"
                      : hoveredService === label
                      ? "#064E3B"
                      : "#059669",
                  boxShadow:
                    clickedService === label
                      ? "0 0 30px rgba(5, 150, 105, 0.5), 0 0 60px rgba(5, 150, 105, 0.3)"
                      : hoveredService === label
                      ? "0 4px 16px rgba(5, 150, 105, 0.2)"
                      : "0 2px 8px rgba(5, 150, 105, 0.08)"
                }}
              >
                {clickedService === label && (
                  <motion.div
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "rgba(255, 255, 255, 0.6)",
                      borderRadius: "inherit"
                    }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4">
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 12px 32px rgba(6, 78, 59, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              style={{
                boxShadow: "0 4px 16px rgba(6, 78, 59, 0.12)",
                borderRadius: "12px",
                padding: "12px 24px"
              }}
            >
              Start Your Project <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color: "#065F46" }}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium font-mono">
          Scroll
        </span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}