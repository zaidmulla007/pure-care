"use client";

import { motion } from "framer-motion";
import {
  FaCar,
  FaStar,
  FaUsers,
  FaShieldAlt,
  FaTools,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaAward,
  FaHeart,
  FaClock,
} from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  { icon: FaStar, title: "Quality First", desc: "We never compromise on the quality of materials or workmanship. Every job is done to perfection." },
  { icon: FaHeart, title: "Customer Care", desc: "Your satisfaction is our top priority. We treat every vehicle as if it were our own." },
  { icon: FaAward, title: "Excellence", desc: "We strive for excellence in every service, using the latest techniques and premium products." },
  { icon: FaClock, title: "Timely Delivery", desc: "We respect your time and ensure all services are completed within the promised timeframe." },
];

const timeline = [
  { year: "2014", title: "The Beginning", desc: "Pure Care was founded by Siyad Abdulla with a vision to provide premium auto care in Sharjah." },
  { year: "2016", title: "Expanding Services", desc: "Added ceramic coating, PPF, and graphene coating to our growing list of services." },
  { year: "2019", title: "Growing Reputation", desc: "Became one of the most trusted auto care providers in Sharjah with hundreds of satisfied customers." },
  { year: "2022", title: "Modern Techniques", desc: "Adopted cutting-edge technology and expanded our team of skilled technicians." },
  { year: "2024", title: "Industry Leader", desc: "Recognized as a leading auto accessories and care service provider in the UAE." },
];

const team = [
  { name: "Siyad Abdulla", role: "Founder & CEO", desc: "Visionary leader with 10+ years of experience in the auto care industry." },
  { name: "Expert Technicians", role: "Service Team", desc: "Skilled professionals trained in the latest car care techniques and technologies." },
  { name: "Customer Support", role: "Support Team", desc: "Dedicated team ensuring seamless customer experience from inquiry to delivery." },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              The Story Behind{" "}
              <span className="gradient-text">Pure Care</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
              From a small workshop to Sharjah&apos;s most trusted auto care provider,
              discover the journey, values, and people behind Pure Care Auto Accessories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6">
                Who <span className="gradient-text-blue">We Are</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                Pure Care Auto Accessories TR. L.L.C is a premier car care and auto
                accessories company based in Sharjah, UAE. Founded by Siyad Abdulla,
                we have been serving car enthusiasts and everyday vehicle owners with
                top-notch auto care services for over a decade.
              </p>
              <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                Our state-of-the-art facility at 6 Sheikh Sultan, Bin Saqr Al Qasimi
                Street is equipped with the latest tools and technology to handle
                everything from car tinting and wrapping to advanced ceramic coating
                and graphene protection.
              </p>
              <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                We believe every vehicle deserves premium care, regardless of make or
                model. Our team of skilled technicians is trained to deliver flawless
                results every single time, making us the preferred choice for car
                owners across the UAE.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {["12+ Services", "2000+ Cars Serviced", "10+ Years Experience", "100% Satisfaction"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                    <FaCheckCircle className="text-blue-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-primary/10 to-red-primary/10 rounded-2xl sm:rounded-3xl blur-3xl" />
                <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900 to-gray-950 border border-white/5 p-6 sm:p-8 md:p-10">
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {[
                      { icon: FaCar, value: "2000+", label: "Cars Serviced" },
                      { icon: FaTools, value: "12+", label: "Services" },
                      { icon: FaUsers, value: "1500+", label: "Happy Clients" },
                      { icon: FaStar, value: "10+", label: "Years" },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, type: "spring" }}
                        className="text-center p-3 sm:p-4"
                      >
                        <stat.icon className="text-xl sm:text-2xl text-blue-primary mx-auto mb-2 sm:mb-3" />
                        <div className="text-2xl sm:text-3xl font-extrabold text-white mb-0.5 sm:mb-1">{stat.value}</div>
                        <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="section-divider mb-12 sm:mb-16 md:mb-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-red-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Our Values</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              What <span className="gradient-text-red">Drives Us</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
            {values.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="text-center p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-red-primary/30 transition-all"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-primary to-red-dark flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5">
                    <item.icon className="text-sm sm:text-base md:text-xl text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xs sm:text-base md:text-lg mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="section-divider mb-12 sm:mb-16 md:mb-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-blue-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Our Journey</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              The <span className="gradient-text-blue">Timeline</span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-primary via-blue-primary/50 to-transparent" />
            {timeline.map((item, i) => (
              <AnimatedSection
                key={item.year}
                delay={i * 0.1}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div className={`flex items-start sm:items-center gap-4 sm:gap-8 mb-8 sm:mb-12 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  {/* Mobile: all left-aligned; Desktop: alternating */}
                  <div className="flex w-8 h-8 sm:hidden rounded-full bg-blue-primary shrink-0 items-center justify-center relative z-10 glow-blue">
                    <span className="text-[10px] font-bold text-white">{item.year.slice(2)}</span>
                  </div>
                  <div className={`flex-1 ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
                    <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-blue-primary font-bold text-sm sm:text-lg">{item.year}</span>
                      <h3 className="text-white font-bold text-base sm:text-xl mt-0.5 sm:mt-1 mb-1 sm:mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex w-4 h-4 rounded-full bg-blue-primary shrink-0 relative z-10 glow-blue" />
                  <div className="flex-1 hidden sm:block" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="section-divider mb-12 sm:mb-16 md:mb-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-blue-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Our Team</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              Meet The <span className="gradient-text">Experts</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-primary/30 transition-all"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-primary to-blue-dark flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5">
                    <FaUsers className="text-xl sm:text-2xl md:text-3xl text-white" />
                  </div>
                  <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-0.5 sm:mb-1">{member.name}</h3>
                  <span className="text-blue-primary text-xs sm:text-sm font-medium">{member.role}</span>
                  <p className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed">{member.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="section-divider mb-12 sm:mb-16 md:mb-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 sm:mb-6">Visit Our Showroom</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-gray-400 text-xs sm:text-sm">
              <span className="flex items-center gap-2 text-center">
                <FaMapMarkerAlt className="text-red-primary shrink-0" />
                6 Sheikh Sultan, Bin Saqr Al Qasimi Street, Sharjah
              </span>
              <span className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-primary shrink-0" />
                +971 58 636 8849
              </span>
              <span className="flex items-center gap-2 break-all">
                <FaEnvelope className="text-blue-primary shrink-0" />
                purecareautoacs@gmail.com
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
