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
  { label: "Contact",   href: "#contact" },
];

// 👇 Props add pannirukkom
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
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md"
        style={{
          background: scrolled ? "rgba(255, 255, 255, 0.92)" : "transparent",
          borderBottom: scrolled ? "1px solid #D1D5DB"  : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.2)" : "none",
          padding: scrolled ? "14px 0" : "22px 0",
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
              <Image src="/logo.png" alt="YazhSey Technologies" fill className="object-contain" priority />
            </div>
            <div>
              <div className="text-[15px] font-black tracking-tight font-heading" style={{ color: scrolled ? "#111827" : "#E5E7EB" }}>
                Yazh<span className="gradient-text">Sey</span>
              </div>
              <div className="text-[9px] font-semibold tracking-[0.2em] uppercase font-mono" style={{ color: "#9CA3AF" }}>
                Technologies
              </div>
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link, i) => {
              const isActive = activeLink === link.href;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.5, ease: "easeOut" }}
                  className="relative px-4 py-2 text-sm font-medium font-body transition-all duration-300 rounded-lg cursor-pointer"
                  style={{ color: isActive ? "#059669" : "#9CA3AF" }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#059669";
                      e.currentTarget.style.textShadow = "0 0 6px rgba(5,150,105,0.8)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#9CA3AF";
                      e.currentTarget.style.textShadow = "none";
                    }
                  }}
                >
                  <span className="relative z-10">{link.label}</span>
                  {activeLink === link.href && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full"
                      style={{ 
                        background: "#059669", 
                        boxShadow: "0 0 12px rgba(5,150,105,0.7)" 
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* CTA Action Button */}
          <div className="hidden lg:flex items-center">
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 btn-primary font-body cursor-pointer"
              style={{ padding: "9px 18px", fontSize: "13px", borderRadius: "10px" }}
            >
              <Zap size={13} fill="currentColor" />
              Get Quote
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Trigger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl lg:hidden transition-colors cursor-pointer"
            style={{ background: "#F3F4F6", border: "1px solid #D1D5DB", color: "#111827" }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[68px] left-0 right-0 z-40 lg:hidden px-5 pb-6 pt-4 border-b shadow-2xl backdrop-blur-xl"
            style={{ background: "rgba(255, 255, 255, 0.97)", borderColor: "#2D3134" }}
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
                  className="relative px-4 py-3 text-sm font-medium rounded-xl font-body flex items-center transition-all duration-200 cursor-pointer"
                  style={{ 
                    color: activeLink === link.href ? "#059669" : "#9CA3AF",
                    background: activeLink === link.href ? "rgba(5,150,105,0.06)" : "transparent"
                  }}
                  onMouseEnter={(e) => {
                    if (activeLink !== link.href) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                      e.currentTarget.style.color = "#059669";
                      e.currentTarget.style.textShadow = "0 0 6px rgba(5,150,105,0.6)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeLink !== link.href) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#9CA3AF";
                      e.currentTarget.style.textShadow = "none";
                    }
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
                transition={{ delay: 0.28 }}
                className="mt-3 flex items-center justify-center gap-2 btn-primary rounded-xl font-body text-sm font-semibold cursor-pointer"
                style={{ padding: "12px 20px" }}
              >
                <Zap size={14} fill="currentColor" />
                Get Quote
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}