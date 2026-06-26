"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  GraduationCap,
  Users,
  BookOpen,
  Building2,
  Trophy,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    target: 5000,
    suffix: "+",
    label: "Proud Graduates",
    description: "Alumni working across industries",
    color: "#D4A820",
  },
  {
    icon: Users,
    target: 50,
    suffix: "+",
    label: "Expert Faculty",
    description: "PhD holders & industry experts",
    color: "#006B3C",
  },
  {
    icon: BookOpen,
    target: 5,
    suffix: "",
    label: "Academic Programs",
    description: "Nationally recognized degrees",
    color: "#F0D060",
  },
  {
    icon: Building2,
    target: 20,
    suffix: "+",
    label: "Student Clubs",
    description: "Cultural, sports & tech activities",
    color: "#B8912A",
  },
  {
    icon: Trophy,
    target: 22,
    suffix: "+",
    label: "Years of Excellence",
    description: "Serving students since 2003",
    color: "#D4A820",
  },
  {
    icon: Star,
    target: 98,
    suffix: "%",
    label: "Student Satisfaction",
    description: "Based on annual survey 2024",
    color: "#006B3C",
  },
];

export default function StatsCounter() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #011a0e 0%, #022c16 50%, #011a0e 100%)",
      }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #D4A820 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#D4A820] mb-3">
            Excellence in Numbers
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Impact, Measured
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map(({ icon: Icon, target, suffix, label, description, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${color}22`, border: `1px solid ${color}44` }}
              >
                <Icon size={22} style={{ color }} />
              </div>

              {/* Number */}
              <div
                className="font-display text-4xl font-bold mb-1 transition-colors duration-300"
                style={{ color }}
              >
                <AnimatedCounter target={target} suffix={suffix} />
              </div>

              {/* Label */}
              <div className="font-semibold text-white text-sm mb-1">{label}</div>
              <div className="text-green-400/60 text-xs leading-relaxed">{description}</div>

              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${color}12, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
