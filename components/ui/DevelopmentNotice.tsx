"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, X } from "lucide-react";

export default function DevelopmentNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 1.5 seconds for a premium, delayed entry
    const showTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    // Auto-dismiss after 8 seconds of visibility (9.5 seconds total)
    const dismissTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 9500);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(dismissTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-5 right-5 z-50 max-w-sm w-[90vw] sm:w-full bg-[#011a0e]/95 backdrop-blur-md border border-[#D4A820]/30 rounded-2xl p-4 shadow-2xl flex items-start gap-3 text-white"
        >
          <div className="p-2 rounded-xl bg-[#D4A820]/15 text-[#F0D060] flex-shrink-0">
            <Wrench size={18} className="animate-bounce" style={{ animationDuration: "2s" }} />
          </div>
          
          <div className="flex-1 min-w-0 pr-1">
            <h4 className="font-display font-bold text-sm text-[#F0D060] mb-0.5">
              Site Under Development
            </h4>
            <p className="text-[11px] sm:text-xs text-green-200/90 leading-relaxed font-medium">
              We are currently configuring the live systems. Most of the information shown is placeholder data for testing.
            </p>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-lg text-green-300/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer flex-shrink-0"
            aria-label="Close notification"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
