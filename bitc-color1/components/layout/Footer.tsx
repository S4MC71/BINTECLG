"use client";

import Link from "next/link";
import { GraduationCap, Phone, Mail, MapPin, ExternalLink, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "About BITC",          href: "/about" },
  { label: "Academic Programs",   href: "/academics" },
  { label: "Admissions",          href: "/admissions" },
  { label: "Notice Board",        href: "/notices" },
  { label: "Campus Life",         href: "/campus-life" },
  { label: "Alumni Association",  href: "/alumni" },
  { label: "Contact Us",          href: "/contact" },
];

const portalLinks = [
  { label: "NU Student Portal",  href: "https://www.nu.ac.bd/" },
  { label: "Result Check (NU)",  href: "http://results.nu.ac.bd/" },
  { label: "Admission Portal",   href: "http://admissions.nu.ac.bd/" },
  { label: "NU Official Website",href: "https://www.nu.ac.bd/" },
];

const programs = [
  { label: "BBA — Business Admin",     href: "/academics/bba" },
  { label: "CSE — Computer Science",   href: "/academics/cse" },
  { label: "LLB — Laws",               href: "/academics/llb" },
  { label: "MBA — Business Admin",     href: "/academics/mba" },
  { label: "M.Ed — Education",         href: "/academics/med" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* ── Main Footer — Slate 900, 4px green top border ── */}
      <div style={{ backgroundColor: "#111827", borderTop: "4px solid #065F46" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Column 1: Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#065F46" }}
                >
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-white leading-tight">BITC</div>
                  <div className="text-[10px] leading-tight" style={{ color: "#9ca3af" }}>
                    Bangladesh Institute of Technology &amp; Commerce
                  </div>
                </div>
              </Link>

              <p className="text-sm leading-relaxed mb-5" style={{ color: "#9ca3af" }}>
                A premier National University–affiliated institution dedicated to academic
                excellence, professional development, and producing leaders for tomorrow.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {[
                  {
                    href: "https://www.facebook.com",
                    label: "Facebook",
                    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                  },
                  {
                    href: "https://www.youtube.com",
                    label: "YouTube",
                    path: "M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16.6 5 12 5 12 5s-4.6 0-6.9.1c-.4 0-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.8C6.8 19 12 19 12 19s4.6 0 6.9-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 15V9l5.5 3-5.5 3z",
                  },
                ].map(({ href, label, path }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#9ca3af" }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = "#065F46";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.color = "#9ca3af";
                    }}
                    aria-label={label}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#6ee7b7" }}>
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm transition-colors duration-200 group"
                      style={{ color: "#9ca3af" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#6ee7b7")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
                    >
                      <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0 duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Programs + Portals */}
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#6ee7b7" }}>
                Programs
              </h3>
              <ul className="space-y-2.5 mb-7">
                {programs.map((p) => (
                  <li key={p.label}>
                    <Link
                      href={p.href}
                      className="flex items-center gap-2 text-sm transition-colors duration-200 group"
                      style={{ color: "#9ca3af" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#6ee7b7")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
                    >
                      <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0 duration-200" />
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#6ee7b7" }}>
                NU Portals
              </h3>
              <ul className="space-y-2.5">
                {portalLinks.map((p) => (
                  <li key={p.label}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm transition-colors duration-200"
                      style={{ color: "#9ca3af" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#6ee7b7")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
                    >
                      <ExternalLink size={11} />
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#6ee7b7" }}>
                Contact Us
              </h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#6ee7b7" }} />
                  <span className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                    123 College Road, Dhaka-1207<br />Bangladesh
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="flex-shrink-0" style={{ color: "#6ee7b7" }} />
                  <a href="tel:+8801700000000" className="text-sm transition-colors" style={{ color: "#9ca3af" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#6ee7b7")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}>
                    +880 1700-000000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="flex-shrink-0" style={{ color: "#6ee7b7" }} />
                  <a href="mailto:info@bitc.edu.bd" className="text-sm transition-colors" style={{ color: "#9ca3af" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#6ee7b7")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}>
                    info@bitc.edu.bd
                  </a>
                </li>
              </ul>

              {/* Map placeholder */}
              <div
                className="rounded-xl overflow-hidden border h-36 flex items-center justify-center"
                style={{ backgroundColor: "#1F2937", borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div className="text-center">
                  <MapPin size={28} className="mx-auto mb-2" style={{ color: "#6ee7b7" }} />
                  <p className="text-xs mb-1" style={{ color: "#6b7280" }}>Interactive Map</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs transition-colors hover:underline"
                    style={{ color: "#6ee7b7" }}
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div style={{ backgroundColor: "#0d1117" }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: "#6b7280" }}>
          <p>© {currentYear} Bangladesh Institute of Technology &amp; Commerce (BITC). All Rights Reserved.</p>
          <p>
            Affiliated with{" "}
            <a
              href="https://www.nu.ac.bd"
              target="_blank"
              rel="noreferrer"
              className="hover:underline transition-colors"
              style={{ color: "#6ee7b7" }}
            >
              National University, Bangladesh
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
