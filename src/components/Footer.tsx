"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink, Shield, Award, X } from "lucide-react";
import { useState } from "react";

const quickLinks = [
  { label: "Home",      href: "#home" },
  { label: "Services",  href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "About",     href: "#about" },
  { label: "Contact",   href: "#contact" },
];

const services = [
  "Website Development",
  "Mobile App Development",
  "Custom Software",
  "CRM & ERP Solutions",
  "Billing & Inventory Software",
  "IT Consulting",
];

export default function Footer() {
  const [showMapModal, setShowMapModal] = useState(false);

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <footer 
        style={{ 
          background: "linear-gradient(135deg, rgba(229, 231, 235, 0.95) 0%, rgba(209, 213, 219, 0.95) 100%)",
          backgroundImage: "url('/footer-bg.jpg')", // Change to your actual background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative",
        }}
      >
        {/* Background overlay for better text readability */}
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(229, 231, 235, 0.92) 0%, rgba(209, 213, 219, 0.92) 100%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Top Accent Line */}
          <div
            className="h-[1px]"
            style={{ background: "linear-gradient(90deg, transparent, #059669, transparent)" }}
          />

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

              {/* Brand Column */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="relative w-11 h-11 flex-shrink-0">
                    <Image src="/logo.png" alt="YazhSey Technologies" fill className="object-contain" />
                  </div>
                  <div>
                    <div className="text-base font-black font-heading" style={{ color: "#111827" }}>
                      Yazh<span className="gradient-text">Sey</span>
                    </div>
                    <div className="text-[9px] tracking-[0.2em] uppercase font-semibold font-mono" style={{ color: "#6B7280" }}>
                      Technologies
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-6 font-body" style={{ color: "#4B5563" }}>
                  Professional IT services and software development founded in Dindigul, Tamil Nadu. Crafting digital excellence for businesses across India.
                </p>
                {/* Legal IDs */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-body">
                    <Shield size={12} style={{ color: "#059669", flexShrink: 0 }} />
                    <span className="font-semibold" style={{ color: "#4B5563" }}>GST:</span>
                    <span className="font-mono" style={{ color: "#6B7280" }}>33CGSPK6933J1ZV</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-body">
                    <Award size={12} style={{ color: "#059669", flexShrink: 0 }} />
                    <span className="font-semibold" style={{ color: "#4B5563" }}>Udyam:</span>
                    <span className="font-mono" style={{ color: "#6B7280" }}>UDYAM-TN-06-0116309</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] mb-5 font-body" style={{ color: "#6B7280" }}>
                  Quick Links
                </h4>
                <ul className="space-y-2.5">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <button
                        onClick={() => handleNav(link.href)}
                        className="text-sm font-body text-left transition-colors"
                        style={{ color: "#4B5563" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#059669")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#4B5563")}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] mb-5 font-body" style={{ color: "#6B7280" }}>
                  Services
                </h4>
                <ul className="space-y-2.5">
                  {services.map((s) => (
                    <li key={s}>
                      <button
                        onClick={() => handleNav("#services")}
                        className="text-sm font-body text-left transition-colors"
                        style={{ color: "#4B5563" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#059669")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#4B5563")}
                      >
                        {s}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.18em] mb-5 font-body" style={{ color: "#6B7280" }}>
                  Contact Us
                </h4>
                <div className="space-y-4">
                  <a
                    href="tel:+917373114666"
                    className="flex items-start gap-3 text-sm font-body transition-colors"
                    style={{ color: "#4B5563" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#059669")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#4B5563")}
                  >
                    <Phone size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#059669" }} />
                    +91 73731 14666
                  </a>
                  <a
                    href="mailto:YazhSeytech@gmail.com"
                    className="flex items-start gap-3 text-sm font-body transition-colors"
                    style={{ color: "#4B5563" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#059669")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#4B5563")}
                  >
                    <Mail size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#059669" }} />
                    YazhSeytech@gmail.com
                  </a>
                  <div className="flex items-start gap-3 text-sm font-body" style={{ color: "#6B7280" }}>
                    <MapPin size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#059669" }} />
                    <span>3/37, Karaiyampatti, Vedasandur Block, Nagayakottai, Dindigul, Tamil Nadu — 624706</span>
                  </div>
                  <button
                    onClick={() => setShowMapModal(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold font-body transition-colors cursor-pointer border-0 bg-none p-0"
                    style={{ color: "#059669" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#047857")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#059669")}
                  >
                    View on Map <ExternalLink size={10} />
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px mb-8" style={{ background: "#D1D5DB" }} />

            {/* Legal Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { label: "GST Registered",   value: "33CGSPK6933J1ZV",    color: "#059669" },
                { label: "Udyam Certified",  value: "UDYAM-TN-06-0116309", color: "#059669" },
                { label: "Micro Enterprise", value: "Tamil Nadu, India",   color: "#4B5563" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-body"
                  style={{
                    border: `1px solid ${badge.color}30`,
                    background: `${badge.color}08`,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: badge.color }} />
                  <span className="font-semibold" style={{ color: badge.color }}>{badge.label}:</span>
                  <span className="font-mono" style={{ color: "#6B7280" }}>{badge.value}</span>
                </div>
              ))}
            </div>

            {/* Bottom Bar */}
            <div
              className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body"
              style={{ color: "#9CA3AF" }}
            >
              <p>
                © {new Date().getFullYear()}{" "}
                <span style={{ color: "#4B5563" }}>Ponnusamy Kavivarthini (Proprietorship)</span>
                {" "}· Trading as{" "}
                <span className="gradient-text font-bold">YazhSey Technologies</span>
              </p>
              <p className="flex items-center gap-1">
                Crafted with <span style={{ color: "#059669" }}>⚡</span> in Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Map Modal */}
      {showMapModal && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "16px",
          }}
          onClick={() => setShowMapModal(false)}
        >
          <div 
            style={{
              background: "white",
              borderRadius: "12px",
              width: "100%",
              maxWidth: "800px",
              height: "90vh",
              maxHeight: "600px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div 
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px",
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "600", color: "#111827" }}>
                YazhSey Technologies Location
              </h3>
              <button
                onClick={() => setShowMapModal(false)}
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={24} color="#6B7280" />
              </button>
            </div>

            {/* Map Container */}
            <div style={{ flex: 1, overflow: "hidden" }}>
              <iframe
                width="100%"
                height="100%"
                style={{ border: "none" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.8765432109876!2d77.4567!3d10.6789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d8c0000001%3A0x1234567890abcdef!2sYazhSey%20Technologies!5e0!3m2!1sen!2sin!4v1234567890123"
              ></iframe>
            </div>

            {/* Modal Footer */}
            <div 
              style={{
                padding: "12px 16px",
                borderTop: "1px solid #E5E7EB",
                background: "#F9FAFB",
              }}
            >
              <a
                href="https://maps.google.com/?q=Nagayakottai+Dindigul+Tamil+Nadu"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  color: "#059669",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#047857")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#059669")}
              >
                Open in Google Maps <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
