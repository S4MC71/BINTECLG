"use client";

import { AlertCircle, Bell } from "lucide-react";
import { tickerNotices } from "@/data/notices";

export default function NoticeTicker() {
  // Duplicate array to create seamless infinite loop
  const items = [...tickerNotices, ...tickerNotices];

  return (
    <div
      className="bg-[#0A1628] border-b border-[#C9A84C]/30 overflow-hidden"
      aria-label="Latest notices ticker"
      role="marquee"
    >
      <div className="flex items-stretch h-10">
        {/* Label badge */}
        <div className="flex items-center gap-1.5 px-3 sm:px-4 bg-[#C9A84C] flex-shrink-0 z-10">
          <Bell size={12} className="text-[#0A1628]" aria-hidden="true" />
          <span className="text-[#0A1628] text-[10px] sm:text-xs font-bold uppercase tracking-widest whitespace-nowrap hidden sm:block">
            Latest Notices
          </span>
          <span className="text-[#0A1628] text-[10px] font-bold uppercase tracking-widest whitespace-nowrap sm:hidden">
            Notices
          </span>
        </div>

        {/* Separator */}
        <div className="w-px bg-[#C9A84C]/40 flex-shrink-0" />

        {/* Scrolling ticker */}
        <div className="flex-1 overflow-hidden relative min-w-0">
          <div className="ticker-track">
            {items.map((notice, index) => (
              <span
                key={`${notice.id}-${index}`}
                className="inline-flex items-center gap-2 pr-10 text-xs sm:text-sm text-gray-300 cursor-pointer hover:text-[#C9A84C] transition-colors whitespace-nowrap leading-10"
              >
                {notice.isUrgent ? (
                  <AlertCircle size={11} className="text-red-400 flex-shrink-0" aria-hidden="true" />
                ) : (
                  <span className="w-1 h-1 rounded-full bg-[#C9A84C]/60 flex-shrink-0 inline-block" />
                )}
                <span
                  className={`font-medium ${
                    notice.isUrgent ? "text-red-300" : "text-gray-200"
                  }`}
                >
                  {notice.title}
                </span>
                <span className="text-gray-500 text-[10px]">
                  {new Date(notice.date).toLocaleDateString("en-BD", {
                    day: "numeric",
                    month: "short",
                  })}
                </span>
                <span className="text-[#C9A84C]/30 ml-4">|</span>
              </span>
            ))}
          </div>

          {/* Fade edges for smoother visual */}
          <div className="absolute left-0 top-0 h-full w-8 pointer-events-none"
            style={{ background: "linear-gradient(to right, #0A1628, transparent)" }}
          />
          <div className="absolute right-0 top-0 h-full w-12 pointer-events-none"
            style={{ background: "linear-gradient(to left, #0A1628, transparent)" }}
          />
        </div>
      </div>
    </div>
  );
}
