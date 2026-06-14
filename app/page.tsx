import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AuthorityMessage from "@/components/home/AuthorityMessage";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import StatsCounter from "@/components/home/StatsCounter";
import ProgramsGrid from "@/components/home/ProgramsGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import EventsNews from "@/components/home/EventsNews";
import Testimonials from "@/components/home/Testimonials";

export const metadata: Metadata = {
  title: "BITC — Bangladesh Institute of Technology & Commerce | Home",
  description:
    "Welcome to BITC — a premier National University-affiliated institute offering BBA, CSE, LLB, MBA, and M.Ed programs with world-class faculty and modern facilities.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero — Note: NoticeTicker is now sticky in layout.tsx */}
      <HeroSection />

      {/* Message from Principal */}
      <AuthorityMessage />

      {/* About Snapshot + Achievements */}
      <AboutSnapshot />

      {/* Excellence in Numbers */}
      <StatsCounter />

      {/* Academic Programs Grid */}
      <ProgramsGrid />

      {/* Why Choose BITC */}
      <WhyChooseUs />

      {/* Upcoming Events & News */}
      <EventsNews />

      {/* Student Testimonials Carousel */}
      <Testimonials />

      {/* CTA Banner */}
      <section
        className="py-16 sm:py-20 text-white text-center"
        style={{
          background:
            "linear-gradient(135deg, #0A1628 0%, #1a3a6e 50%, #0A1628 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-8">
            Join thousands of successful graduates who started their story right here at BITC.
            Applications for Session 2025–26 are now open.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/admissions"
              className="w-full sm:w-auto px-8 py-4 bg-[#C9A84C] text-[#0A1628] font-bold rounded-xl hover:bg-[#d4b96a] transition-colors shadow-lg"
            >
              Apply Now — Session 2025–26
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
            >
              Talk to Admission Desk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
