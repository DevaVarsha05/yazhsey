"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Phone, Mail, MapPin, MessageSquare, ArrowRight } from "lucide-react";

export default function Contact() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-28 overflow-hidden"
      style={{ background: "#0a2253", position: "relative" }}
    >
      {/* Top / bottom dividers */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "#D1D5DB" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "#D1D5DB" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">

          {/* Left Column — Info (Swipes in from left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <div className="pill mb-5">
              <MessageSquare size={12} style={{ color: "#059669" }} />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black mb-5 font-heading" style={{ color: "#111827" }}>
              Let's Build Something <span className="gradient-text">Great.</span>
            </h2>

            <p className="text-sm leading-relaxed mb-10 font-body" style={{ color: "#4B5563" }}>
              Ready to transform your business? Reach out to discuss your project, request a quote, or simply say hello. We typically respond within 2 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl flex-shrink-0" style={{ background: "#05966912", border: "1px solid #05966925" }}>
                  <Phone size={18} style={{ color: "#059669" }} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1 font-mono" style={{ color: "#9CA3AF" }}>Call Us</div>
                  <a href="tel:+917373114666" className="text-lg font-bold transition-colors font-heading" style={{ color: "#111827" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#059669"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#111827"}>
                    +91 73731 14666
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl flex-shrink-0" style={{ background: "#05966912", border: "1px solid #05966925" }}>
                  <Mail size={18} style={{ color: "#059669" }} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1 font-mono" style={{ color: "#9CA3AF" }}>Email Us</div>
                  <a href="mailto:yazhseytech@gmail.com" className="text-lg font-bold transition-colors font-heading" style={{ color: "#111827" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#059669"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#111827"}>
                    yazhseytech@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl flex-shrink-0" style={{ background: "#05966912", border: "1px solid #05966925" }}>
                  <MapPin size={18} style={{ color: "#059669" }} />
                </div>
                <div>
                  <address className="text-sm leading-relaxed font-body not-italic" style={{ color: "#4B5563" }}>
                    3/37, Karaiyampatti, Vedasandur Block<br />
                    Nagayakottai, Dindigul<br />
                    Tamil Nadu — 624706
                  </address>
                  <a href="https://maps.app.goo.gl/9uK8s9rB4dF5Z8eS7" target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold transition-colors font-body"
                    style={{ color: "#059669" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#047857"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#059669"}>
                    Open in Maps <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Form (Swipes in from right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <div
              className="p-6 sm:p-10 rounded-2xl relative overflow-hidden"
              style={{ background: "#FFFFFF", border: "1px solid #D1D5DB", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
            >
              {/* Dot grid background */}
              <div className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#D1D5DB 1px, transparent 1px)",
                  backgroundSize: "24px 24px"
                }}
              />

              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center py-16 relative z-10"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: "#05966915", border: "1px solid #05966935" }}>
                    <Send size={24} style={{ color: "#059669" }} />
                  </div>
                  <h3 className="text-2xl font-black mb-2 font-heading" style={{ color: "#111827" }}>Message Sent!</h3>
                  <p className="text-sm font-body mb-6" style={{ color: "#4B5563" }}>
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="btn-secondary cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
               <form onSubmit={handleSubmit} className="relative z-10 space-y-5" style={{ background: "#F3F4F6", padding: "32px", borderRadius: "20px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}>
  <div className="grid sm:grid-cols-2 gap-5">
    <div className="space-y-1.5">
      <label className="text-[11px] font-bold uppercase tracking-wider font-mono" style={{ color: "#6B7280" }}>Full Name</label>
      <input type="text" required placeholder="John Doe" className="input-quantum" />
    </div>
    <div className="space-y-1.5">
      <label className="text-[11px] font-bold uppercase tracking-wider font-mono" style={{ color: "#6B7280" }}>Email Address</label>
      <input type="email" required placeholder="john@company.com" className="input-quantum" />
    </div>
  </div>

  <div className="grid sm:grid-cols-2 gap-5">
    <div className="space-y-1.5">
      <label className="text-[11px] font-bold uppercase tracking-wider font-mono" style={{ color: "#6B7280" }}>Phone Number</label>
      <input type="tel" required placeholder="+91 98765 43210" className="input-quantum" />
    </div>
    <div className="space-y-1.5">
      <label className="text-[11px] font-bold uppercase tracking-wider font-mono" style={{ color: "#6B7280" }}>Service Required</label>
      <select required defaultValue="" className="input-quantum appearance-none" style={{ cursor: "pointer" }}>
        <option value="" disabled>Select a service...</option>
        <option value="web">Website Development</option>
        <option value="mobile">Mobile App</option>
        <option value="erp">ERP / CRM Solution</option>
        <option value="billing">Billing Software</option>
        <option value="other">Other Inquiry</option>
      </select>
    </div>
  </div>

  <div className="space-y-1.5">
    <label className="text-[11px] font-bold uppercase tracking-wider font-mono" style={{ color: "#6B7280" }}>Project Details</label>
    <textarea
      required
      placeholder="Tell us about your requirements, timeline, and budget..."
      rows={4}
      className="input-quantum resize-none"
    />
  </div>

  <motion.button
    type="submit"
    disabled={formStatus === "submitting"}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="w-full btn-primary justify-center mt-2 cursor-pointer"
  >
    {formStatus === "submitting" ? (
      <span className="flex items-center gap-2">
        <span className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: "#FFFFFF", borderTopColor: "transparent" }}></span>
        Sending...
      </span>
    ) : (
      <span className="flex items-center gap-2">
        Send Message <Send size={16} />
      </span>
    )}
  </motion.button>
</form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}