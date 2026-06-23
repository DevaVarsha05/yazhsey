"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { BarChart3, FileText, Users, TrendingUp, Shield, Cog, X } from "lucide-react";

// Type definitions
type Solution = {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  tagline: string;
  description: string;
  features: string[];
  accentColor: string;
  stats: Array<{ v: string; l: string }>;
};

// ==================== ZOHO CRM FORM COMPONENTS ====================

// Zoho CRM Web-to-Lead Form Component (Compact 2-Column Layout)
const ZohoLeadForm = ({ activeSolution }: { activeSolution: Solution }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="border-2 rounded-2xl p-6 bg-white shadow-sm max-w-2xl w-full mx-auto"
      style={{
        borderColor: activeSolution.accentColor,
      }}
    >
      <div id="crmWebToEntityForm" className="zcwf_lblLeft crmWebToEntityForm">
        <form
          id="webform1278833000000458558"
          action="https://crm.zoho.in/crm/WebToLeadForm"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            e.currentTarget.submit();
          }}
          acceptCharset="UTF-8"
        >
          {/* Hidden Zoho CRM integration fields */}
          <input type="hidden" name="xnQsjsdp" value="31b69ef0fd907de77f4a8ca7043f249c10a97f2dc4b614e9eac54950668f69f4" />
          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
          <input type="hidden" name="xmIwtLD" value="c0146a69ed9bd1cae9b95d4bc860f47b9cba81d23c02c569d25d2bf31017991f8a29d8f7c5f3b9f9de1ce5acbb7a5863" />
          <input type="hidden" name="actionType" value="TGVhZHM=" />
          <input type="hidden" name="returnURL" value="https://example.com" />
          <input type="hidden" name="aG9uZXlwb3Q" value="" />

          {/* Form Header */}
          <div className="mb-5">
            <h3 className="text-xl font-bold font-heading text-gray-900">Request a Demo Form</h3>
            <p className="text-sm font-body text-gray-600 mt-1">Get Started with CRM</p>
          </div>

          {/* Form Fields Grid (2 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body text-sm mb-6">
            
            {/* Full Name */}
            <div className="space-y-1">
              <label htmlFor="Last_Name" className="block font-semibold text-gray-700">Full Name <span className="text-red-500">*</span></label>
              <input type="text" id="Last_Name" name="Last Name" required maxLength={80} placeholder="Enter Your Name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1" style={{ "--tw-ring-color": activeSolution.accentColor } as React.CSSProperties} />
            </div>

            {/* Company */}
            <div className="space-y-1">
              <label htmlFor="Company" className="block font-semibold text-gray-700">Company <span className="text-red-500">*</span></label>
              <input type="text" id="Company" name="Company" required maxLength={200} placeholder="Company Name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
            </div>

            {/* Work Email */}
            <div className="space-y-1">
              <label htmlFor="Email" className="block font-semibold text-gray-700">Work Email</label>
              <input type="email" id="Email" name="Email" maxLength={100} placeholder="Enter Work Email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label htmlFor="Phone" className="block font-semibold text-gray-700">Phone</label>
              <input type="text" id="Phone" name="Phone" maxLength={30} placeholder="Enter Phone Number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
            </div>

            {/* Lead Status */}
            <div className="space-y-1">
              <label htmlFor="Lead_Status" className="block font-semibold text-gray-700">Lead Status</label>
              <select id="Lead_Status" name="Lead Status" className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none">
                <option value="-None-">-None-</option>
                <option value="Attempted to Contact">Attempted to Contact</option>
                <option value="Contact in Future">Contact in Future</option>
                <option value="Contacted">Contacted</option>
              </select>
            </div>

            {/* Job Title */}
            <div className="space-y-1">
              <label htmlFor="Designation" className="block font-semibold text-gray-700">Job Title</label>
              <input type="text" id="Designation" name="Designation" maxLength={100} placeholder="Enter Your Title" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
            </div>

            {/* Address */}
            <div className="space-y-1 sm:col-span-2">
              <label htmlFor="Address_-_Street_Address" className="block font-semibold text-gray-700">Address</label>
              <input type="text" id="Address_-_Street_Address" name="Address - Street Address" maxLength={255} placeholder="Enter Street Address" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none" />
            </div>

          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full py-3 rounded-xl font-bold text-white shadow-md transition-all font-body text-base"
            style={{
              background: activeSolution.accentColor,
            }}
          >
            Submit Form
          </motion.button>

        </form>
      </div>
    </motion.div>
  );
};

// ==================== PROJECT & EMPLOYEE DATA ====================


