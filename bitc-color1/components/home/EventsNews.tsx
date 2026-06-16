"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Calendar, Newspaper, ArrowRight, Tag, Clock } from "lucide-react";
import { events } from "@/data/events";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";

type Tab = "event" | "news";

export default function EventsNews() {
  const [activeTab, setActiveTab] = useState<Tab>("event");
  const filtered = events.filter((e) => e.type === activeTab);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Stay Updated"
          title="Upcoming Events &amp; News"
          subtitle="Stay informed about the latest happenings, achievements, and opportunities at BITC."
        />

        {/* Tabs */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {(["event", "news"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                backgroundColor: activeTab === tab ? "var(--secondary-navy)" : "#f1f5f9",
                color: activeTab === tab ? "#fff" : "var(--text-muted)",
              }}
            >
              {tab === "event" ? <Calendar size={15} /> : <Newspaper size={15} />}
              {tab === "event" ? "Upcoming Events" : "Latest News"}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border card-lift group"
                style={{ borderColor: "var(--bg-card-border)" }}
              >
                {/* Image placeholder */}
                <div className={`h-44 bg-gradient-to-br ${item.imageGradient} relative flex items-end p-4`}>
                  <Badge variant="gold">{item.tag}</Badge>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-light, #94a3b8)" }}>
                      <Tag size={12} />{item.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-light, #94a3b8)" }}>
                      <Clock size={12} />
                      {new Date(item.date).toLocaleDateString("en-BD", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                  </div>

                  <h3
                    className="font-display text-base font-bold mb-2 line-clamp-2 transition-colors group-hover:underline"
                    style={{ color: "var(--text-dark-slate)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed line-clamp-3 mb-4" style={{ color: "var(--text-muted)" }}>
                    {item.excerpt}
                  </p>

                  <Link
                    href="#"
                    className="flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all duration-200"
                    style={{ color: "var(--primary-green)" }}
                  >
                    Read more <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all */}
        <div className="text-center mt-10">
          <Link
            href="/notices"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 font-semibold text-sm rounded-xl transition-all duration-300"
            style={{ borderColor: "var(--secondary-navy)", color: "var(--secondary-navy)" }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = "var(--secondary-navy)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--secondary-navy)";
            }}
          >
            View All Notices &amp; Events <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
