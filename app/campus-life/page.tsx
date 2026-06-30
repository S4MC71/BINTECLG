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
      {/* Hero — dark green gradient */}
      <div
        className="py-24 text-white text-center"
        style={{ background: "linear-gradient(135deg, #011a0e 0%, #022c16 50%, #006B3C 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#F0D060] mb-4">
            Campus Life
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Life at BITC
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
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
              <div key={title} className="bg-[#e8f5ee] rounded-2xl p-6 border border-[#006B3C]/15 card-lift group">
                <div className="w-12 h-12 rounded-xl bg-[#006B3C] flex items-center justify-center mb-4 group-hover:bg-[#D4A820] transition-colors duration-300">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-display text-base font-bold text-[#004D2C] mb-2">{title}</h3>
                <p className="text-sm text-[#5a6a60] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section className="py-20 bg-[#f2faf6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Student Clubs"
            title="Clubs & Activities"
            subtitle="Join a club, discover a passion, and build friendships that last a lifetime."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map(({ icon: Icon, name, tag, desc }) => (
              <div key={name} className="bg-white rounded-2xl p-6 shadow-sm border border-[#006B3C]/10 card-lift">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#004D2C] flex items-center justify-center">
                    <Icon size={18} className="text-[#D4A820]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#004D2C] text-sm">{name}</div>
                    <div className="text-[10px] text-[#006B3C] font-semibold uppercase tracking-wide">{tag}</div>
                  </div>
                </div>
                <p className="text-sm text-[#5a6a60] leading-relaxed">{desc}</p>
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
          <div className="bg-[#022c16] rounded-2xl h-64 flex flex-col items-center justify-center text-white">
            <Video size={40} className="text-[#D4A820] mb-3" />
            <h3 className="font-display text-lg font-bold mb-2">BITC Campus Tour 2024</h3>
            <p className="text-green-300/70 text-sm mb-4">Watch our official campus tour video</p>
            <button className="px-6 py-2.5 bg-[#D4A820] text-[#022c16] font-bold rounded-xl hover:bg-[#F0D060] transition-colors">
              ▶ Watch Video
            </button>
          </div>
        </div>
      </section>

      {/* Student Welfare — light green background to separate from dark footer */}
      <section className="py-20 bg-[#f2faf6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Welfare"
            title="Student Welfare Services"
            subtitle="We care about your complete well-being — academic, professional, and personal."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Career Counseling", desc: "One-on-one sessions with career advisors to help you plan your professional journey and explore opportunities." },
              { title: "Job Placement Cell", desc: "Our dedicated placement cell connects you with top employers through campus drives, internships, and networking events." },
              { title: "Mental Health Support", desc: "Confidential counseling services and mental health workshops to help students manage stress and maintain well-being." },
              { title: "Financial Aid", desc: "A student welfare fund provides emergency financial assistance to students facing unexpected hardships." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-[#006B3C]/10 shadow-sm hover:shadow-md hover:border-[#D4A820]/30 transition-all duration-200">
                <h3 className="font-display text-lg font-bold text-[#004D2C] mb-2">{item.title}</h3>
                <p className="text-[#5a6a60] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
