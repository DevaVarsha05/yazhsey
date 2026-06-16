"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, HeartHandshake, Zap, Building2, BadgeCheck, MapPin } from "lucide-react";

const usps = [
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

export default function About() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-28 overflow-hidden"
      style={{ background: "#FFFFFF", position: "relative" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "#D1D5DB" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "#D1D5DB" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <div className="pill mb-5">
              <Users size={12} style={{ color: "#059669" }} />
              <span>About Us</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-heading leading-tight" style={{ color: "#111827" }}>
              Built for Trust, <br />
              <span className="gradient-text">Engineered for Impact</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-sm leading-relaxed font-body" style={{ color: "#4B5563" }}>
              Founded in Dindigul, Tamil Nadu, YazhSey Technologies is built on the premise that premium software development should be accessible, transparent, and highly personalized for businesses of all sizes.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold font-mono" style={{ color: "#059669" }}>
              <MapPin size={14} /> Dindigul, Tamil Nadu, India
            </div>
          </motion.div>
        </div>

        {/* USPs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {usps.map((usp, i) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5, 
                  boxShadow: `0 15px 30px ${usp.color}20` 
                }}
                whileTap={{ scale: 0.98 }}
                className="p-7 rounded-3xl relative overflow-hidden flex flex-col justify-between border transition-all duration-300 cursor-pointer"
                style={{ 
                  background: "#F3F4F6",
                  borderColor: "#D1D5DB"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${usp.color}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#D1D5DB";
                }}
              >
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-3.5 rounded-2xl" style={{ background: `${usp.color}12`, border: `1px solid ${usp.color}25` }}>
                    <Icon size={24} style={{ color: usp.color }} />
                  </div>
                  <div className="text-[10px] font-bold font-mono px-2 py-1 rounded" style={{ background: "#E5E7EB", color: "#6B7280" }}>
                    0{i + 1}
                  </div>
                </div>

                <h3 className="text-base font-black mb-3 font-heading" style={{ color: "#111827" }}>
                  {usp.title}
                </h3>
                <p className="text-xs leading-relaxed font-body" style={{ color: "#4B5563" }}>
                  {usp.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Badges */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55 }}
          className="grid sm:grid-cols-3 gap-4"
        >
          {[
            { label: "GST Registration",  value: "33CGSPK6933J1ZV",    icon: "🏛️", color: "#059669", sub: "Tamil Nadu State" },
            { label: "Udyam Registration", value: "UDYAM-TN-06-0116309", icon: "🏆", color: "#059669", sub: "Ministry of MSME, India" },
            { label: "Enterprise Type",   value: "Micro Enterprise",    icon: "⚡", color: "#4B5563", sub: "Proprietorship — Kavivarthini" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="p-6 rounded-2xl"
              style={{ background: "#FFFFFF", border: `1px solid ${badge.color}25`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
            >
              <div className="text-2xl mb-3">{badge.icon}</div>
              <div className="text-[10px] uppercase tracking-widest font-semibold mb-1 font-mono" style={{ color: "#9CA3AF" }}>
                {badge.label}
              </div>
              <div className="text-sm font-bold font-mono mb-1" style={{ color: badge.color }}>
                {badge.value}
              </div>
              <div className="text-[10px] font-medium font-body" style={{ color: "#6B7280" }}>
                {badge.sub}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
