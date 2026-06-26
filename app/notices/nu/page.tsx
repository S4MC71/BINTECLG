import Link from "next/link";
import { ExternalLink } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function NuNoticePage() {
  return (
    <div className="min-h-screen bg-[#f2faf6]">
      {/* Hero */}
      <div
        className="py-20 text-white text-center"
        style={{ background: "linear-gradient(135deg, #011a0e 0%, #022c16 50%, #004D2C 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#F0D060] mb-5">
            Notice Board
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">
            Notice <span style={{ color: "#F0D060" }}>Board</span>
          </h1>
          <p className="text-green-200/80 text-lg max-w-2xl mx-auto">
            Stay informed with the latest official announcements.
          </p>
          {/* Tab Links */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <Link
              href="/notices/bitc"
              className="px-5 py-2 rounded-full text-sm font-semibold border border-white/30 text-white hover:border-[#D4A820] hover:text-[#F0D060] transition-colors"
            >
              BITC Notice
            </Link>
            <span className="px-5 py-2 rounded-full text-sm font-bold bg-[#D4A820] text-[#022c16]">
              NU Official Notice
            </span>
          </div>
        </div>
      </div>

      {/* NU Official Notices Section */}
      <section className="py-20 bg-[#f2faf6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="National University"
            title="NU Official Notices"
            subtitle="Important notices from the National University of Bangladesh."
          />

          <div className="bg-[#022c16] rounded-2xl p-10 text-white text-center shadow-xl">
            <div className="text-5xl mb-5">🏛️</div>
            <h3 className="font-display text-2xl font-bold mb-3">
              National University Official Notice Board
            </h3>
            <p className="text-green-300/70 text-sm mb-8 max-w-lg mx-auto leading-relaxed">
              For official NU announcements including results, exam schedules, registration dates,
              and university-level directives, please visit the NU official website.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.nu.ac.bd/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#D4A820] text-[#022c16] font-bold rounded-xl hover:bg-[#F0D060] transition-colors shadow-md"
              >
                NU Notice Board <ExternalLink size={15} />
              </a>
              <a
                href="http://results.nu.ac.bd/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 border border-white/30 text-white font-semibold rounded-xl hover:border-[#D4A820] hover:text-[#F0D060] transition-colors"
              >
                Check Results <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[
              {
                label: "Admission Portal",
                href: "http://admissions.nu.ac.bd/",
                desc: "Honours & Masters admission",
                icon: "🎓",
              },
              {
                label: "Student Registration",
                href: "https://www.nu.ac.bd/",
                desc: "Student registration & renewal",
                icon: "📋",
              },
              {
                label: "Exam Schedule",
                href: "https://www.nu.ac.bd/",
                desc: "Upcoming exam routines",
                icon: "📅",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-[#006B3C]/10 hover:border-[#006B3C]/30 hover:shadow-md transition-all duration-200 group"
              >
                <span className="text-3xl mb-3">{item.icon}</span>
                <h4 className="font-semibold text-[#004D2C] text-sm mb-1 group-hover:text-[#006B3C] transition-colors">
                  {item.label}
                </h4>
                <p className="text-xs text-[#5a6a60]">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
