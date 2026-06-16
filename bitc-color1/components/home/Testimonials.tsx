"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const prev = () => { setIsAutoPlaying(false); setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); };
  const next = () => { setIsAutoPlaying(false); setCurrent((c) => (c + 1) % testimonials.length); };
  const t = testimonials[current];

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #eff6ff 50%, #f0fdf4 100%)" }}
    >
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"
        style={{ background: "radial-gradient(circle, rgba(6,95,70,0.06) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2"
        style={{ background: "radial-gradient(circle, rgba(30,58,138,0.05) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Student Stories"
          title="What Our Students Say"
          subtitle="Hear directly from our graduates about their transformative experience at BITC."
        />

        <div className="relative">
          {/* Main testimonial card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden border"
              style={{ borderColor: "var(--bg-card-border)" }}
            >
              {/* Decorative quote mark */}
              <div className="absolute top-6 right-8 font-display text-[120px] leading-none font-bold select-none pointer-events-none"
                style={{ color: "rgba(6,95,70,0.06)" }}>
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} style={{ fill: "var(--primary-green)", color: "var(--primary-green)" }} />
                ))}
              </div>

              {/* Review */}
              <p className="font-display text-xl sm:text-2xl leading-relaxed italic mb-8 max-w-3xl"
                style={{ color: "var(--text-dark-slate)" }}>
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold text-white flex-shrink-0 shadow-md"
                  style={{ backgroundColor: t.imageColor }}
                >
                  {t.imageInitials}
                </div>
                <div>
                  <div className="font-bold" style={{ color: "var(--text-dark-slate)" }}>{t.name}</div>
                  <div className="text-sm font-medium" style={{ color: "var(--primary-green)" }}>
                    {t.program} — {t.batch}
                  </div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{t.currentRole}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "2rem" : "0.625rem",
                    height: "0.625rem",
                    backgroundColor: i === current ? "var(--primary-green)" : "#cbd5e1",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-3">
              {[{ fn: prev, Icon: ChevronLeft, label: "Previous" }, { fn: next, Icon: ChevronRight, label: "Next" }].map(({ fn, Icon, label }) => (
                <button
                  key={label}
                  onClick={fn}
                  className="w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all duration-200"
                  style={{ borderColor: "var(--bg-card-border)", color: "var(--text-muted)" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "var(--primary-green)";
                    e.currentTarget.style.color = "var(--primary-green)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "var(--bg-card-border)";
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                  aria-label={`${label} testimonial`}
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl border-2 transition-all duration-200 bg-white"
              style={{
                borderColor: i === current ? "var(--primary-green)" : "var(--bg-card-border)",
                boxShadow: i === current ? "0 0 0 2px rgba(6,95,70,0.08)" : "none",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                style={{ backgroundColor: t.imageColor }}
              >
                {t.imageInitials}
              </div>
              <div className="text-left hidden sm:block">
                <div className="text-xs font-semibold leading-tight" style={{ color: "var(--text-dark-slate)" }}>
                  {t.name.split(" ")[0]}
                </div>
                <div className="text-[10px]" style={{ color: "var(--text-muted)" }}>{t.program}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
