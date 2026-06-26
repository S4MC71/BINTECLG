import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import { Eye, Target, Heart, Shield, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About BITC — Vision, Mission, Values & History",
  description:
    "Learn about Bangladesh Institute of Technology & Commerce (BITC) — our founding story, vision, mission, core values, and governing body.",
};

const values = [
  { icon: Eye, title: "Transparency", desc: "Open and honest communication with students, parents, and stakeholders at all levels." },
  { icon: Target, title: "Excellence", desc: "Uncompromising commitment to academic quality and professional standards." },
  { icon: Heart, title: "Inclusivity", desc: "A welcoming environment for students from all backgrounds and walks of life." },
  { icon: Shield, title: "Integrity", desc: "Ethical conduct in all academic, administrative, and community activities." },
  { icon: Award, title: "Innovation", desc: "Continuously evolving our curriculum and pedagogy to meet the demands of a changing world." },
  { icon: Clock, title: "Perseverance", desc: "Encouraging students to persist through challenges and build resilient character." },
];

const milestones = [
  { year: "2003", event: "BITC founded and affiliated with National University, Bangladesh. First batch of BBA students enrolled." },
  { year: "2006", event: "Introduction of LLB program. Library expanded to 10,000+ volumes." },
  { year: "2009", event: "CSE program launched. First Computer Lab inaugurated with 50 workstations." },
  { year: "2012", event: "MBA program introduced. Student enrollment surpasses 1,000." },
  { year: "2016", event: "M.Ed program launched for practising educators. Alumni Association formally established." },
  { year: "2019", event: "Second Computer Lab inaugurated. Campus-wide Wi-Fi deployed." },
  { year: "2022", event: "BITC celebrates its first 5,000+ cumulative graduates. New Digital Library section opened." },
  { year: "2025", event: "BITC wins 'Best Private College of the Year' at the National Education Summit 2025." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero — dark green gradient */}
      <div
        className="py-24 text-white text-center"
        style={{ background: "linear-gradient(135deg, #011a0e 0%, #022c16 50%, #004D2C 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#F0D060] mb-4">
            About Us
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            About BITC
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Over two decades of academic excellence, community service, and professional development.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision — dark green */}
            <div className="bg-[#022c16] rounded-2xl p-8 text-white">
              <div className="text-3xl mb-4">🔭</div>
              <h2 className="font-display text-2xl font-bold text-[#D4A820] mb-4">Our Vision</h2>
              <p className="text-green-200/80 leading-relaxed">
                To be the most respected institution in Bangladesh for producing globally competitive,
                ethically grounded, and socially responsible graduates who lead positive change in their
                communities and professions.
              </p>
            </div>
            {/* Mission — light green tint */}
            <div className="bg-[#e8f5ee] rounded-2xl p-8 border border-[#006B3C]/15">
              <div className="text-3xl mb-4">🎯</div>
              <h2 className="font-display text-2xl font-bold text-[#004D2C] mb-4">Our Mission</h2>
              <p className="text-[#5a6a60] leading-relaxed">
                To provide high-quality, accessible, and affordable higher education through innovative
                teaching, cutting-edge research, and meaningful industry partnerships — empowering every
                student to realize their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#f2faf6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Core Values"
            title="What We Stand For"
            subtitle="The principles that guide everything we do at BITC."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-[#006B3C]/10 card-lift">
                <div className="w-12 h-12 rounded-xl bg-[#006B3C] flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#D4A820]" />
                </div>
                <h3 className="font-display text-base font-bold text-[#004D2C] mb-2">{title}</h3>
                <p className="text-sm text-[#5a6a60] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Story"
            title="A History of Growth"
            subtitle="Key milestones in BITC's journey from a humble beginning to regional excellence."
          />
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4A820] to-transparent" />

            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 text-right">
                    <span className="font-display font-bold text-[#D4A820] text-sm">{m.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#006B3C] border-4 border-white shadow mt-0.5 z-10" />
                  <div className="flex-1 pb-2">
                    <p className="text-[#5a6a60] text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governing Body — darkest green */}
      <section className="py-20 bg-[#022c16] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Administration"
            title="Governing Body"
            subtitle="Dedicated leaders steering BITC toward its mission of excellence."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Mr. Alhaj Shamsul Haq", role: "Chairman, Governing Body", initials: "SH", color: "#D4A820" },
              { name: "Prof. Dr. Abdur Rahim", role: "Principal", initials: "AR", color: "#006B3C" },
              { name: "Mr. Kamal Uddin", role: "Secretary, Governing Body", initials: "KU", color: "#004D2C" },
              { name: "Dr. Nazmul Hossain", role: "Vice-Principal (Academic)", initials: "NH", color: "#B8912A" },
              { name: "Ms. Farida Yasmin", role: "Registrar", initials: "FY", color: "#C41E1E" },
              { name: "Mr. Rafiq Ahmed", role: "Controller of Examinations", initials: "RA", color: "#006B3C" },
            ].map((p) => (
              <div key={p.name} className="bg-white/10 rounded-2xl p-5 text-center border border-white/10 hover:border-[#D4A820]/30 transition-colors">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg mx-auto mb-3 text-white"
                  style={{ backgroundColor: p.color }}
                >
                  {p.initials}
                </div>
                <h3 className="font-display text-sm font-bold text-white mb-1">{p.name}</h3>
                <p className="text-xs text-[#D4A820]">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
