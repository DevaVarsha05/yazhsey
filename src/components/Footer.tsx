"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Website Development",
  "Mobile App Development",
  "Custom Software",
  "CRM & ERP Solutions",
  "Billing Software",
  "IT Consulting",
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#111111", color: "#ffffff" }}>
      {/* Top accent line */}
      <div className="h-[2px]" style={{ background: "linear-gradient(90deg, #E11D8A, #A3E635, #FF5E6B, #E11D8A)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-11 h-11 flex-shrink-0">
                <Image src="/logo.png" alt="Yazhsey Technologies" fill className="object-contain" />
              </div>
              <div>
                <div className="text-base font-black" style={{ color: "#ffffff" }}>
                  Yazh<span className="gradient-text">Sey</span>
                </div>
                <div className="text-[9px] tracking-[0.15em] uppercase font-semibold" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Technologies
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>
              Professional IT services and software development company based in Dindigul, Tamil Nadu.
              Delivering digital excellence to businesses across India.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                <span className="font-semibold" style={{ color: "#E11D8A" }}>GST:</span>
                <span className="font-mono">33CGSPK6933J1ZV</span>
              </div>
              <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                <span className="font-semibold" style={{ color: "#A3E635" }}>Udyam:</span>
                <span className="font-mono">UDYAM-TN-06-0116309</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E11D8A")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav("#services")}
                    className="text-sm transition-colors text-left"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#A3E635")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>Contact</h4>
            <div className="space-y-4">
              <a href="tel:+917373114666" className="flex items-start gap-3 text-sm transition-colors" style={{ color: "rgba(255,255,255,0.55)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E11D8A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
              >
                <Phone size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#E11D8A" }} />
                +91 73731 14666
              </a>
              <a href="mailto:yazhseytech@gmail.com" className="flex items-start gap-3 text-sm transition-colors" style={{ color: "rgba(255,255,255,0.55)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E11D8A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
              >
                <Mail size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#E11D8A" }} />
                yazhseytech@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                <MapPin size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#A3E635" }} />
                3/37, Karaiyampatti, Vedasandur Block, Nagayakottai, Dindigul, Tamil Nadu - 624706
              </div>
              <a
                href="https://maps.google.com/?q=Nagayakottai+Dindigul+Tamil+Nadu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold"
                style={{ color: "#E11D8A" }}
              >
                View on Map <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ background: "rgba(255,255,255,0.08)" }} />

        {/* Legal Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { label: "GST Registered", value: "33CGSPK6933J1ZV", color: "#E11D8A" },
            { label: "Udyam Certified", value: "UDYAM-TN-06-0116309", color: "#A3E635" },
            { label: "Micro Enterprise", value: "Tamil Nadu, India", color: "#FF5E6B" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs"
              style={{
                border: `1px solid ${badge.color}25`,
                background: `${badge.color}10`,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: badge.color }} />
              <span className="font-semibold" style={{ color: badge.color }}>{badge.label}:</span>
              <span className="font-mono" style={{ color: "rgba(255,255,255,0.55)" }}>{badge.value}</span>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          <p>
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "rgba(255,255,255,0.6)" }}>Ponnusamy Kavivarthini (Proprietorship)</span>
            {" "}· Trading as{" "}
            <span className="gradient-text font-bold">Yazhsey Technologies</span>
          </p>
          <p className="flex items-center gap-1">
            Made with <span style={{ color: "#E11D8A" }}>♥</span> in Tamil Nadu, India
          </p>
        </div>
      </div>
    </footer>
  );
}
