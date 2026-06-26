"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AuthorityMessage() {
  return (
    <section className="py-20 bg-[#f2faf6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative background card */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-[#D4A820]/15 border border-[#D4A820]/25" />

              {/* Profile card */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#022c16] to-[#004D2C] p-8 text-white shadow-2xl">
                {/* Avatar placeholder */}
                <div className="w-32 h-32 rounded-2xl bg-[#D4A820]/20 border-2 border-[#D4A820]/40 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-display font-bold text-[#D4A820]">
                    AM
                  </span>
                </div>

                <div className="text-center">
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    Prof. Dr. Abdur Rahim
                  </h3>
                  <p className="text-[#F0D060] text-sm font-medium mb-1">
                    Principal
                  </p>
                  <p className="text-green-300/70 text-xs">
                    Bangladesh Institute of Technology &amp; Commerce
                  </p>
                </div>

                {/* Separator */}
                <div className="w-12 h-0.5 bg-[#D4A820]/50 mx-auto my-5" />

                {/* Credentials */}
                <div className="space-y-1.5 text-center">
                  {["PhD (Education), University of Dhaka", "M.Phil (Management)", "30+ Years in Academia"].map((c) => (
                    <p key={c} className="text-xs text-green-300/70">{c}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Message side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <SectionHeader
              eyebrow="Principal's Message"
              title="Welcome to BITC"
              centered={false}
            />

            <div className="relative">
              <Quote
                size={48}
                className="absolute -top-2 -left-2 text-[#D4A820]/20"
              />
              <div className="pl-4 space-y-4">
                <p className="text-[#5a6a60] leading-relaxed">
                  It is my great privilege to welcome you to Bangladesh Institute of
                  Technology &amp; Commerce — an institution that stands as a beacon of
                  academic excellence and holistic development.
                </p>
                <p className="text-[#5a6a60] leading-relaxed">
                  At BITC, we believe education is not just about acquiring knowledge;
                  it is about shaping character, nurturing critical thinking, and
                  building the leaders of tomorrow. Our dedicated faculty, modern
                  facilities, and vibrant campus environment create the perfect ecosystem
                  for student growth.
                </p>
                <p className="text-[#5a6a60] leading-relaxed">
                  I warmly invite you to explore all that BITC has to offer and to
                  become part of our proud community of achievers.
                </p>
              </div>
            </div>

            <div className="mt-8 pl-4">
              <div className="inline-block border-l-4 border-[#D4A820] pl-4">
                <p className="font-display text-xl font-bold text-[#004D2C] italic">
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
