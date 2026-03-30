"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaCar,
  FaShieldAlt,
  FaStar,
  FaUsers,
  FaTools,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
  FaWhatsapp,
  FaClock,
  FaTag,
} from "react-icons/fa";
import {
  MdColorLens,
  MdLocalCarWash,
  MdDirectionsCar,
  MdBuild,
  MdLayers,
  MdWeekend,
} from "react-icons/md";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  { icon: FaCar, title: "Car Tinting", desc: "Premium window tinting for UV protection and privacy with top-grade films." },
  { icon: MdColorLens, title: "Wrapping", desc: "Full body vinyl wraps in any color or finish to transform your vehicle's look." },
  { icon: MdLocalCarWash, title: "Car Polish", desc: "Professional polishing to restore your car's showroom shine and remove scratches." },
  { icon: FaShieldAlt, title: "PPF", desc: "Paint Protection Film to guard against chips, scratches and road debris." },
  { icon: FaStar, title: "Ceramic Coating", desc: "Long-lasting ceramic protection for unmatched gloss and hydrophobic finish." },
  { icon: MdDirectionsCar, title: "Car Detailing", desc: "Complete interior and exterior detailing for a brand-new feel." },
  { icon: MdBuild, title: "Carpet Flooring", desc: "Custom 3D/5D carpet flooring for perfect fit and premium interior look." },
  { icon: FaTools, title: "Car Accessories", desc: "Wide range of premium car accessories to upgrade your vehicle." },
  { icon: FaCar, title: "Seat Covers", desc: "Custom upholstery and seat covers for comfort and style." },
  { icon: MdBuild, title: "Ceiling", desc: "Professional car ceiling repair and customization services." },
  { icon: FaShieldAlt, title: "Graphene Coating", desc: "Next-gen graphene coating for superior durability and protection." },
  { icon: MdColorLens, title: "Plastic Flooring", desc: "Durable plastic flooring solutions for heavy-duty vehicle protection." },
];

const stats = [
  { value: "2000+", label: "Cars Serviced" },
  { value: "12+", label: "Services" },
  { value: "100%", label: "Satisfaction" },
  { value: "10+", label: "Years Experience" },
];

const featuredProducts = [
  {
    title: "Ceramic Coating Products",
    icon: FaStar,
    items: ["Gtechniq Crystal Serum", "Ceramic Pro 9H", "IGL Coatings Kenzo"],
    color: "from-red-primary to-red-dark",
    price: "From AED 1,500",
  },
  {
    title: "PPF Films",
    icon: FaShieldAlt,
    items: ["XPEL Ultimate Plus", "3M Scotchgard Pro", "SunTek Ultra PPF"],
    color: "from-emerald-500 to-emerald-700",
    price: "From AED 3,000",
  },
  {
    title: "Vinyl Wraps",
    icon: MdColorLens,
    items: ["3M 2080 Series", "Avery Dennison Supreme", "Chrome & Special Effects"],
    color: "from-purple-500 to-purple-700",
    price: "From AED 2,500",
  },
  {
    title: "Window Tinting Films",
    icon: MdLayers,
    items: ["3M Crystalline Series", "Llumar CTX Series", "SunTek CXP Carbon"],
    color: "from-blue-primary to-blue-dark",
    price: "From AED 450",
  },
  {
    title: "Interior Accessories",
    icon: MdWeekend,
    items: ["Custom Seat Covers", "3D/5D Floor Mats", "Ambient Lighting Kits"],
    color: "from-amber-500 to-amber-700",
    price: "From AED 50",
  },
  {
    title: "Car Care Products",
    icon: MdLocalCarWash,
    items: ["Meguiar's Professional", "Chemical Guys Collection", "Sonax Professional"],
    color: "from-yellow-500 to-orange-500",
    price: "Various",
  },
];

const blogPosts = [
  {
    title: "The Ultimate Guide to Ceramic Coating: Is It Worth It?",
    excerpt: "Ceramic coating has revolutionized car paint protection. Learn about the benefits, costs, and whether it's the right choice for your vehicle.",
    category: "Ceramic Coating",
    date: "March 15, 2026",
    readTime: "8 min read",
    color: "from-red-primary to-red-dark",
  },
  {
    title: "PPF vs Ceramic Coating: Which One Does Your Car Need?",
    excerpt: "Two of the most popular paint protection options compared head-to-head. Find out which protection method suits your driving needs and budget.",
    category: "Paint Protection",
    date: "March 10, 2026",
    readTime: "10 min read",
    color: "from-blue-primary to-blue-dark",
  },
  {
    title: "Top 5 Benefits of Professional Car Tinting in UAE",
    excerpt: "Living in the UAE means dealing with extreme heat. Discover how professional window tinting can protect you and your vehicle's interior.",
    category: "Car Tinting",
    date: "March 5, 2026",
    readTime: "6 min read",
    color: "from-cyan-500 to-cyan-700",
  },
];

