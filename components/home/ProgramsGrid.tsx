"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programs } from "@/data/programs";
import SectionHeader from "@/components/ui/SectionHeader";

const facultyColors: Record<string, { bg: string; accent: string; text: string }> = {
  "Business Studies": { bg: "#1e3a5f", accent: "#C9A84C", text: "#C9A84C" },
  "Science & IT":    { bg: "#1e5f3d", accent: "#4ade80", text: "#4ade80" },
  "Law":             { bg: "#3d1e5f", accent: "#c084fc", text: "#c084fc" },
  "Education":       { bg: "#5f3d1e", accent: "#fb923c", text: "#fb923c" },
};

export default function ProgramsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Academic Programs"
          title="Discover Our Programs"
          subtitle="Five professionally recognized undergraduate and postgraduate programs designed to launch your career."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => {
            const colors = facultyColors[program.faculty] || { bg: "#1e3a5f", accent: "#C9A84C", text: "#C9A84C" };

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flip-card h-72"
              >
                <div className="flip-card-inner h-full">
                  {/* Front */}
                  <div
                    className="flip-card-front flex flex-col items-center justify-center p-8 shadow-lg border border-gray-100"
                    style={{
                      background: `linear-gradient(145deg, ${colors.bg} 0%, ${colors.bg}cc 100%)`,
                    }}
                  >
                    <div className="text-5xl mb-4">{program.icon}</div>
                    <h3 className="font-display text-2xl font-bold text-white text-center mb-2">
                      {program.shortName}
                    </h3>
                    <p className="text-sm text-center leading-snug" style={{ color: `${colors.accent}cc` }}>
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
                    style={{ background: `linear-gradient(145deg, ${colors.bg}f0 0%, ${colors.bg} 100%)` }}
                  >
                    <div>
                      <h3 className="font-display text-lg font-bold text-white mb-2">
                        {program.shortName} — {program.faculty}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed mb-4">
                        {program.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="text-xs text-gray-400">
                          <span className="block font-semibold text-white">Duration</span>
                          {program.duration}
                        </div>
                        <div className="text-xs text-gray-400">
                          <span className="block font-semibold text-white">Credits</span>
                          {program.totalCredits} total
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/academics/${program.id}`}
                      className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:gap-3"
                      style={{ backgroundColor: colors.accent, color: "#0A1628" }}
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
            className="h-72 rounded-2xl border-2 border-dashed border-[#C9A84C]/40 flex flex-col items-center justify-center p-8 bg-[#fdf8ee] hover:bg-[#C9A84C]/10 transition-colors duration-300 group"
          >
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="font-display text-lg font-bold text-[#0A1628] text-center mb-3">
              Ready to Join Us?
            </h3>
            <p className="text-sm text-gray-500 text-center mb-5">
              Start your application today and take the first step toward your future.
            </p>
            <Link
              href="/admissions"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#C9A84C] text-[#0A1628] text-sm font-bold rounded-xl hover:bg-[#d4b96a] transition-colors group-hover:gap-3 duration-200"
            >
              Apply Now <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
