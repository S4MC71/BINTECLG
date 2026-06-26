import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { label: "About BITC", href: "/about" },
  { label: "Academic Programs", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Notice Board", href: "/notices" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Alumni Association", href: "/alumni" },
  { label: "Contact Us", href: "/contact" },
];

const portalLinks = [
  { label: "NU Student Portal", href: "https://www.nu.ac.bd/" },
  { label: "Result Check (NU)", href: "http://results.nu.ac.bd/" },
  { label: "Admission Portal", href: "http://admissions.nu.ac.bd/" },
  { label: "NU Official Website", href: "https://www.nu.ac.bd/" },
];

const programs = [
  { label: "BBA — Business Admin", href: "/academics/bba" },
  { label: "CSE — Computer Science", href: "/academics/cse" },
  { label: "LLB — Laws", href: "/academics/llb" },
  { label: "MBA — Business Admin", href: "/academics/mba" },
  { label: "M.Ed — Education", href: "/academics/med" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      {/* Main Footer — Darkest Green */}
      <div className="bg-[#022c16] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Column 1: Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/Logo.png"
                    alt="BITC Logo"
                    width={44}
                    height={44}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-white leading-tight">
                    BITC
                  </div>
                  <div className="text-[10px] text-green-300 leading-tight">
                    Barisal Information Technology College
                  </div>
                </div>
              </Link>

              <p className="text-green-300/80 text-sm leading-relaxed mb-5">
                A premier National University–affiliated institution in Barisal dedicated to academic
                excellence, professional development, and producing leaders for tomorrow.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#D4A820] flex items-center justify-center transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#D4A820] flex items-center justify-center transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16.6 5 12 5 12 5s-4.6 0-6.9.1c-.4 0-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.8C6.8 19 12 19 12 19s4.6 0 6.9-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 15V9l5.5 3-5.5 3z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-display text-sm font-semibold text-[#D4A820] uppercase tracking-widest mb-5">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-green-300/80 hover:text-[#D4A820] transition-colors duration-200 group"
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
              <h3 className="font-display text-sm font-semibold text-[#D4A820] uppercase tracking-widest mb-5">
                Programs
              </h3>
              <ul className="space-y-2.5 mb-7">
                {programs.map((p) => (
                  <li key={p.label}>
                    <Link
                      href={p.href}
                      className="flex items-center gap-2 text-sm text-green-300/80 hover:text-[#D4A820] transition-colors duration-200 group"
                    >
                      <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0 duration-200" />
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="font-display text-sm font-semibold text-[#D4A820] uppercase tracking-widest mb-4">
                NU Portals
              </h3>
              <ul className="space-y-2.5">
                {portalLinks.map((p) => (
                  <li key={p.label}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm text-green-300/80 hover:text-[#D4A820] transition-colors duration-200"
                    >
                      <ExternalLink size={11} />
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact + Map */}
            <div>
              <h3 className="font-display text-sm font-semibold text-[#D4A820] uppercase tracking-widest mb-5">
                Contact Us
              </h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#D4A820] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-green-300/80 leading-relaxed">
                    College Road, Barisal-8200<br />
                    Bangladesh
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-[#D4A820] flex-shrink-0" />
                  <a href="tel:+8801700000000" className="text-sm text-green-300/80 hover:text-[#D4A820] transition-colors">
                    +880 1700-000000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-[#D4A820] flex-shrink-0" />
                  <a href="mailto:info@bitc.edu.bd" className="text-sm text-green-300/80 hover:text-[#D4A820] transition-colors">
                    info@bitc.edu.bd
                  </a>
                </li>
              </ul>

              {/* Google Map Embed */}
              <div className="rounded-xl overflow-hidden border border-white/10 h-36">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d893.9821283068475!2d90.35344086089177!3d22.70179279502581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755343ce52a1173%3A0x997cc0e24d4dbdbd!2sBarisal%20Information%20Technology%20College%20(BITC)!5e0!3m2!1sen!2sbd!4v1782507352583!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="BITC Location on Google Maps"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#050d18] text-green-600/70 text-xs py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            © {currentYear} Barisal Information Technology College (BITC). All Rights Reserved.
          </p>
          <p>
            Affiliated with{" "}
            <a
              href="https://www.nu.ac.bd"
              target="_blank"
              rel="noreferrer"
              className="text-[#D4A820] hover:underline"
            >
              National University, Bangladesh
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