const solutions: Solution[] = [
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
    accentColor: "#2563EB",
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
    accentColor: "#D97706",
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
    accentColor: "#7C3AED",
    stats: [{ v: "5x", l: "Faster Decisions" }, { v: "360°", l: "Business View" }],
  },
];

// ==================== MAIN SOLUTIONS COMPONENT ====================

export default function Solutions() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("crm");
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showFullDashboard, setShowFullDashboard] = useState(false);

  const activeSolution = solutions.find((s: Solution) => s.id === active)!;
  const ActiveIcon = activeSolution.icon;

  return (
    <section
      ref={ref}
      id="solutions"
      className="relative py-28 overflow-hidden"
      style={{ background: "#FFFFFF", position: "relative" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${activeSolution.accentColor}10 0%, transparent 70%)` }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${activeSolution.accentColor}10 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <div className="pill mb-5 mx-auto" style={{ display: "inline-flex" }}>
            <TrendingUp size={12} style={{ color: activeSolution.accentColor }} />
            <span>Our Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading" style={{ color: "#111827" }}>
            Purpose-Built <span className="gradient-text">Business Software</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-sm font-body" style={{ color: "#4B5563" }}>
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
          {solutions.map((s: Solution) => {
            const Icon = s.icon;
            const isActive = active === s.id;
            return (
              <motion.button
                key={s.id}
                onClick={() => setActive(s.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold font-body"
                style={{
                  background: isActive ? s.accentColor : "#F3F4F6",
                  border: isActive ? `1px solid ${s.accentColor}` : "1px solid #D1D5DB",
                  color: isActive ? "#FFFFFF" : "#4B5563",
                  boxShadow: isActive ? `0 0 20px ${s.accentColor}40` : "none",
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
            {/* Left — Solution Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div
                  className="p-3 rounded-xl"
                  style={{ background: `${activeSolution.accentColor}12`, border: `1px solid ${activeSolution.accentColor}25` }}
                >
                  <ActiveIcon size={22} style={{ color: activeSolution.accentColor }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest font-semibold font-mono" style={{ color: "#6B7280" }}>
                    {activeSolution.tagline}
                  </div>
                  <h3 className="text-2xl font-black font-heading" style={{ color: "#111827" }}>
                    {activeSolution.label}
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed font-body" style={{ color: "#4B5563" }}>
                {activeSolution.description}
              </p>

              <div className="flex gap-10">
                {activeSolution.stats.map((s: { v: string; l: string }) => (
                  <div key={s.l}>
                    <div className="text-3xl font-black font-heading glow-text" style={{ color: activeSolution.accentColor }}>
                      {s.v}
                    </div>
                    <div className="text-xs mt-0.5 font-body" style={{ color: "#6B7280" }}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {activeSolution.features.map((f: string) => (
                  <div key={f} className="flex items-start gap-2 text-sm font-body" style={{ color: "#111827" }}>
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
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary inline-flex"
                style={{ background: activeSolution.accentColor }}
              >
                Explore Features
              </motion.a>
            </div>

            {/* Right — Zoho CRM Form or Dashboard */}
            {active === "crm" ? (
              <ZohoLeadForm activeSolution={activeSolution} />
            ) :  (
              // Simple visualization for ERP, Billing, and Analytics
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-80 lg:h-[420px] rounded-2xl p-8 flex flex-col items-center justify-center transition-all"
                style={{
                  background: `linear-gradient(135deg, #FFFFFF 0%, ${activeSolution.accentColor}05 100%)`,
                  border: `2px solid ${activeSolution.accentColor}`,
                  boxShadow: `0 4px 24px rgba(0,0,0,0.06), 0 0 30px ${activeSolution.accentColor}20`,
                }}
              >
                <div className="text-center">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ background: `${activeSolution.accentColor}15`, border: `1px solid ${activeSolution.accentColor}25` }}
                  >
                    <ActiveIcon size={40} style={{ color: activeSolution.accentColor }} />
                  </div>
                  <h3 className="text-2xl font-black font-heading mb-3" style={{ color: "#111827" }}>
                    {activeSolution.label}
                  </h3>
                  <p className="text-sm font-body max-w-xs" style={{ color: "#6B7280" }}>
                    {activeSolution.tagline}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-2.5 rounded-lg font-semibold text-white text-sm font-body"
                    style={{ background: activeSolution.accentColor }}
                  >
                    Get Started
                  </motion.button>
                </div>

                {/* Accent glow */}
                <div
                  className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${activeSolution.accentColor}10 0%, transparent 70%)` }}
                />
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
