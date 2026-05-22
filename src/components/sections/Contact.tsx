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
      style={{ background: "#222527" }}
    >
      {/* Top / bottom dividers */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "#2D3134" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "#2D3134" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          
          {/* Left Column — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="lg:col-span-2"
          >
            <div className="pill mb-5">
              <MessageSquare size={12} style={{ color: "#059669" }} />
              <span>Get In Touch</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black mb-5 font-heading" style={{ color: "#E5E7EB" }}>
              Let&apos;s Build Something <span className="gradient-text">Great.</span>
            </h2>
            
            <p className="text-sm leading-relaxed mb-10 font-body" style={{ color: "#9CA3AF" }}>
              Ready to transform your business? Reach out to discuss your project, request a quote, or simply say hello. We typically respond within 2 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl flex-shrink-0" style={{ background: "#05966915", border: "1px solid #05966925" }}>
                  <Phone size={18} style={{ color: "#059669" }} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1 font-mono" style={{ color: "#6B7280" }}>Call Us</div>
                  <a href="tel:+917373114666" className="text-lg font-bold transition-colors font-heading" style={{ color: "#E5E7EB" }} onMouseEnter={(e) => e.currentTarget.style.color = "#059669"} onMouseLeave={(e) => e.currentTarget.style.color = "#E5E7EB"}>
                    +91 73731 14666
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl flex-shrink-0" style={{ background: "#05966915", border: "1px solid #05966925" }}>
                  <Mail size={18} style={{ color: "#059669" }} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1 font-mono" style={{ color: "#6B7280" }}>Email Us</div>
                  <a href="mailto:yazhseytech@gmail.com" className="text-lg font-bold transition-colors font-heading" style={{ color: "#E5E7EB" }} onMouseEnter={(e) => e.currentTarget.style.color = "#059669"} onMouseLeave={(e) => e.currentTarget.style.color = "#E5E7EB"}>
                    yazhseytech@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl flex-shrink-0" style={{ background: "#05966915", border: "1px solid #05966925" }}>
                  <MapPin size={18} style={{ color: "#059669" }} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1 font-mono" style={{ color: "#6B7280" }}>Visit Us</div>
                  <address className="text-sm leading-relaxed font-body not-italic" style={{ color: "#9CA3AF" }}>
                    3/37, Karaiyampatti, Vedasandur Block<br />
                    Nagayakottai, Dindigul<br />
                    Tamil Nadu — 624706
                  </address>
                  <a href="https://maps.google.com/?q=Nagayakottai+Dindigul+Tamil+Nadu" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold transition-colors font-body" style={{ color: "#059669" }} onMouseEnter={(e) => e.currentTarget.style.color = "#047857"} onMouseLeave={(e) => e.currentTarget.style.color = "#059669"}>
                    Open in Maps <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div
              className="p-6 sm:p-10 rounded-2xl relative overflow-hidden"
              style={{ background: "#181A1B", border: "1px solid #2D3134", boxShadow: "0 10px 40px rgba(0,0,0,0.2)" }}
            >
              {/* Form grid map background */}
              <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#2D3134 1px, transparent 1px)",
                  backgroundSize: "24px 24px"
                }}
              />

              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center py-16 relative z-10"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: "#05966920", border: "1px solid #05966940" }}>
                    <Send size={24} style={{ color: "#059669" }} />
                  </div>
                  <h3 className="text-2xl font-black mb-2 font-heading" style={{ color: "#E5E7EB" }}>Message Sent!</h3>
                  <p className="text-sm font-body mb-6" style={{ color: "#9CA3AF" }}>
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider font-mono" style={{ color: "#9CA3AF" }}>Full Name</label>
                      <input type="text" required placeholder="John Doe" className="input-quantum" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider font-mono" style={{ color: "#9CA3AF" }}>Email Address</label>
                      <input type="email" required placeholder="john@company.com" className="input-quantum" />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider font-mono" style={{ color: "#9CA3AF" }}>Phone Number</label>
                      <input type="tel" required placeholder="+91 98765 43210" className="input-quantum" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider font-mono" style={{ color: "#9CA3AF" }}>Service Required</label>
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
                    <label className="text-[11px] font-bold uppercase tracking-wider font-mono" style={{ color: "#9CA3AF" }}>Project Details</label>
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
                    className="w-full btn-primary justify-center mt-2"
                  >
                    {formStatus === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: "#181A1B", borderTopColor: "transparent" }}></span>
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
