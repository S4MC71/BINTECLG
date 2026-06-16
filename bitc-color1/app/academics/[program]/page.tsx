import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, BookOpen, Award } from "lucide-react";
import { programs } from "@/data/programs";

interface Props {
  params: Promise<{ program: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { program: slug } = await params;
  const program = programs.find((p) => p.id === slug);
  if (!program) return { title: "Program Not Found" };
  return {
    title: `${program.shortName} — ${program.name}`,
    description: program.description,
  };
}

export function generateStaticParams() {
  return programs.map((p) => ({ program: p.id }));
}

export default async function ProgramPage({ params }: Props) {
  const { program: slug } = await params;
  const program = programs.find((p) => p.id === slug);
  if (!program) notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="py-24 text-white"
        style={{ background: "linear-gradient(135deg, #0A1628 0%, #112550 100%)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/academics"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#C9A84C] mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Academics
          </Link>
          <div className="text-5xl mb-4">{program.icon}</div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">
            {program.shortName}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-6">{program.name}</p>
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-[#C9A84C]" />
              {program.duration}
            </span>
            <span className="flex items-center gap-2">
              <BookOpen size={16} className="text-[#C9A84C]" />
              {program.totalCredits} Total Credits
            </span>
            <span className="flex items-center gap-2">
              <Award size={16} className="text-[#C9A84C]" />
              {program.faculty}
            </span>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-[#0A1628] mb-4">
              About This Program
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">{program.description}</p>

            {/* Highlights */}
            <h2 className="font-display text-xl font-bold text-[#0A1628] mb-4">
              Program Highlights
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {program.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-gray-600 bg-[#f0f5fb] rounded-xl px-4 py-2.5">
                  <span className="text-[#C9A84C]">✓</span> {h}
                </li>
              ))}
            </ul>

            {/* Syllabus */}
            {program.syllabus.length > 0 && (
              <>
                <h2 className="font-display text-xl font-bold text-[#0A1628] mb-6">
                  Semester-wise Syllabus
                </h2>
                {program.syllabus.map((sem) => (
                  <div key={sem.semester} className="mb-6">
                    <h3 className="font-semibold text-[#0A1628] mb-3 text-base">
                      Semester {sem.semester}
                    </h3>
                    <div className="rounded-xl overflow-hidden border border-gray-100">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-[#0A1628] text-white">
                            <th className="text-left px-4 py-2.5">Course Code</th>
                            <th className="text-left px-4 py-2.5">Course Name</th>
                            <th className="text-center px-4 py-2.5">Credits</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sem.courses.map((course, i) => (
                            <tr key={course.code} className={i % 2 === 0 ? "bg-white" : "bg-[#f0f5fb]"}>
                              <td className="px-4 py-2.5 font-mono text-xs text-[#C9A84C]">{course.code}</td>
                              <td className="px-4 py-2.5 text-gray-700">{course.name}</td>
                              <td className="px-4 py-2.5 text-center text-gray-600">{course.credits}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-[#0A1628] text-white rounded-2xl p-6 mb-6">
              <h3 className="font-display text-lg font-bold mb-4 text-[#C9A84C]">
                Quick Facts
              </h3>
              <dl className="space-y-3 text-sm">
                {[
                  ["Program", program.shortName],
                  ["Duration", program.duration],
                  ["Credits", `${program.totalCredits}`],
                  ["Faculty", program.faculty],
                  ["Affiliation", "National University, BD"],
                ].map(([key, val]) => (
                  <div key={key} className="flex justify-between">
                    <dt className="text-gray-400">{key}</dt>
                    <dd className="text-white font-medium text-right max-w-[60%]">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Link
              href="/admissions"
              className="block text-center w-full px-6 py-3 bg-[#C9A84C] text-[#0A1628] font-bold rounded-xl hover:bg-[#d4b96a] transition-colors"
            >
              Apply for {program.shortName}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
