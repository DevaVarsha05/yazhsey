"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Smartphone, Code2, BarChart3, FileText, Lightbulb, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Blazing-fast, SEO-optimized websites and web apps. From landing pages to enterprise portals, built with the latest tech stack.",
    accentColor: "#E11D8A",
    tags: ["Next.js", "React", "SEO", "Responsive"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native-feel iOS & Android apps built with Flutter or React Native. Beautiful UI, seamless performance, offline-ready.",
    accentColor: "#A3E635",
    tags: ["Flutter", "iOS", "Android", "Cross-platform"],
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailor-made software solutions engineered to solve your unique business challenges. Scalable, secure, and maintainable.",
    accentColor: "#FF5E6B",
    tags: ["Python", "Node.js", "Microservices", "REST APIs"],
  },
  {
    icon: BarChart3,
    title: "CRM & ERP Solutions",
    description: "End-to-end CRM and ERP systems to streamline sales, operations, HR, and finance. Fully customizable for your industry.",
    accentColor: "#E11D8A",
    tags: ["CRM", "ERP", "Automation", "Analytics"],
  },
  {
    icon: FileText,
    title: "Billing & Inventory Software",
    description: "GST-compliant billing, invoicing, and inventory management systems. Built for retail, wholesale, and manufacturing.",
    accentColor: "#A3E635",
    tags: ["GST", "Invoicing", "Inventory", "Reports"],
  },
  {
    icon: Lightbulb,
    title: "Digital Transformation & Consulting",
    description: "Strategic IT consulting to modernize your business. Cloud migration, process automation, and technology roadmaps.",
    accentColor: "#FF5E6B",
    tags: ["Cloud", "Strategy", "Automation", "Advisory"],
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="services" className="relative py-28 overflow-hidden" style={{ background: "#FAF9F6" }}>
      {/* Subtle top/bottom hairlines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px" style={{ background: "#E5E0D8" }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px" style={{ background: "#E5E0D8" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="pill mb-5">
            <Code2 size={12} style={{ color: "#E11D8A" }} />
            <span>What We Offer</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-5xl font-black leading-tight" style={{ color: "#111111" }}>
              Services That<br />
              <span className="gradient-text">Drive Growth</span>
            </h2>
            <p className="sm:max-w-xs text-sm leading-relaxed" style={{ color: "#666666" }}>
              From ideation to deployment, we deliver complete technology solutions that power your business forward.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300"
                style={{
                  background: "#F5F2EB",
                  border: "1px solid #E5E0D8",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${service.accentColor}40`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px ${service.accentColor}12`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#E5E0D8";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Icon row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="p-3 rounded-xl"
                    style={{ background: `${service.accentColor}14` }}
                  >
                    <Icon size={20} style={{ color: service.accentColor }} />
                  </div>
                  <div
                    className="p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background: `${service.accentColor}10`, color: service.accentColor }}
                  >
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base font-bold mb-2.5 transition-colors duration-300" style={{ color: "#111111" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#666666" }}>
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-0.5 rounded-full font-medium"
                      style={{ background: "#FAF9F6", border: "1px solid #E5E0D8", color: "#666666" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
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
