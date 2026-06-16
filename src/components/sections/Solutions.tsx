"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
<<<<<<< HEAD
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

const projectData = {
  whatsapp_ai_chatbot: {
    name: "WhatsApp AI Chatbot",
    client: "Steel Company",
    status: "In Progress",
    progress: 85,
    budget: "$15,000",
    spent: "$12,750",
    startDate: "2026-05-25",
    endDate: "2026-06-30",
    teamMembers: [
      { name: "Your Name", role: "React Developer", hours: 140 },
    ],
    milestones: [
      { name: "AI Setup & Twilio Integration", completion: 100, status: "✅ Done" },
      { name: "WhatsApp Chatbot Core", completion: 100, status: "✅ Done" },
      { name: "Product Integration & Orders", completion: 100, status: "✅ Done" },
      { name: "Payment & Dashboard", completion: 85, status: "⏳ In Progress" },
    ],
    description: "Full-featured WhatsApp chatbot with AI, product catalog, order management, and multi-language support (Tamil/English)",
  },
  company_website: {
    name: "Company Website",
    client: "Steel Company",
    status: "In Progress",
    progress: 70,
    budget: "$8,000",
    spent: "$5,600",
    startDate: "2026-06-08",
    endDate: "2026-06-30",
    teamMembers: [
      { name: "Your Name", role: "React Developer", hours: 80 },
    ],
    milestones: [
      { name: "Design & Theme Setup", completion: 100, status: "✅ Done" },
      { name: "Product Updates", completion: 80, status: "⏳ In Progress" },
      { name: "AI Integration", completion: 60, status: "⏳ In Progress" },
      { name: "SEO & Launch", completion: 40, status: "⏸️ Pending" },
    ],
    description: "Modern, responsive company website with theme customization, product showcase, and AI assistant integration",
  },
  dashboard_crm: {
    name: "Dashboard & CRM System",
    client: "Steel Company",
    status: "In Progress",
    progress: 65,
    budget: "$10,000",
    spent: "$6,500",
    startDate: "2026-06-12",
    endDate: "2026-07-15",
    teamMembers: [
      { name: "Your Name", role: "React Developer", hours: 100 },
    ],
    milestones: [
      { name: "Dashboard Design", completion: 100, status: "✅ Done" },
      { name: "CRM Core Features", completion: 70, status: "⏳ In Progress" },
      { name: "Data Integration", completion: 60, status: "⏳ In Progress" },
      { name: "Testing & Deployment", completion: 30, status: "⏸️ Pending" },
    ],
    description: "Analytics dashboard with CRM features for order tracking, customer management, and business insights",
  },
};

