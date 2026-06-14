"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter, FileText, ExternalLink, AlertCircle, Download } from "lucide-react";
import { notices, type NoticeCategory } from "@/data/notices";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";

const CATEGORIES: NoticeCategory[] = ["Exam", "Result", "Holiday", "General", "Admission", "Urgent"];

const categoryBadgeMap: Record<NoticeCategory, "gold" | "navy" | "green" | "red" | "gray"> = {
  Exam: "navy",
  Result: "green",
  Holiday: "gold",
  General: "gray",
  Admission: "gold",
  Urgent: "red",
};

export default function NoticesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<NoticeCategory | "All">("All");

  const filtered = useMemo(() => {
    return notices.filter((n) => {
      const matchesSearch = n.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || n.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="py-24 text-white text-center"
        style={{ background: "linear-gradient(135deg, #0A1628 0%, #112550 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C] mb-4">
            Notice Board
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Official Notice Board
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Stay up-to-date with the latest announcements, exam schedules, and results.
          </p>
        </div>
      </div>

      {/* Internal Notices */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="BITC Notices"
            title="Internal Notices"
            subtitle="Official announcements from BITC administration."
          />

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search notices..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/40 focus:border-[#C9A84C]"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={16} className="text-gray-400" />
              {(["All", ...CATEGORIES] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[#0A1628] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Notice list */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <FileText size={40} className="mx-auto mb-3 opacity-30" />
              <p>No notices found matching your search.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((notice) => (
                <div
                  key={notice.id}
                  className={`flex items-start gap-4 p-5 rounded-2xl border transition-all duration-200 hover:shadow-md ${
                    notice.isUrgent
                      ? "border-red-100 bg-red-50/50"
                      : "border-gray-100 bg-white hover:border-gray-200"
                  }`}
                >
                  {notice.isUrgent && (
                    <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                  )}
                  {!notice.isUrgent && (
                    <FileText size={20} className="text-[#C9A84C] flex-shrink-0 mt-0.5" />
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <h3 className="font-semibold text-[#0A1628] text-sm leading-snug">
                        {notice.title}
                      </h3>
                      <Badge variant={categoryBadgeMap[notice.category] || "gray"} size="sm">
                        {notice.category}
                      </Badge>
                    </div>
                    {notice.description && (
                      <p className="text-xs text-gray-500 leading-relaxed mb-2 line-clamp-2">
                        {notice.description}
                      </p>
                    )}
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-gray-400">
                        {new Date(notice.date).toLocaleDateString("en-BD", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      {notice.fileUrl && (
                        <a
                          href={notice.fileUrl}
                          className="flex items-center gap-1 text-xs text-[#C9A84C] font-semibold hover:underline"
                        >
                          <Download size={12} /> Download
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* NU Official Notices */}
      <section className="py-20 bg-[#f0f5fb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="National University"
            title="NU Official Notices"
            subtitle="Important notices from the National University of Bangladesh."
          />
          <div className="bg-[#0A1628] rounded-2xl p-8 text-white text-center">
            <div className="text-4xl mb-4">🏛️</div>
            <h3 className="font-display text-xl font-bold mb-3">
              National University Official Notice Board
            </h3>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              For official NU announcements including results, exam schedules, registration dates,
              and university-level directives, please visit the NU official website.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.nu.ac.bd/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-[#0A1628] font-bold rounded-xl hover:bg-[#d4b96a] transition-colors"
              >
                NU Notice Board <ExternalLink size={15} />
              </a>
              <a
                href="http://results.nu.ac.bd/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-xl hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              >
                Check Results <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
