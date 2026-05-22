"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home",      href: "#home" },
  { label: "Services",  href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "About",     href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact",   href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveLink(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          background: scrolled ? "rgba(24, 26, 27, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(45, 49, 52, 0.7)" : "none",
          padding: scrolled ? "10px 0" : "20px 0",
          transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative flex-shrink-0" style={{ width: 42, height: 42 }}>
              <Image src="/logo.png" alt="Yazhsey Technologies" fill className="object-contain" priority />
            </div>
            <div>
              <div className="text-[15px] font-black tracking-tight font-heading" style={{ color: "#E5E7EB" }}>
                Yazh<span className="gradient-text">Sey</span>
              </div>
              <div className="text-[9px] font-semibold tracking-[0.2em] uppercase font-mono" style={{ color: "#9CA3AF" }}>
                Technologies
              </div>
            </div>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.07 * i + 0.2, duration: 0.4 }}
                className="relative px-4 py-2 text-sm font-medium font-body group"
                style={{ color: activeLink === link.href ? "#059669" : "#9CA3AF" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#059669")}
                onMouseLeave={(e) => (e.currentTarget.style.color = activeLink === link.href ? "#059669" : "#9CA3AF")}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full"
                  style={{ background: "#059669", boxShadow: "0 0 8px rgba(5,150,105,0.5)" }}
                  animate={{ width: activeLink === link.href ? "60%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(5,150,105,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:flex items-center gap-2 text-sm font-bold font-body btn-primary"
              style={{ padding: "10px 22px" }}
            >
              <Zap size={13} />
              Get Quote
            </motion.a>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl"
              style={{ background: "#222527", border: "1px solid #2D3134", color: "#059669" }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed inset-x-0 top-[64px] z-40 px-4 py-5 lg:hidden"
            style={{
              background: "rgba(24, 26, 27, 0.97)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid #2D3134",
            }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  className="px-4 py-3 text-sm font-medium rounded-xl font-body"
                  style={{ color: "#9CA3AF" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(5,150,105,0.08)";
                    e.currentTarget.style.color = "#059669";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#9CA3AF";
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-2 flex items-center justify-center gap-2 btn-primary rounded-xl font-body"
                style={{ padding: "12px 20px" }}
              >
                <Zap size={13} />
                Get Quote
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
