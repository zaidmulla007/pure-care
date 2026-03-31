"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/why-choose-us", label: "Why Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: FaWhatsapp, href: "https://wa.me/971586368849", label: "WhatsApp", color: "hover:text-green-400", size: "text-lg lg:text-xl" },
  { icon: FaInstagram, href: "https://www.instagram.com", label: "Instagram", color: "hover:text-pink-400", size: "text-lg lg:text-xl" },
  { icon: FaFacebookF, href: "https://www.facebook.com", label: "Facebook", color: "hover:text-blue-400", size: "text-sm lg:text-base" },
  { icon: FaYoutube, href: "https://www.youtube.com", label: "YouTube", color: "hover:text-red-400", size: "text-sm lg:text-base" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com", label: "LinkedIn", color: "hover:text-blue-300", size: "text-sm lg:text-base" },
  { icon: FaTiktok, href: "https://www.tiktok.com", label: "TikTok", color: "hover:text-white", size: "text-sm lg:text-base" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/pure-care-logo-removebg-preview.png"
                alt="Pure Care Auto Accessories"
                width={320}
                height={100}
                className="h-24 sm:h-28 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-2.5 lg:px-3 xl:px-4 py-2 text-xs lg:text-sm font-medium transition-colors group ${
                    isActive ? "text-blue-primary" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-blue-primary transition-all duration-300 ${
                    isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
                  }`} />
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="ml-2 lg:ml-3 px-4 lg:px-5 py-2 bg-gradient-to-r from-blue-primary to-blue-dark text-white text-xs lg:text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-blue-primary/30 transition-all duration-300"
            >
              Get Quote
            </Link>

            {/* Social Icons - Desktop */}
            <div className="flex items-center gap-1 ml-2 lg:ml-3 pl-2 lg:pl-3 border-l border-white/10">
              {socialLinks.map(({ icon: Icon, href, label, color, size }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 flex items-center justify-center text-gray-400 ${color} transition-colors rounded-full hover:bg-white/5`}
                  title={label}
                >
                  <Icon className={size} />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-white p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 overflow-hidden max-h-[calc(100dvh-4rem)]"
          >
            <div className="px-4 py-4 sm:py-6 space-y-1 overflow-y-auto">
              {navLinks.map((link, i) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-base rounded-lg transition-all min-h-[44px] flex items-center ${
                        isActive
                          ? "text-blue-primary bg-blue-primary/5 border-l-2 border-blue-primary"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Social Icons - Mobile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4 border-t border-white/10 mt-3"
              >
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 px-4">Follow Us</p>
                <div className="flex items-center gap-2 px-4">
                  {socialLinks.map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 flex items-center justify-center text-gray-400 ${color} transition-colors rounded-full bg-white/5 border border-white/10`}
                      title={label}
                    >
                      <Icon className="text-sm" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
