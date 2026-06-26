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

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #e8f5ee 0%, #d0ead9 50%, #e8f5ee 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4A820]/8 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#006B3C]/8 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

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
              className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden border border-[#006B3C]/10"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-8 font-display text-[120px] leading-none text-[#D4A820]/10 font-bold select-none pointer-events-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-[#D4A820] text-[#D4A820]" />
                ))}
              </div>

              {/* Review */}
              <p className="font-display text-xl sm:text-2xl text-[#004D2C] leading-relaxed italic mb-8 max-w-3xl">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold text-white flex-shrink-0 shadow-md"
                  style={{ backgroundColor: t.imageColor }}
                >
                  {t.imageInitials}
                </div>

                <div>
                  <div className="font-bold text-[#004D2C]">{t.name}</div>
                  <div className="text-sm text-[#D4A820] font-medium">
                    {t.program} — {t.batch}
                  </div>
                  <div className="text-xs text-[#5a6a60]">{t.currentRole}</div>
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
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrent(i);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 h-2.5 bg-[#006B3C]"
                      : "w-2.5 h-2.5 bg-[#006B3C]/30 hover:bg-[#006B3C]/60"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl border-2 border-[#006B3C]/20 flex items-center justify-center text-[#5a6a60] hover:border-[#D4A820] hover:text-[#D4A820] transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl border-2 border-[#006B3C]/20 flex items-center justify-center text-[#5a6a60] hover:border-[#D4A820] hover:text-[#D4A820] transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrent(i);
              }}
              className={`flex items-center gap-2.5 px-4 py-2 rounded-xl border transition-all duration-200 ${
                i === current
                  ? "border-[#D4A820] bg-white shadow-sm"
                  : "border-[#006B3C]/20 bg-white hover:border-[#006B3C]/40"
              }`}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                style={{ backgroundColor: t.imageColor }}
              >
                {t.imageInitials}
              </div>
              <div className="text-left hidden sm:block">
                <div className="text-xs font-semibold text-[#004D2C] leading-tight">
                  {t.name.split(" ")[0]}
                </div>
                <div className="text-[10px] text-[#5a6a60]">{t.program}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