const employeeData = {
  yourName: {
    name: "Your Name",
    role: "React Developer / Full Stack",
    days: [
      { day: 1, date: "25.5.26", task: "AI Voice Assistant Setup with Narek + Twilio", status: "✅ Completed", time: "8h", completion: 100, details: "Configured Twilio call connection, explored Tamil voice support" },
      { day: 2, date: "27.5.26", task: "WhatsApp AI Chatbot with QR Code Generation", status: "✅ Completed", time: "7h", completion: 100, details: "Built local business chatbot with dynamic QR code creation" },
      { day: 3, date: "28.5.26", task: "WhatsApp Bot AI Depth in Tanglysh", status: "✅ Completed", time: "6h", completion: 100, details: "Added language depth features, QR scanner integration with AI assistant" },
      { day: 4, date: "29.5.26", task: "Meta Integration + Dashboard Setup", status: "✅ Completed", time: "8h", completion: 100, details: "Connected Meta API, configured dashboard UI with reconfigured buttons" },
      { day: 5, date: "30.5.26", task: "Meta & Airtable Connection", status: "✅ Completed", time: "7h", completion: 100, details: "Integrated Airtable for data sync with Meta chatbot" },
      { day: 6, date: "1.6.26", task: "WhatsApp Chatbot + MongoDB Data Store", status: "✅ Completed", time: "9h", completion: 100, details: "Implemented MongoDB storage, text message handling, AI responses" },
      { day: 7, date: "2.6.26", task: "Steel Company Products Integration", status: "✅ Completed", time: "8h", completion: 100, details: "Added company model and products to WhatsApp AI chatbot" },
      { day: 8, date: "3.6.26", task: "Interactive Button UI + Product Display", status: "✅ Completed", time: "7h", completion: 100, details: "Built interactive buttons for product selection in chatbot" },
      { day: 9, date: "4.6.26", task: "Order Flow & Dashboard Storage", status: "✅ Completed", time: "8h", completion: 100, details: "Welcome message, pincode capture, order summary, MongoDB integration" },
      { day: 10, date: "5.6.26", task: "Confirmation & State Management", status: "✅ Completed", time: "7h", completion: 100, details: "Confirm messages, dashboard design, customer state in mongoose" },
      { day: 11, date: "7.6.26", task: "Voice to Text Flow - Browser Mic", status: "✅ Completed", time: "6h", completion: 100, details: "Integrated browser microphone for voice input feature" },
      { day: 12, date: "8.6.26", task: "Company Website Design & Theme", status: "✅ Completed", time: "8h", completion: 100, details: "Complete website redesign with modern theme" },
      { day: 13, date: "9.6.26", task: "Supermarket Bot Design & Components", status: "✅ Completed", time: "7h", completion: 100, details: "New bot design, UI components, button samples tested" },
      { day: 14, date: "10.6.26", task: "MongoDB Connection & Notifications", status: "✅ Completed", time: "8h", completion: 100, details: "Notification system, mongoose connection, AI assistant updates" },
      { day: 15, date: "11.6.26", task: "Multi-Language Support (Tamil/English)", status: "✅ Completed", time: "8h", completion: 100, details: "Separate Tamil & English chatbots, UPI payment with ID, website updates" },
      { day: 16, date: "12.6.26", task: "Dashboard Code & CRM Integration", status: "✅ Completed", time: "9h", completion: 100, details: "Dashboard design & code, CRM load, website theme updates" },
      { day: 17, date: "15.6.26", task: "CEO Integration & Ecommerce AI", status: "⏳ In Progress", time: "6h", completion: 85, details: "CEO portal integration, AI assistant for ecommerce website" },
      { day: 18, date: "15.6.26", task: "Dashboard Data Integration & CRM", status: "⏳ In Progress", time: "4h", completion: 60, details: "Add data to dashboard, implement CRM features" },
    ],
  },
};

const solutions: Solution[] = [
=======
import { BarChart3, FileText, Users, TrendingUp, Shield, Cog } from "lucide-react";

const solutions = [
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
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
<<<<<<< HEAD
    accentColor: "#2563EB",
=======
    accentColor: "#059669",
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
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
<<<<<<< HEAD
    accentColor: "#D97706",
=======
    accentColor: "#059669",
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
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
<<<<<<< HEAD
    accentColor: "#7C3AED",
=======
    accentColor: "#059669",
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
    stats: [{ v: "5x", l: "Faster Decisions" }, { v: "360°", l: "Business View" }],
  },
];

<<<<<<< HEAD
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
=======
export default function Solutions() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("crm");
  const activeSolution = solutions.find((s) => s.id === active)!;
  const ActiveIcon     = activeSolution.icon;
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf

  return (
    <section
      ref={ref}
      id="solutions"
      className="relative py-28 overflow-hidden"
<<<<<<< HEAD
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
=======
      style={{ background: "#181A1B" }}
    >
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(5,150,105,0.05) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(5,150,105,0.05) 0%, transparent 70%)" }} />
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <div className="pill mb-5 mx-auto" style={{ display: "inline-flex" }}>
<<<<<<< HEAD
            <TrendingUp size={12} style={{ color: activeSolution.accentColor }} />
            <span>Our Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading" style={{ color: "#111827" }}>
            Purpose-Built <span className="gradient-text">Business Software</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-sm font-body" style={{ color: "#4B5563" }}>
