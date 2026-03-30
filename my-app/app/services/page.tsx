"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaCar,
  FaShieldAlt,
  FaStar,
  FaTools,
  FaCheckCircle,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";
import {
  MdColorLens,
  MdLocalCarWash,
  MdDirectionsCar,
  MdBuild,
  MdDashboard,
  MdWeekend,
  MdRoofing,
  MdLayers,
} from "react-icons/md";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: FaCar,
    title: "Car Tinting",
    short: "Premium window tinting",
    description: "Our professional window tinting service uses top-grade films that provide superior UV protection, heat reduction, and enhanced privacy. We offer various shades and tint levels to match your preference and local regulations. Our tinting films block up to 99% of harmful UV rays while reducing interior heat by up to 60%.",
    features: ["UV Protection up to 99%", "Heat Reduction up to 60%", "Glare Reduction", "Enhanced Privacy", "Multiple Shade Options", "Scratch-Resistant Films"],
    color: "from-blue-primary to-blue-dark",
  },
  {
    icon: MdColorLens,
    title: "Wrapping",
    short: "Full body vinyl wraps",
    description: "Transform your vehicle's appearance with our premium vinyl wrapping service. Choose from a wide range of colors, textures, and finishes including matte, gloss, satin, chrome, carbon fiber, and more. Our wraps not only change your car's look but also protect the original paint underneath.",
    features: ["Full Body Wraps", "Partial Wraps", "Matte & Gloss Finishes", "Chrome & Carbon Fiber", "Paint Protection", "Removable Without Damage"],
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: MdLocalCarWash,
    title: "Car Polish",
    short: "Restore showroom shine",
    description: "Our multi-stage car polishing service removes swirl marks, minor scratches, oxidation, and imperfections to restore your vehicle's showroom shine. We use professional-grade compounds and polishers to achieve a mirror-like finish that makes your car look brand new.",
    features: ["Swirl Mark Removal", "Scratch Removal", "Oxidation Treatment", "Multi-Stage Polishing", "Mirror-Like Finish", "Paint Correction"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: MdLayers,
    title: "Plastic Flooring",
    short: "Durable floor protection",
    description: "Protect your vehicle's interior with our durable plastic flooring solutions. Custom-cut to fit your vehicle perfectly, our plastic flooring provides excellent protection against dirt, water, and wear. Ideal for commercial vehicles and daily drivers who need heavy-duty floor protection.",
    features: ["Custom Fit Design", "Waterproof Material", "Easy to Clean", "Durable & Long-Lasting", "Anti-Slip Surface", "All Vehicle Types"],
    color: "from-teal-500 to-teal-700",
  },
  {
    icon: MdRoofing,
    title: "Ceiling",
    short: "Interior ceiling services",
    description: "Professional car ceiling repair and customization services. Whether your headliner is sagging, damaged, or you want a complete upgrade, our team delivers flawless ceiling work. We offer various materials including suede, alcantara, and premium fabric options.",
    features: ["Sagging Headliner Repair", "Custom Colors", "Premium Materials", "Suede & Alcantara Options", "Perfect Fit Installation", "Long-Lasting Results"],
    color: "from-indigo-500 to-indigo-700",
  },
  {
    icon: MdWeekend,
    title: "Seat Cover & Car Upholstery",
    short: "Custom seat solutions",
    description: "Upgrade your car's interior with our custom seat covers and upholstery services. We offer a wide range of materials including leather, faux leather, fabric, and Alcantara. Each cover is custom-designed to fit your vehicle's seats perfectly for maximum comfort and style.",
    features: ["Custom Fit Design", "Leather & Faux Leather", "Fabric & Alcantara", "Multiple Color Options", "Comfort Enhancement", "Durable Materials"],
    color: "from-amber-500 to-amber-700",
  },
  {
    icon: MdDashboard,
    title: "Carpet Flooring (3D/5D)",
    short: "Premium 3D/5D car carpets",
    description: "Our 3D and 5D carpet flooring provides a perfect fit for your vehicle's floor. These custom-molded carpets offer superior protection against dirt, water, and wear while adding a premium look to your interior. Available in various colors and styles.",
    features: ["3D & 5D Options", "Custom Molded Fit", "Waterproof Base", "Easy to Clean", "Premium Materials", "Multiple Colors Available"],
    color: "from-emerald-500 to-emerald-700",
  },
  {
    icon: FaTools,
    title: "Car Accessories",
    short: "Wide range of accessories",
    description: "Browse our extensive collection of premium car accessories designed to enhance your vehicle's functionality and appearance. From interior organizers to exterior enhancements, we carry top-quality accessories from leading brands to upgrade every aspect of your car.",
    features: ["Interior Accessories", "Exterior Accessories", "LED Lighting", "Phone Holders & Chargers", "Organizers", "Premium Brands"],
    color: "from-cyan-500 to-cyan-700",
  },
  {
    icon: MdDirectionsCar,
    title: "Car Detailing",
    short: "Complete interior & exterior",
    description: "Our comprehensive car detailing service covers every inch of your vehicle, inside and out. From deep interior cleaning and leather conditioning to exterior wash, clay bar treatment, and paint correction — we make your car look and feel brand new.",
    features: ["Deep Interior Cleaning", "Exterior Wash & Clay Bar", "Leather Conditioning", "Engine Bay Cleaning", "Odor Elimination", "Paint Decontamination"],
    color: "from-pink-500 to-pink-700",
  },
  {
    icon: FaShieldAlt,
    title: "PPF (Paint Protection Film)",
    short: "Ultimate paint protection",
    description: "Protect your vehicle's paint with our premium Paint Protection Film (PPF). This transparent, self-healing film guards against rock chips, scratches, bug splatter, and other road debris. Our PPF is virtually invisible and maintains your car's original appearance while providing unmatched protection.",
    features: ["Self-Healing Technology", "Invisible Protection", "Rock Chip Prevention", "Scratch Resistance", "UV Protection", "10 Year Warranty"],
    color: "from-blue-primary to-blue-dark",
  },
  {
    icon: FaStar,
    title: "Ceramic Coating",
    short: "Long-lasting protection & shine",
    description: "Our ceramic coating service provides a semi-permanent layer of protection that bonds with your vehicle's paint at a molecular level. It creates an incredibly hydrophobic surface that repels water, dirt, and contaminants, making maintenance easier while delivering an unmatched deep gloss.",
    features: ["9H Hardness Rating", "Hydrophobic Surface", "UV Protection", "Chemical Resistance", "Deep Gloss Finish", "5+ Years Durability"],
    color: "from-red-primary to-red-dark",
  },
  {
    icon: MdBuild,
    title: "Graphene Coating",
    short: "Next-gen vehicle protection",
    description: "Experience the latest in automotive protection technology with our graphene coating service. Graphene coating offers superior performance over traditional ceramic coatings, with better heat dissipation, anti-static properties, and enhanced durability for ultimate long-term protection.",
    features: ["Superior to Ceramic", "Heat Dissipation", "Anti-Static Properties", "Extreme Durability", "Ultra Hydrophobic", "Enhanced Gloss"],
    color: "from-violet-500 to-violet-700",
  },
];

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              Premium <span className="gradient-text">Auto Care</span> Services
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
              From window tinting to graphene coating, we offer 12+ specialized services
              to transform, protect, and maintain your vehicle at the highest standard.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={0.1}>
                <div
                  className={`grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center`}
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shrink-0`}>
                        <service.icon className="text-lg sm:text-xl md:text-2xl text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">
                          {service.title}
                        </h3>
                        <span className="text-gray-400 text-xs sm:text-sm">{service.short}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-1.5 sm:gap-2 text-gray-300 text-[11px] sm:text-sm"
                        >
                          <FaCheckCircle className="text-blue-primary shrink-0 text-[10px] sm:text-xs" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <a
                      href={`https://wa.me/971586368849?text=${encodeURIComponent(`Hi Pure Care! I'm interested in your *${service.title}* service.\n\nI want to know which time slots are free to book for ${service.title}. Please let me know the available slots.\n\nThank you!`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/30 transition-all text-xs sm:text-sm"
                    >
                      <FaWhatsapp /> Book This Service
                    </a>
                  </div>

                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`aspect-[4/3] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl bg-gradient-to-br ${service.color} p-px`}
                    >
                      <div className="w-full h-full rounded-2xl sm:rounded-3xl bg-gray-950 flex items-center justify-center">
                        <div className="text-center px-4">
                          <service.icon className="text-4xl sm:text-5xl md:text-6xl text-white/20 mx-auto mb-3 sm:mb-4" />
                          <h4 className="text-white font-bold text-base sm:text-lg md:text-xl">{service.title}</h4>
                          <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">{service.short}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {i < services.length - 1 && (
                  <div className="section-divider mt-12 sm:mt-16 md:mt-20" />
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="section-divider mb-12 sm:mb-16 md:mb-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 sm:mb-4">
              Need a Custom Service?
            </h2>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg px-2">
              Can&apos;t find what you&apos;re looking for? Contact us for customized auto care solutions
              tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://wa.me/971586368849"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full text-sm sm:text-lg hover:shadow-xl hover:shadow-green-500/30 transition-all justify-center"
              >
                <FaWhatsapp className="text-lg sm:text-xl" /> WhatsApp Us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-primary to-blue-dark text-white font-bold rounded-full text-sm sm:text-lg hover:shadow-xl hover:shadow-blue-primary/30 transition-all justify-center"
              >
                Contact Us <FaArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
