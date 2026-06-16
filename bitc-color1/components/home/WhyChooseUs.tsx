"use client";

import { motion } from "framer-motion";
import {
  Monitor, BookMarked, Briefcase, Award,
  Wifi, Shield, HeartHandshake, Coffee,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

/* Standardized to primary-green / secondary-navy only */
const features = [
  { icon: Monitor,       title: "Modern Computer Labs",  description: "Two state-of-the-art computer labs with 100+ high-performance workstations, licensed software, and high-speed internet.", bg: "#1E3A8A", accent: "#3b82f6" },
  { icon: BookMarked,    title: "Digital Library",        description: "15,000+ physical books, e-journals, and digital archives accessible 24/7 for all registered students.",                   bg: "#065F46", accent: "#10b981" },
  { icon: Briefcase,     title: "Placement Cell",         description: "A dedicated career services unit connecting students with top employers through job fairs, CV clinics, and interview prep.", bg: "#1E3A8A", accent: "#60a5fa" },
  { icon: Award,         title: "Scholarships",           description: "Need-based and merit-based scholarships covering up to 100% of tuition for deserving and exceptional students.",           bg: "#065F46", accent: "#34d399" },
  { icon: Wifi,          title: "Campus-wide Wi-Fi",      description: "High-speed fibre internet across the entire campus, ensuring students always stay connected for research and learning.",    bg: "#1E3A8A", accent: "#93c5fd" },
  { icon: Shield,        title: "Safe Campus",            description: "24/7 security coverage with CCTV monitoring, trained guards, and a dedicated student safety committee.",                   bg: "#065F46", accent: "#6ee7b7" },
  { icon: HeartHandshake,title: "Student Welfare",        description: "Counseling services, mental health support, and a student welfare fund for those facing financial difficulties.",           bg: "#1E3A8A", accent: "#a5b4fc" },
  { icon: Coffee,        title: "Student Lounge",         description: "A spacious, comfortable lounge for students to relax, collaborate, and socialize between classes.",                        bg: "#065F46", accent: "#86efac" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--bg-lite-grey)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why BITC"
          title="Why Choose Us?"
          subtitle="We go beyond the classroom to ensure our students receive a complete, enriching, and future-ready education."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, description, bg, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative bg-white rounded-2xl p-6 shadow-sm border overflow-hidden card-lift cursor-default"
              style={{ borderColor: "var(--bg-card-border)" }}
            >
              {/* Hover background fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ backgroundColor: bg }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                  style={{ backgroundColor: `${accent}20`, border: `1px solid ${accent}40` }}
                >
                  <Icon size={22} style={{ color: accent }} className="group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3
                  className="font-display text-base font-bold mb-2 transition-colors duration-300 group-hover:text-white"
                  style={{ color: "var(--text-dark-slate)" }}
                >
                  {title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/80"
                  style={{ color: "var(--text-muted)" }}
                >
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
