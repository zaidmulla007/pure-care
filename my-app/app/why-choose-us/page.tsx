"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaStar,
  FaUsers,
  FaShieldAlt,
  FaTools,
  FaCheckCircle,
  FaArrowRight,
  FaWhatsapp,
  FaPhoneAlt,
  FaAward,
  FaHeart,
  FaClock,
  FaThumbsUp,
  FaCar,
  FaGem,
  FaCertificate,
  FaHandshake,
} from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

const coreStrengths = [
  { icon: FaStar, title: "Premium Quality", desc: "We use only the highest quality materials and products from globally trusted brands like 3M, XPEL, Gtechniq, and more. No compromises, ever.", color: "from-blue-primary to-blue-dark" },
  { icon: FaUsers, title: "Expert Team", desc: "Our skilled technicians have years of hands-on experience in auto care. Each team member is trained in the latest techniques and technologies.", color: "from-purple-500 to-purple-700" },
  { icon: FaShieldAlt, title: "Service Warranty", desc: "All our services come with comprehensive warranty coverage for your complete peace of mind. We stand behind every job we do.", color: "from-red-primary to-red-dark" },
  { icon: FaTools, title: "Latest Technology", desc: "We invest in cutting-edge tools, equipment, and techniques to deliver flawless results that exceed industry standards.", color: "from-emerald-500 to-emerald-700" },
  { icon: FaHeart, title: "Customer First", desc: "Your satisfaction is our top priority. We listen to your needs, provide honest recommendations, and ensure you're delighted with the results.", color: "from-pink-500 to-pink-700" },
  { icon: FaClock, title: "Timely Delivery", desc: "We respect your time. All services are completed within the promised timeframe without compromising on quality or attention to detail.", color: "from-amber-500 to-amber-700" },
  { icon: FaGem, title: "Competitive Pricing", desc: "Premium quality doesn't have to break the bank. We offer the best value for money with transparent pricing and no hidden charges.", color: "from-cyan-500 to-cyan-700" },
  { icon: FaCertificate, title: "Certified Products", desc: "Every product we use is genuine, certified, and sourced directly from authorized distributors to ensure authenticity and performance.", color: "from-indigo-500 to-indigo-700" },
];

const achievements = [
  { value: "2000+", label: "Vehicles Serviced" },
  { value: "10+", label: "Years Experience" },
  { value: "12+", label: "Specialized Services" },
  { value: "1500+", label: "Happy Customers" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "50+", label: "Premium Brands" },
];

const testimonials = [
  {
    name: "Ahmed Al Rashid",
    car: "Mercedes-Benz S-Class",
    text: "Pure Care did an incredible job with the ceramic coating on my S-Class. The car looks better than when I bought it. Highly professional team!",
    rating: 5,
  },
  {
    name: "Khalid Mohammed",
    car: "BMW X5",
    text: "Got my BMW fully wrapped in matte black. The quality of the wrap and the precision of the installation is top-notch. Will definitely come back.",
    rating: 5,
  },
  {
    name: "Fatima Hassan",
    car: "Toyota Land Cruiser",
    text: "The window tinting service was excellent. Great UV protection and the staff explained everything about the different film options. Very professional.",
    rating: 5,
  },
  {
    name: "Omar Sheikh",
    car: "Porsche Cayenne",
    text: "Had PPF installed on my Cayenne. Siyad and his team are true experts. The film is invisible and gives me peace of mind on the road.",
    rating: 5,
  },
];

const process = [
  { step: "01", title: "Consultation", desc: "Share your requirements with us. We'll assess your vehicle and recommend the best services and products for your needs." },
  { step: "02", title: "Inspection", desc: "Our experts thoroughly inspect your vehicle to understand its current condition and plan the perfect treatment approach." },
  { step: "03", title: "Service", desc: "Our skilled technicians carry out the service using premium products and cutting-edge techniques for flawless results." },
  { step: "04", title: "Quality Check", desc: "Every job goes through a rigorous quality check before delivery to ensure it meets our high standards of excellence." },
  { step: "05", title: "Delivery", desc: "Your vehicle is returned in pristine condition with care instructions and warranty documentation for your service." },
];

export default function WhyChooseUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(79,195,247,0.12),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(239,68,68,0.08),_transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-primary/10 border border-blue-primary/20 text-blue-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Why Choose Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              Why <span className="gradient-text">Pure Care</span> Stands Out
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
              We go above and beyond to ensure every vehicle receives the highest standard
              of care and attention. Here&apos;s what makes us Sharjah&apos;s most trusted auto care provider.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-blue-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Our Strengths</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              What Makes Us <span className="gradient-text-blue">Different</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {coreStrengths.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full text-center p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-primary/30 transition-all"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5`}>
                    <item.icon className="text-lg sm:text-xl text-white" />
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements / Stats */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="section-divider mb-12 sm:mb-16 md:mb-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-red-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Our Numbers</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              Achievements That <span className="gradient-text-red">Speak</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {achievements.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-primary mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-[10px] sm:text-xs">{stat.label}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="section-divider mb-12 sm:mb-16 md:mb-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-blue-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">How We Work</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              Our <span className="gradient-text-blue">Process</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
              From consultation to delivery, every step is designed to ensure excellence.
            </p>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-primary via-blue-primary/30 to-transparent hidden sm:block" />
            <div className="space-y-6 sm:space-y-8">
              {process.map((item, i) => (
                <AnimatedSection key={item.step} delay={i * 0.1} direction="left">
                  <div className="flex gap-4 sm:gap-6 items-start">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-primary to-blue-dark flex items-center justify-center shrink-0 relative z-10 text-white font-extrabold text-sm sm:text-lg">
                      {item.step}
                    </div>
                    <div className="flex-1 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                      <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-1 sm:mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="section-divider mb-12 sm:mb-16 md:mb-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-red-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Testimonials</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="h-full p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-primary/20 transition-all"
                >
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <FaStar key={si} className="text-yellow-400 text-xs sm:text-sm" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="text-white font-bold text-sm sm:text-base">{t.name}</p>
                    <p className="text-blue-primary text-xs sm:text-sm">{t.car}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="section-divider mb-12 sm:mb-16 md:mb-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-primary/10 to-red-primary/10 border border-white/[0.06]">
              <FaHandshake className="text-4xl sm:text-5xl text-blue-primary mx-auto mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 sm:mb-4">
                Our Promise to You
              </h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
                At Pure Care, we promise to treat every vehicle with the same care and attention
                we would give our own. Your satisfaction isn&apos;t just a goal — it&apos;s our guarantee.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto mb-6 sm:mb-8">
                {["Genuine Products", "Skilled Experts", "Fair Pricing", "On-Time Delivery", "Full Warranty", "Free Consultation"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 sm:gap-2 text-gray-300 text-xs sm:text-sm">
                    <FaCheckCircle className="text-blue-primary shrink-0 text-[10px] sm:text-xs" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="https://wa.me/971586368849"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full text-sm sm:text-lg hover:shadow-xl hover:shadow-green-500/30 transition-all justify-center"
                >
                  <FaWhatsapp className="text-lg sm:text-xl" /> WhatsApp Us
                </a>
                <a
                  href="tel:+971586368849"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-primary to-blue-dark text-white font-bold rounded-full text-sm sm:text-lg hover:shadow-xl hover:shadow-blue-primary/30 transition-all justify-center"
                >
                  <FaPhoneAlt /> Call Now
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
