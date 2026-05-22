"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Smartphone, Code2, BarChart3, FileText, Settings, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Blazing-fast, SEO-optimized websites and web apps. From elegant landing pages to enterprise portals, built with modern technology stacks.",
    accentColor: "#059669",
    tags: ["Next.js", "React", "SEO", "Responsive"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native-feel iOS & Android apps built with Flutter or React Native. Beautiful interfaces, seamless performance, offline-ready architecture.",
    accentColor: "#059669",
    tags: ["Flutter", "iOS", "Android", "Cross-platform"],
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailor-made software solutions engineered to solve your unique business challenges. Scalable, secure, and thoroughly documented.",
    accentColor: "#059669",
    tags: ["Python", "Node.js", "Microservices", "REST APIs"],
  },
  {
    icon: BarChart3,
    title: "CRM Solutions",
    description:
      "End-to-end Customer Relationship Management systems to streamline your sales pipeline, automate follow-ups, and gain deep client insights.",
    accentColor: "#059669",
    tags: ["CRM", "Automation", "Analytics", "WhatsApp"],
  },
  {
    icon: Settings,
    title: "ERP Systems",
    description:
      "Comprehensive Enterprise Resource Planning platforms connecting Finance, HR, Inventory, and Operations in a single unified workflow.",
    accentColor: "#059669",
    tags: ["ERP", "Finance", "HR", "Multi-branch"],
  },
  {
    icon: FileText,
    title: "Billing & Inventory Software",
    description:
      "GST-compliant billing, invoicing, and inventory management systems purpose-built for retail, wholesale, and manufacturing businesses.",
    accentColor: "#059669",
    tags: ["GST", "Invoicing", "Inventory", "E-Invoice"],
  },
];

export default function Services() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-28 overflow-hidden"
      style={{ background: "#222527" }}
    >
      {/* Top / bottom dividers */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "#2D3134" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "#2D3134" }} />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(5,150,105,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-16"
        >
          <div className="pill mb-5">
            <Code2 size={12} style={{ color: "#059669" }} />
            <span>What We Offer</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
            <h2 className="text-3xl sm:text-5xl font-black leading-tight font-heading" style={{ color: "#E5E7EB" }}>
              Services That<br />
              <span className="gradient-text">Drive Growth</span>
            </h2>
            <p className="sm:max-w-xs text-sm leading-relaxed font-body" style={{ color: "#9CA3AF" }}>
              From ideation to deployment, complete technology solutions that power your business forward across India.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.09 }}
                whileHover={{ y: -4 }}
                className="group relative p-7 rounded-2xl cursor-pointer overflow-hidden"
                style={{
                  background: "#181A1B",
                  border: "1px solid #2D3134",
                  transition: "all 0.2s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${service.accentColor}40`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow   = `0 0 30px ${service.accentColor}10`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#2D3134";
                  (e.currentTarget as HTMLDivElement).style.boxShadow   = "none";
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 80% 20%, ${service.accentColor}06 0%, transparent 60%)` }}
                />

                {/* Icon row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="p-3 rounded-xl" style={{ background: `${service.accentColor}12`, border: `1px solid ${service.accentColor}20` }}>
                    <Icon size={20} style={{ color: service.accentColor }} />
                  </div>
                  <div
                    className="p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background: `${service.accentColor}15`, color: service.accentColor }}
                  >
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base font-bold mb-2.5 font-heading" style={{ color: "#E5E7EB" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5 font-body" style={{ color: "#9CA3AF" }}>
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-0.5 rounded-md font-medium font-mono"
                      style={{
                        background: "#222527",
                        border: "1px solid #2D3134",
                        color: "#6B7280",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${service.accentColor}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
