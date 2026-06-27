"use client";

import { AlertCircle, Bell } from "lucide-react";
import { tickerNotices } from "@/data/notices";
import Link from "next/link";

export default function NoticeTicker() {
  // Duplicate array to create seamless infinite loop
  const items = [...tickerNotices, ...tickerNotices];

  return (
    <Link
      href="/notices"
      className="block bg-white border-b border-[#006B3C]/20 overflow-hidden hover:bg-neutral-50/50 transition-colors"
      aria-label="Latest notices ticker"
    >
      <div className="flex items-stretch h-10">
        {/* Label badge — Crimson Red */}
        <div className="flex items-center gap-1.5 px-3 sm:px-4 bg-[#C41E1E] flex-shrink-0 z-10">
          <Bell size={12} className="text-white" aria-hidden="true" />
          <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest whitespace-nowrap hidden sm:block">
            Latest Notices
          </span>
          <span className="text-white text-[10px] font-bold uppercase tracking-widest whitespace-nowrap sm:hidden">
            Notices
          </span>
        </div>

        {/* Separator */}
        <div className="w-px bg-[#006B3C]/30 flex-shrink-0" />

        {/* Scrolling ticker */}
        <div className="flex-1 overflow-hidden relative min-w-0">
          <div className="ticker-track">
            {items.map((notice, index) => (
              <span
                key={`${notice.id}-${index}`}
                className="inline-flex items-center gap-2 pr-10 text-xs sm:text-sm text-[#1a2e22] hover:text-[#006B3C] transition-colors whitespace-nowrap leading-10"
              >
                {notice.isUrgent ? (
                  <AlertCircle size={11} className="text-[#C41E1E] flex-shrink-0" aria-hidden="true" />
                ) : (
                  <span className="w-1 h-1 rounded-full bg-[#006B3C]/50 flex-shrink-0 inline-block" />
                )}
                <span
                  className={`font-medium ${
                    notice.isUrgent ? "text-[#9B1515]" : "text-[#1a2e22]"
                  }`}
                >
                  {notice.title}
                </span>
                <span className="text-[#5a6a60] text-[10px]">
                  {new Date(notice.date).toLocaleDateString("en-BD", {
                    day: "numeric",
                    month: "short",
                  })}
                </span>
                <span className="text-[#D4A820]/40 ml-4">|</span>
              </span>
            ))}
          </div>

          {/* Fade edges for smoother visual */}
          <div className="absolute left-0 top-0 h-full w-8 pointer-events-none"
            style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
          />
          <div className="absolute right-0 top-0 h-full w-12 pointer-events-none"
            style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
          />
        </div>
      </div>
    </Link>
  );
}