const whyChooseUs = [
  { icon: FaStar, title: "Premium Quality", desc: "We use only the highest quality materials and products from trusted brands." },
  { icon: FaUsers, title: "Expert Team", desc: "Our skilled technicians have years of experience in auto care services." },
  { icon: FaShieldAlt, title: "Warranty", desc: "All our services come with warranty for your complete peace of mind." },
  { icon: FaTools, title: "Latest Technology", desc: "We use cutting-edge tools and techniques for flawless results." },
];

export default function Home() {
  return (
    <>
      {/* ===== 1. HERO SECTION ===== */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(79,195,247,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(239,68,68,0.1),_transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-blue-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-red-primary/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4 sm:mb-6"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-primary/10 border border-blue-primary/20 text-blue-primary text-xs sm:text-sm font-medium">
              Sharjah&apos;s Premium Auto Care
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight mb-4 sm:mb-6"
          >
            <span className="text-white">Transform Your</span>
            <br />
            <span className="gradient-text">Vehicle Today</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-10 px-2"
          >
            Premium car tinting, wrapping, detailing, ceramic coating, PPF and more.
            Expert auto care services that make your car look and feel brand new.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <Link
              href="/services"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-primary to-blue-dark text-white font-bold rounded-full text-sm sm:text-lg hover:shadow-xl hover:shadow-blue-primary/30 transition-all duration-300 pulse-glow flex items-center justify-center gap-2"
            >
              Our Services <FaArrowRight />
            </Link>
            <a
              href="https://wa.me/971586368849"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-500 text-green-400 font-bold rounded-full text-sm sm:text-lg hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-lg sm:text-xl" /> WhatsApp Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1, type: "spring" }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-primary mb-0.5 sm:mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-3 rounded-full bg-blue-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== 2. ABOUT PREVIEW ===== */}
      <section className="py-12 sm:py-16 md:py-24 relative">
        <div className="section-divider mb-12 sm:mb-16 md:mb-24" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-blue-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
                About Pure Care
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 sm:mt-3 mb-4 sm:mb-6">
                Sharjah&apos;s Trusted{" "}
                <span className="gradient-text-red">Auto Care</span> Experts
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                Pure Care Auto Accessories TR. L.L.C is a leading car care service
                provider located in the heart of Sharjah, UAE. We specialize in
                transforming and protecting vehicles with our comprehensive range of
                services including car tinting, wrapping, polishing, ceramic coating,
                PPF, and much more.
              </p>
              <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                Under the leadership of Siyad Abdulla, our team of skilled
                professionals is dedicated to delivering exceptional quality and
                customer satisfaction. We use only premium products and the latest
                techniques to ensure your vehicle gets the care it deserves.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {[
                  "Premium Products",
                  "Expert Technicians",
                  "Affordable Prices",
                  "Customer First",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm"
                  >
                    <FaCheckCircle className="text-blue-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-red-primary to-red-dark text-white text-sm sm:text-base font-semibold rounded-full hover:shadow-lg hover:shadow-red-primary/30 transition-all duration-300"
              >
                Learn More <FaArrowRight />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" className="relative">
              <div className="relative aspect-square max-w-[280px] sm:max-w-sm md:max-w-md mx-auto">
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-primary/20 to-red-primary/20 blur-3xl" />
                <div className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden gradient-border bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <div className="text-center p-6 sm:p-8">
                    <FaCar className="text-5xl sm:text-7xl md:text-8xl text-blue-primary/40 mx-auto mb-4 sm:mb-6" />
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      <span className="text-white">PURE</span>{" "}
                      <span className="text-red-primary">CARE</span>
                    </h3>
                    <p className="text-gray-400 text-[10px] sm:text-sm tracking-widest uppercase">
                      Auto Accessories TR. L.L.C
                    </p>
                    <div className="mt-4 sm:mt-6 space-y-1 sm:space-y-2">
                      <p className="text-blue-primary text-xs sm:text-sm">
                        <FaMapMarkerAlt className="inline mr-1 sm:mr-2" />
                        Sharjah, UAE
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm">Since 2014</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== 3. SERVICES PREVIEW ===== */}
      <section className="py-12 sm:py-16 md:py-24 relative">
        <div className="section-divider mb-12 sm:mb-16 md:mb-24" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-blue-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
              What We Offer
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              Our <span className="gradient-text-blue">Services</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
              From car tinting to graphene coating, we provide a comprehensive range
              of auto care services to keep your vehicle in pristine condition.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-primary/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-primary/20 to-blue-dark/20 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:from-blue-primary/30 group-hover:to-blue-dark/30 transition-all">
                    <service.icon className="text-sm sm:text-base md:text-xl text-blue-primary" />
                  </div>
                  <h3 className="text-white font-bold text-xs sm:text-sm md:text-lg mb-1 sm:mb-2 group-hover:text-blue-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {service.desc}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-8 sm:mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-white/5 border border-white/10 hover:border-blue-primary/50 text-white text-sm sm:text-base font-semibold rounded-full transition-all duration-300 hover:bg-white/10"
            >
              View All Services <FaArrowRight />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== 4. PRODUCTS PREVIEW ===== */}
      <section className="py-12 sm:py-16 md:py-24 relative">
        <div className="section-divider mb-12 sm:mb-16 md:mb-24" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-red-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
              What We Use
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              Premium <span className="gradient-text-red">Products</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
              We partner with the world&apos;s leading automotive brands to ensure only
              the best products touch your vehicle.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {featuredProducts.map((product, i) => (
              <AnimatedSection key={product.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-primary/20 transition-all group"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-3 sm:mb-4`}>
                    <product.icon className="text-base sm:text-xl text-white" />
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 group-hover:text-blue-primary transition-colors">
                    {product.title}
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                    {product.items.map((item) => (
                      <li key={item} className="flex items-center gap-1.5 sm:gap-2 text-gray-400 text-[10px] sm:text-xs md:text-sm">
                        <FaCheckCircle className="text-blue-primary shrink-0 text-[8px] sm:text-[10px]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="text-blue-primary text-xs sm:text-sm font-semibold">{product.price}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-8 sm:mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-white/5 border border-white/10 hover:border-red-primary/50 text-white text-sm sm:text-base font-semibold rounded-full transition-all duration-300 hover:bg-white/10"
            >
              View All Products <FaArrowRight />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== 5. BLOG PREVIEW ===== */}
      <section className="py-12 sm:py-16 md:py-24 relative">
        <div className="section-divider mb-12 sm:mb-16 md:mb-24" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-blue-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Latest Insights
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              From Our <span className="gradient-text-blue">Blog</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
              Expert tips and guides to help you make the best decisions for your vehicle.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full flex flex-col rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-primary/20 transition-all overflow-hidden group"
                >
                  <div className={`h-36 sm:h-44 md:h-48 bg-gradient-to-br ${post.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/30" />
                    <h3 className="relative z-10 text-white text-sm sm:text-base md:text-lg font-bold px-4 sm:px-6 text-center leading-snug">
                      {post.title}
                    </h3>
                  </div>
                  <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col">
                    <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3 text-[10px] sm:text-xs">
                      <span className="flex items-center gap-1 text-blue-primary">
                        <FaTag /> {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <FaClock /> {post.readTime}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-1 mb-3 sm:mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="text-gray-600 text-[10px] sm:text-xs">{post.date}</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-8 sm:mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-white/5 border border-white/10 hover:border-blue-primary/50 text-white text-sm sm:text-base font-semibold rounded-full transition-all duration-300 hover:bg-white/10"
            >
              Read More Articles <FaArrowRight />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== 6. WHY CHOOSE US ===== */}
      <section className="py-12 sm:py-16 md:py-24 relative">
        <div className="section-divider mb-12 sm:mb-16 md:mb-24" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-red-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Why Pure Care
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
              Why <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
              We go above and beyond to ensure every vehicle receives the
              highest standard of care and attention.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
            {whyChooseUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-primary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-primary to-blue-dark flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6">
                    <item.icon className="text-base sm:text-lg md:text-2xl text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xs sm:text-base md:text-xl mb-1 sm:mb-2 md:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. CTA / CONTACT PREVIEW ===== */}
      <section className="py-12 sm:py-16 md:py-24 relative">
        <div className="section-divider mb-12 sm:mb-16 md:mb-24" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-primary/20 to-red-primary/20" />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 p-6 sm:p-10 md:p-12 lg:p-16 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4">
                  Ready to Transform Your Car?
                </h2>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8">
                  Get in touch with us today for a free consultation. Visit our
                  showroom at Sheikh Sultan, Bin Saqr Al Qasimi Street, Sharjah.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a
                    href="tel:+971586368849"
                    className="inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-primary to-blue-dark text-white font-bold rounded-full text-sm sm:text-lg hover:shadow-xl hover:shadow-blue-primary/30 transition-all justify-center"
                  >
                    <FaPhoneAlt /> Call Now
                  </a>
                  <a
                    href="https://wa.me/971586368849"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full text-sm sm:text-lg hover:shadow-xl hover:shadow-green-500/30 transition-all justify-center"
                  >
                    <FaWhatsapp className="text-lg sm:text-xl" /> WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 border-2 border-white/20 text-white font-bold rounded-full text-sm sm:text-lg hover:bg-white/10 transition-all justify-center"
                  >
                    Contact Us <FaArrowRight />
                  </Link>
                </div>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-gray-400 text-xs sm:text-sm">
                  <span className="flex items-center gap-2 text-center">
                    <FaMapMarkerAlt className="text-red-primary shrink-0" />
                    6 Sheikh Sultan, Bin Saqr Al Qasimi Street, Sharjah
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
