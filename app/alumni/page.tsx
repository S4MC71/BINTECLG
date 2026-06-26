import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import { alumni } from "@/data/alumni";
import { Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Alumni Association — Directory, Success Stories & Registration",
  description:
    "Connect with BITC's alumni community. Browse our alumni directory, read success stories, and register as a new alumni member.",
};

export default function AlumniPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero — dark green gradient */}
      <div
        className="py-24 text-white text-center"
        style={{ background: "linear-gradient(135deg, #011a0e 0%, #022c16 50%, #004D2C 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#F0D060] mb-4">
            Alumni Association
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Our Proud Alumni
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            5,000+ graduates making an impact across industries, professions, and borders.
          </p>
        </div>
      </div>

      {/* Directory */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Alumni Directory"
            title="Meet Our Alumni"
            subtitle="Inspiring graduates who are making a difference in their fields."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl p-6 shadow-sm border border-[#006B3C]/10 card-lift">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: member.imageColor }}
                  >
                    {member.imageInitials}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-[#004D2C] leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#D4A820] font-medium">{member.program} · Batch {member.batch}</p>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-sm font-semibold text-[#004D2C]">{member.currentPosition}</p>
                  <p className="text-xs text-[#5a6a60]">{member.company} · {member.location}</p>
                </div>

                {member.achievement && (
                  <div className="flex items-start gap-2 bg-[#e8f5ee] rounded-xl p-3 mb-3">
                    <Trophy size={14} className="text-[#D4A820] flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-[#5a6a60]">{member.achievement}</p>
                  </div>
                )}

                {member.quote && (
                  <p className="text-xs text-[#5a6a60] italic line-clamp-2 mb-3">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                )}

                {member.linkedIn && (
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[#006B3C] font-semibold hover:text-[#D4A820] transition-colors"
                  >
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="py-20 bg-[#f2faf6]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Join Us"
            title="Alumni Registration"
            subtitle="Are you a BITC graduate? Register to join our official alumni network and stay connected."
          />
          <form className="bg-white rounded-2xl p-8 shadow-sm border border-[#006B3C]/10 space-y-5">
            {[
              { label: "Full Name", type: "text", placeholder: "Your full name", id: "alumni-name" },
              { label: "Batch / Year of Passing", type: "text", placeholder: "e.g., 2018", id: "alumni-batch" },
              { label: "Program", type: "text", placeholder: "e.g., BBA, CSE", id: "alumni-program" },
              { label: "Current Occupation", type: "text", placeholder: "Your current role and company", id: "alumni-occupation" },
              { label: "Email Address", type: "email", placeholder: "your@email.com", id: "alumni-email" },
              { label: "Phone Number", type: "tel", placeholder: "+880 XXXXXXXXXX", id: "alumni-phone" },
            ].map(({ label, type, placeholder, id }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-semibold text-[#004D2C] mb-1.5">
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  className="w-full px-4 py-3 border border-[#006B3C]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/30 focus:border-[#006B3C]"
                />
              </div>
            ))}
            <div>
              <label htmlFor="alumni-message" className="block text-sm font-semibold text-[#004D2C] mb-1.5">
                Share Your Story (Optional)
              </label>
              <textarea
                id="alumni-message"
                placeholder="A brief note about your journey after BITC..."
                rows={4}
                className="w-full px-4 py-3 border border-[#006B3C]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/30 focus:border-[#006B3C] resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-[#006B3C] text-white font-bold rounded-xl hover:bg-[#004D2C] transition-colors shadow-md"
            >
              Register as Alumni
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
