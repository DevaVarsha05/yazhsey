"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { Globe, Smartphone, Code2, BarChart3, FileText, Settings, MessageCircle, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const services = [
  { id: "website-development", icon: Globe, title: "Website Development", description: "Blazing-fast, SEO-optimized websites and web apps with AI-powered personalization and intelligent chatbots, built with modern technology stacks.", accentColor: "#059669", tags: ["Next.js", "React", "SEO", "AI", "Responsive"], image: "/webdev.webp" },
  { id: "mobile-app-development", icon: Smartphone, title: "Mobile App Development", description: "Native-feel iOS & Android apps with AI features like voice recognition, predictive recommendations, and intelligent automation.  offline-ready architecture.", accentColor: "#059669", tags: ["Flutter", "iOS", "Android", "AI", "Cross-platform"], image: "/mobileapp.webp" },
  { id: "custom-software-development", icon: Code2, title: "Custom Software Development", description: "Tailor-made software solutions with AI integration for automation and intelligent decision-making. Engineered to solve your unique business challenges with scalable and  secure",accentColor: "#059669", tags: ["Python", "Node.js", "AI", "Microservices", "REST APIs"], image: "/customerdev.webp" },
  { id: "crm-solutions", icon: BarChart3, title: "CRM Solutions", description: "End-to-end Customer Relationship Management systems to streamline your sales pipeline, automate follow-ups, and gain deep client insights.", tags: ["CRM", "Automation", "Analytics", "WhatsApp"], image: "/crmimage.webp" },
  { id: "erp-systems", icon: Settings, title: "ERP Systems", description:"Comprehensive Enterprise Resource Planning platforms connecting Finance, HR, Inventory, and Operations in a single unified workflow.",  accentColor: "#059669", tags: ["ERP", "Finance",  "HR", "Multi-branch"], image: "/ERPimg.webp" },
  { id: "billing-inventory-software", icon: FileText, title: "Billing & Inventory Software", description: "AI-powered GST-compliant billing, invoicing, and inventory management with smart demand forecasting and automated stock optimization. ",accentColor: "#059669", tags: ["GST", "Invoicing", "AI", "Inventory", "E-Invoice"], image: "/billing.webp" },
  { id: "whatsapp-ai-bot", icon: MessageCircle, title: "WhatsApp AI Bot", description: "Intelligent WhatsApp chatbots to automate customer support, lead generation, and order management. AI-powered conversations that convert, scale, and engage your audience 24/7.", accentColor: "#059669", tags: ["WhatsApp API", "Chatbot", "AI", "Automation"], image: "/whatsappchatbot.webp" },
];


function ServiceCard({ service, index, inView }: { service: typeof services[0]; index: number; inView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
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
      id={service.id}
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
      whileHover={{ scale: 1.02, y: -8 }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden transition-all duration-300 h-64 scroll-mt-24 rounded-2xl`}
    >
      {/* Neon Gradient Border Outline */}
      <div
        className="absolute -inset-[1.5px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)`,
        }}
      />

      {/* Neon Glow Effect on Hover */}
      <div
        className="absolute -inset-[1.5px] rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-lg pointer-events-none"
        style={{
          background: `linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)`,
          filter: "blur(10px)",
        }}
      />

      {/* Inner Border */}
      <div
        className="absolute inset-0 border rounded-2xl pointer-events-none transition-all duration-300"
        style={{
          borderColor: isHovered ? "#059669" : "#A7F3D0",
          boxShadow: isHovered ? "0 24px 48px rgba(6, 79, 59, 0.16)" : "0 8px 20px rgba(6, 79, 59, 0.08)",
        }}
      />
      {/* Background Image - Full Cover */}
      <div
        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
        style={{ backgroundImage: `url('${service.image}')` }}
      />

      {/* Dark Overlay - Transparent Black */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/65 transition-all duration-300" />

      {/* Gradient Overlay on Hover */}
 <motion.div 
  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" 
  style={{ 
    background: backgroundStyle, // Munaadi define panna backgroundStyle use pannunga
    filter: "blur(20px)" 
  }} 
/>

      {/* Content Container - Positioned Absolutely */}
      <div className="absolute inset-0 p-7 flex flex-col justify-between relative z-10">
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-xl backdrop-blur-sm" style={{ background: `${service.accentColor}20`, border: `1px solid ${service.accentColor}40` }}>
            <Icon size={20} style={{ color: "#ffffff" }} />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2 text-white">{service.title}</h3>
          <p className="text-sm leading-relaxed mb-4 text-gray-100">{service.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {service.tags.map((tag) => (
              <span key={tag} className="text-[10px] px-2 py-1 rounded-md font-medium font-mono backdrop-blur-sm" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)", color: "#ffffff" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Border Accent */}
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
      className="relative py-28 overflow-hidden bg-[#D0EDD7]/30 backdrop-blur-sm"
      style={{ position: "relative" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "#A7F3D0" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "#A7F3D0" }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(5,150,105,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }} className="mb-16">
          <div className="pill mb-5">
            <Code2 size={12} style={{ color: "#059669" }} />
            <span>What We Offer</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
            <h2 className="text-3xl sm:text-5xl font-black leading-tight font-heading" style={{ color: "#064E3B" }}>
              Services That<br />
              <span className="gradient-text">Drive Growth</span>
            </h2>
            <p className="sm:max-w-xs text-sm leading-relaxed font-body" style={{ color: "#065F46" }}>
              From ideation to deployment, complete technology solutions that power your business forward across India.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}