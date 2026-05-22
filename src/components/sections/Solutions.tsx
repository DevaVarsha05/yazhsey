"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { BarChart3, FileText, Users, TrendingUp, Shield, Cog } from "lucide-react";

const solutions = [
  {
    id: "crm",
    label: "CRM System",
    icon: Users,
    tagline: "Customer Relationship Management",
    description:
      "A fully featured CRM tailored to Indian SMEs. Manage leads, track sales pipelines, automate follow-ups, and gain deep customer insights — all in one intuitive dashboard.",
    features: [
      "Lead & Opportunity Management",
      "Sales Pipeline Visualization",
      "Automated Follow-up Reminders",
      "WhatsApp & Email Integration",
      "Custom Reports & Analytics",
      "Role-based Access Control",
    ],
    accentColor: "#059669",
    stats: [{ v: "3x", l: "Faster Sales Cycle" }, { v: "40%", l: "More Conversions" }],
  },
  {
    id: "erp",
    label: "ERP System",
    icon: Cog,
    tagline: "Enterprise Resource Planning",
    description:
      "End-to-end ERP solution connecting every department — Finance, HR, Inventory, Procurement, and Operations — in a single unified platform built for Indian businesses.",
    features: [
      "Integrated Finance & Accounting",
      "HR & Payroll Management",
      "Supply Chain & Procurement",
      "Real-time Inventory Tracking",
      "Multi-branch Support",
      "Tally Integration Ready",
    ],
    accentColor: "#059669",
    stats: [{ v: "60%", l: "Ops Efficiency Gain" }, { v: "100%", l: "Data Visibility" }],
  },
  {
    id: "billing",
    label: "Billing Software",
    icon: FileText,
    tagline: "GST-Compliant Billing & Invoicing",
    description:
      "Feature-rich billing software with GST compliance built in. Generate invoices, manage inventory, track payments, and file GST returns — all from one clean interface.",
    features: [
      "GST-Compliant Invoicing",
      "Barcode / QR Code Scanning",
      "Stock & Inventory Management",
      "Multi-user POS Support",
      "Profit & Loss Reports",
      "E-Invoice Generation",
    ],
    accentColor: "#059669",
    stats: [{ v: "10x", l: "Faster Billing" }, { v: "Zero", l: "GST Errors" }],
  },
  {
    id: "analytics",
    label: "Analytics Dashboard",
    icon: BarChart3,
    tagline: "Business Intelligence & Reporting",
    description:
      "Transform raw data into actionable insights. Custom analytics dashboards give you real-time visibility into KPIs, trends, and forecasts to drive smarter decisions.",
    features: [
      "Real-time KPI Dashboards",
      "Custom Report Builder",
      "Data Export (Excel, PDF)",
      "Predictive Analytics",
      "Multi-source Data Integration",
      "Scheduled Email Reports",
    ],
    accentColor: "#059669",
    stats: [{ v: "5x", l: "Faster Decisions" }, { v: "360°", l: "Business View" }],
  },
];

