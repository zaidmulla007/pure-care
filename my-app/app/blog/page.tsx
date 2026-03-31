"use client";

import { motion } from "framer-motion";
import { FaClock, FaTag } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

const blogPosts = [
  {
    title: "The Ultimate Guide to Ceramic Coating: Is It Worth It?",
    excerpt: "Ceramic coating has revolutionized car paint protection. Learn about the benefits, costs, and whether it's the right choice for your vehicle. We break down everything from 9H hardness ratings to hydrophobic properties.",
    category: "Ceramic Coating",
    date: "March 15, 2026",
    readTime: "8 min read",
    color: "from-red-primary to-red-dark",
    content: [
      "Ceramic coating is a liquid polymer that chemically bonds with your vehicle's factory paint, creating a layer of protection. Unlike traditional wax, ceramic coating provides semi-permanent protection that can last for years.",
      "The main benefits include: exceptional hydrophobic properties that cause water to bead and slide off, UV protection to prevent paint fading, chemical resistance against bird droppings and tree sap, enhanced gloss and shine, and easier maintenance.",
      "At Pure Care, we use professional-grade ceramic coatings with 9H hardness rating. The application process involves thorough paint correction, decontamination, and multiple layers of coating for maximum protection.",
      "While the initial investment is higher than traditional waxing, ceramic coating saves money in the long run by reducing the need for frequent washes and waxes. Most coatings last 5+ years with proper maintenance.",
    ],
  },
  {
    title: "PPF vs Ceramic Coating: Which One Does Your Car Need?",
    excerpt: "Two of the most popular paint protection options compared head-to-head. Understand the differences, pros and cons, and find out which protection method suits your driving needs and budget best.",
    category: "Paint Protection",
    date: "March 10, 2026",
    readTime: "10 min read",
    color: "from-blue-primary to-blue-dark",
    content: [
      "PPF (Paint Protection Film) and ceramic coating serve different purposes and offer different types of protection. Understanding these differences is key to making the right choice for your vehicle.",
      "PPF is a physical barrier — a transparent urethane film applied to your car's paint. It protects against physical damage like rock chips, scratches, and minor impacts. Modern PPF also features self-healing properties where minor scratches disappear with heat.",
      "Ceramic coating, on the other hand, is a chemical bond that provides protection against environmental contaminants, UV rays, and makes the surface extremely hydrophobic. However, it doesn't protect against physical impacts like PPF does.",
      "The ideal solution? Many car owners opt for both — PPF on high-impact areas (front bumper, hood, fenders) and ceramic coating on the entire vehicle for maximum protection.",
    ],
  },
  {
    title: "Top 5 Benefits of Professional Car Tinting in UAE",
    excerpt: "Living in the UAE means dealing with extreme heat. Discover how professional window tinting can protect you, your passengers, and your vehicle's interior from the harsh desert sun.",
    category: "Car Tinting",
    date: "March 5, 2026",
    readTime: "6 min read",
    color: "from-cyan-500 to-cyan-700",
    content: [
      "In the UAE's scorching climate, car tinting isn't just a luxury — it's a necessity. Professional window tinting provides crucial benefits that every car owner should consider.",
      "1. UV Protection: Premium tint films block up to 99% of harmful UV rays, protecting your skin and your car's interior from fading and cracking.",
      "2. Heat Reduction: Quality tinting can reduce interior temperatures by up to 60%, making your car comfortable even in peak summer heat and reducing AC load.",
      "3. Glare Reduction: Tinted windows significantly reduce sun glare, making driving safer and more comfortable, especially during sunrise and sunset.",
      "4. Privacy & Security: Darker tints provide privacy and can deter potential thieves from seeing valuables inside your vehicle.",
      "5. Interior Protection: Tinting prevents dashboard, seat, and interior trim fading caused by prolonged sun exposure.",
    ],
  },
  {
    title: "How to Maintain Your Car Wrap: A Complete Guide",
    excerpt: "Invested in a vinyl wrap? Learn the essential maintenance tips to keep your wrap looking fresh and extend its lifespan. From washing techniques to storage recommendations.",
    category: "Wrapping",
    date: "February 28, 2026",
    readTime: "7 min read",
    color: "from-purple-500 to-purple-700",
    content: [
      "A vinyl wrap is a significant investment that can completely transform your vehicle's appearance. Proper maintenance is essential to protect that investment and keep your wrap looking its best.",
      "Washing: Hand wash only with automotive-specific soap. Avoid high-pressure washers directly on edges. Use a microfiber wash mitt and dry with clean microfiber towels.",
      "Parking: Whenever possible, park in shaded areas or garages. Prolonged UV exposure can degrade the wrap over time. If outdoor parking is unavoidable, consider a car cover.",
      "Spot Cleaning: Address bird droppings, bug splatter, and tree sap immediately. These contaminants can stain or damage the wrap if left too long. Use isopropyl alcohol for stubborn spots.",
      "With proper care, a quality vinyl wrap can last 5-7 years, maintaining its color and finish throughout its lifetime.",
    ],
  },
  {
    title: "Graphene Coating: The Future of Car Paint Protection",
    excerpt: "Graphene coating is the latest innovation in automotive protection. Learn how this Nobel Prize-winning material is being used to provide superior protection compared to traditional ceramic coatings.",
    category: "Graphene Coating",
    date: "February 20, 2026",
    readTime: "9 min read",
    color: "from-violet-500 to-violet-700",
    content: [
      "Graphene — a single layer of carbon atoms arranged in a hexagonal lattice — won the Nobel Prize in Physics in 2010. Now, this remarkable material is revolutionizing automotive paint protection.",
      "Graphene coating offers several advantages over traditional ceramic coatings: superior heat dissipation (reducing water spotting), anti-static properties (less dust attraction), greater flexibility, and enhanced durability.",
      "The application process is similar to ceramic coating but results in a more durable, longer-lasting protection. Graphene coatings can outlast ceramic coatings by 2-3 years in many cases.",
      "At Pure Care, we offer both ceramic and graphene coating options, allowing our customers to choose the level of protection that best suits their needs and budget.",
    ],
  },
  {
    title: "3D vs 5D Car Floor Mats: Which Should You Choose?",
    excerpt: "Custom car floor mats are essential for protecting your vehicle's interior. We compare 3D and 5D floor mats to help you make the best choice for your car.",
    category: "Interior",
    date: "February 15, 2026",
    readTime: "5 min read",
    color: "from-emerald-500 to-emerald-700",
    content: [
      "Custom floor mats are one of the most practical accessories you can add to your vehicle. They protect your carpet from dirt, water, and wear while adding a premium look to your interior.",
      "3D Floor Mats: These are custom-molded to fit your vehicle's floor perfectly with raised edges. They typically have a rubber/TPE construction that's waterproof and easy to clean. Great for everyday protection.",
      "5D Floor Mats: These take it a step further with a premium leather or leatherette top layer over the molded base. They offer the same protection as 3D mats but with a more luxurious appearance.",
      "Choosing between them comes down to your priorities — if you want maximum durability and easy cleaning, go with 3D. If you want a premium look with the same protection, choose 5D.",
    ],
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 md:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(79,195,247,0.12),_transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-primary/10 border border-blue-primary/20 text-blue-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Blog & Tips
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6">
              Pure Care <span className="gradient-text-blue">Insights</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-2">
              Expert tips, guides, and insights to help you make the best decisions
              for your vehicle&apos;s care and protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.title} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="h-full flex flex-col rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-primary/20 transition-all overflow-hidden group"
                >
                  {/* Thumbnail */}
                  <div className={`h-36 sm:h-44 md:h-48 bg-gradient-to-br ${post.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/30" />
                    <h3 className="relative z-10 text-white text-sm sm:text-base md:text-xl font-bold px-4 sm:px-6 text-center leading-snug sm:leading-tight">
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
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-1 mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                      {post.excerpt}
                    </p>
                    <span className="text-gray-600 text-[10px] sm:text-xs">{post.date}</span>
                  </div>
                </motion.article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Detail Sections */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="section-divider mb-6 sm:mb-8 md:mb-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Featured <span className="gradient-text-blue">Articles</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {blogPosts.slice(0, 3).map((post, i) => (
              <AnimatedSection key={post.title}>
                <article className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4 text-xs sm:text-sm">
                    <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r ${post.color} text-white text-[10px] sm:text-xs font-medium`}>
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-[10px] sm:text-xs">{post.date}</span>
                    <span className="text-gray-500 text-[10px] sm:text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white mb-3 sm:mb-4">{post.title}</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {post.content.map((paragraph, pi) => (
                      <p key={pi} className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
                {i < 2 && <div className="section-divider mt-8 sm:mt-12 md:mt-16" />}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
