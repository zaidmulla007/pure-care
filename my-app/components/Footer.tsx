"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const services = [
  "Car Tinting",
  "Wrapping",
  "Car Polish",
  "Ceramic Coating",
  "PPF",
  "Car Detailing",
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <Link href="/">
              <Image
                src="/pure-care-logo-removebg-preview.png"
                alt="Pure Care Auto Accessories"
                width={300}
                height={90}
                className="h-24 sm:h-28 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium car care and auto accessories services in Sharjah, UAE.
              Transform your vehicle with our expert team and top-quality products.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaWhatsapp, href: "https://wa.me/971586368849" },
                { icon: FaInstagram, href: "https://www.instagram.com" },
                { icon: FaFacebookF, href: "https://www.facebook.com" },
                { icon: FaYoutube, href: "https://www.youtube.com" },
                { icon: FaLinkedinIn, href: "https://www.linkedin.com" },
                { icon: FaTiktok, href: "https://www.tiktok.com" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-primary hover:border-blue-primary/50 transition-colors"
                >
                  <Icon className="text-xs" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-primary transition-colors text-sm flex items-center gap-2 group min-h-[36px] sm:min-h-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-primary/50 group-hover:bg-blue-primary transition-colors shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-blue-primary transition-colors text-sm flex items-center gap-2 group min-h-[36px] sm:min-h-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-primary/50 group-hover:bg-red-primary transition-colors shrink-0" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-primary mt-1 shrink-0" />
                <span className="text-gray-400 text-sm break-words">
                  6 Sheikh Sultan, Bin Saqr Al Qasimi Street, Sharjah - UAE
                </span>
              </li>
              <li>
                <a
                  href="tel:+971586368849"
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-primary transition-colors text-sm min-h-[36px] sm:min-h-0"
                >
                  <FaPhoneAlt className="text-blue-primary shrink-0" />
                  +971 58 636 8849
                </a>
              </li>
              <li>
                <a
                  href="tel:+971529488821"
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-primary transition-colors text-sm min-h-[36px] sm:min-h-0"
                >
                  <FaPhoneAlt className="text-blue-primary shrink-0" />
                  +971 52 948 8821
                </a>
              </li>
              <li>
                <a
                  href="mailto:purecareautoacs@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-primary transition-colors text-sm break-all min-h-[36px] sm:min-h-0"
                >
                  <FaEnvelope className="text-blue-primary shrink-0" />
                  purecareautoacs@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5 flex flex-col items-center gap-3 sm:gap-4 md:flex-row md:justify-between">
          <p className="text-gray-500 text-xs sm:text-sm text-center">
            &copy; {new Date().getFullYear()} Pure Care Auto Accessories TR. L.L.C. All rights reserved. Powered by{" "}
            <a
              href="https://zetacoding.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-primary hover:text-white transition-colors font-medium"
            >
              ZetaCoding
            </a>
          </p>
          <p className="text-gray-600 text-xs text-center">
            Siyad Abdulla | Sharjah, UAE
          </p>
        </div>
      </div>
    </footer>
  );
}
