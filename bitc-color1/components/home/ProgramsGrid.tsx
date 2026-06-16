"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programs } from "@/data/programs";
import SectionHeader from "@/components/ui/SectionHeader";

/* Faculty colors — mapped to new design system */
const facultyColors: Record<string, { bg: string; accent: string; text: string }> = {
  "Business Studies": { bg: "#1E3A8A", accent: "#93c5fd", text: "#bfdbfe" },  // Navy
  "Science & IT":    { bg: "#065F46", accent: "#6ee7b7", text: "#a7f3d0" },  // Green
  "Law":             { bg: "#1E3A8A", accent: "#a5b4fc", text: "#c7d2fe" },  // Navy-violet
  "Education":       { bg: "#047857", accent: "#6ee7b7", text: "#a7f3d0" },  // Emerald
};

export default function ProgramsGrid() {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--bg-lite-grey)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Academic Programs"
          title="Discover Our Programs"
          subtitle="Five professionally recognized undergraduate and postgraduate programs designed to launch your career."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => {
            const colors = facultyColors[program.faculty] || { bg: "#1E3A8A", accent: "#93c5fd", text: "#bfdbfe" };

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flip-card h-72"
              >
                <div className="flip-card-inner h-full">
                  {/* Front */}
                  <div
                    className="flip-card-front flex flex-col items-center justify-center p-8 shadow-lg border border-white/10"
                    style={{ background: `linear-gradient(145deg, ${colors.bg} 0%, ${colors.bg}dd 100%)` }}
                  >
                    <div className="text-5xl mb-4">{program.icon}</div>
                    <h3 className="font-display text-2xl font-bold text-white text-center mb-2">
                      {program.shortName}
                    </h3>
                    <p className="text-sm text-center leading-snug" style={{ color: `${colors.text}` }}>
                      {program.name}
                    </p>
                    <div
                      className="mt-4 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: `${colors.accent}22`, color: colors.accent, border: `1px solid ${colors.accent}44` }}
                    >
                      {program.faculty}
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className="flip-card-back flex flex-col justify-between p-6 shadow-lg"
                    style={{ background: `linear-gradient(145deg, ${colors.bg} 0%, ${colors.bg}f0 100%)` }}
                  >
                    <div>
                      <h3 className="font-display text-lg font-bold text-white mb-2">
                        {program.shortName} — {program.faculty}
                      </h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "#cbd5e1" }}>
                        {program.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="text-xs" style={{ color: "#94a3b8" }}>
                          <span className="block font-semibold text-white">Duration</span>
                          {program.duration}
                        </div>
                        <div className="text-xs" style={{ color: "#94a3b8" }}>
                          <span className="block font-semibold text-white">Credits</span>
                          {program.totalCredits} total
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/academics/${program.id}`}
                      className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:gap-3 text-white"
                      style={{ backgroundColor: "var(--primary-green)" }}
                    >
                      View Program
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: programs.length * 0.08 }}
            className="h-72 rounded-2xl flex flex-col items-center justify-center p-8 transition-colors duration-300 group border-2 border-dashed"
            style={{
              backgroundColor: "#f0fdf4",
              borderColor: "rgba(6,95,70,0.3)",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#dcfce7")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#f0fdf4")}
          >
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="font-display text-lg font-bold text-center mb-3" style={{ color: "var(--text-dark-slate)" }}>
              Ready to Join Us?
            </h3>
            <p className="text-sm text-center mb-5" style={{ color: "var(--text-muted)" }}>
              Start your application today and take the first step toward your future.
            </p>
            <Link
              href="/admissions"
              className="flex items-center gap-2 px-5 py-2.5 text-white text-sm font-bold rounded-xl transition-colors group-hover:gap-3 duration-200"
              style={{ backgroundColor: "var(--accent-red)" }}
            >
              Apply Now <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
