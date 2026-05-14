"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    border: "1.5px solid #E5E0D8",
    background: "#FAF9F6",
    color: "#1F1F1F",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 73731 14666", href: "tel:+917373114666", color: "#E11D8A" },
    { icon: Mail, label: "Email", value: "yazhseytech@gmail.com", href: "mailto:yazhseytech@gmail.com", color: "#E11D8A" },
    { icon: MapPin, label: "Address", value: "3/37, Karaiyampatti, Nagayakottai, Dindigul, TN - 624706", href: "https://maps.google.com/?q=Nagayakottai+Dindigul+Tamil+Nadu", color: "#A3E635" },
  ];

  return (
    <section ref={ref} id="contact" className="relative py-28 overflow-hidden" style={{ background: "#F5F2EB" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px" style={{ background: "#E5E0D8" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="pill mb-5 mx-auto" style={{ display: "inline-flex" }}>
            <MessageSquare size={12} style={{ color: "#E11D8A" }} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black" style={{ color: "#111111" }}>
            Let&apos;s Build Something <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm" style={{ color: "#666666" }}>
            Ready to transform your business digitally? Tell us about your project and we&apos;ll get back within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-5 p-12 rounded-3xl text-center"
                style={{ background: "#FAF9F6", border: "1.5px solid rgba(163,230,53,0.3)" }}
              >
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 220, delay: 0.15 }}>
                  <CheckCircle2 size={56} style={{ color: "#A3E635" }} />
                </motion.div>
                <h3 className="text-2xl font-black" style={{ color: "#111111" }}>Message Sent!</h3>
                <p className="text-sm" style={{ color: "#666666" }}>Our team will contact you within 24 hours to discuss your project.</p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                  className="btn-secondary"
                >
                  Send Another
                </motion.button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-8 rounded-3xl"
                style={{ background: "#FAF9F6", border: "1px solid #E5E0D8" }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#666666" }}>Your Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Rajesh Kumar" style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#E11D8A")}
                      onBlur={(e) => (e.target.style.borderColor = "#E5E0D8")}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#666666" }}>Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#E11D8A")}
                      onBlur={(e) => (e.target.style.borderColor = "#E5E0D8")}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#666666" }}>Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 9876543210" style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#E11D8A")}
                      onBlur={(e) => (e.target.style.borderColor = "#E5E0D8")}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#666666" }}>Service Needed</label>
                    <select name="service" value={form.service} onChange={handleChange} style={{ ...inputStyle, background: "#FAF9F6" }}>
                      <option value="">Select service...</option>
                      <option value="web">Website Development</option>
                      <option value="mobile">Mobile App</option>
                      <option value="software">Custom Software</option>
                      <option value="crm">CRM / ERP</option>
                      <option value="billing">Billing Software</option>
                      <option value="consulting">IT Consulting</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#666666" }}>Tell Us About Your Project</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required rows={4}
                    placeholder="Describe your project requirements, timeline, budget..."
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) => (e.target.style.borderColor = "#E11D8A")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E0D8")}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 28px rgba(225,29,138,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary justify-center disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                      />
                      Sending...
                    </>
                  ) : (
                    <><Send size={15} />Send Message</>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label === "Address" ? "_blank" : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.32 + i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-5 rounded-2xl transition-all cursor-pointer"
                  style={{ background: "#FAF9F6", border: "1px solid #E5E0D8" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${info.color}30`)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E5E0D8")}
                >
                  <div className="flex-shrink-0 p-2.5 rounded-xl" style={{ background: `${info.color}12` }}>
                    <Icon size={18} style={{ color: info.color }} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-semibold mb-1" style={{ color: "#666666" }}>{info.label}</div>
                    <div className="text-sm font-medium" style={{ color: "#1F1F1F" }}>{info.value}</div>
                  </div>
                </motion.a>
              );
            })}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.55 }}
              className="rounded-2xl overflow-hidden h-48"
              style={{ border: "1px solid #E5E0D8" }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Nagayakottai+Vedasandur+Dindigul+Tamil+Nadu+624706&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Yazhsey Technologies Location"
              />
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.62 }}
              className="p-5 rounded-2xl"
              style={{ background: "#FAF9F6", border: "1px solid #E5E0D8" }}
            >
              <div className="text-[10px] uppercase tracking-widest font-semibold mb-3" style={{ color: "#666666" }}>Business Hours</div>
              <div className="space-y-1.5 text-sm">
                {[
                  { day: "Mon – Fri", hours: "9:00 AM – 7:00 PM", color: "#1F1F1F" },
                  { day: "Saturday", hours: "10:00 AM – 5:00 PM", color: "#1F1F1F" },
                  { day: "Sunday", hours: "Emergency Support Only", color: "#A3E635" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between">
                    <span style={{ color: "#666666" }}>{h.day}</span>
                    <span className="font-semibold" style={{ color: h.color === "#A3E635" ? "#5a7a1a" : h.color }}>{h.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
