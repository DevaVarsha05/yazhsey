"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Award, Clock, Users, HeartHandshake, Zap, Building2, BadgeCheck } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Delivered", icon: CheckCircle2, color: "#E11D8A" },
  { value: "5+", label: "Years Experience", icon: Clock, color: "#A3E635" },
  { value: "30+", label: "Happy Clients", icon: Users, color: "#FF5E6B" },
  { value: "100%", label: "On-time Delivery", icon: Award, color: "#E11D8A" },
];

const usps = [
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    description: "As a Micro Enterprise, every project gets the owner's direct attention. You're never just a ticket number.",
    color: "#E11D8A",
  },
  {
    icon: Zap,
    title: "Agile & Fast Delivery",
    description: "Rapid development cycles with transparent milestones. Your MVP in weeks, not months.",
    color: "#A3E635",
  },
  {
    icon: Building2,
    title: "Enterprise-grade Quality",
    description: "Micro Enterprise pricing with Fortune-500 quality standards. Clean code, robust architecture, full documentation.",
    color: "#FF5E6B",
  },
  {
    icon: BadgeCheck,
    title: "Verified & Registered",
    description: "GST Registered (33CGSPK6933J1ZV) and Udyam Certified Micro Enterprise. Trusted, transparent, and compliant.",
    color: "#E11D8A",
  },
];

const milestones = [
  { year: "2019", event: "Founded Yazhsey Technologies in Dindigul, Tamil Nadu" },
  { year: "2020", event: "Delivered first CRM & Billing solutions to local businesses" },
  { year: "2021", event: "Expanded to Mobile App Development (iOS & Android)" },
  { year: "2022", event: "Udyam Registration & GST certification achieved" },
  { year: "2023", event: "Launched ERP solutions for manufacturing & retail clients" },
  { year: "2024", event: "50+ successful projects across Tamil Nadu & beyond" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} id="about" className="relative py-28 overflow-hidden" style={{ background: "#FAF9F6" }}>
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(225,29,138,0.05) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(163,230,53,0.07) 0%, transparent 70%)" }} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="pill mb-5 mx-auto" style={{ display: "inline-flex" }}>
            <Users size={12} style={{ color: "#A3E635" }} />
            <span>About Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black" style={{ color: "#111111" }}>
            Built on <span className="gradient-text">Trust & Excellence</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm leading-relaxed" style={{ color: "#666666" }}>
            Yazhsey Technologies is a Udyam-registered Micro Enterprise founded in Dindigul, Tamil Nadu, delivering
            world-class digital solutions to businesses across India.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                className="p-6 rounded-2xl text-center"
                style={{ background: "#F5F2EB", border: "1px solid #E5E0D8" }}
              >
                <div className="inline-flex p-2.5 rounded-xl mb-3" style={{ background: `${stat.color}12` }}>
                  <Icon size={18} style={{ color: stat.color }} />
                </div>
                <div className="text-3xl font-black mb-1" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-xs" style={{ color: "#666666" }}>{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-center mb-10" style={{ color: "#111111" }}>
            Why Businesses Choose <span className="gradient-text">Yazhsey</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {usps.map((usp, i) => {
              const Icon = usp.icon;
              return (
                <motion.div
                  key={usp.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="flex gap-4 p-5 rounded-2xl"
                  style={{ background: "#F5F2EB", border: "1px solid #E5E0D8" }}
                >
                  <div className="flex-shrink-0 p-2.5 rounded-xl h-fit" style={{ background: `${usp.color}12` }}>
                    <Icon size={18} style={{ color: usp.color }} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: "#111111" }}>{usp.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>{usp.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-center mb-10" style={{ color: "#111111" }}>
            Our Journey
          </h3>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, #E11D8A, #A3E635, transparent)" }} />
            <div className="space-y-5">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.45 + i * 0.07 }}
                  className="flex gap-5 pl-14 relative"
                >
                  <div
                    className="absolute left-3.5 top-1 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "#E11D8A", boxShadow: "0 0 0 3px rgba(225,29,138,0.12)" }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="text-sm font-black w-12 flex-shrink-0" style={{ color: "#E11D8A" }}>{m.year}</div>
                  <div className="text-sm" style={{ color: "#666666" }}>{m.event}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Registration Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55 }}
          className="grid sm:grid-cols-3 gap-4"
        >
          {[
            { label: "GST Registration", value: "33CGSPK6933J1ZV", icon: "🏛️", color: "#E11D8A" },
            { label: "Udyam Registration", value: "UDYAM-TN-06-0116309", icon: "🏆", color: "#A3E635" },
            { label: "Enterprise Type", value: "Micro Enterprise", icon: "⚡", color: "#FF5E6B" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="p-5 rounded-2xl"
              style={{ background: "#F5F2EB", border: `1px solid ${badge.color}25` }}
            >
              <div className="text-2xl mb-2">{badge.icon}</div>
              <div className="text-[10px] uppercase tracking-widest font-semibold mb-1" style={{ color: "#666666" }}>{badge.label}</div>
              <div className="text-sm font-bold font-mono" style={{ color: badge.color === "#A3E635" ? "#5a7a1a" : badge.color }}>{badge.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
