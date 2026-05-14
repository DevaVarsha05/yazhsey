"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";

type FilterKey = "All" | "Web" | "Mobile" | "Software" | "Design";
const filters: FilterKey[] = ["All", "Web", "Mobile", "Software", "Design"];

const projects = [
  { title: "RetailFlow ERP", category: "Software" as FilterKey, description: "End-to-end ERP solution for a multi-branch retail chain in Coimbatore.", tags: ["ERP", "React", "Node.js"], accentColor: "#E11D8A", meta: "Retail · Coimbatore" },
  { title: "MediBook Pro", category: "Web" as FilterKey, description: "Hospital appointment & patient management web platform with payment integration.", tags: ["Next.js", "Supabase", "Razorpay"], accentColor: "#A3E635", meta: "Healthcare · Chennai" },
  { title: "SwiftKart Mobile App", category: "Mobile" as FilterKey, description: "Feature-rich grocery delivery app (iOS & Android) with real-time tracking.", tags: ["Flutter", "Firebase", "Maps API"], accentColor: "#FF5E6B", meta: "E-commerce · Madurai" },
  { title: "GSTBill Suite", category: "Software" as FilterKey, description: "Comprehensive GST billing & inventory software for wholesale distributors.", tags: ["Billing", "GST", "Python"], accentColor: "#E11D8A", meta: "Wholesale · Dindigul" },
  { title: "AgroConnect Portal", category: "Web" as FilterKey, description: "B2B agricultural marketplace connecting farmers with distributors across TN.", tags: ["Next.js", "PostgreSQL", "Maps"], accentColor: "#A3E635", meta: "AgriTech · Tamil Nadu" },
  { title: "FieldForce CRM", category: "Mobile" as FilterKey, description: "Sales force automation app for FMCG distributors with offline-sync capability.", tags: ["Flutter", "CRM", "SQLite"], accentColor: "#FF5E6B", meta: "FMCG · Salem" },
  { title: "SchoolERP Platform", category: "Software" as FilterKey, description: "Complete school management system with fee collection, attendance & academics.", tags: ["ERP", "React", "MySQL"], accentColor: "#E11D8A", meta: "EdTech · Tirupur" },
  { title: "ConstructTrack App", category: "Mobile" as FilterKey, description: "Construction project management app with site photo uploads and daily reports.", tags: ["Flutter", "AWS", "GPS"], accentColor: "#A3E635", meta: "Construction · Trichy" },
  { title: "LuxeStore UI Kit", category: "Design" as FilterKey, description: "Premium e-commerce design system & component library for a luxury fashion brand.", tags: ["UI/UX", "Figma", "Design System"], accentColor: "#FF5E6B", meta: "Fashion · Online" },
];

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section ref={ref} id="portfolio" className="relative py-28 overflow-hidden" style={{ background: "#F5F2EB" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="pill mb-5">
            <Briefcase size={12} style={{ color: "#E11D8A" }} />
            <span>Portfolio</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-5xl font-black" style={{ color: "#111111" }}>
              Work That <span className="gradient-text">Speaks For Itself</span>
            </h2>
            <p className="sm:max-w-xs text-sm" style={{ color: "#666666" }}>
              A selection of projects we&apos;ve shipped for clients across industries.
            </p>
          </div>
        </motion.div>

        {/* Filters */}
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
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: activeFilter === f ? "#111111" : "#FAF9F6",
                border: activeFilter === f ? "none" : "1px solid #E5E0D8",
                color: activeFilter === f ? "#ffffff" : "#666666",
              }}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.38, delay: i * 0.04 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-2xl cursor-pointer overflow-hidden transition-all"
                style={{
                  background: "#FAF9F6",
                  border: "1px solid #E5E0D8",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${project.accentColor}35`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 30px ${project.accentColor}10`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#E5E0D8";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Thumbnail placeholder */}
                <div
                  className="relative h-36 rounded-xl mb-4 flex items-center justify-center overflow-hidden"
                  style={{ background: `${project.accentColor}0E`, border: `1px solid ${project.accentColor}20` }}
                >
                  <div className="w-16 h-12 rounded-lg" style={{ background: `${project.accentColor}25` }} />
                  <div
                    className="absolute top-2 right-2 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: project.accentColor }}
                  >
                    <ExternalLink size={11} className="text-white" />
                  </div>
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#666666" }}>{project.meta}</div>
                <h3 className="text-base font-bold mb-2 transition-colors duration-300" style={{ color: "#111111" }}>
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#666666" }}>{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-0.5 rounded-full font-medium"
                      style={{
                        background: `${project.accentColor}10`,
                        border: `1px solid ${project.accentColor}25`,
                        color: project.accentColor === "#A3E635" ? "#5a7a1a" : project.accentColor,
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
