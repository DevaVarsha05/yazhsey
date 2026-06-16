"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Managing Director",
    company: "SunTex Textiles, Tirupur",
    text: "YazhSey Technologies delivered our ERP system on time and within budget. The personalized service and attention to detail was exceptional. Our operations efficiency increased by 60% within the first quarter.",
    rating: 5,
    avatar: "RK",
    accentColor: "#059669",
  },
  {
    name: "Priya Sundaram",
    role: "Owner",
    company: "MediCare Clinic, Madurai",
    text: "Our hospital management system is absolutely flawless. The team understood our workflows perfectly and built exactly what we needed. The GST billing integration alone saves us hours every single week.",
    rating: 5,
    avatar: "PS",
    accentColor: "#059669",
  },
  {
    name: "Karthikeyan S",
    role: "CEO",
    company: "AgriLink Solutions, Dindigul",
    text: "The mobile app they built for us is stunning. Our customers love it. YazhSey Technologies is responsive, professional, and delivers a quality that you simply don't expect from a firm of this size.",
    rating: 5,
    avatar: "KS",
    accentColor: "#059669",
  },
  {
    name: "Meenakshi Rajan",
    role: "Director",
    company: "Rajan Wholesale, Salem",
    text: "The billing software has transformed our business completely. GST filing that took 2 days now takes 20 minutes. Excellent post-delivery support and a very professional team throughout.",
    rating: 5,
    avatar: "MR",
    accentColor: "#059669",
  },
  {
    name: "Venkatesh B",
    role: "Operations Head",
    company: "BuildRight Constructions, Chennai",
    text: "Their project management app gave us complete visibility across all our construction sites. Real-time reports, photo uploads, daily logs — it's everything we asked for and considerably more.",
    rating: 5,
    avatar: "VB",
    accentColor: "#059669",
  },
];

export default function Testimonials() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const dragX       = useMotionValue(0);
  const dragXSmooth = useSpring(dragX, { stiffness: 300, damping: 30 });
  const rotateCard  = useTransform(dragXSmooth, [-100, 100], [-3, 3]);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x > 50) prev();
    else if (info.offset.x < -50) next();
    dragX.set(0);
  };

  const t = testimonials[current];

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative py-28 overflow-hidden"
      style={{ background: "#181A1B" }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "#2D3134" }} />

      {/* Ambient blobs */}
      <div
        className="absolute top-1/4 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(5,150,105,0.04) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(5,150,105,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <div className="pill mb-5 mx-auto" style={{ display: "inline-flex" }}>
            <Star size={12} style={{ color: "#059669", fill: "#059669" }} />
            <span>Client Love</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading" style={{ color: "#E5E7EB" }}>
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDrag={(_, info) => dragX.set(info.offset.x)}
              onDragEnd={handleDragEnd}
              style={{ rotate: rotateCard }}
              initial={{ opacity: 0, x: 50, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.97 }}
              transition={{ duration: 0.38 }}
              className="p-8 sm:p-12 rounded-2xl cursor-grab active:cursor-grabbing select-none relative overflow-hidden"
              style={{
                background: "#222527",
                border: `1px solid ${t.accentColor}25`,
                boxShadow: `0 0 32px ${t.accentColor}10`,
              }}
            >
              {/* Decorative tech rings */}
              <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none" style={{ opacity: 0.08 }}>
                <svg viewBox="0 0 128 128" fill="none">
                  <circle cx="128" cy="0" r="80"  stroke={t.accentColor} strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="128" cy="0" r="50"  stroke={t.accentColor} strokeWidth="0.7" />
                  <circle cx="128" cy="0" r="24"  stroke={t.accentColor} strokeWidth="0.5" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} style={{ color: "#059669", fill: "#059669" }} />
                ))}
              </div>

              <Quote size={28} className="mb-4" style={{ color: `${t.accentColor}30` }} />

              <p className="text-lg sm:text-xl leading-relaxed mb-8 font-body" style={{ color: "#E5E7EB" }}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-[#181A1B] font-bold text-sm font-mono"
                  style={{
                    background: "linear-gradient(135deg, #059669, #047857)",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold font-heading" style={{ color: "#E5E7EB" }}>{t.name}</div>
                  <div className="text-sm font-body" style={{ color: "#9CA3AF" }}>
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-6 text-[10px] font-medium font-mono" style={{ color: "#6B7280" }}>
                ← Drag →
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={prev}
              className="p-3 rounded-xl transition-all"
              style={{
                background: "#222527",
                border: "1px solid #2D3134",
                color: "#9CA3AF",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#059669";
                (e.currentTarget as HTMLButtonElement).style.color = "#059669";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#2D3134";
                (e.currentTarget as HTMLButtonElement).style.color = "#9CA3AF";
              }}
            >
              <ChevronLeft size={18} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width:      i === current ? "24px" : "8px",
                    height:     "8px",
                    background: i === current ? "#059669" : "#2D3134",
                  }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={next}
              className="p-3 rounded-xl transition-all"
              style={{
                background: "#222527",
                border: "1px solid #2D3134",
                color: "#9CA3AF",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#059669";
                (e.currentTarget as HTMLButtonElement).style.color = "#059669";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#2D3134";
                (e.currentTarget as HTMLButtonElement).style.color = "#9CA3AF";
              }}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
