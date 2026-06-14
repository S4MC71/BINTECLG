"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, BookOpen } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const achievements = [
  "National University–affiliated since 2003",
  "Consistently ranked among top colleges in the region",
  "100% pass rate in national examinations (2023–24)",
  "Dedicated placement cell with industry tie-ups",
  "Modern digital library with 15,000+ books",
  "Scholarships for meritorious and financially challenged students",
];

const highlights = [
  {
    icon: Award,
    label: "Best College Award",
    sub: "National Education Summit 2025",
    color: "#C9A84C",
  },
  {
    icon: Users,
    label: "5,000+ Alumni",
    sub: "Across industries & sectors",
    color: "#1a3a6e",
  },
  {
    icon: BookOpen,
    label: "5 Programs",
    sub: "BBA, CSE, LLB, MBA, M.Ed",
    color: "#1e6b5f",
  },
];

export default function AboutSnapshot() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              eyebrow="About BITC"
              title="A Legacy of Academic Excellence"
              centered={false}
            />

            <p className="text-gray-600 leading-relaxed mb-6">
              Established in 2003 and affiliated with National University, Bangladesh,
              BITC has grown into one of the most respected higher education institutions
              in the region. With over two decades of academic tradition, we combine
              quality education with holistic development.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Our institution offers a diverse portfolio of programs designed in
              alignment with industry demands, preparing graduates who are not only
              academically proficient but also professionally ready to lead.
            </p>

            <ul className="space-y-3">
              {achievements.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#C9A84C] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-gray-600 text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {highlights.map(({ icon: Icon, label, sub, color }) => (
              <div
                key={label}
                className="flex items-center gap-5 p-6 rounded-2xl bg-[#f0f5fb] border border-gray-100 card-lift"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                  style={{ backgroundColor: color }}
                >
                  <Icon size={26} className="text-white" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-[#0A1628]">
                    {label}
                  </div>
                  <div className="text-gray-500 text-sm">{sub}</div>
                </div>
              </div>
            ))}

            {/* Quote box */}
            <div className="p-6 rounded-2xl bg-[#0A1628] text-white">
              <p className="font-display text-lg font-semibold italic text-[#C9A84C] mb-2">
                "Committed to building futures, one student at a time."
              </p>
              <p className="text-gray-400 text-sm">— BITC Vision Statement</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
