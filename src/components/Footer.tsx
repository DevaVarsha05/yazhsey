"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink, Shield, Award } from "lucide-react";

const quickLinks = [
  { label: "Home",      href: "#home" },
  { label: "Services",  href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "About",     href: "#about" },
<<<<<<< HEAD
=======
  { label: "Portfolio", href: "#portfolio" },
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
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
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
<<<<<<< HEAD
    <footer style={{ background: "#E5E7EB" }}>
=======
    <footer style={{ background: "#121415" }}>
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
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
<<<<<<< HEAD
                <Image src="/logo.png" alt="YazhSey Technologies" fill className="object-contain" />
              </div>
              <div>
                <div className="text-base font-black font-heading" style={{ color: "#111827" }}>
=======
                <Image src="/logo.png" alt="Yazhsey Technologies" fill className="object-contain" />
              </div>
              <div>
                <div className="text-base font-black font-heading" style={{ color: "#E5E7EB" }}>
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
                  Yazh<span className="gradient-text">Sey</span>
                </div>
                <div className="text-[9px] tracking-[0.2em] uppercase font-semibold font-mono" style={{ color: "#6B7280" }}>
                  Technologies
                </div>
              </div>
            </div>
<<<<<<< HEAD
            <p className="text-sm leading-relaxed mb-6 font-body" style={{ color: "#4B5563" }}>
=======
            <p className="text-sm leading-relaxed mb-6 font-body" style={{ color: "#6B7280" }}>
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
              Professional IT services and software development founded in Dindigul, Tamil Nadu. Crafting digital excellence for businesses across India.
            </p>
            {/* Legal IDs */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-body">
                <Shield size={12} style={{ color: "#059669", flexShrink: 0 }} />
<<<<<<< HEAD
                <span className="font-semibold" style={{ color: "#4B5563" }}>GST:</span>
=======
                <span className="font-semibold" style={{ color: "#9CA3AF" }}>GST:</span>
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
                <span className="font-mono" style={{ color: "#6B7280" }}>33CGSPK6933J1ZV</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-body">
                <Award size={12} style={{ color: "#059669", flexShrink: 0 }} />
<<<<<<< HEAD
                <span className="font-semibold" style={{ color: "#4B5563" }}>Udyam:</span>
=======
                <span className="font-semibold" style={{ color: "#9CA3AF" }}>Udyam:</span>
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
                <span className="font-mono" style={{ color: "#6B7280" }}>UDYAM-TN-06-0116309</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
<<<<<<< HEAD
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] mb-5 font-body" style={{ color: "#6B7280" }}>
=======
            <h4
              className="text-xs font-bold uppercase tracking-[0.18em] mb-5 font-body"
              style={{ color: "#6B7280" }}
            >
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm font-body text-left transition-colors"
<<<<<<< HEAD
                    style={{ color: "#4B5563" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#059669")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#4B5563")}
=======
                    style={{ color: "#9CA3AF" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#059669")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
<<<<<<< HEAD
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] mb-5 font-body" style={{ color: "#6B7280" }}>
=======
            <h4
              className="text-xs font-bold uppercase tracking-[0.18em] mb-5 font-body"
              style={{ color: "#6B7280" }}
            >
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav("#services")}
                    className="text-sm font-body text-left transition-colors"
<<<<<<< HEAD
                    style={{ color: "#4B5563" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#059669")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#4B5563")}
=======
                    style={{ color: "#9CA3AF" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#059669")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
<<<<<<< HEAD
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] mb-5 font-body" style={{ color: "#6B7280" }}>
=======
            <h4
              className="text-xs font-bold uppercase tracking-[0.18em] mb-5 font-body"
              style={{ color: "#6B7280" }}
            >
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+917373114666"
                className="flex items-start gap-3 text-sm font-body transition-colors"
<<<<<<< HEAD
                style={{ color: "#4B5563" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#059669")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4B5563")}
=======
                style={{ color: "#9CA3AF" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#059669")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
              >
                <Phone size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#059669" }} />
                +91 73731 14666
              </a>
              <a
                href="mailto:yazhseytech@gmail.com"
                className="flex items-start gap-3 text-sm font-body transition-colors"
<<<<<<< HEAD
                style={{ color: "#4B5563" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#059669")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4B5563")}
=======
                style={{ color: "#9CA3AF" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#059669")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
              >
                <Mail size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#059669" }} />
                yazhseytech@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm font-body" style={{ color: "#6B7280" }}>
                <MapPin size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#059669" }} />
                <span>3/37, Karaiyampatti, Vedasandur Block, Nagayakottai, Dindigul, Tamil Nadu — 624706</span>
              </div>
              <a
                href="https://maps.google.com/?q=Nagayakottai+Dindigul+Tamil+Nadu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold font-body transition-colors"
                style={{ color: "#059669" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#047857")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#059669")}
              >
                View on Map <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
<<<<<<< HEAD
        <div className="h-px mb-8" style={{ background: "#D1D5DB" }} />
=======
        <div className="h-px mb-8" style={{ background: "#2D3134" }} />
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf

        {/* Legal Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {[
            { label: "GST Registered",   value: "33CGSPK6933J1ZV",    color: "#059669" },
            { label: "Udyam Certified",  value: "UDYAM-TN-06-0116309", color: "#059669" },
<<<<<<< HEAD
            { label: "Micro Enterprise", value: "Tamil Nadu, India",   color: "#4B5563" },
=======
            { label: "Micro Enterprise", value: "Tamil Nadu, India",   color: "#9CA3AF" },
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
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
<<<<<<< HEAD
          style={{ color: "#9CA3AF" }}
        >
          <p>
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "#4B5563" }}>Ponnusamy Kavivarthini (Proprietorship)</span>
            {" "}· Trading as{" "}
            <span className="gradient-text font-bold">YazhSey Technologies</span>
=======
          style={{ color: "#4B5563" }}
        >
          <p>
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "#9CA3AF" }}>Ponnusamy Kavivarthini (Proprietorship)</span>
            {" "}· Trading as{" "}
            <span className="gradient-text font-bold">Yazhsey Technologies</span>
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
          </p>
          <p className="flex items-center gap-1">
            Crafted with <span style={{ color: "#059669" }}>⚡</span> in Tamil Nadu, India
          </p>
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 651f5d895425374964aef8ac23ca4e7ae1c00ccf
