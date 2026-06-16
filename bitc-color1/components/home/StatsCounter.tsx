"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { GraduationCap, Users, BookOpen, Building2, Trophy, Star } from "lucide-react";

const stats = [
  { icon: GraduationCap, target: 5000, suffix: "+", label: "Proud Graduates",       description: "Alumni working across industries",        color: "#065F46" },
  { icon: Users,         target: 50,   suffix: "+", label: "Expert Faculty",         description: "PhD holders & industry experts",          color: "#1E3A8A" },
  { icon: BookOpen,      target: 5,    suffix: "",  label: "Academic Programs",      description: "Nationally recognized degrees",            color: "#065F46" },
  { icon: Building2,     target: 20,   suffix: "+", label: "Student Clubs",          description: "Cultural, sports & tech activities",       color: "#1E3A8A" },
  { icon: Trophy,        target: 22,   suffix: "+", label: "Years of Excellence",    description: "Serving students since 2003",              color: "#065F46" },
  { icon: Star,          target: 98,   suffix: "%", label: "Student Satisfaction",   description: "Based on annual survey 2024",              color: "#1E3A8A" },
];

export default function StatsCounter() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "var(--bg-lite-grey)" }}>
      {/* Subtle green dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #065F46 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "var(--primary-green)" }}>
            Excellence in Numbers
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--text-dark-slate)" }}>
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
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl bg-white border transition-all duration-300 card-lift"
              style={{ borderColor: "var(--bg-card-border)" }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${color}12`, border: `1px solid ${color}30` }}
              >
                <Icon size={22} style={{ color }} />
              </div>

              {/* Number */}
              <div className="font-display text-4xl font-bold mb-1" style={{ color }}>
                <AnimatedCounter target={target} suffix={suffix} />
              </div>

              {/* Labels */}
              <div className="font-semibold text-sm mb-1" style={{ color: "var(--text-dark-slate)" }}>{label}</div>
              <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{description}</div>

              {/* Subtle hover top border */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
