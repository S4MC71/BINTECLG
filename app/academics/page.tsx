import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { programs, programsByFaculty } from "@/data/programs";
import { facultyMembers } from "@/data/faculty";

export const metadata: Metadata = {
  title: "Academics — Programs, Faculty & Calendar",
  description:
    "Explore BITC's academic programs including BBA, CSE, LLB, MBA, and M.Ed. View faculty profiles, academic calendar, and syllabus details.",
};

const facultyIcons: Record<string, string> = {
  "Business Studies": "💼",
  "Science & IT": "💻",
  "Law": "⚖️",
  "Education": "📚",
};

export default function AcademicsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        className="py-24 text-white text-center"
        style={{ background: "linear-gradient(135deg, #0A1628 0%, #112550 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C] mb-4">
            Academics
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Academic Programs
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Nationally recognized programs designed to launch your professional career.
          </p>
        </div>
      </div>

      {/* Programs by Faculty */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Faculties"
            title="Programs by Department"
            subtitle="Five programs across four faculties, all affiliated with National University, Bangladesh."
          />

          {Object.entries(programsByFaculty).map(([faculty, progs]) => (
            <div key={faculty} className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{facultyIcons[faculty] || "🎓"}</span>
                <h2 className="font-display text-2xl font-bold text-[#0A1628]">
                  Faculty of {faculty}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {progs.map((program) => (
                  <div
                    key={program.id}
                    className="bg-[#f0f5fb] rounded-2xl p-6 border border-gray-100 card-lift"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-display text-xl font-bold text-[#0A1628]">
                          {program.shortName}
                        </div>
                        <div className="text-sm text-gray-500">{program.name}</div>
                      </div>
                      <span className="text-3xl">{program.icon}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                      <span>⏱ {program.duration}</span>
                      <span>📋 {program.totalCredits} Credits</span>
                    </div>
                    <Link
                      href={`/academics/${program.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A84C] hover:gap-3 transition-all duration-200"
                    >
                      View Syllabus & Details <ArrowRight size={14} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Faculty Members */}
      <section id="faculty" className="py-20 bg-[#f0f5fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Faculty"
            title="Meet Our Expert Faculty"
            subtitle="Experienced academics and industry professionals dedicated to student success."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-lift text-center"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-white mx-auto mb-4"
                  style={{ backgroundColor: member.imageColor }}
                >
                  {member.imageInitials}
                </div>
                <h3 className="font-display text-base font-bold text-[#0A1628] mb-1">
                  {member.name}
                </h3>
                <p className="text-xs text-[#C9A84C] font-medium mb-1">{member.designation}</p>
                <p className="text-xs text-gray-500 mb-2">{member.department}</p>
                <p className="text-xs text-gray-400 mb-3">{member.specialization}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.researchAreas.slice(0, 2).map((area) => (
                    <span
                      key={area}
                      className="text-[10px] px-2 py-0.5 bg-[#f0f5fb] text-[#0A1628] rounded-full border border-gray-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section id="calendar" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Academic Calendar"
            title="Academic Calendar 2025–26"
            subtitle="Download the official academic calendar for all important dates, exam schedules, and holidays."
          />
          <div className="bg-[#0A1628] rounded-2xl p-10 text-white">
            <GraduationCap size={48} className="text-[#C9A84C] mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold mb-2">
              BITC Academic Calendar 2025–26
            </h3>
            <p className="text-gray-400 mb-6 text-sm">
              Includes semester dates, examination schedule, holiday list, and important deadlines.
            </p>
            <button className="px-8 py-3 bg-[#C9A84C] text-[#0A1628] font-bold rounded-xl hover:bg-[#d4b96a] transition-colors">
              Download PDF Calendar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
