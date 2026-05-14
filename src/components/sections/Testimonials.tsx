"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Rajesh Kumar", role: "Managing Director", company: "SunTex Textiles, Tirupur", text: "Yazhsey Technologies delivered our ERP system on time and within budget. The attention to detail and personalized service was exceptional. Our operations efficiency increased by 60%.", rating: 5, avatar: "RK", accentColor: "#E11D8A" },
  { name: "Priya Sundaram", role: "Owner", company: "MediCare Clinic, Madurai", text: "Our hospital management system is flawless. The team understood our workflows perfectly and built exactly what we needed. The GST billing integration saved us hours every week.", rating: 5, avatar: "PS", accentColor: "#A3E635" },
  { name: "Karthikeyan S", role: "CEO", company: "AgriLink Solutions, Dindigul", text: "The mobile app they built for us is stunning. Our customers love it. Yazhsey Technologies is responsive, professional, and delivers quality beyond what you expect from a local firm.", rating: 5, avatar: "KS", accentColor: "#FF5E6B" },
  { name: "Meenakshi Rajan", role: "Director", company: "Rajan Wholesale, Salem", text: "The billing software has transformed our business. GST filing that took 2 days now takes 20 minutes. Excellent support and very professional team throughout the project.", rating: 5, avatar: "MR", accentColor: "#E11D8A" },
  { name: "Venkatesh B", role: "Operations Head", company: "BuildRight Constructions, Chennai", text: "Their project management app gave us complete visibility into all our sites. Real-time reports, photo uploads, daily logs — it's everything we asked for and more.", rating: 5, avatar: "VB", accentColor: "#A3E635" },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const dragX = useMotionValue(0);
  const dragXSmooth = useSpring(dragX, { stiffness: 300, damping: 30 });
  const rotateCard = useTransform(dragXSmooth, [-100, 100], [-4, 4]);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x > 50) prev();
    else if (info.offset.x < -50) next();
    dragX.set(0);
  };

  const t = testimonials[current];

  return (
    <section ref={ref} id="testimonials" className="relative py-28 overflow-hidden" style={{ background: "#FAF9F6" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px" style={{ background: "#E5E0D8" }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="pill mb-5 mx-auto" style={{ display: "inline-flex" }}>
            <Star size={12} style={{ color: "#E11D8A", fill: "#E11D8A" }} />
            <span>Client Love</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black" style={{ color: "#111111" }}>
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
              initial={{ opacity: 0, x: 50, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.96 }}
              transition={{ duration: 0.38 }}
              className="p-8 sm:p-12 rounded-3xl cursor-grab active:cursor-grabbing select-none"
              style={{
                background: "#F5F2EB",
                border: `1.5px solid ${t.accentColor}20`,
                boxShadow: `0 4px 40px ${t.accentColor}10`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} style={{ color: "#E11D8A", fill: "#E11D8A" }} />
                ))}
              </div>

              <Quote size={28} className="mb-4" style={{ color: `${t.accentColor}35` }} />

              <p className="text-lg sm:text-xl leading-relaxed mb-8 italic" style={{ color: "#1F1F1F" }}>
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: t.accentColor === "#A3E635" ? "linear-gradient(135deg, #A3E635, #E11D8A)" : "linear-gradient(135deg, #E11D8A, #FF5E6B)" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold" style={{ color: "#111111" }}>{t.name}</div>
                  <div className="text-sm" style={{ color: "#666666" }}>{t.role} · {t.company}</div>
                </div>
              </div>

              <div className="absolute bottom-4 right-6 text-[10px] font-medium" style={{ color: "#E5E0D8" }}>← Drag →</div>
            </motion.div>
          </AnimatePresence>

          {/* Nav */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={prev}
              className="p-3 rounded-full transition-all"
              style={{ background: "#F5F2EB", border: "1px solid #E5E0D8", color: "#666666" }}
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
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background: i === current ? "#E11D8A" : "#E5E0D8",
                  }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={next}
              className="p-3 rounded-full transition-all"
              style={{ background: "#F5F2EB", border: "1px solid #E5E0D8", color: "#666666" }}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
