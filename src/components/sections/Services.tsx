"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { Globe, Smartphone, Code2, BarChart3, FileText, Settings, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", description: "Blazing-fast, SEO-optimized websites and web apps. From elegant landing pages to enterprise portals, built with modern technology stacks.", accentColor: "#059669", tags: ["Next.js", "React", "SEO", "Responsive"] },
  { icon: Smartphone, title: "Mobile App Development", description: "Native-feel iOS & Android apps built with Flutter or React Native. Beautiful interfaces, seamless performance, offline-ready architecture.", accentColor: "#059669", tags: ["Flutter", "iOS", "Android", "Cross-platform"] },
  { icon: Code2, title: "Custom Software Development", description: "Tailor-made software solutions engineered to solve your unique business challenges. Scalable, secure, and thoroughly documented.", accentColor: "#059669", tags: ["Python", "Node.js", "Microservices", "REST APIs"] },
  { icon: BarChart3, title: "CRM Solutions", description: "End-to-end Customer Relationship Management systems to streamline your sales pipeline, automate follow-ups, and gain deep client insights.", accentColor: "#059669", tags: ["CRM", "Automation", "Analytics", "WhatsApp"] },
  { icon: Settings, title: "ERP Systems", description: "Comprehensive Enterprise Resource Planning platforms connecting Finance, HR, Inventory, and Operations in a single unified workflow.", accentColor: "#059669", tags: ["ERP", "Finance", "HR", "Multi-branch"] },
  { icon: FileText, title: "Billing & Inventory Software", description: "GST-compliant billing, invoicing, and inventory management systems purpose-built for retail, wholesale, and manufacturing businesses.", accentColor: "#059669", tags: ["GST", "Invoicing", "Inventory", "E-Invoice"] },
];

function ServiceCard({ service, index, inView }: { service: typeof services[0]; index: number; inView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const backgroundStyle = useTransform(
    [mouseX, mouseY],
    ([latestX, latestY]) => `radial-gradient(250px circle at ${latestX}px ${latestY}px, ${service.accentColor}10, transparent 80%)`
  );

  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
      whileHover={{ 
        scale: 1.02, 
        y: -5, 
        boxShadow: `0 15px 30px ${service.accentColor}20` 
      }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      className="group relative p-7 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300"
      style={{
        background: "#FFFFFF",
        border: "1px solid #D1D5DB",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${service.accentColor}50`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#D1D5DB";
      }}
    >
      {/* Dynamic Cursor Spotlight */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: backgroundStyle }}
      />

      <div className="flex items-start justify-between mb-5 relative z-10">
        <div className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110" style={{ background: `${service.accentColor}12`, border: `1px solid ${service.accentColor}20` }}>
          <Icon size={20} style={{ color: service.accentColor }} />
        </div>
        <div className="p-2 rounded-lg opacity-0 scale-70 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" style={{ background: `${service.accentColor}15`, color: service.accentColor }}>
          <ArrowUpRight size={14} />
        </div>
      </div>

      <h3 className="text-base font-bold mb-2.5 font-heading relative z-10" style={{ color: "#111827" }}>
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed mb-5 font-body relative z-10" style={{ color: "#4B5563" }}>
        {service.description}
      </p>

      <div className="flex flex-wrap gap-1.5 relative z-10">
        {service.tags.map((tag) => (
          <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-md font-medium font-mono" style={{ background: "#F3F4F6", border: "1px solid #D1D5DB", color: "#6B7280" }}>
            {tag}
          </span>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ background: `linear-gradient(90deg, ${service.accentColor}, transparent)` }} />
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-28 overflow-hidden"
      style={{ background: "#064E3B", position: "relative" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "#D1D5DB" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "#D1D5DB" }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(5,150,105,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }} className="mb-16">
          <div className="pill mb-5">
            <Code2 size={12} style={{ color: "#059669" }} />
            <span>What We Offer</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
            <h2 className="text-3xl sm:text-5xl font-black leading-tight font-heading" style={{ color: "#111827" }}>
              Services That<br />
              <span className="gradient-text">Drive Growth</span>
            </h2>
            <p className="sm:max-w-xs text-sm leading-relaxed font-body" style={{ color: "#4B5563" }}>
              From ideation to deployment, complete technology solutions that power your business forward across India.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
