"use client";

import { useState, useMemo } from "react";
import {
  Search,
  Filter,
  FileText,
  ExternalLink,
  AlertCircle,
  Download,
  ChevronRight,
  Bell,
  X,
} from "lucide-react";
import { notices, type NoticeCategory, type NoticeDepartment } from "@/data/notices";
import Link from "next/link";

const CATEGORIES: (NoticeCategory | "All")[] = [
  "All", "Academic", "Exam", "Admission", "Event", "General", "Holiday", "Result", "Urgent",
];
const DEPARTMENTS: (NoticeDepartment | "All Departments")[] = [
  "All Departments", "BBA", "CSE", "BTHM", "MBA", "MTHM",
];

export default function BitcNoticePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<NoticeCategory | "All">("All");
  const [activeDepartment, setActiveDepartment] = useState<NoticeDepartment | "All Departments">("All Departments");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    return notices.filter((n) => {
      const matchesSearch = n.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || n.category === activeCategory;
      const matchesDepartment =
        activeDepartment === "All Departments" || n.department === activeDepartment;
      return matchesSearch && matchesCategory && matchesDepartment;
    });
  }, [search, activeCategory, activeDepartment]);

  const hasActiveFilters =
    activeCategory !== "All" || activeDepartment !== "All Departments";

  return (
    <div className="min-h-screen bg-[#f2faf6]">
      {/* Hero */}
      <div
        className="py-20 text-white text-center"
        style={{ background: "linear-gradient(135deg, #011a0e 0%, #022c16 50%, #004D2C 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F0D060] mb-5">
            <Bell size={14} />
            Latest Updates
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">
            Notice <span style={{ color: "#F0D060" }}>Board</span>
          </h1>
          <p className="text-green-200/80 text-lg max-w-2xl mx-auto">
            Stay informed with the latest official announcements from BITC.
          </p>
          {/* Tab Links */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className="px-5 py-2 rounded-full text-sm font-bold bg-[#D4A820] text-[#022c16]">
              BITC Notice
            </span>
            <Link
              href="/notices/nu"
              className="px-5 py-2 rounded-full text-sm font-semibold border border-white/30 text-white hover:border-[#D4A820] hover:text-[#F0D060] transition-colors"
            >
              NU Official Notice
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── MOBILE: Search + Filter Toggle ── */}
        <div className="lg:hidden mb-4">
          {/* Search + Filter button row */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5a6a60]" />
              <input
                type="text"
                placeholder="Search notices..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-[#006B3C]/20 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/30 focus:border-[#006B3C] bg-white shadow-sm"
              />
            </div>
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="relative flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-200"
              style={{
                background: mobileFilterOpen || hasActiveFilters
                  ? "linear-gradient(135deg, #006B3C, #004D2C)"
                  : "#ffffff",
                border: mobileFilterOpen || hasActiveFilters
                  ? "none"
                  : "1px solid rgba(0,107,60,0.2)",
              }}
              aria-label="Toggle filters"
            >
              <Filter
                size={18}
                className={mobileFilterOpen || hasActiveFilters ? "text-white" : "text-[#5a6a60]"}
              />
              {/* Active filter dot */}
              {hasActiveFilters && !mobileFilterOpen && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#D4A820]" />
              )}
            </button>
          </div>

          {/* Expandable Filter Panel */}
          {mobileFilterOpen && (
            <div className="mt-2 bg-white rounded-2xl border border-[#006B3C]/15 shadow-lg overflow-hidden">
              {/* Panel Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#006B3C]/10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#5a6a60]">
                  Filters
                </span>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="text-xs font-semibold text-[#006B3C] hover:text-[#004D2C] transition-colors"
                >
                  Close
                </button>
              </div>

              <div className="px-4 py-4 space-y-5">
                {/* Department chips */}
                <div>
                  <p className="text-xs font-semibold text-[#004D2C] mb-2.5">Department</p>
                  <div className="flex flex-wrap gap-2">
                    {DEPARTMENTS.map((dept) => (
                      <button
                        key={dept}
                        onClick={() => setActiveDepartment(dept)}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                        style={
                          activeDepartment === dept
                            ? { background: "linear-gradient(135deg, #006B3C, #004D2C)", color: "#fff" }
                            : { background: "#e8f5ee", color: "#5a6a60" }
                        }
                      >
                        {dept === "All Departments" ? "All Depts" : dept}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category chips */}
                <div>
                  <p className="text-xs font-semibold text-[#004D2C] mb-2.5">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                        style={
                          activeCategory === cat
                            ? { background: "linear-gradient(135deg, #022c16, #006B3C)", color: "#fff" }
                            : { background: "#e8f5ee", color: "#5a6a60" }
                        }
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reset */}
                {hasActiveFilters && (
                  <button
                    onClick={() => {
                      setActiveCategory("All");
                      setActiveDepartment("All Departments");
                    }}
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#C41E1E] hover:text-[#9B1515] transition-colors"
                  >
                    <X size={12} /> Clear all filters
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Active filter tags */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 mt-3">
              {activeDepartment !== "All Departments" && (
                <span
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ background: "#006B3C" }}
                >
                  {activeDepartment}
                  <button onClick={() => setActiveDepartment("All Departments")}>
                    <X size={10} />
                  </button>
                </span>
              )}
              {activeCategory !== "All" && (
                <span
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ background: "#022c16" }}
                >
                  {activeCategory}
                  <button onClick={() => setActiveCategory("All")}>
                    <X size={10} />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* ── DESKTOP: Two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Notice List */}
          <div className="flex-1 min-w-0">
            {/* Desktop search bar */}
            <div className="relative mb-6 hidden lg:block">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5a6a60]" />
              <input
                type="text"
                placeholder="Search notices..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 border border-[#006B3C]/20 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/30 focus:border-[#006B3C] bg-white shadow-sm"
              />
            </div>

            {/* Result count */}
            <p className="text-xs text-[#5a6a60] mb-4 pl-1">
              {filtered.length} notice{filtered.length !== 1 ? "s" : ""} found
              {activeCategory !== "All" && ` in "${activeCategory}"`}
              {activeDepartment !== "All Departments" && ` for ${activeDepartment}`}
            </p>

            {filtered.length === 0 ? (
              <div className="text-center py-20 text-[#5a6a60] bg-white rounded-2xl border border-[#006B3C]/10 shadow-sm">
                <FileText size={40} className="mx-auto mb-3 opacity-30" />
                <p>No notices found matching your search.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filtered.map((notice) => (
                  <div
                    key={notice.id}
                    className={`flex items-start gap-4 p-5 rounded-2xl border bg-white transition-all duration-200 hover:shadow-md ${
                      notice.isUrgent
                        ? "border-[#C41E1E]/20 border-l-4 border-l-[#C41E1E]"
                        : "border-[#006B3C]/10 hover:border-[#006B3C]/25"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ background: notice.isUrgent ? "#fef2f2" : "#e8f5ee" }}
                    >
                      {notice.isUrgent ? (
                        <AlertCircle size={22} className="text-[#C41E1E]" />
                      ) : (
                        <FileText size={22} className="text-[#006B3C]" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Badges */}
                      <div className="flex items-center gap-1.5 flex-wrap mb-1.5">
                        <span
                          className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
                          style={{ background: "#e8f5ee", color: "#006B3C" }}
                        >
                          {notice.category}
                        </span>
                        {notice.department !== "General" && (
                          <span
                            className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
                            style={{ background: "#fef9e7", color: "#B8912A" }}
                          >
                            {notice.department}
                          </span>
                        )}
                        {notice.isUrgent && (
                          <span
                            className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
                            style={{ background: "#fef2f2", color: "#C41E1E" }}
                          >
                            🔥 Urgent
                          </span>
                        )}
                      </div>

                      <h3 className="font-semibold text-[#004D2C] text-sm leading-snug mb-1">
                        {notice.title}
                      </h3>

                      {notice.description && (
                        <p className="text-xs text-[#5a6a60] leading-relaxed mb-2 line-clamp-1">
                          Click to view full details...
                        </p>
                      )}

                      <div className="flex items-center gap-3 flex-wrap">
                        <button className="text-xs font-semibold text-[#006B3C] hover:text-[#004D2C] flex items-center gap-0.5 transition-colors">
                          Read Details <ChevronRight size={12} />
                        </button>
                        {notice.fileUrl && (
                          <a
                            href={notice.fileUrl}
                            className="flex items-center gap-1 text-xs text-[#D4A820] font-semibold hover:text-[#B8912A] hover:underline"
                          >
                            <Download size={11} /> Download
                          </a>
                        )}
                        <span className="text-xs text-[#5a6a60]/60 ml-auto">
                          {new Date(notice.date).toLocaleDateString("en-BD", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ── DESKTOP Sidebar ── */}
          <aside className="hidden lg:flex w-72 flex-shrink-0 flex-col gap-5">
            {/* Search */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#006B3C]/10">
              <h3 className="font-semibold text-[#004D2C] text-sm mb-3 flex items-center gap-2">
                <Search size={15} className="text-[#006B3C]" />
                Search Notices
              </h3>
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a6a60]/40" />
                <input
                  type="text"
                  placeholder="Keywords..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-8 pr-3 py-2.5 border border-[#006B3C]/20 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#006B3C]/20 focus:border-[#006B3C] bg-[#f2faf6]"
                />
              </div>
            </div>

            {/* Filter by Department */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#006B3C]/10">
              <h3 className="font-semibold text-[#004D2C] text-sm mb-3 flex items-center gap-2">
                <Filter size={15} className="text-[#006B3C]" />
                Filter by Department
              </h3>
              <div className="space-y-1">
                {DEPARTMENTS.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setActiveDepartment(dept)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium flex items-center justify-between transition-all duration-200 ${
                      activeDepartment === dept
                        ? "text-white shadow-sm"
                        : "text-[#5a6a60] hover:bg-[#e8f5ee] hover:text-[#006B3C]"
                    }`}
                    style={
                      activeDepartment === dept
                        ? { background: "linear-gradient(90deg, #006B3C, #004D2C)" }
                        : {}
                    }
                  >
                    {dept}
                    {activeDepartment === dept && <ChevronRight size={14} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Category */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#006B3C]/10">
              <h3 className="font-semibold text-[#004D2C] text-sm mb-3 flex items-center gap-2">
                <Filter size={15} className="text-[#006B3C]" />
                Filter by Category
              </h3>
              <div className="space-y-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium flex items-center justify-between transition-all duration-200 ${
                      activeCategory === cat
                        ? "text-white shadow-sm"
                        : "text-[#5a6a60] hover:bg-[#e8f5ee] hover:text-[#006B3C]"
                    }`}
                    style={
                      activeCategory === cat
                        ? { background: "linear-gradient(90deg, #022c16, #006B3C)" }
                        : {}
                    }
                  >
                    {cat}
                    {activeCategory === cat && <ChevronRight size={14} />}
                  </button>
                ))}
              </div>
            </div>

            {/* NU Quick link */}
            <div
              className="rounded-2xl p-5 text-white text-center"
              style={{ background: "linear-gradient(135deg, #022c16, #004D2C)" }}
            >
              <div className="text-3xl mb-3">🏛️</div>
              <h4 className="font-bold text-sm mb-2">NU Official Notice Board</h4>
              <p className="text-green-300/70 text-xs mb-4 leading-relaxed">
                Visit the National University website for NU-level announcements.
              </p>
              <div className="space-y-2">
                <Link
                  href="/notices/nu"
                  className="flex items-center justify-center gap-1.5 w-full px-4 py-2 rounded-xl text-xs font-bold text-[#022c16] hover:opacity-90 transition-opacity"
                  style={{ background: "#D4A820" }}
                >
                  NU Notice Board <ChevronRight size={11} />
                </Link>
                <a
                  href="http://results.nu.ac.bd/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full px-4 py-2 rounded-xl text-xs font-semibold border border-white/20 hover:border-[#D4A820] hover:text-[#F0D060] transition-colors"
                >
                  Check Results <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
