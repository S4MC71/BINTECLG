"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AuthorityMessage() {
  return (
    <section className="py-20 bg-[#f0f5fb]">
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
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-[#C9A84C]/20 border border-[#C9A84C]/30" />

              {/* Profile card */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0A1628] to-[#1a3a6e] p-8 text-white shadow-2xl">
                {/* Avatar placeholder */}
                <div className="w-32 h-32 rounded-2xl bg-[#C9A84C]/20 border-2 border-[#C9A84C]/40 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-display font-bold text-[#C9A84C]">
                    AM
                  </span>
                </div>

                <div className="text-center">
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    Prof. Dr. Abdur Rahim
                  </h3>
                  <p className="text-[#C9A84C] text-sm font-medium mb-1">
                    Principal
                  </p>
                  <p className="text-gray-400 text-xs">
                    Bangladesh Institute of Technology &amp; Commerce
                  </p>
                </div>

                {/* Separator */}
                <div className="w-12 h-0.5 bg-[#C9A84C]/50 mx-auto my-5" />

                {/* Credentials */}
                <div className="space-y-1.5 text-center">
                  {["PhD (Education), University of Dhaka", "M.Phil (Management)", "30+ Years in Academia"].map((c) => (
                    <p key={c} className="text-xs text-gray-400">{c}</p>
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
                className="absolute -top-2 -left-2 text-[#C9A84C]/20"
              />
              <div className="pl-4 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  It is my great privilege to welcome you to Bangladesh Institute of
                  Technology &amp; Commerce — an institution that stands as a beacon of
                  academic excellence and holistic development.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  At BITC, we believe education is not just about acquiring knowledge;
                  it is about shaping character, nurturing critical thinking, and
                  building the leaders of tomorrow. Our dedicated faculty, modern
                  facilities, and vibrant campus environment create the perfect ecosystem
                  for student growth.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I warmly invite you to explore all that BITC has to offer and to
                  become part of our proud community of achievers.
                </p>
              </div>
            </div>

            <div className="mt-8 pl-4">
              <div className="inline-block border-l-4 border-[#C9A84C] pl-4">
                <p className="font-display text-xl font-bold text-[#0A1628] italic">
                  "Excellence is not an act, but a habit."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
