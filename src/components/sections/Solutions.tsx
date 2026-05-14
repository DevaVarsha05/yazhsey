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
    features: ["Lead & Opportunity Management", "Sales Pipeline Visualization", "Automated Follow-up Reminders", "WhatsApp & Email Integration", "Custom Reports & Analytics", "Role-based Access Control"],
    accentColor: "#E11D8A",
    stats: [{ v: "3x", l: "Faster Sales Cycle" }, { v: "40%", l: "More Conversions" }],
  },
  {
    id: "erp",
    label: "ERP System",
    icon: Cog,
    tagline: "Enterprise Resource Planning",
    description:
      "End-to-end ERP solution connecting every department — Finance, HR, Inventory, Procurement, and Operations — in a single unified platform built for Indian businesses.",
    features: ["Integrated Finance & Accounting", "HR & Payroll Management", "Supply Chain & Procurement", "Real-time Inventory Tracking", "Multi-branch Support", "Tally Integration Ready"],
    accentColor: "#A3E635",
    stats: [{ v: "60%", l: "Ops Efficiency Gain" }, { v: "100%", l: "Data Visibility" }],
  },
  {
    id: "billing",
    label: "Billing Software",
    icon: FileText,
    tagline: "GST-Compliant Billing & Invoicing",
    description:
      "Feature-rich billing software with GST compliance built in. Generate invoices, manage inventory, track payments, and file GST returns — all from one clean interface.",
    features: ["GST-Compliant Invoicing", "Barcode / QR Code Scanning", "Stock & Inventory Management", "Multi-user POS Support", "Profit & Loss Reports", "E-Invoice Generation"],
    accentColor: "#FF5E6B",
    stats: [{ v: "10x", l: "Faster Billing" }, { v: "Zero", l: "GST Errors" }],
  },
  {
    id: "analytics",
    label: "Analytics Dashboard",
    icon: BarChart3,
    tagline: "Business Intelligence & Reporting",
    description:
      "Transform your raw data into actionable insights. Our custom analytics dashboards give you real-time visibility into KPIs, trends, and forecasts to drive smarter decisions.",
    features: ["Real-time KPI Dashboards", "Custom Report Builder", "Data Export (Excel, PDF)", "Predictive Analytics", "Multi-source Data Integration", "Scheduled Email Reports"],
    accentColor: "#E11D8A",
    stats: [{ v: "5x", l: "Faster Decisions" }, { v: "360°", l: "Business View" }],
  },
];

export default function Solutions() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("crm");
  const activeSolution = solutions.find((s) => s.id === active)!;
  const ActiveIcon = activeSolution.icon;

  return (
    <section ref={ref} id="solutions" className="relative py-28 overflow-hidden" style={{ background: "#F5F2EB" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="pill mb-5 mx-auto" style={{ display: "inline-flex" }}>
            <TrendingUp size={12} style={{ color: "#A3E635" }} />
            <span>Our Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black" style={{ color: "#111111" }}>
            Purpose-Built <span className="gradient-text">Business Software</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-sm" style={{ color: "#666666" }}>
            Explore our flagship products designed specifically for Indian businesses — from startups to enterprises.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.18, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {solutions.map((s) => {
            const Icon = s.icon;
            const isActive = active === s.id;
            return (
              <motion.button
                key={s.id}
                onClick={() => setActive(s.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background: isActive ? "#E11D8A" : "#FAF9F6",
                  border: isActive ? "none" : "1px solid #E5E0D8",
                  color: isActive ? "#ffffff" : "#666666",
                  boxShadow: isActive ? "0 4px 16px rgba(225,29,138,0.25)" : "none",
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
            transition={{ duration: 0.38 }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            {/* Left */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl" style={{ background: `${activeSolution.accentColor}14` }}>
                  <ActiveIcon size={22} style={{ color: activeSolution.accentColor }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest font-semibold" style={{ color: "#666666" }}>{activeSolution.tagline}</div>
                  <h3 className="text-2xl font-black" style={{ color: "#111111" }}>{activeSolution.label}</h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>{activeSolution.description}</p>

              <div className="flex gap-8">
                {activeSolution.stats.map((s) => (
                  <div key={s.l}>
                    <div className="text-3xl font-black" style={{ color: activeSolution.accentColor }}>{s.v}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#666666" }}>{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {activeSolution.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm" style={{ color: "#1F1F1F" }}>
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                      style={{ background: `${activeSolution.accentColor}15` }}
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

            {/* Right — Mockup */}
            <div
              className="relative h-80 lg:h-96 rounded-2xl overflow-hidden"
              style={{ background: "#FAF9F6", border: `1.5px solid ${activeSolution.accentColor}25` }}
            >
              <div className="absolute inset-4 flex flex-col gap-3">
                {/* Window chrome */}
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5E6B" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#A3E635" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#E5E0D8" }} />
                  <div className="ml-3 flex-1 h-4 rounded-full" style={{ background: "#F5F2EB", border: "1px solid #E5E0D8" }} />
                </div>
                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-16 rounded-xl flex flex-col items-center justify-center gap-1" style={{ background: "#F5F2EB", border: "1px solid #E5E0D8" }}>
                      <div className="h-4 w-12 rounded-full" style={{ background: `${activeSolution.accentColor}50` }} />
                      <div className="h-2 w-16 rounded-full" style={{ background: "#E5E0D8" }} />
                    </div>
                  ))}
                </div>
                {/* List */}
                <div className="flex-1 rounded-xl p-3" style={{ background: "#F5F2EB", border: "1px solid #E5E0D8" }}>
                  <div className="h-3 w-24 rounded-full mb-3" style={{ background: "#E5E0D8" }} />
                  <div className="space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full flex-shrink-0" style={{ background: `${activeSolution.accentColor}20` }} />
                        <div className="h-2.5 rounded-full flex-1" style={{ background: "#E5E0D8", width: `${55 + i * 10}%` }} />
                        <div className="h-5 w-12 rounded-full" style={{ background: `${activeSolution.accentColor}18` }} />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Bottom row */}
                <div className="grid grid-cols-2 gap-2">
                  {[0, 1].map((i) => (
                    <div key={i} className="h-14 rounded-xl" style={{ background: "#F5F2EB", border: "1px solid #E5E0D8" }} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
