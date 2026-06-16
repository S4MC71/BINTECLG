"use client";

import { useState, useMemo } from "react";
import { Search, Filter, FileText, ExternalLink, AlertCircle, Download } from "lucide-react";
import { notices, type NoticeCategory } from "@/data/notices";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";

const CATEGORIES: NoticeCategory[] = ["Exam", "Result", "Holiday", "General", "Admission", "Urgent"];

const categoryBadgeMap: Record<NoticeCategory, "gold" | "navy" | "green" | "red" | "gray"> = {
  Exam:      "navy",
  Result:    "green",
  Holiday:   "gold",
  General:   "gray",
  Admission: "gold",
  Urgent:    "red",
};

export default function NoticesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<NoticeCategory | "All">("All");

  const filtered = useMemo(() => {
    return notices.filter((n) => {
      const matchesSearch   = n.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || n.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero — Green to Navy ── */}
      <div
        className="py-24 text-white text-center"
        style={{ background: "linear-gradient(135deg, var(--secondary-navy) 0%, #172B6B 50%, var(--primary-green) 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4 px-3 py-1.5 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#a7f3d0" }}
          >
            Notice Board
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-white">
            Official Notice Board
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#bfdbfe" }}>
            Stay up-to-date with the latest announcements, exam schedules, and results.
          </p>
        </div>
      </div>

      {/* ── Internal Notices ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="BITC Notices" title="Internal Notices" subtitle="Official announcements from BITC administration." />

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "var(--text-muted)" }} />
              <input
                type="text"
                placeholder="Search notices..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border rounded-xl text-sm focus:outline-none transition-colors"
                style={{
                  borderColor: "var(--bg-card-border)",
                  color: "var(--text-dark-slate)",
                }}
                onFocus={e => (e.currentTarget.style.borderColor = "var(--primary-green)")}
                onBlur={e => (e.currentTarget.style.borderColor = "var(--bg-card-border)")}
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={16} style={{ color: "var(--text-muted)" }} />
              {(["All", ...CATEGORIES] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
                  style={{
                    backgroundColor: activeCategory === cat ? "var(--secondary-navy)" : "#f1f5f9",
                    color: activeCategory === cat ? "#fff" : "var(--text-muted)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Notice list */}
          {filtered.length === 0 ? (
            <div className="text-center py-16" style={{ color: "var(--text-muted)" }}>
              <FileText size={40} className="mx-auto mb-3 opacity-30" />
              <p>No notices found matching your search.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((notice) => (
                <div
                  key={notice.id}
                  className="flex items-start gap-4 p-5 rounded-2xl border transition-all duration-200 hover:shadow-md"
                  style={{
                    borderColor: notice.isUrgent ? "#fecaca" : "var(--bg-card-border)",
                    backgroundColor: notice.isUrgent ? "#fef2f2" : "#fff",
                  }}
                >
                  {notice.isUrgent ? (
                    <AlertCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent-red)" }} />
                  ) : (
                    <FileText size={20} className="flex-shrink-0 mt-0.5" style={{ color: "var(--primary-green)" }} />
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <h3 className="font-semibold text-sm leading-snug" style={{ color: "var(--text-dark-slate)" }}>
                        {notice.title}
                      </h3>
                      <Badge variant={categoryBadgeMap[notice.category] || "gray"} size="sm">
                        {notice.category}
                      </Badge>
                    </div>
                    {notice.description && (
                      <p className="text-xs leading-relaxed mb-2 line-clamp-2" style={{ color: "var(--text-muted)" }}>
                        {notice.description}
                      </p>
                    )}
                    <div className="flex items-center gap-4">
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                        {new Date(notice.date).toLocaleDateString("en-BD", { day: "numeric", month: "long", year: "numeric" })}
                      </span>
                      {notice.fileUrl && (
                        <a
                          href={notice.fileUrl}
                          className="flex items-center gap-1 text-xs font-semibold hover:underline"
                          style={{ color: "var(--primary-green)" }}
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

      {/* ── NU Official Notices — Navy background ── */}
      <section className="py-20" style={{ backgroundColor: "var(--bg-lite-grey)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="National University"
            title="NU Official Notices"
            subtitle="Important notices from the National University of Bangladesh."
          />
          <div
            className="rounded-2xl p-8 text-white text-center"
            style={{ background: "linear-gradient(135deg, var(--secondary-navy) 0%, var(--primary-green) 100%)" }}
          >
            <div className="text-4xl mb-4">🏛️</div>
            <h3 className="font-display text-xl font-bold mb-3">
              National University Official Notice Board
            </h3>
            <p className="text-sm mb-6 max-w-lg mx-auto" style={{ color: "#bfdbfe" }}>
              For official NU announcements including results, exam schedules, registration dates,
              and university-level directives, please visit the NU official website.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.nu.ac.bd/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-xl transition-colors text-white"
                style={{ backgroundColor: "var(--accent-red)" }}
              >
                NU Notice Board <ExternalLink size={15} />
              </a>
              <a
                href="http://results.nu.ac.bd/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border font-semibold rounded-xl transition-colors text-white border-white/40 hover:border-white"
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
