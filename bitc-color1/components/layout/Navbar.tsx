"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, GraduationCap, Phone, Mail } from "lucide-react";

interface DropdownItem { label: string; href: string; }
interface NavItem { label: string; href: string; dropdown?: DropdownItem[]; }

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Academics",
    href: "/academics",
    dropdown: [
      { label: "All Programs",       href: "/academics" },
      { label: "BBA Program",        href: "/academics/bba" },
      { label: "CSE Program",        href: "/academics/cse" },
      { label: "LLB Program",        href: "/academics/llb" },
      { label: "MBA Program",        href: "/academics/mba" },
      { label: "M.Ed Program",       href: "/academics/med" },
      { label: "Faculty Members",    href: "/academics#faculty" },
      { label: "Academic Calendar",  href: "/academics#calendar" },
    ],
  },
  { label: "Admissions",   href: "/admissions" },
  { label: "Notice Board", href: "/notices" },
  { label: "Campus Life",  href: "/campus-life" },
  { label: "Alumni",       href: "/alumni" },
  {
    label: "Portals",
    href: "#",
    dropdown: [
      { label: "Student Portal (NU)", href: "https://www.nu.ac.bd/" },
      { label: "Result Check",        href: "http://results.nu.ac.bd/" },
      { label: "Admission Portal",    href: "http://admissions.nu.ac.bd/" },
      { label: "Faculty Portal",      href: "#" },
    ],
  },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [mobileOpen,       setMobileOpen]       = useState(false);
  const [activeDropdown,   setActiveDropdown]   = useState<string | null>(null);
  const [mobileExpanded,   setMobileExpanded]   = useState<string | null>(null);
  const pathname   = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setActiveDropdown(null); }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setActiveDropdown(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ── Top Bar — Secondary Navy background ── */}
      <div
        className="text-white text-xs py-2 px-4 hidden lg:block"
        style={{ backgroundColor: "var(--secondary-navy)" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6" style={{ color: "#bfdbfe" }}>
            <span className="flex items-center gap-1.5">
              <Phone size={12} style={{ color: "#93c5fd" }} />
              +880 1700-000000
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={12} style={{ color: "#93c5fd" }} />
              info@bitc.edu.bd
            </span>
          </div>
          <div className="flex items-center gap-4" style={{ color: "#bfdbfe" }}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors"
              style={{ color: "#bfdbfe" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#bfdbfe")}
              aria-label="Facebook"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors"
              style={{ color: "#bfdbfe" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#bfdbfe")}
              aria-label="YouTube"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16.6 5 12 5 12 5s-4.6 0-6.9.1c-.4 0-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.8C6.8 19 12 19 12 19s4.6 0 6.9-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 15V9l5.5 3-5.5 3z"/>
              </svg>
            </a>
            <span style={{ color: "#4b5563" }}>|</span>
            <span style={{ color: "#bfdbfe" }}>Affiliated with National University, Bangladesh</span>
          </div>
        </div>
      </div>

      {/* ── Main Navbar — Pure White ── */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? "shadow-md shadow-slate-200/80 border-b border-slate-100" : "border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={dropdownRef}>
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md transition-all duration-300"
                style={{ backgroundColor: "var(--primary-green)" }}
              >
                <GraduationCap size={22} className="text-white" />
              </div>
              <div className="hidden sm:block">
                <div
                  className="font-display text-lg font-bold leading-tight"
                  style={{ color: "var(--primary-green)" }}
                >
                  BITC
                </div>
                <div className="text-[10px] leading-tight tracking-wide" style={{ color: "var(--text-muted)" }}>
                  Bangladesh Institute of Technology &amp; Commerce
                </div>
              </div>
            </Link>

            {/* ── Desktop Navigation ── */}
            <div className="hidden xl:flex items-center gap-0.5">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(activeDropdown === item.label ? null : item.label)
                        }
                        className="flex items-center gap-1 px-2.5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200"
                        style={{
                          color: isActive(item.href) ? "var(--primary-green)" : "var(--text-dark-slate)",
                          backgroundColor: isActive(item.href) ? "var(--primary-muted)" : "transparent",
                        }}
                        onMouseEnter={e => {
                          if (!isActive(item.href)) {
                            e.currentTarget.style.color = "var(--primary-green)";
                            e.currentTarget.style.backgroundColor = "#f0fdf4";
                          }
                        }}
                        onMouseLeave={e => {
                          if (!isActive(item.href)) {
                            e.currentTarget.style.color = "var(--text-dark-slate)";
                            e.currentTarget.style.backgroundColor = "transparent";
                          }
                        }}
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown */}
                      {activeDropdown === item.label && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-xl border py-2 z-50"
                          style={{ borderColor: "var(--bg-card-border)" }}>
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block px-4 py-2 text-sm transition-colors"
                              style={{ color: "var(--text-muted)" }}
                              onMouseEnter={e => {
                                e.currentTarget.style.color = "var(--primary-green)";
                                e.currentTarget.style.backgroundColor = "#f0fdf4";
                              }}
                              onMouseLeave={e => {
                                e.currentTarget.style.color = "var(--text-muted)";
                                e.currentTarget.style.backgroundColor = "transparent";
                              }}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-2.5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 block"
                      style={{
                        color: isActive(item.href) ? "var(--primary-green)" : "var(--text-dark-slate)",
                        fontWeight: isActive(item.href) ? "600" : "500",
                        backgroundColor: isActive(item.href) ? "#f0fdf4" : "transparent",
                      }}
                      onMouseEnter={e => {
                        if (!isActive(item.href)) {
                          e.currentTarget.style.color = "var(--primary-green)";
                          e.currentTarget.style.backgroundColor = "#f0fdf4";
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isActive(item.href)) {
                          e.currentTarget.style.color = "var(--text-dark-slate)";
                          e.currentTarget.style.backgroundColor = "transparent";
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Apply Now CTA — Crimson Red */}
              <Link
                href="/admissions"
                className="ml-3 px-4 py-2 text-white text-sm font-bold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
                style={{ backgroundColor: "var(--accent-red)" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--accent-red-hover)")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--accent-red)")}
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-lg transition-colors"
              style={{ color: "var(--text-dark-slate)" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div className="xl:hidden bg-white border-t max-h-[80vh] overflow-y-auto"
            style={{ borderColor: "var(--bg-card-border)" }}>
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                        }
                        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-colors"
                        style={{ color: "var(--text-dark-slate)" }}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            mobileExpanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="ml-4 mt-1 space-y-0.5 border-l-2 pl-3"
                          style={{ borderColor: "var(--primary-green)" }}>
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block py-2 text-sm transition-colors"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors"
                      style={{
                        color: isActive(item.href) ? "var(--primary-green)" : "var(--text-dark-slate)",
                        backgroundColor: isActive(item.href) ? "#f0fdf4" : "transparent",
                        fontWeight: isActive(item.href) ? "600" : "500",
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-3 border-t" style={{ borderColor: "var(--bg-card-border)" }}>
                <Link
                  href="/admissions"
                  className="block w-full text-center px-4 py-3 text-white text-sm font-bold rounded-xl transition-colors"
                  style={{ backgroundColor: "var(--accent-red)" }}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
