"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  BookMarked,
  Briefcase,
  Award,
  Wifi,
  Shield,
  HeartHandshake,
  Coffee,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    icon: Monitor,
    title: "Modern Computer Labs",
    description:
      "Two state-of-the-art computer labs with 100+ high-performance workstations, licensed software, and high-speed internet.",
    color: "#1e3a5f",
    accent: "#3b6bba",
  },
  {
    icon: BookMarked,
    title: "Digital Library",
    description:
      "15,000+ physical books, e-journals, and digital archives accessible 24/7 for all registered students.",
    color: "#1e6b5f",
    accent: "#34d399",
  },
  {
    icon: Briefcase,
    title: "Placement Cell",
    description:
      "A dedicated career services unit connecting students with top employers through job fairs, CV clinics, and interview prep.",
    color: "#5f1e4b",
    accent: "#f472b6",
  },
  {
    icon: Award,
    title: "Scholarships",
    description:
      "Need-based and merit-based scholarships covering up to 100% of tuition for deserving and exceptional students.",
    color: "#9e6900",
    accent: "#C9A84C",
  },
  {
    icon: Wifi,
    title: "Campus-wide Wi-Fi",
    description:
      "High-speed fibre internet across the entire campus, ensuring students always stay connected for research and learning.",
    color: "#3d1e5f",
    accent: "#a78bfa",
  },
  {
    icon: Shield,
    title: "Safe Campus",
    description:
      "24/7 security coverage with CCTV monitoring, trained guards, and a dedicated student safety committee.",
    color: "#1e5f3d",
    accent: "#4ade80",
  },
  {
    icon: HeartHandshake,
    title: "Student Welfare",
    description:
      "Counseling services, mental health support, and a student welfare fund for those facing financial difficulties.",
    color: "#5f3d1e",
    accent: "#fb923c",
  },
  {
    icon: Coffee,
    title: "Student Lounge",
    description:
      "A spacious, comfortable lounge for students to relax, collaborate, and socialize between classes.",
    color: "#1e3a5f",
    accent: "#60a5fa",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#f0f5fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why BITC"
          title="Why Choose Us?"
          subtitle="We go beyond the classroom to ensure our students receive a complete, enriching, and future-ready education."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, description, color, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 overflow-hidden card-lift cursor-default"
            >
              {/* Background hover fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                style={{
                  background: `linear-gradient(145deg, ${color}f5, ${color})`,
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                  style={{
                    backgroundColor: `${accent}22`,
                    border: `1px solid ${accent}44`,
                  }}
                >
                  <Icon
                    size={22}
                    style={{ color: accent }}
                    className="group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="font-display text-base font-bold text-[#0A1628] group-hover:text-white mb-2 transition-colors duration-300">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
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
