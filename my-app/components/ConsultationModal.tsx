"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaTimes } from "react-icons/fa";

export default function ConsultationModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Expose modal control globally
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).openConsultationModal = openModal;
    }
    return () => {
      if (typeof window !== "undefined") {
        delete (window as any).openConsultationModal;
      }
    };
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isModalOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const whatsappMessage = encodeURIComponent(
      `Hi Pure Care! I'd like a free consultation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/971586368849?text=${whatsappMessage}`, "_blank");

    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
    closeModal();
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-gray-950 border border-white/10 rounded-2xl shadow-2xl shadow-blue-primary/10 max-w-lg w-full max-h-[90dvh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-primary/10 to-red-primary/10 border-b border-white/10 px-5 py-4 flex items-center justify-between rounded-t-2xl">
              <div>
                <h3 className="text-xl font-bold text-white">Free Consultation</h3>
                <p className="text-gray-400 text-xs mt-0.5">Get expert advice for your vehicle</p>
              </div>
              <button
                onClick={closeModal}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors duration-200"
                aria-label="Close modal"
              >
                <FaTimes className="text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Modal Form */}
            <div className="p-5">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="modal-name" className="block text-sm font-semibold text-gray-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-primary/50 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-phone" className="block text-sm font-semibold text-gray-300 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="modal-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-primary/50 focus:outline-none transition-colors"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="modal-email" className="block text-sm font-semibold text-gray-300 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-primary/50 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-service" className="block text-sm font-semibold text-gray-300 mb-1.5">
                      Service Interested In *
                    </label>
                    <select
                      id="modal-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white focus:border-blue-primary/50 focus:outline-none transition-colors"
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
                </div>

                <div>
                  <label htmlFor="modal-message" className="block text-sm font-semibold text-gray-300 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="modal-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-primary/50 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your vehicle and what service you need..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-3 bg-gradient-to-r from-blue-primary to-blue-dark text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-primary/20 text-sm ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-xl hover:shadow-blue-primary/30"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
