import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import { Monitor, BookOpen, Building2, Microscope, Wifi, Users, Music, Trophy, Code2, Briefcase, Heart, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Campus Life — Facilities, Clubs & Student Welfare",
  description:
    "Discover BITC's vibrant campus life including modern labs, digital library, cultural clubs, sports activities, and student welfare services.",
};

const facilities = [
  { icon: Monitor, title: "Computer Lab I & II", desc: "100+ high-performance workstations with licensed software suite, dedicated programming environments, and 1 Gbps internet." },
  { icon: BookOpen, title: "Digital Library", desc: "15,000+ physical books, 2,000+ e-journals, JSTOR access, and a quiet reading zone open from 8 AM to 8 PM." },
  { icon: Building2, title: "Smart Classrooms", desc: "20 fully air-conditioned classrooms equipped with projectors, whiteboards, and audio-visual systems for modern learning." },
  { icon: Microscope, title: "Science Lab", desc: "Fully equipped science laboratory for Physics, Chemistry, and Biology practical sessions under professional supervision." },
  { icon: Wifi, title: "Campus Wi-Fi", desc: "Seamless high-speed Wi-Fi coverage across the entire campus including classrooms, library, and common areas." },
  { icon: Users, title: "Student Lounge", desc: "A spacious lounge area for relaxation, group discussions, and casual interaction between classes." },
];

const clubs = [
  { icon: Music, name: "Cultural Club", tag: "Arts & Culture", desc: "Annual cultural fest, drama, debate competitions, music, and poetry events celebrating Bangladeshi culture." },
  { icon: Trophy, name: "Sports Club", tag: "Athletics", desc: "Football, cricket, badminton, and table tennis teams with inter-college tournament participations." },
  { icon: Code2, name: "IT Club", tag: "Technology", desc: "Programming contests, hackathons, tech talks, and workshops on emerging technologies like AI and blockchain." },
  { icon: Heart, name: "Welfare Club", tag: "Community", desc: "Blood donation camps, community service drives, mental health awareness, and student support initiatives." },
  { icon: Briefcase, name: "Business Club", tag: "Entrepreneurship", desc: "Business plan competitions, startup pitches, guest lectures by industry leaders, and networking events." },
  { icon: Video, name: "Media Club", tag: "Media & Journalism", desc: "Campus newsletter, photography, videography, and social media management for BITC's digital presence." },
];

const galleryItems = [
  { label: "Annual Cultural Fest 2024", gradient: "from-purple-600 to-pink-700" },
  { label: "Science Fair Winners", gradient: "from-blue-600 to-indigo-700" },
  { label: "Convocation 2024", gradient: "from-amber-500 to-orange-700" },
  { label: "Sports Day 2024", gradient: "from-green-600 to-teal-700" },
  { label: "IT Club Hackathon", gradient: "from-cyan-600 to-blue-700" },
  { label: "Alumni Meet 2024", gradient: "from-rose-600 to-red-700" },
];

export default function CampusLifePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero — Green to Navy */}
      <div
        className="py-24 text-white text-center"
        style={{ background: "linear-gradient(135deg, var(--primary-green) 0%, #047857 40%, var(--secondary-navy) 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#a7f3d0" }}>
            Campus Life
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-white">
            Life at BITC
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#a7f3d0" }}>
            Beyond academics — a vibrant campus experience with modern facilities, exciting clubs, and a supportive community.
          </p>
        </div>
      </div>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Infrastructure"
            title="World-Class Facilities"
            subtitle="Modern infrastructure designed to support every aspect of your academic journey."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl p-6 border card-lift group" style={{ backgroundColor: "var(--bg-lite-grey)", borderColor: "var(--bg-card-border)" }}>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                  style={{ backgroundColor: "var(--secondary-navy)" }}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-display text-base font-bold mb-2" style={{ color: "var(--text-dark-slate)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section className="py-20 bg-[#f0f5fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Student Clubs"
            title="Clubs & Activities"
            subtitle="Join a club, discover a passion, and build friendships that last a lifetime."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map(({ icon: Icon, name, tag, desc }) => (
              <div key={name} className="bg-white rounded-2xl p-6 shadow-sm border card-lift" style={{ borderColor: "var(--bg-card-border)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--secondary-navy)" }}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: "var(--text-dark-slate)" }}>{name}</div>
                    <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: "var(--primary-green)" }}>{tag}</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Gallery"
            title="Campus Memories"
            subtitle="A glimpse into the vibrant life at BITC through our photo and video gallery."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {galleryItems.map((item) => (
              <div
                key={item.label}
                className={`bg-gradient-to-br ${item.gradient} rounded-2xl h-40 flex items-end p-4 cursor-pointer group overflow-hidden relative`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <span className="relative z-10 text-white text-sm font-semibold">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Video placeholder */}
          <div className="rounded-2xl h-64 flex flex-col items-center justify-center text-white" style={{ background: "linear-gradient(135deg, var(--secondary-navy) 0%, var(--primary-green) 100%)" }}>
            <Video size={40} className="mb-3" style={{ color: "#6ee7b7" }} />
            <h3 className="font-display text-lg font-bold mb-2 text-white">BITC Campus Tour 2024</h3>
            <p className="text-sm mb-4" style={{ color: "#a7f3d0" }}>Watch our official campus tour video</p>
            <button className="px-6 py-2.5 font-bold rounded-xl transition-colors text-white" style={{ backgroundColor: "var(--accent-red)" }}>
              ▶ Watch Video
            </button>
          </div>
        </div>
      </section>

      {/* Student Welfare */}
      <section className="py-20 text-white" style={{ backgroundColor: "var(--secondary-navy)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Welfare" title="Student Welfare Services" subtitle="We care about your complete well-being — academic, professional, and personal." light />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Career Counseling", desc: "One-on-one sessions with career advisors to help you plan your professional journey and explore opportunities." },
              { title: "Job Placement Cell", desc: "Our dedicated placement cell connects you with top employers through campus drives, internships, and networking events." },
              { title: "Mental Health Support", desc: "Confidential counseling services and mental health workshops to help students manage stress and maintain well-being." },
              { title: "Financial Aid", desc: "A student welfare fund provides emergency financial assistance to students facing unexpected hardships." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-6 border" style={{ backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.1)" }}>
                <h3 className="font-display text-lg font-bold mb-2" style={{ color: "#a7f3d0" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#bfdbfe" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
