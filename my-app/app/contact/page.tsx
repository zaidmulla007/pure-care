"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaPaperPlane,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

const contactInfo = [
  {
    icon: FaPhoneAlt,
    title: "Phone",
    details: ["+971 58 636 8849", "+971 52 948 8821"],
    link: "tel:+971586368849",
    color: "from-blue-primary to-blue-dark",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    details: ["+971 58 636 8849"],
    link: "https://wa.me/971586368849",
    color: "from-green-500 to-green-600",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    details: ["purecareautoacs@gmail.com"],
    link: "mailto:purecareautoacs@gmail.com",
    color: "from-red-primary to-red-dark",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    details: ["6 Sheikh Sultan, Bin Saqr", "Al Qasimi St, Sharjah"],
    link: "https://maps.google.com/?q=6+Sheikh+Sultan+Bin+Saqr+Al+Qasimi+Street+Sharjah+UAE",
    color: "from-amber-500 to-amber-700",
  },
];

const businessHours = [
  { day: "Saturday - Thursday", time: "8:00 AM - 10:00 PM" },
  { day: "Friday", time: "2:00 PM - 10:00 PM" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi Pure Care! I'm ${formData.name}.%0A%0AService: ${formData.service}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/971586368849?text=${whatsappMessage}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(79,195,247,0.12),_transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-primary/10 border border-blue-primary/20 text-blue-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              Contact <span className="gradient-text">Pure Care</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
              Ready to transform your vehicle? Reach out to us for a free consultation
              and quote. We&apos;re here to help you get the best care for your car.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-6 sm:py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {contactInfo.map((info, i) => (
              <AnimatedSection key={info.title} delay={i * 0.1} className="h-full">
                <motion.a
                  href={info.link}
                  target={info.title === "WhatsApp" || info.title === "Location" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="h-full flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-primary/30 transition-all text-center group min-h-[160px] sm:min-h-[180px] md:min-h-[200px]"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4`}>
                    <info.icon className="text-base sm:text-lg md:text-xl text-white" />
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{info.title}</h3>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-gray-400 text-[10px] sm:text-xs md:text-sm break-all sm:break-normal">
                      {detail}
                    </p>
                  ))}
                </motion.a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <div className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-1 sm:mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm mb-5 sm:mb-8">
                  Fill out the form below and we&apos;ll get back to you via WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5">
                  <div>
                    <label className="block text-gray-300 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-primary/50 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                    <div>
                      <label className="block text-gray-300 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-primary/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-primary/50 transition-colors"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-primary/50 transition-colors"
                    >
                      <option value="" className="bg-gray-900">Select a service</option>
                      <option value="Car Tinting" className="bg-gray-900">Car Tinting</option>
                      <option value="Wrapping" className="bg-gray-900">Wrapping</option>
                      <option value="Car Polish" className="bg-gray-900">Car Polish</option>
                      <option value="Ceramic Coating" className="bg-gray-900">Ceramic Coating</option>
                      <option value="PPF" className="bg-gray-900">PPF (Paint Protection Film)</option>
                      <option value="Graphene Coating" className="bg-gray-900">Graphene Coating</option>
                      <option value="Car Detailing" className="bg-gray-900">Car Detailing</option>
                      <option value="Car Accessories" className="bg-gray-900">Car Accessories</option>
                      <option value="Seat Cover" className="bg-gray-900">Seat Cover & Upholstery</option>
                      <option value="Carpet Flooring" className="bg-gray-900">Carpet Flooring (3D/5D)</option>
                      <option value="Ceiling" className="bg-gray-900">Ceiling</option>
                      <option value="Plastic Flooring" className="bg-gray-900">Plastic Flooring</option>
                      <option value="Other" className="bg-gray-900">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={15}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-primary/50 transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-white text-sm sm:text-lg flex items-center justify-center gap-2 transition-all min-h-[44px] ${
                      submitted
                        ? "bg-green-500"
                        : "bg-gradient-to-r from-blue-primary to-blue-dark hover:shadow-lg hover:shadow-blue-primary/30"
                    }`}
                  >
                    {submitted ? (
                      "Message Sent!"
                    ) : (
                      <>
                       Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>

            {/* Map & Info */}
            <AnimatedSection direction="right">
              <div className="space-y-4 sm:space-y-6">
                {/* Map */}
                <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.06] h-48 sm:h-64 md:h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.0!2d55.38!3d25.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIxJzAwLjAiTiA1NcKwMjInNDguMCJF!5e0!3m2!1sen!2sae!4v1600000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Pure Care Location"
                  />
                </div>

                {/* Business Hours */}
                <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <FaClock className="text-blue-primary text-base sm:text-lg" />
                    <h3 className="text-white font-bold text-base sm:text-lg">Business Hours</h3>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {businessHours.map((schedule) => (
                      <div
                        key={schedule.day}
                        className="flex justify-between items-center text-xs sm:text-sm"
                      >
                        <span className="text-gray-400">{schedule.day}</span>
                        <span className="text-blue-primary font-medium">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Owner Card */}
                <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-primary/10 to-red-primary/10 border border-white/[0.06]">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-0.5 sm:mb-1">Siyad Abdulla</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">Founder & CEO, Pure Care Auto Accessories</p>
                  <div className="space-y-1.5 sm:space-y-2">
                    <a href="tel:+971586368849" className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm hover:text-blue-primary transition-colors min-h-[36px] sm:min-h-0">
                      <FaPhoneAlt className="text-blue-primary shrink-0" /> +971 58 636 8849
                    </a>
                    <a href="tel:+971529488821" className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm hover:text-blue-primary transition-colors min-h-[36px] sm:min-h-0">
                      <FaPhoneAlt className="text-blue-primary shrink-0" /> +971 52 948 8821
                    </a>
                    <a href="mailto:purecareautoacs@gmail.com" className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm hover:text-blue-primary transition-colors break-all min-h-[36px] sm:min-h-0">
                      <FaEnvelope className="text-blue-primary shrink-0" /> purecareautoacs@gmail.com
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Follow Us</h3>
                  <div className="flex gap-2 sm:gap-3">
                    {[
                      { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/971586368849", color: "hover:bg-green-500/10 hover:border-green-500/50 hover:text-green-400" },
                      { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com", color: "hover:bg-pink-500/10 hover:border-pink-500/50 hover:text-pink-400" },
                      { icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com", color: "hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-400" },
                      { icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com", color: "hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-400" },
                      { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com", color: "hover:bg-blue-600/10 hover:border-blue-600/50 hover:text-blue-300" },
                      { icon: FaTiktok, label: "TikTok", href: "https://www.tiktok.com", color: "hover:bg-white/10 hover:border-white/50 hover:text-white" },
                    ].map(({ icon: Icon, label, href, color }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all ${color}`}
                        title={label}
                      >
                        <Icon className="text-sm sm:text-lg" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
