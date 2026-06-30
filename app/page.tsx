import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ImageSlider from "@/components/home/ImageSlider";
import AuthorityMessage from "@/components/home/AuthorityMessage";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import StatsCounter from "@/components/home/StatsCounter";
import ProgramsGrid from "@/components/home/ProgramsGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import EventsNews from "@/components/home/EventsNews";
import Testimonials from "@/components/home/Testimonials";

export const metadata: Metadata = {
  title: "BITC — Barisal Information Technology College | Home",
  description:
    "Welcome to BITC — Barisal Information Technology College, a premier National University-affiliated institute offering BBA, CSE, LLB, MBA, and B.Ed programs with world-class faculty and modern facilities.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero — Note: NoticeTicker is now sticky in layout.tsx */}
      <HeroSection />

      {/* Campus Gallery Slider */}
      <ImageSlider />

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
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="rounded-2xl p-10 sm:p-14 text-white shadow-xl border border-green-900/10"
            style={{
              background:
                "linear-gradient(135deg, #011a0e 0%, #022c16 50%, #003821 100%)",
            }}
          >
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-green-200 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              Join thousands of successful graduates who started their story right here at BITC.
              Applications for Session 2025–26 are now open.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/admissions"
                className="w-full sm:w-auto px-8 py-4 bg-[#C41E1E] text-white font-bold rounded-xl hover:bg-[#9B1515] transition-colors shadow-lg"
              >
                Apply Now — Session 2025–26
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-[#D4A820] hover:text-[#F0D060] transition-colors"
              >
                Talk to Admission Desk
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
