"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Users, HeartHandshake, Zap, Building2, BadgeCheck, MapPin } from "lucide-react";

interface USP {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const usps: USP[] = [
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    description:
      "As a Proprietorship, every project receives the owner's direct attention. You're never just a ticket number — you're a long-term partner.",
    color: "#059669",
  },
  {
    icon: Zap,
    title: "Agile & Fast Delivery",
    description:
      "Rapid development cycles with transparent milestones. Your MVP in weeks, not months, with clean handoffs and full documentation.",
    color: "#059669",
  },
  {
    icon: Building2,
    title: "Enterprise-grade Quality",
    description:
      "Micro Enterprise pricing with Fortune-500 quality standards. Clean code, robust architecture, and full post-delivery support.",
    color: "#059669",
  },
  {
    icon: BadgeCheck,
    title: "Verified & Registered",
    description:
      "GST Registered (33CGSPK6933J1ZV) and Udyam Certified Micro Enterprise. Trusted, transparent, legally compliant, and professional.",
    color: "#059669",
  },
];

// --- ANIMATION VARIANTS (Video Style) ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageZoomVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Trigger animation when in view or on navigation
  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    }
  }, [isInView]);

  // Trigger on header navigation click
  useEffect(() => {
    const handleNavClick = () => {
      if (window.location.hash === "#about") {
        setShouldAnimate(true);
      }
    };

    window.addEventListener("hashchange", handleNavClick);
    return () => window.removeEventListener("hashchange", handleNavClick);
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-28 overflow-hidden bg-[#D0EDD7]/30"
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top Section - Image + Text */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Image with zoom effect */}
          <motion.div
            variants={imageZoomVariants}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/about us.jpg"
              alt="Team Collaboration"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Content - Slide up */}
          <motion.div variants={containerVariants}>
            <motion.div
              variants={slideRightVariants}
              className="pill mb-5 inline-flex items-center gap-2"
            >
              <Users size={12} style={{ color: "#059669" }} />
              <span className="text-xs font-bold uppercase tracking-widest text-[#064E3B]">
                About Us
              </span>
            </motion.div>

            <motion.h2
              variants={slideRightVariants}
              className="text-4xl sm:text-5xl font-black font-heading leading-tight mb-6"
              style={{ color: "#064E3B" }}
            >
              Built for Trust, <br />
              <span className="text-[#059669]">Engineered for Impact</span>
            </motion.h2>

            <motion.p
              variants={slideRightVariants}
              className="text-lg leading-relaxed font-body mb-8 text-[#065F46]"
            >
              Founded in Dindigul, Tamil Nadu, YazhSey Technologies is built on
              the premise that premium software development should be accessible,
              transparent, and highly personalized for businesses of all sizes.
            </motion.p>

            <motion.div
              variants={slideRightVariants}
              className="flex items-center gap-3 text-sm font-semibold font-mono text-[#059669]"
            >
              <MapPin size={18} /> <span>Dindigul, Tamil Nadu, India</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* USPs Grid - Video Style Animation */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.3 },
            },
          }}
        >
          {usps.map((usp) => (
            <motion.div
              key={usp.title}
              variants={slideRightVariants}
              className="p-8 rounded-2xl border bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300"
              style={{ borderColor: "#A7F3D0" }}
            >
              {/* Icon with fade-in */}
              <motion.div
                variants={fadeInVariants}
                className="mb-6 p-3 w-12 rounded-xl"
                style={{ background: `${usp.color}12` }}
              >
                <usp.icon size={24} style={{ color: usp.color }} />
              </motion.div>

              {/* Title */}
              <motion.h3
                variants={slideRightVariants}
                className="text-base font-black mb-3 text-[#064E3B]"
              >
                {usp.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                variants={fadeInVariants}
                className="text-xs leading-relaxed text-[#065F46]"
              >
                {usp.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}