=======
            <TrendingUp size={12} style={{ color: "#059669" }} />
            <span>Our Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading" style={{ color: "#E5E7EB" }}>
            Purpose-Built <span className="gradient-text">Business Software</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-sm font-body" style={{ color: "#9CA3AF" }}>
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
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
<<<<<<< HEAD
          {solutions.map((s: Solution) => {
            const Icon = s.icon;
=======
          {solutions.map((s) => {
            const Icon    = s.icon;
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
            const isActive = active === s.id;
            return (
              <motion.button
                key={s.id}
                onClick={() => setActive(s.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold font-body"
                style={{
<<<<<<< HEAD
                  background: isActive ? s.accentColor : "#F3F4F6",
                  border: isActive ? `1px solid ${s.accentColor}` : "1px solid #D1D5DB",
                  color: isActive ? "#FFFFFF" : "#4B5563",
                  boxShadow: isActive ? `0 0 20px ${s.accentColor}40` : "none",
=======
                  background: isActive ? "#059669" : "transparent",
                  border:     isActive ? "1px solid #059669" : "1px solid #2D3134",
                  color:      isActive ? "#181A1B"  : "#9CA3AF",
                  boxShadow:  isActive ? "0 0 20px rgba(5,150,105,0.25)" : "none",
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
                    {activeSolution.label}
                  </h3>
                </div>
              </div>

<<<<<<< HEAD
              <p className="text-sm leading-relaxed font-body" style={{ color: "#4B5563" }}>
=======
              <p className="text-sm leading-relaxed font-body" style={{ color: "#9CA3AF" }}>
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
                {activeSolution.description}
              </p>

              <div className="flex gap-10">
<<<<<<< HEAD
                {activeSolution.stats.map((s: { v: string; l: string }) => (
                  <div key={s.l}>
                    <div className="text-3xl font-black font-heading glow-text" style={{ color: activeSolution.accentColor }}>
                      {s.v}
                    </div>
                    <div className="text-xs mt-0.5 font-body" style={{ color: "#6B7280" }}>
                      {s.l}
                    </div>
=======
                {activeSolution.stats.map((s) => (
                  <div key={s.l}>
                    <div className="text-3xl font-black font-heading glow-text">{s.v}</div>
                    <div className="text-xs mt-0.5 font-body" style={{ color: "#9CA3AF" }}>{s.l}</div>
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2.5">
<<<<<<< HEAD
                {activeSolution.features.map((f: string) => (
                  <div key={f} className="flex items-start gap-2 text-sm font-body" style={{ color: "#111827" }}>
=======
                {activeSolution.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm font-body" style={{ color: "#E5E7EB" }}>
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
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
<<<<<<< HEAD
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
            ) : (
              // Project & Employee Dashboard
              <motion.div
                onClick={() => setShowFullDashboard(true)}
                whileHover={{ scale: 1.02 }}
                className="relative h-80 lg:h-[420px] rounded-2xl overflow-hidden cursor-pointer transition-all"
                style={{
                  background: "#F9FAFB",
                  border: `2px solid ${activeSolution.accentColor}`,
                  boxShadow: `0 4px 24px rgba(0,0,0,0.06), 0 0 30px ${activeSolution.accentColor}20`,
                }}
              >
                {/* Window chrome */}
                <div className="absolute top-0 left-0 right-0 h-9 flex items-center px-4 gap-4" style={{ background: "#E5E7EB", borderBottom: "1px solid #D1D5DB" }}>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#DC2626" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#D97706" }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: activeSolution.accentColor }} />
                  </div>
                  <span className="text-xs font-semibold" style={{ color: "#4B5563" }}>Dashboard</span>
                </div>

                <div className="absolute inset-0 top-9 p-3 flex flex-col gap-2 overflow-hidden">
                  {/* KPI Cards Row */}
                  <div className="grid grid-cols-4 gap-1.5">
                    <div className="rounded-lg p-2" style={{ background: "#FFFFFF", border: "1px solid #D1D5DB" }}>
                      <div className="text-xs" style={{ color: "#6B7280", marginBottom: "4px" }}>Total Employees</div>
                      <div className="text-2xl font-bold" style={{ color: activeSolution.accentColor }}>1</div>
                    </div>
                    <div className="rounded-lg p-2" style={{ background: "#FFFFFF", border: "1px solid #D1D5DB" }}>
                      <div className="text-xs" style={{ color: "#6B7280", marginBottom: "4px" }}>Active Projects</div>
                      <div className="text-2xl font-bold" style={{ color: activeSolution.accentColor }}>3</div>
                    </div>
                    <div className="rounded-lg p-2" style={{ background: "#FFFFFF", border: "1px solid #D1D5DB" }}>
                      <div className="text-xs" style={{ color: "#6B7280", marginBottom: "4px" }}>Tasks Done</div>
                      <div className="text-2xl font-bold" style={{ color: "#10B981" }}>16</div>
                    </div>
                    <div className="rounded-lg p-2" style={{ background: "#FFFFFF", border: "1px solid #D1D5DB" }}>
                      <div className="text-xs" style={{ color: "#6B7280", marginBottom: "4px" }}>Pending</div>
                      <div className="text-2xl font-bold" style={{ color: "#F59E0B" }}>2</div>
                    </div>
                  </div>

                  {/* Main Content - Two Columns */}
                  <div className="flex-1 grid grid-cols-2 gap-2 min-h-0">
                    {/* Employee Work Panel */}
                    <div className="rounded-lg p-2.5" style={{ background: "#FFFFFF", border: "1px solid #D1D5DB", overflow: "auto" }}>
                      <div className="text-xs font-bold mb-1.5" style={{ color: "#111827" }}>Employee Tasks</div>
                      <div className="space-y-1.5">
                        {[
                          { key: "yourName", name: "Your Name", task: "CEO Integration", time: "6h", status: "🟡" },
                        ].map((emp, i) => (
                          <motion.div
                            key={i}
                            onClick={() => setSelectedEmployee(emp.key)}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center justify-between text-xs p-1.5 rounded cursor-pointer transition-all"
                            style={{ background: `${activeSolution.accentColor}05` }}
                          >
                            <div className="flex items-center gap-1 flex-1 min-w-0">
                              <span>{emp.status}</span>
                              <div className="min-w-0">
                                <div className="text-xs font-semibold truncate" style={{ color: "#111827" }}>{emp.name}</div>
                                <div className="text-xs truncate" style={{ color: "#6B7280" }}>{emp.task}</div>
                              </div>
                            </div>
                            <div className="text-xs font-semibold ml-1 flex-shrink-0" style={{ color: activeSolution.accentColor }}>{emp.time}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Project & Client Status Panel */}
                    <div className="rounded-lg p-2.5" style={{ background: "#FFFFFF", border: "1px solid #D1D5DB", overflow: "auto" }}>
                      <div className="text-xs font-bold mb-1.5" style={{ color: "#111827" }}>Projects & Clients</div>
                      <div className="space-y-1.5">
                        {[
                          { key: "whatsapp_ai_chatbot", proj: "WhatsApp AI Chatbot", client: "Steel Company", progress: 85, color: "#10B981" },
                          { key: "company_website", proj: "Company Website", client: "Steel Company", progress: 70, color: activeSolution.accentColor },
                          { key: "dashboard_crm", proj: "Dashboard & CRM", client: "Steel Company", progress: 65, color: activeSolution.accentColor },
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            onClick={() => setSelectedProject(item.key)}
                            whileHover={{ scale: 1.02 }}
                            className="text-xs p-1.5 rounded cursor-pointer transition-all"
                            style={{ background: `${activeSolution.accentColor}05` }}
                          >
                            <div className="flex items-center justify-between mb-0.5">
                              <span className="font-semibold truncate text-xs" style={{ color: "#111827" }}>{item.proj}</span>
                              <span className="text-xs font-bold flex-shrink-0" style={{ color: item.color }}>{item.progress}%</span>
                            </div>
                            <div className="text-xs mb-1" style={{ color: "#6B7280" }}>{item.client}</div>
                            <div className="h-1.5 w-full rounded-full" style={{ background: "#E5E7EB", overflow: "hidden" }}>
                              <div className="h-full rounded-full" style={{ background: item.color, width: `${item.progress}%` }} />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Status Bar */}
                  <div className="flex items-center justify-between text-xs px-2 py-1.5 rounded-lg" style={{ background: "#FFFFFF", border: "1px solid #D1D5DB" }}>
                    <div className="flex items-center gap-2">
                      <span style={{ color: "#6B7280" }}>Today's Progress:</span>
                      <span className="font-bold" style={{ color: activeSolution.accentColor }}>85%</span>
                    </div>
                    <div style={{ color: "#6B7280" }}>CEO & CRM tasks in progress</div>
                  </div>
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

      {/* ==================== MODALS ==================== */}

      {/* Employee Detail Modal */}
      <AnimatePresence>
        {selectedEmployee && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEmployee(null)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 overflow-auto"
              style={{ background: "#F9FAFB" }}
            >
              {/* Header */}
              <div className="sticky top-0 z-50" style={{ background: "#FFFFFF", borderBottom: `2px solid ${activeSolution.accentColor}` }}>
                <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-black font-heading" style={{ color: "#111827" }}>
                      {employeeData[selectedEmployee as keyof typeof employeeData].name}
                    </h1>
                    <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
                      {employeeData[selectedEmployee as keyof typeof employeeData].role}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedEmployee(null)}
                    className="p-2 rounded-lg"
                    style={{ background: "#F3F4F6" }}
                  >
                    <X size={24} style={{ color: "#6B7280" }} />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              {selectedEmployee && employeeData[selectedEmployee as keyof typeof employeeData] && (
                <div className="max-w-7xl mx-auto px-6 py-10">
                  {/* KPI Stats */}
                  <div className="grid grid-cols-4 gap-4 mb-10">
                    {[
                      { label: "Total Hours", value: "130h", change: "↑ Across 18 days", color: activeSolution.accentColor },
                      { label: "Tasks Completed", value: "16", change: "✅ On Schedule", color: "#10B981" },
                      { label: "In Progress", value: "2", change: "85% & 60% complete", color: "#F59E0B" },
                      { label: "Productivity", value: "94%", change: "💯 Excellent", color: activeSolution.accentColor },
                    ].map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-2xl p-6"
                        style={{ background: "#FFFFFF", border: "2px solid #E5E7EB" }}
                      >
                        <div className="text-sm" style={{ color: "#6B7280" }}>{stat.label}</div>
                        <div className="text-4xl font-black mt-2" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-xs mt-3" style={{ color: stat.color }}>{stat.change}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Day-by-Day Details */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="rounded-2xl p-8"
                    style={{ background: "#FFFFFF", border: "2px solid #E5E7EB" }}
                  >
                    <h2 className="text-2xl font-black mb-8" style={{ color: "#111827" }}>Weekly Progress Breakdown</h2>

                    <div className="space-y-6">
                      {employeeData[selectedEmployee as keyof typeof employeeData].days.map((dayInfo, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          className="p-6 rounded-xl"
                          style={{ background: "#F9FAFB", border: `2px solid ${activeSolution.accentColor}20` }}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-white"
                                  style={{ background: activeSolution.accentColor }}
                                >
                                  {dayInfo.day}
                                </div>
                                <div>
                                  <h3 className="text-lg font-black" style={{ color: "#111827" }}>
                                    {dayInfo.task}
                                  </h3>
                                  <p className="text-sm" style={{ color: "#6B7280" }}>
                                    {dayInfo.status}{(dayInfo as any).date ? ` · ${(dayInfo as any).date}` : ""}
                                  </p>
                                  {(dayInfo as any).details && (
                                    <p className="text-xs mt-1" style={{ color: "#9CA3AF" }}>{(dayInfo as any).details}</p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-black" style={{ color: activeSolution.accentColor }}>
                                {dayInfo.time}
                              </div>
                              <div className="text-xs mt-1" style={{ color: "#6B7280" }}>Time Spent</div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold" style={{ color: "#6B7280" }}>Task Completion</span>
                              <span className="text-lg font-black" style={{ color: activeSolution.accentColor }}>
                                {dayInfo.completion}%
                              </span>
                            </div>
                            <div className="h-3 w-full rounded-full" style={{ background: "#E5E7EB", overflow: "hidden" }}>
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${dayInfo.completion}%` }}
                                transition={{ duration: 1, delay: 0.4 + idx * 0.1 }}
                                className="h-full rounded-full"
                                style={{ background: activeSolution.accentColor }}
                              />
                            </div>
                          </div>

                          <div className="mt-4 flex items-center gap-2">
                            {dayInfo.completion === 100 ? (
                              <>
                                <div style={{ color: "#10B981", fontSize: "20px" }}>✅</div>
                                <span className="text-sm font-semibold" style={{ color: "#10B981" }}>Task Completed Successfully</span>
                              </>
                            ) : dayInfo.completion > 0 ? (
                              <>
                                <div style={{ color: "#F59E0B", fontSize: "20px" }}>⏳</div>
                                <span className="text-sm font-semibold" style={{ color: "#F59E0B" }}>In Progress - {dayInfo.completion}% Done</span>
                              </>
                            ) : (
                              <>
                                <div style={{ color: "#6B7280", fontSize: "20px" }}>⏸️</div>
                                <span className="text-sm font-semibold" style={{ color: "#6B7280" }}>Pending Start</span>
                              </>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Summary Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="grid grid-cols-2 gap-6 mt-10"
                  >
                    <div className="rounded-2xl p-8" style={{ background: "#FFFFFF", border: "2px solid #E5E7EB" }}>
                      <h3 className="text-lg font-black mb-6" style={{ color: "#111827" }}>Performance Metrics</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span style={{ color: "#6B7280" }}>Average Daily Hours</span>
                          <span className="font-black text-lg" style={{ color: activeSolution.accentColor }}>5h</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span style={{ color: "#6B7280" }}>Task Completion Rate</span>
                          <span className="font-black text-lg" style={{ color: "#10B981" }}>67%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span style={{ color: "#6B7280" }}>Work Quality</span>
                          <span className="font-black text-lg" style={{ color: "#10B981" }}>Excellent</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl p-8" style={{ background: "#FFFFFF", border: "2px solid #E5E7EB" }}>
                      <h3 className="text-lg font-black mb-6" style={{ color: "#111827" }}>Next Steps</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div style={{ color: "#10B981", fontSize: "20px" }}>→</div>
                          <div>
                            <p className="font-semibold" style={{ color: "#111827" }}>Complete Day 3 Task</p>
                            <p className="text-xs" style={{ color: "#6B7280" }}>Payment Integration - 40% remaining</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div style={{ color: "#F59E0B", fontSize: "20px" }}>→</div>
                          <div>
                            <p className="font-semibold" style={{ color: "#111827" }}>Code Review</p>
                            <p className="text-xs" style={{ color: "#6B7280" }}>Scheduled for tomorrow</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 overflow-auto"
              style={{ background: "#F9FAFB" }}
            >
              {/* Header */}
              <div className="sticky top-0 z-50" style={{ background: "#FFFFFF", borderBottom: `2px solid ${activeSolution.accentColor}` }}>
                <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-black font-heading" style={{ color: "#111827" }}>
                      {projectData[selectedProject as keyof typeof projectData].name}
                    </h1>
                    <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
                      Client: {projectData[selectedProject as keyof typeof projectData].client}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg"
                    style={{ background: "#F3F4F6" }}
                  >
                    <X size={24} style={{ color: "#6B7280" }} />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              {selectedProject && projectData[selectedProject as keyof typeof projectData] && (
                <div className="max-w-7xl mx-auto px-6 py-10">
                  {/* Project Overview Cards */}
                  <div className="grid grid-cols-4 gap-4 mb-10">
                    {[
                      {
                        label: "Progress",
                        value: `${projectData[selectedProject as keyof typeof projectData].progress}%`,
                        subtext: "",
                      },
                      {
                        label: "Budget",
                        value: projectData[selectedProject as keyof typeof projectData].budget,
                        subtext: `Spent: ${projectData[selectedProject as keyof typeof projectData].spent}`,
                      },
                      {
                        label: "Team Size",
                        value: projectData[selectedProject as keyof typeof projectData].teamMembers.length,
                        subtext: "Members assigned",
                      },
                      {
                        label: "Timeline",
                        value: projectData[selectedProject as keyof typeof projectData].startDate,
                        subtext: `to ${projectData[selectedProject as keyof typeof projectData].endDate}`,
                      },
                    ].map((card, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-2xl p-6"
                        style={{ background: "#FFFFFF", border: "2px solid #E5E7EB" }}
                      >
                        <div className="text-sm" style={{ color: "#6B7280" }}>{card.label}</div>
                        <div className="text-3xl font-black mt-2" style={{ color: activeSolution.accentColor }}>
                          {card.value}
                        </div>
                        <div className="text-xs mt-3" style={{ color: "#6B7280" }}>
                          {card.subtext}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Project Description & Milestones */}
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="rounded-2xl p-8"
                      style={{ background: "#FFFFFF", border: "2px solid #E5E7EB" }}
                    >
                      <h3 className="text-lg font-black mb-4" style={{ color: "#111827" }}>About Project</h3>
                      <p className="text-sm mb-6" style={{ color: "#6B7280" }}>
                        {projectData[selectedProject as keyof typeof projectData].description}
                      </p>

                      <h4 className="text-sm font-black mb-4" style={{ color: "#111827" }}>Team Members</h4>
                      <div className="space-y-3">
                        {projectData[selectedProject as keyof typeof projectData].teamMembers.map((member, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 rounded-lg" style={{ background: "#F9FAFB" }}>
                            <div>
                              <div className="font-semibold text-sm" style={{ color: "#111827" }}>{member.name}</div>
                              <div className="text-xs" style={{ color: "#6B7280" }}>{member.role}</div>
                            </div>
                            <div className="text-sm font-bold" style={{ color: activeSolution.accentColor }}>{member.hours}h</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="rounded-2xl p-8"
                      style={{ background: "#FFFFFF", border: "2px solid #E5E7EB" }}
                    >
                      <h3 className="text-lg font-black mb-6" style={{ color: "#111827" }}>Project Milestones</h3>
                      <div className="space-y-3">
                        {projectData[selectedProject as keyof typeof projectData].milestones.map((milestone, idx) => (
                          <div key={idx} className="p-4 rounded-lg" style={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}>
                            <div className="flex items-center justify-between mb-2">
                              <div className="font-semibold text-sm" style={{ color: "#111827" }}>{milestone.name}</div>
                              <div className="text-xs font-bold" style={{ color: activeSolution.accentColor }}>{milestone.completion}%</div>
                            </div>
                            <div className="h-2 w-full rounded-full mb-2" style={{ background: "#E5E7EB", overflow: "hidden" }}>
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${milestone.completion}%` }}
                                transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                                className="h-full rounded-full"
                                style={{ background: activeSolution.accentColor }}
                              />
                            </div>
                            <div className="text-xs" style={{ color: "#6B7280" }}>{milestone.status}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Status Summary */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="rounded-2xl p-8"
                    style={{ background: "#FFFFFF", border: "2px solid #E5E7EB" }}
                  >
                    <h3 className="text-lg font-black mb-6" style={{ color: "#111827" }}>Project Status Summary</h3>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-black" style={{ color: "#10B981" }}>
                          {projectData[selectedProject as keyof typeof projectData].milestones.filter((m) => m.completion === 100).length}
                        </div>
                        <div className="text-sm mt-2" style={{ color: "#6B7280" }}>Milestones Completed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black" style={{ color: "#F59E0B" }}>
                          {projectData[selectedProject as keyof typeof projectData].milestones.filter((m) => m.completion > 0 && m.completion < 100).length}
                        </div>
                        <div className="text-sm mt-2" style={{ color: "#6B7280" }}>In Progress</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black" style={{ color: "#6B7280" }}>
                          {projectData[selectedProject as keyof typeof projectData].milestones.filter((m) => m.completion === 0).length}
                        </div>
                        <div className="text-sm mt-2" style={{ color: "#6B7280" }}>Pending</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Full Screen Dashboard View */}
      <AnimatePresence>
        {showFullDashboard && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFullDashboard(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 overflow-auto"
              style={{ background: "#F9FAFB" }}
            >
              {/* Header */}
              <div className="sticky top-0 z-50" style={{ background: "#FFFFFF", borderBottom: `3px solid ${activeSolution.accentColor}` }}>
                <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-black font-heading" style={{ color: "#111827" }}>
                      Complete Dashboard
                    </h1>
                    <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
                      Real-time analytics and monitoring
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowFullDashboard(false)}
                    className="p-2 rounded-lg"
                    style={{ background: "#F3F4F6" }}
                  >
                    <X size={24} style={{ color: "#6B7280" }} />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Large KPI Cards */}
                <div className="grid grid-cols-4 gap-6 mb-10">
                  {[
                    { label: "Total Employees", value: "1", change: "↑ Active Developer", color: activeSolution.accentColor },
                    { label: "Active Projects", value: "3", change: "✅ All on schedule", color: activeSolution.accentColor },
                    { label: "Tasks Completed", value: "16", change: "This month", color: "#10B981" },
                    { label: "Pending Tasks", value: "2", change: "Due this week", color: "#F59E0B" },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="rounded-2xl p-8"
                      style={{ background: "#FFFFFF", border: "2px solid #E5E7EB", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                    >
                      <div className="text-sm font-semibold" style={{ color: "#6B7280" }}>{stat.label}</div>
                      <div className="text-5xl font-black mt-4" style={{ color: stat.color }}>{stat.value}</div>
                      <div className="text-xs mt-4" style={{ color: stat.change.includes("↑") || stat.change.includes("✅") ? "#10B981" : "#F59E0B" }}>
                        {stat.change}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-2 gap-8 mb-10">
                  {/* Employee Tasks */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="rounded-2xl p-8"
                    style={{ background: "#FFFFFF", border: "2px solid #E5E7EB" }}
                  >
                    <h2 className="text-2xl font-black mb-6" style={{ color: "#111827" }}>Employee Work Status</h2>
                    <div className="space-y-3">
                      {[
                        { key: "yourName", name: "Your Name", task: "CEO Integration & Ecommerce AI", time: "6h", status: "🟡", progress: 85 },
                      ].map((emp, i) => (
                        <motion.div
                          key={i}
                          onClick={() => {
                            setShowFullDashboard(false);
                            setSelectedEmployee(emp.key);
                          }}
                          whileHover={{ scale: 1.02 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="p-4 rounded-xl cursor-pointer transition-all"
                          style={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{emp.status}</span>
                              <div>
                                <div className="font-black" style={{ color: "#111827" }}>{emp.name}</div>
                                <div className="text-sm" style={{ color: "#6B7280" }}>{emp.task}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-black" style={{ color: activeSolution.accentColor }}>{emp.time}</div>
                              <div className="text-xs" style={{ color: "#6B7280" }}>Time spent</div>
                            </div>
                          </div>
                          <div className="h-2 w-full rounded-full" style={{ background: "#E5E7EB", overflow: "hidden" }}>
                            <div className="h-full rounded-full" style={{ background: activeSolution.accentColor, width: `${emp.progress}%` }} />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Projects */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="rounded-2xl p-8"
                    style={{ background: "#FFFFFF", border: "2px solid #E5E7EB" }}
                  >
                    <h2 className="text-2xl font-black mb-6" style={{ color: "#111827" }}>Project Status</h2>
                    <div className="space-y-3">
                      {[
                        { key: "whatsapp_ai_chatbot", proj: "WhatsApp AI Chatbot", client: "Steel Company", progress: 85, color: "#10B981" },
                        { key: "company_website", proj: "Company Website", client: "Steel Company", progress: 70, color: activeSolution.accentColor },
                        { key: "dashboard_crm", proj: "Dashboard & CRM", client: "Steel Company", progress: 65, color: activeSolution.accentColor },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          onClick={() => {
                            setShowFullDashboard(false);
                            setSelectedProject(item.key);
                          }}
                          whileHover={{ scale: 1.02 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="p-4 rounded-xl cursor-pointer transition-all"
                          style={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <div className="font-black" style={{ color: "#111827" }}>{item.proj}</div>
                              <div className="text-sm" style={{ color: "#6B7280" }}>{item.client}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-black" style={{ color: item.color }}>{item.progress}%</div>
                              <div className="text-xs" style={{ color: "#6B7280" }}>Progress</div>
                            </div>
                          </div>
                          <div className="h-2 w-full rounded-full" style={{ background: "#E5E7EB", overflow: "hidden" }}>
                            <div className="h-full rounded-full" style={{ background: item.color, width: `${item.progress}%` }} />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Performance Metrics */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="rounded-2xl p-8"
                  style={{ background: "#FFFFFF", border: "2px solid #E5E7EB" }}
                >
                  <h2 className="text-2xl font-black mb-8" style={{ color: "#111827" }}>Performance Overview</h2>
                  <div className="grid grid-cols-4 gap-6">
                    {[
                      { metric: "Overall Productivity", value: "94%", color: activeSolution.accentColor },
                      { metric: "Avg Daily Hours", value: "7.2h", color: "#10B981" },
                      { metric: "Tasks at Risk", value: "2", color: "#F59E0B" },
                      { metric: "On-Time Delivery", value: "100%", color: "#10B981" },
                    ].map((item, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-4xl font-black" style={{ color: item.color }}>
                          {item.value}
                        </div>
                        <div className="text-sm mt-3" style={{ color: "#6B7280" }}>
                          {item.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
=======
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
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
