import { Bell } from "lucide-react";
import Link from "next/link";
import { notices as localNotices, type Notice } from "@/data/notices";
import NoticeContent from "@/components/notices/NoticeContent";

export const metadata = {
  title: "Notice Board — Official Announcements",
  description: "Stay informed with the latest academic, exam, result, and event announcements from Barisal Information Technology College.",
};

// Disable static caching on the Next.js server to ensure real-time notice updates
export const revalidate = 0; 

async function getNotices(): Promise<Notice[]> {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "https://api.bitc.edu.bd";
  try {
    const res = await fetch(`${backendUrl}/api/notices`, {
      cache: "no-store", // Bypass all Next.js caching to fetch fresh notices dynamically
    });
    if (!res.ok) {
      throw new Error("Failed to fetch notices");
    }
    return await res.json();
  } catch (err) {
    console.error("Backend notices fetch failed, using local fallback:", err);
    return localNotices;
  }
}

export default async function BitcNoticePage() {
  const notices = await getNotices();

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
            Notice <span className="text-[#F0D060]">Board</span>
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

      {/* Interactive Notices Content */}
      <NoticeContent initialNotices={notices} />
    </div>
  );
}
