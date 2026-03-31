"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaCar } from "react-icons/fa";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Lock scroll during loading
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center"
        >
          {/* Background glow effects */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-48 h-48 bg-red-primary/8 rounded-full blur-[80px]" />

          {/* Spinning ring */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-8">
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-transparent"
              style={{
                borderTopColor: "#4fc3f7",
                borderRightColor: "rgba(79, 195, 247, 0.3)",
              }}
            />
            {/* Inner ring - reverse */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-3 sm:inset-4 rounded-full border-2 border-transparent"
              style={{
                borderBottomColor: "#ef4444",
                borderLeftColor: "rgba(239, 68, 68, 0.3)",
              }}
            />
            {/* Center car icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <FaCar className="text-3xl sm:text-4xl text-blue-primary" />
              </motion.div>
            </div>
          </div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wider mb-1">
              <span className="text-white">PURE</span>{" "}
              <span className="text-red-primary">CARE</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-[9px] sm:text-[10px] tracking-[0.2em] text-gray-400 uppercase"
            >
              Auto Accessories TR. L.L.C
            </motion.p>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 w-40 sm:w-48 h-0.5 bg-white/10 rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-1/2 bg-gradient-to-r from-transparent via-blue-primary to-transparent rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
