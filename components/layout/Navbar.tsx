"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
} from "lucide-react";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Academics",
    href: "/academics",
    dropdown: [
      { label: "All Programs", href: "/academics" },
      { label: "BBA Program", href: "/academics/bba" },
      { label: "CSE Program", href: "/academics/cse" },
      { label: "LLB Program", href: "/academics/llb" },
      { label: "MBA Program", href: "/academics/mba" },
      { label: "M.Ed Program", href: "/academics/med" },
      { label: "Faculty Members", href: "/academics#faculty" },
      { label: "Academic Calendar", href: "/academics#calendar" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  {
    label: "Notice Board",
    href: "/notices",
    dropdown: [
      { label: "BITC Notice", href: "/notices/bitc" },
      { label: "NU Official Notice", href: "/notices/nu" },
    ],
  },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Alumni", href: "/alumni" },
  {
    label: "Portals",
    href: "#",
    dropdown: [
      { label: "Student Portal (NU)", href: "https://www.nu.ac.bd/", },
      { label: "Result Check", href: "http://results.nu.ac.bd/", },
      { label: "Admission Portal", href: "http://admissions.nu.ac.bd/", },
      { label: "Faculty Portal", href: "#" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Top Bar — Forest Green background */}
      <div className="bg-[#006B3C] text-white text-xs py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 text-green-100">
            <span className="flex items-center gap-1.5">
              <Phone size={12} className="text-[#F0D060]" />
              +880 1700-000000
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={12} className="text-[#F0D060]" />
              info@bitc.edu.bd
            </span>
          </div>
          <div className="flex items-center gap-4 text-green-100">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F0D060] transition-colors"
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
              className="hover:text-[#F0D060] transition-colors"
              aria-label="YouTube"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16.6 5 12 5 12 5s-4.6 0-6.9.1c-.4 0-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.8C6.8 19 12 19 12 19s4.6 0 6.9-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 15V9l5.5 3-5.5 3z"/>
              </svg>
            </a>
            <span className="text-green-600">|</span>
            <span className="text-green-200">Affiliated with National University, Bangladesh</span>
          </div>
        </div>
      </div>

      {/* Main Navbar — white background */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-green-900/10"
            : "bg-white shadow-sm border-b-2 border-[#006B3C]/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={dropdownRef}>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                <Image
                  src="/images/Logo.png"
                  alt="BITC Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="font-display text-sm sm:text-lg font-bold leading-tight"
                  style={{ background: "linear-gradient(90deg, #006B3C, #D4A820)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  BITC
                </div>
                <div className="text-[8px] sm:text-[10px] text-[#5a6a60] font-medium leading-tight tracking-wide">
                  Barisal Information Technology College
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-0.5">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.label ? null : item.label
                          )
                        }
                        className={`flex items-center gap-1 px-2.5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                          isActive(item.href)
                            ? "text-[#006B3C] bg-[#e8f5ee] font-semibold"
                            : "text-[#1a2e22] hover:text-[#006B3C] hover:bg-[#e8f5ee]"
                        }`}
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
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-xl shadow-green-900/15 border border-[#e8f5ee] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block px-4 py-2 text-sm text-[#1a2e22] hover:text-[#006B3C] hover:bg-[#e8f5ee] transition-colors"
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
                      className={`px-2.5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                        isActive(item.href)
                          ? "text-[#006B3C] bg-[#e8f5ee] font-semibold"
                          : "text-[#1a2e22] hover:text-[#006B3C] hover:bg-[#e8f5ee]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Apply Now CTA — Crimson Red */}
              <Link
                href="/admissions"
                className="ml-3 px-4 py-2 bg-[#C41E1E] text-white text-sm font-bold rounded-lg hover:bg-[#9B1515] transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 rounded-lg text-[#1a2e22] hover:bg-[#e8f5ee] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="xl:hidden bg-white border-t border-[#e8f5ee] shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          )
                        }
                        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-[#1a2e22] hover:bg-[#e8f5ee] rounded-lg transition-colors"
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
                        <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-[#D4A820] pl-3">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block py-2 text-sm text-[#5a6a60] hover:text-[#006B3C] transition-colors"
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
                      className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                        isActive(item.href)
                          ? "text-[#006B3C] bg-[#e8f5ee] font-semibold"
                          : "text-[#1a2e22] hover:bg-[#e8f5ee]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-3 border-t border-[#e8f5ee]">
                <Link
                  href="/admissions"
                  className="block w-full text-center px-4 py-3 bg-[#C41E1E] text-white text-sm font-bold rounded-xl hover:bg-[#9B1515] transition-colors"
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
