"use client";

import { AlertCircle, Bell } from "lucide-react";
import { tickerNotices } from "@/data/notices";

export default function NoticeTicker() {
  const items = [...tickerNotices, ...tickerNotices];

  return (
    <div
      className="overflow-hidden"
      style={{ backgroundColor: "var(--secondary-navy)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      aria-label="Latest notices ticker"
      role="marquee"
    >
      <div className="flex items-stretch h-10">
        {/* Label badge — Crimson Red */}
        <div
          className="flex items-center gap-1.5 px-3 sm:px-4 flex-shrink-0 z-10"
          style={{ backgroundColor: "var(--accent-red)" }}
        >
          <Bell size={12} className="text-white" aria-hidden="true" />
          <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest whitespace-nowrap hidden sm:block">
            Latest Notices
          </span>
          <span className="text-white text-[10px] font-bold uppercase tracking-widest whitespace-nowrap sm:hidden">
            Notices
          </span>
        </div>

        {/* Separator */}
        <div className="w-px flex-shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />

        {/* Scrolling ticker */}
        <div className="flex-1 overflow-hidden relative min-w-0">
          <div className="ticker-track">
            {items.map((notice, index) => (
              <span
                key={`${notice.id}-${index}`}
                className="inline-flex items-center gap-2 pr-10 text-xs sm:text-sm cursor-pointer transition-colors whitespace-nowrap leading-10"
                style={{ color: "#bfdbfe" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#bfdbfe")}
              >
                {notice.isUrgent ? (
                  <AlertCircle size={11} style={{ color: "#fca5a5" }} className="flex-shrink-0" aria-hidden="true" />
                ) : (
                  <span className="w-1 h-1 rounded-full flex-shrink-0 inline-block" style={{ backgroundColor: "rgba(147,197,253,0.5)" }} />
                )}
                <span
                  className="font-medium"
                  style={{ color: notice.isUrgent ? "#fca5a5" : "#e0f2fe" }}
                >
                  {notice.title}
                </span>
                <span className="text-[10px]" style={{ color: "#93c5fd" }}>
                  {new Date(notice.date).toLocaleDateString("en-BD", { day: "numeric", month: "short" })}
                </span>
                <span className="ml-4" style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
              </span>
            ))}
          </div>

          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 h-full w-8 pointer-events-none"
            style={{ background: `linear-gradient(to right, var(--secondary-navy), transparent)` }}
          />
          <div
            className="absolute right-0 top-0 h-full w-12 pointer-events-none"
            style={{ background: `linear-gradient(to left, var(--secondary-navy), transparent)` }}
          />
        </div>
      </div>
    </div>
  );
}
