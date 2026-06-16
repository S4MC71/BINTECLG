"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, BookOpen, Users, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{ minHeight: "calc(100svh - 40px)" }}
    >
      {/* Subtle green pattern background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Light grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(#065F46 1px, transparent 1px), linear-gradient(90deg, #065F46 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
          }}
        />
        {/* Green orb top-right */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,95,70,0.06) 0%, transparent 70%)" }}
        />
        {/* Navy orb bottom-left */}
        <div
          className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,58,138,0.05) 0%, transparent 70%)" }}
        />
        {/* Decorative right panel */}
        <div
          className="absolute right-0 top-0 h-full w-2/5 hidden lg:block"
          style={{
            background: "linear-gradient(135deg, #f0fdf4 0%, #eff6ff 100%)",
            clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* Left: Text content */}
          <div>
            {/* Admission open blinker */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-sm"
                style={{ backgroundColor: "var(--accent-red)" }}
              >
                <Zap size={11} className="fill-current" />
                Admission Open 2025–26
              </span>
              <span className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                — Session Starting Soon
              </span>
            </motion.div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-0.5" style={{ backgroundColor: "var(--primary-green)" }} />
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: "var(--primary-green)" }}
              >
                National University Affiliated
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5"
              style={{ color: "var(--primary-green)" }}
            >
              Shaping{" "}
              <span className="relative inline-block" style={{ color: "var(--secondary-navy)" }}>
                Future Leaders
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 rounded-full"
                  style={{ backgroundColor: "var(--accent-red)" }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
                />
              </span>
              <br />
              Through Academic{" "}
              <span style={{ color: "var(--secondary-navy)" }}>Excellence</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: "var(--text-muted)" }}
            >
              Bangladesh Institute of Technology &amp; Commerce — offering world-class BBA,
              CSE, LLB, MBA, and M.Ed programs with experienced faculty, modern
              facilities, and a vibrant campus culture.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start gap-3 mb-10"
            >
              <Link
                href="/admissions"
                className="group flex items-center gap-2 px-6 py-3.5 text-white font-bold text-sm sm:text-base rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--primary-green)" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--primary-green-hover)")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--primary-green)")}
              >
                Apply Now
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/academics"
                className="group flex items-center gap-2 px-6 py-3.5 font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 border-2"
                style={{
                  color: "var(--secondary-navy)",
                  borderColor: "var(--secondary-navy)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = "var(--secondary-navy)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--secondary-navy)";
                }}
              >
                Explore Programs
              </Link>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap gap-5 sm:gap-8"
            >
              {[
                { value: "5000+", label: "Graduates", icon: Users },
                { value: "50+",   label: "Expert Faculty", icon: BookOpen },
                { value: "5",     label: "Programs", icon: Award },
                { value: "20+",   label: "Years of Excellence", icon: Award },
              ].map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--primary-muted, #f0fdf4)" }}
                  >
                    <Icon size={14} style={{ color: "var(--primary-green)" }} />
                  </div>
                  <div>
                    <div className="text-lg font-bold font-display leading-tight" style={{ color: "var(--primary-green)" }}>
                      {value}
                    </div>
                    <div className="text-xs leading-tight" style={{ color: "var(--text-muted)" }}>
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div
                className="rounded-3xl p-8 shadow-2xl relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, var(--primary-green) 0%, #047857 50%, var(--secondary-navy) 100%)" }}
              >
                <div className="text-center text-white mb-6">
                  <div className="text-6xl mb-3">🎓</div>
                  <div className="font-display text-2xl font-bold">BITC</div>
                  <div className="text-green-200 text-sm mt-1">Bangladesh Institute of Technology &amp; Commerce</div>
                </div>

                <div className="space-y-3">
                  {["BBA — Business Administration", "CSE — Computer Science & Engineering", "LLB — Law", "MBA — Business Administration", "M.Ed — Education"].map((prog) => (
                    <div
                      key={prog}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl"
                      style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-300 flex-shrink-0" />
                      <span className="text-sm text-white/90 font-medium">{prog}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t border-white/20 text-center">
                  <span className="text-white/60 text-xs uppercase tracking-widest font-medium">
                    Affiliated with National University
                  </span>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 shadow-xl"
                style={{ backgroundColor: "var(--accent-red)" }}
              >
                <div className="text-white font-bold text-sm">Session 2025–26</div>
                <div className="text-red-200 text-xs">Applications Open</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
