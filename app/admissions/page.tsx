import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Admissions — Eligibility, Fees & How to Apply",
  description:
    "Learn how to apply for BBA, CSE, LLB, MBA, and M.Ed programs at BITC. View eligibility criteria, fee structure, scholarship details, and application steps.",
};

const eligibilityData = [
  { program: "BBA", degree: "Honours 1st Year", requirement: "SSC + HSC or equivalent with minimum GPA 2.0 in both", seats: 120 },
  { program: "CSE", degree: "Honours 1st Year", requirement: "SSC + HSC (Science) with minimum GPA 2.5 in both, Physics & Math compulsory", seats: 60 },
  { program: "LLB", degree: "Professional (2-Year)", requirement: "Any Honours/Pass degree from recognized university with minimum 2nd Division/Class", seats: 80 },
  { program: "MBA", degree: "Masters", requirement: "BBA or any Honours degree with minimum 2nd Division/CGPA 2.0", seats: 80 },
  { program: "M.Ed", degree: "Masters (1-Year)", requirement: "B.Ed or Honours degree with minimum 2nd Division, teaching experience preferred", seats: 60 },
];

const feesData = [
  { program: "BBA", admissionFee: "5,000", semesterFee: "8,000", totalYear: "16,000", years: "4" },
  { program: "CSE", admissionFee: "6,000", semesterFee: "10,000", totalYear: "20,000", years: "4" },
  { program: "LLB", admissionFee: "5,000", semesterFee: "9,000", totalYear: "18,000", years: "2" },
  { program: "MBA", admissionFee: "5,000", semesterFee: "9,000", totalYear: "18,000", years: "2" },
  { program: "M.Ed", admissionFee: "4,000", semesterFee: "8,000", totalYear: "16,000", years: "1" },
];

const steps = [
  { step: "01", title: "Check Eligibility", desc: "Review the eligibility criteria for your chosen program." },
  { step: "02", title: "Visit NU Portal", desc: "Go to the National University admission portal and fill in your details." },
  { step: "03", title: "Select BITC", desc: "Choose Bangladesh Institute of Technology & Commerce (BITC) as your preferred college." },
  { step: "04", title: "Pay Admission Fee", desc: "Pay the required fees online or at designated bank branches." },
  { step: "05", title: "Submit Documents", desc: "Submit certified copies of academic certificates to the admission office." },
  { step: "06", title: "Confirm Admission", desc: "Receive your admission confirmation and student ID from BITC." },
];

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="py-24 text-white text-center"
        style={{ background: "linear-gradient(135deg, #0A1628 0%, #112550 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C] mb-4">
            Admissions 2025–26
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Begin Your Journey at BITC
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Join a community of over 5,000 alumni. Apply now for Session 2025–26.
          </p>
          <a
            href="http://admissions.nu.ac.bd/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#0A1628] font-bold rounded-xl hover:bg-[#d4b96a] transition-colors shadow-lg text-base"
          >
            Apply Online via NU Portal <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Eligibility */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Eligibility"
            title="Eligibility & Guidelines"
            subtitle="Review the admission requirements for each program before applying."
          />
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A1628] text-white">
                  <th className="text-left px-6 py-4">Program</th>
                  <th className="text-left px-6 py-4">Degree Type</th>
                  <th className="text-left px-6 py-4">Requirements</th>
                  <th className="text-center px-6 py-4">Seats</th>
                </tr>
              </thead>
              <tbody>
                {eligibilityData.map((row, i) => (
                  <tr key={row.program} className={i % 2 === 0 ? "bg-white" : "bg-[#f0f5fb]"}>
                    <td className="px-6 py-4 font-bold text-[#C9A84C]">{row.program}</td>
                    <td className="px-6 py-4 text-gray-600">{row.degree}</td>
                    <td className="px-6 py-4 text-gray-600">{row.requirement}</td>
                    <td className="px-6 py-4 text-center font-semibold text-[#0A1628]">{row.seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="py-20 bg-[#f0f5fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Fees & Scholarships"
            title="Fee Structure 2025–26"
            subtitle="Transparent, affordable fees with multiple scholarship opportunities available."
          />
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A1628] text-white">
                  <th className="text-left px-6 py-4">Program</th>
                  <th className="text-center px-6 py-4">Admission Fee (BDT)</th>
                  <th className="text-center px-6 py-4">Per Semester (BDT)</th>
                  <th className="text-center px-6 py-4">Per Year (BDT)</th>
                  <th className="text-center px-6 py-4">Duration</th>
                </tr>
              </thead>
              <tbody>
                {feesData.map((row, i) => (
                  <tr key={row.program} className={i % 2 === 0 ? "bg-white" : "bg-[#f0f5fb]"}>
                    <td className="px-6 py-4 font-bold text-[#C9A84C]">{row.program}</td>
                    <td className="px-6 py-4 text-center text-gray-600">৳{row.admissionFee}</td>
                    <td className="px-6 py-4 text-center text-gray-600">৳{row.semesterFee}</td>
                    <td className="px-6 py-4 text-center text-gray-600">৳{row.totalYear}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{row.years} Year(s)</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Scholarship criteria */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Merit Scholarship", desc: "Up to 50% fee waiver for students with GPA 5.00 in both SSC & HSC.", badge: "50% Waiver" },
              { title: "Need-Based Grant", desc: "Financial assistance for students from economically disadvantaged backgrounds.", badge: "Up to 100%" },
              { title: "Sports Quota", desc: "Special fee concession for nationally recognized athletes and sports persons.", badge: "25% Waiver" },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="inline-block px-3 py-1 bg-[#C9A84C] text-[#0A1628] text-xs font-bold rounded-full mb-4">
                  {s.badge}
                </div>
                <h3 className="font-display text-lg font-bold text-[#0A1628] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Application Process"
            title="How to Apply"
            subtitle="Follow these simple steps to complete your application for admission at BITC."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="relative bg-[#f0f5fb] rounded-2xl p-6 border border-gray-100 card-lift">
                <div className="font-display text-4xl font-bold text-[#C9A84C]/30 mb-3">
                  {s.step}
                </div>
                <h3 className="font-display text-base font-bold text-[#0A1628] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Big CTA */}
          <div className="mt-12 text-center">
            <a
              href="http://admissions.nu.ac.bd/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#0A1628] text-white font-bold text-lg rounded-2xl hover:bg-[#112550] transition-colors shadow-xl"
            >
              Apply Online via National University Portal
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Admission Desk */}
      <section className="py-20 bg-[#0A1628] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeader
            eyebrow="Need Help?"
            title="Admission Desk"
            subtitle="Our friendly admission team is here to answer all your questions."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Phone, label: "Hotline", value: "+880 1700-000000" },
              { icon: Phone, label: "Alternative", value: "+880 1800-000000" },
              { icon: Mail, label: "Email", value: "admission@bitc.edu.bd" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-white/10 rounded-2xl p-5">
                <Icon size={24} className="text-[#C9A84C] mx-auto mb-3" />
                <p className="text-xs text-gray-400 mb-1">{label}</p>
                <p className="font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
