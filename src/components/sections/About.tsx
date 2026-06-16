"use client";

import { useRef } from "react";
<<<<<<< HEAD
import { motion, useInView } from "framer-motion";
import { Users, HeartHandshake, Zap, Building2, BadgeCheck, MapPin } from "lucide-react";
=======
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  CheckCircle2, Award, Clock, Users,
  HeartHandshake, Zap, Building2, BadgeCheck, MapPin,
} from "lucide-react";

const stats = [
  { value: "50+",  label: "Projects Delivered",  icon: CheckCircle2, color: "#059669" },
  { value: "5+",   label: "Years Experience",     icon: Clock,        color: "#059669" },
  { value: "30+",  label: "Happy Clients",        icon: Users,        color: "#059669" },
  { value: "100%", label: "On-time Delivery",     icon: Award,        color: "#059669" },
];
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf

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

<<<<<<< HEAD
export default function About() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
=======
const milestones = [
  { year: "2019", event: "Founded Yazhsey Technologies in Dindigul, Tamil Nadu by Ponnusamy Kavivarthini" },
  { year: "2020", event: "Delivered first CRM & Billing solutions to local businesses in Dindigul" },
  { year: "2021", event: "Expanded to Mobile App Development — iOS & Android with Flutter" },
  { year: "2022", event: "Achieved Udyam Registration & GST Certification as a Micro Enterprise" },
  { year: "2023", event: "Launched comprehensive ERP solutions for manufacturing & retail clients" },
  { year: "2024", event: "50+ successful projects across Tamil Nadu and clients beyond India" },
];

export default function About() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-28 overflow-hidden"
<<<<<<< HEAD
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
=======
      style={{ background: "#222527" }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "#2D3134" }} />

      {/* Parallax ambient blobs */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(5,150,105,0.04) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(5,150,105,0.05) 0%, transparent 70%)" }} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <div className="pill mb-5 mx-auto" style={{ display: "inline-flex" }}>
            <Users size={12} style={{ color: "#059669" }} />
            <span>Our Story</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading" style={{ color: "#E5E7EB" }}>
            Built on <span className="gradient-text">Trust & Excellence</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-sm leading-relaxed font-body" style={{ color: "#9CA3AF" }}>
            Yazhsey Technologies is a Udyam-registered Micro Enterprise founded in Dindigul, Tamil Nadu by
            <strong style={{ color: "#E5E7EB" }}> Ponnusamy Kavivarthini</strong> — delivering world-class digital solutions
            to businesses across India.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <MapPin size={14} style={{ color: "#059669" }} />
            <span className="text-sm font-body" style={{ color: "#9CA3AF" }}>
              Karaiyampatti, Vedasandur Block, Nagayakottai, Dindigul, Tamil Nadu — 624706
            </span>
          </div>
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
                transition={{ delay: i * 0.09, duration: 0.55 }}
                className="p-6 rounded-2xl text-center"
                style={{ background: "#181A1B", border: "1px solid #2D3134" }}
              >
                <div className="inline-flex p-2.5 rounded-xl mb-3" style={{ background: `${stat.color}12`, border: `1px solid ${stat.color}20` }}>
                  <Icon size={18} style={{ color: stat.color }} />
                </div>
                <div className="text-3xl font-black mb-1 font-heading glow-text">{stat.value}</div>
                <div className="text-xs font-body" style={{ color: "#9CA3AF" }}>{stat.label}</div>
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
              </motion.div>
            );
          })}
        </div>

<<<<<<< HEAD
        {/* Bottom Badges */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
=======
        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.65 }}
          className="mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-center mb-10 font-heading" style={{ color: "#E5E7EB" }}>
            Why Businesses Choose <span className="gradient-text">Yazhsey</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {usps.map((usp, i) => {
              const Icon = usp.icon;
              return (
                <motion.div
                  key={usp.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.55 }}
                  className="flex gap-4 p-6 rounded-2xl"
                  style={{ background: "#181A1B", border: "1px solid #2D3134" }}
                >
                  <div className="flex-shrink-0 p-2.5 rounded-xl h-fit" style={{ background: `${usp.color}12`, border: `1px solid ${usp.color}20` }}>
                    <Icon size={18} style={{ color: usp.color }} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1.5 font-heading" style={{ color: "#E5E7EB" }}>{usp.title}</h4>
                    <p className="text-sm leading-relaxed font-body" style={{ color: "#9CA3AF" }}>{usp.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.65 }}
          className="mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-center mb-10 font-heading" style={{ color: "#E5E7EB" }}>
            Our Journey
          </h3>
          <div className="relative max-w-2xl mx-auto">
            <div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, #059669, #2D3134, #059669, transparent)" }}
            />
            <div className="space-y-5">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.45 + i * 0.07 }}
                  className="flex gap-5 pl-14 relative"
                >
                  <div
                    className="absolute left-3.5 top-1 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "#059669", boxShadow: "0 0 12px rgba(5,150,105,0.3)" }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: "#181A1B" }} />
                  </div>
                  <div className="text-sm font-black w-12 flex-shrink-0 font-mono" style={{ color: "#059669" }}>
                    {m.year}
                  </div>
                  <div className="text-sm font-body" style={{ color: "#9CA3AF" }}>{m.event}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
          transition={{ delay: 0.55 }}
          className="grid sm:grid-cols-3 gap-4"
        >
          {[
            { label: "GST Registration",  value: "33CGSPK6933J1ZV",    icon: "🏛️", color: "#059669", sub: "Tamil Nadu State" },
            { label: "Udyam Registration", value: "UDYAM-TN-06-0116309", icon: "🏆", color: "#059669", sub: "Ministry of MSME, India" },
<<<<<<< HEAD
            { label: "Enterprise Type",   value: "Micro Enterprise",    icon: "⚡", color: "#4B5563", sub: "Proprietorship — Kavivarthini" },
=======
            { label: "Enterprise Type",   value: "Micro Enterprise",    icon: "⚡", color: "#9CA3AF", sub: "Proprietorship — Kavivarthini" },
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
          ].map((badge) => (
            <div
              key={badge.label}
              className="p-6 rounded-2xl"
<<<<<<< HEAD
              style={{ background: "#FFFFFF", border: `1px solid ${badge.color}25`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
            >
              <div className="text-2xl mb-3">{badge.icon}</div>
              <div className="text-[10px] uppercase tracking-widest font-semibold mb-1 font-mono" style={{ color: "#9CA3AF" }}>
=======
              style={{ background: "#181A1B", border: `1px solid ${badge.color}20` }}
            >
              <div className="text-2xl mb-3">{badge.icon}</div>
              <div className="text-[10px] uppercase tracking-widest font-semibold mb-1 font-mono" style={{ color: "#6B7280" }}>
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
                {badge.label}
              </div>
              <div className="text-sm font-bold font-mono mb-1" style={{ color: badge.color }}>
                {badge.value}
              </div>
<<<<<<< HEAD
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
=======
              <div className="text-[11px] font-body" style={{ color: "#9CA3AF" }}>{badge.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "#2D3134" }} />
    </section>
  );
}
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
