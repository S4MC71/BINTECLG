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
  { icon: Award,    label: "Best College Award", sub: "National Education Summit 2025",  bg: "var(--primary-green)" },
  { icon: Users,    label: "5,000+ Alumni",      sub: "Across industries & sectors",     bg: "var(--secondary-navy)" },
  { icon: BookOpen, label: "5 Programs",          sub: "BBA, CSE, LLB, MBA, M.Ed",       bg: "var(--primary-green)" },
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
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader eyebrow="About BITC" title="A Legacy of Academic Excellence" centered={false} />

            <p className="leading-relaxed mb-6 text-base" style={{ color: "var(--text-muted)" }}>
              Established in 2003 and affiliated with National University, Bangladesh,
              BITC has grown into one of the most respected higher education institutions
              in the region. With over two decades of academic tradition, we combine
              quality education with holistic development.
            </p>

            <p className="leading-relaxed mb-8 text-base" style={{ color: "var(--text-muted)" }}>
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
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--primary-green)" }} />
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {highlights.map(({ icon: Icon, label, sub, bg }) => (
              <div
                key={label}
                className="flex items-center gap-5 p-6 rounded-2xl border card-lift"
                style={{ backgroundColor: "var(--bg-lite-grey)", borderColor: "var(--bg-card-border)" }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                  style={{ backgroundColor: bg }}
                >
                  <Icon size={26} className="text-white" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold" style={{ color: "var(--text-dark-slate)" }}>
                    {label}
                  </div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>{sub}</div>
                </div>
              </div>
            ))}

            {/* Quote box — updated to green */}
            <div
              className="p-6 rounded-2xl text-white"
              style={{ backgroundColor: "var(--primary-green)" }}
            >
              <p className="font-display text-lg font-semibold italic mb-2" style={{ color: "#a7f3d0" }}>
                &ldquo;Committed to building futures, one student at a time.&rdquo;
              </p>
              <p className="text-sm" style={{ color: "#6ee7b7" }}>— BITC Vision Statement</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
