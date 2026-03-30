"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaStar,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";
import {
  MdColorLens,
  MdLocalCarWash,
  MdDashboard,
  MdWeekend,
  MdLayers,
  MdBuild,
} from "react-icons/md";
import AnimatedSection from "@/components/AnimatedSection";

const productCategories = [
  {
    title: "Window Tinting Films",
    icon: MdLayers,
    description: "Premium quality window tinting films from top brands for maximum UV protection and heat rejection.",
    products: [
      { name: "3M Crystalline Series", desc: "Nano-technology film with superior heat rejection", price: "Starting from AED 800" },
      { name: "3M Color Stable Series", desc: "Non-metallic film that won't interfere with electronics", price: "Starting from AED 500" },
      { name: "Llumar CTX Series", desc: "Ceramic technology for excellent clarity and comfort", price: "Starting from AED 600" },
      { name: "SunTek CXP Carbon", desc: "Carbon film with superior optical clarity", price: "Starting from AED 450" },
    ],
    color: "from-blue-primary to-blue-dark",
  },
  {
    title: "Vinyl Wraps",
    icon: MdColorLens,
    description: "High-quality vinyl wraps in various colors, textures, and finishes for complete vehicle transformation.",
    products: [
      { name: "3M 2080 Series", desc: "Premium cast vinyl in 100+ colors and finishes", price: "Starting from AED 3,000" },
      { name: "Avery Dennison Supreme", desc: "Conformable wrap with easy installation", price: "Starting from AED 2,800" },
      { name: "Hexis HX Series", desc: "Durable wrap film with excellent conformability", price: "Starting from AED 2,500" },
      { name: "Chrome & Special Effects", desc: "Mirror chrome, color shift, and specialty films", price: "Starting from AED 5,000" },
    ],
    color: "from-purple-500 to-purple-700",
  },
  {
    title: "Ceramic Coating Products",
    icon: FaStar,
    description: "Professional-grade ceramic coating products for long-lasting paint protection and shine.",
    products: [
      { name: "Gtechniq Crystal Serum", desc: "Ultra-durable 9H hardness ceramic coating", price: "Starting from AED 2,500" },
      { name: "Ceramic Pro 9H", desc: "Multi-layerable nano-ceramic coating", price: "Starting from AED 2,000" },
      { name: "IGL Coatings Kenzo", desc: "Award-winning graphene-infused ceramic", price: "Starting from AED 1,800" },
      { name: "SiRamik SC15", desc: "Self-cleaning nano ceramic coating", price: "Starting from AED 1,500" },
    ],
    color: "from-red-primary to-red-dark",
  },
  {
    title: "PPF (Paint Protection Film)",
    icon: FaShieldAlt,
    description: "Self-healing paint protection films that shield your vehicle's paint from damage.",
    products: [
      { name: "XPEL Ultimate Plus", desc: "Self-healing TPU film with 10-year warranty", price: "Starting from AED 4,000" },
      { name: "3M Scotchgard Pro", desc: "Crystal clear film with excellent clarity", price: "Starting from AED 3,500" },
      { name: "SunTek Ultra PPF", desc: "Optically clear with self-healing properties", price: "Starting from AED 3,000" },
      { name: "Llumar Valor Series", desc: "Premium protection with hydrophobic top coat", price: "Starting from AED 3,200" },
    ],
    color: "from-emerald-500 to-emerald-700",
  },
  {
    title: "Car Care Products",
    icon: MdLocalCarWash,
    description: "Premium car care and detailing products for professional-grade results.",
    products: [
      { name: "Meguiar's Professional Line", desc: "Complete range of professional detailing products", price: "Various" },
      { name: "Chemical Guys Collection", desc: "Premium wash, wax, and detail products", price: "Various" },
      { name: "Sonax Professional", desc: "German-engineered car care products", price: "Various" },
      { name: "Auto Finesse Range", desc: "Luxury car care and detailing collection", price: "Various" },
    ],
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Interior Accessories",
    icon: MdWeekend,
    description: "Premium interior accessories to enhance comfort and style inside your vehicle.",
    products: [
      { name: "Custom Seat Covers", desc: "Leather and fabric custom-fit seat covers", price: "Starting from AED 600" },
      { name: "3D/5D Floor Mats", desc: "Custom-molded premium floor mats", price: "Starting from AED 300" },
      { name: "Dashboard Accessories", desc: "Phone holders, organizers, and more", price: "Starting from AED 50" },
      { name: "Ambient Lighting Kits", desc: "LED interior ambient lighting systems", price: "Starting from AED 200" },
    ],
    color: "from-amber-500 to-amber-700",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(239,68,68,0.1),_transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-primary/10 border border-red-primary/20 text-red-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Our Products
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              Premium <span className="gradient-text-red">Products</span> We Use
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
              We partner with the world&apos;s leading automotive brands to ensure only
              the best products touch your vehicle. Quality you can trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20">
          {productCategories.map((category, ci) => (
            <AnimatedSection key={category.title}>
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shrink-0`}>
                    <category.icon className="text-lg sm:text-xl text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">{category.title}</h2>
                </div>
                <p className="text-gray-400 text-sm sm:text-base pl-[52px] sm:pl-16">{category.description}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {category.products.map((product, pi) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pi * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-primary/20 transition-all group"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0 mb-2 sm:mb-3">
                      <h3 className="text-white font-bold text-sm sm:text-base md:text-lg group-hover:text-blue-primary transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-blue-primary text-xs sm:text-sm font-medium shrink-0">
                        {product.price}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{product.desc}</p>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-400 text-[10px] sm:text-xs" />
                      <span className="text-gray-500 text-[10px] sm:text-xs">Available at Pure Care</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {ci < productCategories.length - 1 && (
                <div className="section-divider mt-12 sm:mt-16" />
              )}
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="section-divider mb-12 sm:mb-16 md:mb-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 sm:mb-4">
              Want to Know More About Our Products?
            </h2>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg px-2">
              Contact us for detailed product information, pricing, and recommendations
              tailored to your vehicle.
            </p>
            <a
              href="https://wa.me/971586368849"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full text-sm sm:text-lg hover:shadow-xl hover:shadow-green-500/30 transition-all"
            >
              <FaWhatsapp className="text-lg sm:text-xl" /> Get Product Info on WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
