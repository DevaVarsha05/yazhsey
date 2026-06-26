"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Globe, Smartphone, Code2, BarChart3, FileText, Settings, MessageCircle, Zap, Sparkles } from "lucide-react";

const services = [
  { 
    id: "website-development", 
    icon: Globe, 
    title: "Website Development", 
    description: "Blazing-fast, SEO-optimized websites and web apps with AI-powered personalization and intelligent chatbots, built with modern technology stacks.", 
    accentColor: "#059669", 
    tags: ["Next.js", "React", "SEO", "AI", "Responsive"], 
    image: "/webdev.webp",
    fullDescription: "We craft stunning, high-performance websites that rank and convert. From corporate sites to complex web applications, our solutions blend cutting-edge technology with user-centric design."
  },
  { 
    id: "mobile-app-development", 
    icon: Smartphone, 
    title: "Mobile App Development", 
    description: "Native-feel iOS & Android apps with AI features like voice recognition, predictive recommendations, and intelligent automation.", 
    accentColor: "#059669", 
    tags: ["Flutter", "iOS", "Android", "AI", "Cross-platform"], 
    image: "/mobileapp.webp",
    fullDescription: "From concept to App Store, we build mobile apps that users love. With offline capabilities and seamless AI integration for enhanced user experiences."
  },
  { 
    id: "custom-software-development", 
    icon: Code2, 
    title: "Custom Software Development", 
    description: "Tailor-made software solutions with AI integration for automation and intelligent decision-making. Engineered to solve your unique business challenges with scalable and secure architecture.", 
    accentColor: "#059669", 
    tags: ["Python", "Node.js", "AI", "Microservices", "REST APIs"], 
    image: "/customerdev.webp",
    fullDescription: "Enterprise-grade custom software built just for your business. We engineer solutions that scale, automate workflows, and drive measurable ROI."
  },
  { 
    id: "crm-solutions", 
    icon: BarChart3, 
    title: "CRM Solutions", 
    description: "End-to-end Customer Relationship Management systems to streamline your sales pipeline, automate follow-ups, and gain deep client insights.", 
    accentColor: "#059669", 
    tags: ["CRM", "Automation", "Analytics", "WhatsApp"], 
    image: "/crmimage.webp",
    fullDescription: "Manage customer relationships at scale with intelligent CRM systems. Automate pipelines, track every interaction, and close deals faster."
  },
  { 
    id: "erp-systems", 
    icon: Settings, 
    title: "ERP Systems", 
    description: "Comprehensive Enterprise Resource Planning platforms connecting Finance, HR, Inventory, and Operations in a single unified workflow.", 
    accentColor: "#059669", 
    tags: ["ERP", "Finance", "HR", "Multi-branch"], 
    image: "/ERPimg.webp",
    fullDescription: "Unify your enterprise operations with integrated ERP platforms. Real-time visibility across Finance, HR, Inventory, and Operations for smarter decisions."
  },
  { 
    id: "billing-inventory-software", 
    icon: FileText, 
    title: "Billing & Inventory Software", 
    description: "AI-powered GST-compliant billing, invoicing, and inventory management with smart demand forecasting and automated stock optimization.", 
    accentColor: "#059669", 
    tags: ["GST", "Invoicing", "AI", "Inventory", "E-Invoice"], 
    image: "/billing.webp",
    fullDescription: "Smart billing and inventory management compliant with GST and E-Invoice standards. AI-powered forecasting keeps your stock optimized and cash flow healthy."
  },
  { 
    id: "whatsapp-ai-bot", 
    icon: MessageCircle, 
    title: "WhatsApp AI Bot", 
    description: "Intelligent WhatsApp chatbots to automate customer support, lead generation, and order management. AI-powered conversations that convert, scale, and engage your audience 24/7.", 
    accentColor: "#059669", 
    tags: ["WhatsApp API", "Chatbot", "AI", "Automation"], 
    image: "/whatsappchatbot.webp",
    fullDescription: "Engage customers where they already are. Our AI chatbots handle support, generate leads, and manage orders on WhatsApp 24/7."
  },
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const slideInVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const imageZoomVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

function ServiceCard({ service, index, shouldAnimate }: { service: typeof services[0]; index: number; shouldAnimate: boolean }) {
  const isLeft = index % 2 === 0;
  const Icon = service.icon;

  return (
    <motion.div
      className="mb-24 scroll-mt-24"
      id={service.id}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          variants={isLeft ? imageZoomVariants : slideInRightVariants}
          className={`relative w-[350px] h-[350px] rounded-lg overflow-hidden shadow-2xl group ${!isLeft && "lg:order-last"}`}
        >
          {/* Background Image */}
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          
          {/* Icon Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="absolute bottom-6 left-6 p-4 rounded-2xl backdrop-blur-md"
            style={{ background: `${service.accentColor}20`, border: `2px solid ${service.accentColor}` }}
          >
            <Icon size={28} style={{ color: service.accentColor }} />
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={isLeft ? slideInRightVariants : slideInVariants}
          className={`flex flex-col justify-center group ${!isLeft && "lg:order-first"}`}
        >
          {/* Pill Badge */}
          <motion.div
            variants={slideInVariants}
            className="inline-flex items-center gap-2 w-fit mb-4"
            whileHover={{ scale: 1.05, x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={14} style={{ color: service.accentColor }} />
            </motion.div>
            <span className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full" style={{ background: `${service.accentColor}15`, color: service.accentColor }}>
              Service {index + 1}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            variants={slideInVariants}
            className="text-3xl sm:text-4xl font-black mb-4 leading-tight"
            style={{ color: "#064E3B" }}
          >
            {service.title}
          </motion.h3>

          {/* Short Description */}
          <motion.p
            variants={slideInVariants}
            className="text-sm leading-relaxed mb-8 font-medium"
            style={{ color: "#059669" }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ✨ {service.description}
          </motion.p>

          {/* Tools & Tags - Creative Grid with Movement */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap gap-3"
          >
            {service.tags.map((tag, tagIndex) => (
              <motion.div
                key={tag}
                variants={{
                  hidden: { opacity: 0, y: 20, x: -20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    transition: { 
                      duration: 0.6, 
                      delay: 0.3 + tagIndex * 0.08,
                      type: "spring",
                      stiffness: 200
                    },
                  },
                }}
                whileHover={{ 
                  scale: 1.12, 
                  y: -8,
                  rotateZ: 2,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="group relative"
              >
                {/* Gradient Background on Hover */}
                <div
                  className="absolute -inset-[1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${service.accentColor}40, ${service.accentColor}10)`,
                  }}
                />
                
                {/* Outer Glow Effect */}
                <div
                  className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-lg pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${service.accentColor}60, transparent)`,
                  }}
                />
                
                {/* Tag Content */}
                <span
                  className="relative block px-4 py-2 rounded-lg font-semibold text-sm font-mono backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
                  style={{
                    background: `${service.accentColor}12`,
                    border: `1.5px solid ${service.accentColor}30`,
                    color: service.accentColor,
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Zap size={12} className="opacity-70" />
                  </motion.div>
                  {tag}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Arrow */}
          <motion.div
            variants={slideInVariants}
            className="mt-8 flex items-center gap-2"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href={`#${service.id}`}
              className="inline-flex items-center gap-2 font-bold text-lg transition-all duration-300 group/cta hover:gap-3 relative"
              style={{ color: service.accentColor }}
            >
              {/* Underline Glow Effect */}
              <span className="relative">
                Get Started
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover/cta:opacity-100 rounded-full"
                  style={{ background: service.accentColor }}
                  layoutId={`underline-${service.id}`}
                />
              </span>
              <motion.span
                whileHover={{ x: 8, rotateZ: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="inline-block"
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Divider */}
      {index < services.length - 1 && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={shouldAnimate ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 h-px origin-left"
          style={{ background: `linear-gradient(90deg, transparent, #059669, transparent)` }}
        />
      )}
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-32 overflow-hidden bg-[#D0EDD7]/30"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "#A7F3D0" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "#A7F3D0" }} />
      
      {/* Ambient Gradient Orbs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(5,150,105,0.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-40 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(5,150,105,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 mb-5 w-fit">
            <Sparkles size={14} style={{ color: "#059669" }} />
            <span className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full" style={{ background: "#05966915", color: "#059669" }}>
              What We Offer
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
            <h2 className="text-4xl sm:text-5xl font-black leading-tight" style={{ color: "#064E3B" }}>
              Services That<br />
              <span style={{ background: "linear-gradient(135deg, #059669 0%, #047857 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Drive Growth
              </span>
            </h2>
            <p className="sm:max-w-md text-sm sm:text-base leading-relaxed font-semibold" style={{ color: "#065F46" }}>
              From ideation to deployment, complete technology solutions that power your business forward across India.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div>
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
              shouldAnimate={shouldAnimate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}