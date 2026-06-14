"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        /* Use dvh (dynamic viewport height) so it works correctly on mobile browsers
           that have address-bar chrome. Falls back to svh then vh.
           Subtract ticker height (40px) so it always peeks below the fold. */
        minHeight: "calc(100svh - 40px)",
        background:
          "linear-gradient(135deg, #0A1628 0%, #112550 40%, #1a3a6e 70%, #0A1628 100%)",
      }}
    >
      {/* Animated background — lightweight, GPU-composited only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating orbs — will-change:transform for GPU compositing */}
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201, 168, 76, 0.15) 0%, transparent 70%)",
            willChange: "transform",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201, 168, 76, 0.1) 0%, transparent 70%)",
            willChange: "transform",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Diagonal accent */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div
            className="absolute top-0 right-0 w-full h-full"
            style={{ background: "linear-gradient(135deg, transparent 60%, rgba(201,168,76,0.3) 100%)" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex items-center gap-3 mb-5 sm:mb-6"
          >
            <div className="w-8 h-0.5 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
              National University Affiliated
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-5 sm:mb-6"
          >
            Shaping{" "}
            <span className="text-[#C9A84C]">Future Leaders</span>
            <br />
            Through Academic{" "}
            <span className="relative inline-block">
              Excellence
              <motion.span
                className="absolute bottom-0 left-0 h-1 bg-[#C9A84C] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.75, delay: 0.85, ease: "easeOut" }}
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
            className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-2xl"
          >
            Bangladesh Institute of Technology &amp; Commerce — offering world-class BBA,
            CSE, LLB, MBA, and M.Ed programs with experienced faculty, modern
            facilities, and a vibrant campus culture.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4"
          >
            <Link
              href="/admissions"
              className="group flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#C9A84C] text-[#0A1628] font-bold text-sm sm:text-base rounded-xl hover:bg-[#d4b96a] transition-all duration-300 shadow-lg hover:shadow-[#C9A84C]/30 hover:shadow-2xl hover:-translate-y-0.5"
            >
              Apply Now
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/academics"
              className="group flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white/30 text-white font-semibold text-sm sm:text-base rounded-xl hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
            >
              <Play size={14} className="fill-current" />
              Explore Programs
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.6, ease: "easeOut" }}
            className="mt-10 sm:mt-14 flex flex-wrap gap-5 sm:gap-8"
          >
            {[
              { value: "5000+", label: "Graduates" },
              { value: "50+", label: "Expert Faculty" },
              { value: "5", label: "Programs" },
              { value: "20+", label: "Years of Excellence" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 sm:gap-3">
                <div className="text-xl sm:text-2xl font-bold text-[#C9A84C] font-display">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden sm:flex"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-gray-500 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}
