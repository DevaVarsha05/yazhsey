"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";

type FilterKey = "All" | "Web" | "Mobile" | "Software" | "Design";
const filters: FilterKey[] = ["All", "Web", "Mobile", "Software", "Design"];

const projects = [
  {
    title: "RetailFlow ERP",
    category: "Software" as FilterKey,
    description: "End-to-end ERP solution for a multi-branch retail chain in Coimbatore, covering inventory, finance, and HR.",
    tags: ["ERP", "React", "Node.js"],
    accentColor: "#059669",
    meta: "Retail · Coimbatore",
  },
  {
    title: "MediBook Pro",
    category: "Web" as FilterKey,
    description: "Hospital appointment & patient management web platform with integrated payment gateway and GST billing.",
    tags: ["Next.js", "Supabase", "Razorpay"],
    accentColor: "#059669",
    meta: "Healthcare · Chennai",
  },
  {
    title: "SwiftKart Mobile App",
    category: "Mobile" as FilterKey,
    description: "Feature-rich grocery delivery app for iOS & Android with real-time tracking and seamless checkout.",
    tags: ["Flutter", "Firebase", "Maps API"],
    accentColor: "#059669",
    meta: "E-commerce · Madurai",
  },
  {
    title: "GSTBill Suite",
    category: "Software" as FilterKey,
    description: "Comprehensive GST billing & inventory software for wholesale distributors with e-invoice generation.",
    tags: ["Billing", "GST", "Python"],
    accentColor: "#059669",
    meta: "Wholesale · Dindigul",
  },
  {
    title: "AgroConnect Portal",
    category: "Web" as FilterKey,
    description: "B2B agricultural marketplace connecting farmers with distributors across Tamil Nadu.",
    tags: ["Next.js", "PostgreSQL", "Maps"],
    accentColor: "#059669",
    meta: "AgriTech · Tamil Nadu",
  },
  {
    title: "FieldForce CRM",
    category: "Mobile" as FilterKey,
    description: "Sales force automation app for FMCG distributors with offline-sync and territory management.",
    tags: ["Flutter", "CRM", "SQLite"],
    accentColor: "#059669",
    meta: "FMCG · Salem",
  },
  {
    title: "SchoolERP Platform",
    category: "Software" as FilterKey,
    description: "Complete school management system with fee collection, attendance tracking, and academic modules.",
    tags: ["ERP", "React", "MySQL"],
    accentColor: "#059669",
    meta: "EdTech · Tirupur",
  },
  {
    title: "ConstructTrack App",
    category: "Mobile" as FilterKey,
    description: "Construction project management app with site photo uploads, GPS tracking, and daily reports.",
    tags: ["Flutter", "AWS", "GPS"],
    accentColor: "#059669",
    meta: "Construction · Trichy",
  },
  {
    title: "LuxeStore UI Kit",
    category: "Design" as FilterKey,
    description: "Premium e-commerce design system & component library for a luxury fashion brand.",
    tags: ["UI/UX", "Figma", "Design System"],
    accentColor: "#059669",
    meta: "Fashion · Online",
  },
];

export default function Portfolio() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      ref={ref}
      id="portfolio"
      className="relative py-28 overflow-hidden"
      style={{ background: "#181A1B" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-12"
        >
          <div className="pill mb-5">
            <Briefcase size={12} style={{ color: "#059669" }} />
            <span>Portfolio</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-5xl font-black font-heading" style={{ color: "#E5E7EB" }}>
              Work That <span className="gradient-text">Speaks For Itself</span>
            </h2>
            <p className="sm:max-w-xs text-sm font-body" style={{ color: "#9CA3AF" }}>
              A curated selection of projects we&apos;ve crafted for clients across industries.
            </p>
          </div>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.18 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActiveFilter(f)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-5 py-2 rounded-xl text-sm font-semibold font-body"
              style={{
                background: activeFilter === f ? "#059669" : "transparent",
                border:     activeFilter === f ? "1px solid #059669" : "1px solid #2D3134",
                color:      activeFilter === f ? "#181A1B"  : "#9CA3AF",
                boxShadow:  activeFilter === f ? "0 0 16px rgba(5,150,105,0.2)" : "none",
              }}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.38, delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-2xl cursor-pointer overflow-hidden"
                style={{
                  background: "#222527",
                  border: "1px solid #2D3134",
                  transition: "all 0.2s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${project.accentColor}35`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow   = `0 0 24px ${project.accentColor}08`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#2D3134";
                  (e.currentTarget as HTMLDivElement).style.boxShadow   = "none";
                }}
              >
                {/* Thumbnail */}
                <div
                  className="relative h-36 rounded-xl mb-4 flex items-center justify-center overflow-hidden"
                  style={{ background: `${project.accentColor}06`, border: `1px solid ${project.accentColor}15` }}
                >
                  {/* Grid lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }} viewBox="0 0 300 144">
                    <line x1="0" y1="48" x2="300" y2="48" stroke={project.accentColor} strokeWidth="0.5" />
                    <line x1="0" y1="96" x2="300" y2="96" stroke={project.accentColor} strokeWidth="0.5" />
                    <line x1="100" y1="0" x2="100" y2="144" stroke={project.accentColor} strokeWidth="0.5" />
                    <line x1="200" y1="0" x2="200" y2="144" stroke={project.accentColor} strokeWidth="0.5" />
                  </svg>
                  <div className="w-16 h-12 rounded-lg" style={{ background: `${project.accentColor}18`, border: `1px solid ${project.accentColor}25` }} />
                  <div
                    className="absolute top-2 right-2 p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: project.accentColor }}
                  >
                    <ExternalLink size={11} style={{ color: "#181A1B" }} />
                  </div>
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-wider mb-1 font-mono" style={{ color: "#6B7280" }}>
                  {project.meta}
                </div>
                <h3 className="text-base font-bold mb-2 font-heading" style={{ color: "#E5E7EB" }}>
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 font-body" style={{ color: "#9CA3AF" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-0.5 rounded-md font-medium font-mono"
                      style={{
                        background: `${project.accentColor}08`,
                        border: `1px solid ${project.accentColor}20`,
                        color: project.accentColor,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