export default function Solutions() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("crm");
  const activeSolution = solutions.find((s) => s.id === active)!;
  const ActiveIcon     = activeSolution.icon;

  return (
    <section
      ref={ref}
      id="solutions"
      className="relative py-28 overflow-hidden"
      style={{ background: "#181A1B" }}
    >
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(5,150,105,0.05) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(5,150,105,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <div className="pill mb-5 mx-auto" style={{ display: "inline-flex" }}>
            <TrendingUp size={12} style={{ color: "#059669" }} />
            <span>Our Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading" style={{ color: "#E5E7EB" }}>
            Purpose-Built <span className="gradient-text">Business Software</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-sm font-body" style={{ color: "#9CA3AF" }}>
            Explore our flagship products designed specifically for Indian businesses — from startups to enterprises.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.18, duration: 0.55 }}
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {solutions.map((s) => {
            const Icon    = s.icon;
            const isActive = active === s.id;
            return (
              <motion.button
                key={s.id}
                onClick={() => setActive(s.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold font-body"
                style={{
                  background: isActive ? "#059669" : "transparent",
                  border:     isActive ? "1px solid #059669" : "1px solid #2D3134",
                  color:      isActive ? "#181A1B"  : "#9CA3AF",
                  boxShadow:  isActive ? "0 0 20px rgba(5,150,105,0.25)" : "none",
                }}
              >
                <Icon size={14} />
                {s.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Solution Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left — Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl" style={{ background: `${activeSolution.accentColor}12`, border: `1px solid ${activeSolution.accentColor}25` }}>
                  <ActiveIcon size={22} style={{ color: activeSolution.accentColor }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest font-semibold font-mono" style={{ color: "#9CA3AF" }}>
                    {activeSolution.tagline}
                  </div>
                  <h3 className="text-2xl font-black font-heading" style={{ color: "#E5E7EB" }}>
                    {activeSolution.label}
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed font-body" style={{ color: "#9CA3AF" }}>
                {activeSolution.description}
              </p>

              <div className="flex gap-10">
                {activeSolution.stats.map((s) => (
                  <div key={s.l}>
                    <div className="text-3xl font-black font-heading glow-text">{s.v}</div>
                    <div className="text-xs mt-0.5 font-body" style={{ color: "#9CA3AF" }}>{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {activeSolution.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm font-body" style={{ color: "#E5E7EB" }}>
                    <div
                      className="w-4 h-4 rounded flex items-center justify-center mt-0.5 flex-shrink-0"
                      style={{ background: `${activeSolution.accentColor}15`, border: `1px solid ${activeSolution.accentColor}25` }}
                    >
                      <Shield size={8} style={{ color: activeSolution.accentColor }} />
                    </div>
                    {f}
                  </div>
                ))}
              </div>

              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary inline-flex"
              >
                Request a Demo
              </motion.a>
            </div>

            {/* Right — IDE-style Mockup */}
            <div
              className="relative h-80 lg:h-[420px] rounded-2xl overflow-hidden"
              style={{
                background: "#222527",
                border: `1px solid ${activeSolution.accentColor}20`,
              }}
            >
              {/* Window chrome */}
              <div className="absolute top-0 left-0 right-0 h-9 flex items-center px-4 gap-4" style={{ background: "#181A1B", borderBottom: "1px solid #2D3134" }}>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#DC2626" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#D97706" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#059669" }} />
                </div>
                <div className="flex-1 h-5 rounded-md" style={{ background: "#222527", border: "1px solid #2D3134" }} />
              </div>

              <div className="absolute inset-0 top-9 p-4 flex flex-col gap-3">
                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-16 rounded-xl flex flex-col items-center justify-center gap-1.5"
                      style={{ background: "#181A1B", border: "1px solid #2D3134" }}
                    >
                      <div className="h-3.5 w-12 rounded" style={{ background: `${activeSolution.accentColor}30` }} />
                      <div className="h-2 w-16 rounded" style={{ background: "#2D3134" }} />
                    </div>
                  ))}
                </div>

                {/* List panel */}
                <div
                  className="flex-1 rounded-xl p-3"
                  style={{ background: "#181A1B", border: "1px solid #2D3134" }}
                >
                  <div className="h-3 w-24 rounded mb-3" style={{ background: "#2D3134" }} />
                  <div className="space-y-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded flex-shrink-0" style={{ background: `${activeSolution.accentColor}15` }} />
                        <div className="h-2.5 rounded flex-1" style={{ background: "#2D3134", width: `${60 + i * 8}%` }} />
                        <div className="h-5 w-12 rounded" style={{ background: `${activeSolution.accentColor}10`, border: `1px solid ${activeSolution.accentColor}20` }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom row */}
                <div className="grid grid-cols-2 gap-2">
                  {[0, 1].map((i) => (
                    <div key={i} className="h-12 rounded-xl" style={{ background: "#181A1B", border: "1px solid #2D3134" }} />
                  ))}
                </div>
              </div>

              {/* Accent glow */}
              <div
                className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle, ${activeSolution.accentColor}10 0%, transparent 70%)` }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
