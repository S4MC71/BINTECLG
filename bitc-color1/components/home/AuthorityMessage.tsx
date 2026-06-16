"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AuthorityMessage() {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--bg-lite-grey)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Decorative background offset */}
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2"
              style={{ borderColor: "rgba(6,95,70,0.2)", backgroundColor: "rgba(6,95,70,0.03)" }}
            />

            {/* Card */}
            <div
              className="relative rounded-2xl overflow-hidden p-8 text-white shadow-xl"
              style={{ background: "linear-gradient(135deg, var(--primary-green) 0%, #047857 50%, var(--secondary-navy) 100%)" }}
            >
              {/* Avatar */}
              <div
                className="w-32 h-32 rounded-2xl flex items-center justify-center mx-auto mb-6 border-2"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.3)" }}
              >
                <span className="text-4xl font-display font-bold text-white">AM</span>
              </div>

              <div className="text-center">
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  Prof. Dr. Abdur Rahim
                </h3>
                <p className="text-sm font-medium mb-1" style={{ color: "#a7f3d0" }}>
                  Principal
                </p>
                <p className="text-xs" style={{ color: "#6ee7b7" }}>
                  Bangladesh Institute of Technology &amp; Commerce
                </p>
              </div>

              <div className="w-12 h-0.5 mx-auto my-5" style={{ backgroundColor: "rgba(255,255,255,0.3)" }} />

              <div className="space-y-1.5 text-center">
                {["PhD (Education), University of Dhaka", "M.Phil (Management)", "30+ Years in Academia"].map((c) => (
                  <p key={c} className="text-xs" style={{ color: "#a7f3d0" }}>{c}</p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <SectionHeader eyebrow="Principal's Message" title="Welcome to BITC" centered={false} />

            <div className="relative">
              <Quote size={48} className="absolute -top-2 -left-2" style={{ color: "rgba(6,95,70,0.12)" }} />
              <div className="pl-4 space-y-4">
                <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  It is my great privilege to welcome you to Bangladesh Institute of
                  Technology &amp; Commerce — an institution that stands as a beacon of
                  academic excellence and holistic development.
                </p>
                <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  At BITC, we believe education is not just about acquiring knowledge;
                  it is about shaping character, nurturing critical thinking, and
                  building the leaders of tomorrow. Our dedicated faculty, modern
                  facilities, and vibrant campus environment create the perfect ecosystem
                  for student growth.
                </p>
                <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  I warmly invite you to explore all that BITC has to offer and to
                  become part of our proud community of achievers.
                </p>
              </div>
            </div>

            <div className="mt-8 pl-4">
              <div className="inline-block border-l-4 pl-4" style={{ borderColor: "var(--primary-green)" }}>
                <p className="font-display text-xl font-bold italic" style={{ color: "var(--text-dark-slate)" }}>
                  &ldquo;Excellence is not an act, but a habit.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
