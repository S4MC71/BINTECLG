import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Contact Us — BITC",
  description:
    "Get in touch with BITC. Find our address, phone numbers, email, and send us an inquiry using our contact form.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero — Green to Navy */}
      <div
        className="py-24 text-white text-center"
        style={{ background: "linear-gradient(135deg, var(--primary-green) 0%, #047857 40%, var(--secondary-navy) 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4 px-3 py-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#a7f3d0" }}
          >
            Contact
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-white">
            Get in Touch
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#a7f3d0" }}>
            We are here to help. Reach out to us with any questions about admissions, programs, or campus life.
          </p>
        </div>
      </div>

      {/* Contact details + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <div>
              <SectionHeader
                eyebrow="Contact Information"
                title="We'd Love to Hear From You"
                centered={false}
              />

              <div className="space-y-6 mb-10">
                {[
                  {
                    icon: MapPin,
                    title: "Address",
                    lines: ["123 College Road", "Dhaka-1207, Bangladesh"],
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    lines: ["+880 1700-000000 (General)", "+880 1800-000000 (Admission Desk)"],
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    lines: ["info@bitc.edu.bd", "admission@bitc.edu.bd"],
                  },
                  {
                    icon: Clock,
                    title: "Office Hours",
                    lines: ["Sunday – Thursday: 9:00 AM – 5:00 PM", "Friday – Saturday: Closed"],
                  },
                ].map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--secondary-navy)" }}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-1" style={{ color: "var(--text-dark-slate)" }}>{title}</div>
                      {lines.map((l) => (
                        <div key={l} className="text-sm text-gray-600">{l}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border h-56 flex flex-col items-center justify-center" style={{ backgroundColor: "var(--bg-lite-grey)", borderColor: "var(--bg-card-border)" }}>
                <MapPin size={36} className="mb-2" style={{ color: "var(--primary-green)" }} />
                <p className="text-sm text-gray-500 font-medium">Google Maps</p>
                <p className="text-xs text-gray-400 mb-3">123 College Road, Dhaka-1207</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold hover:underline transition-colors"
                  style={{ color: "var(--primary-green)" }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <SectionHeader
                eyebrow="Send a Message"
                title="Contact Form"
                centered={false}
              />

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold mb-1.5" style={{ color: "var(--text-dark-slate)" }}>
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold mb-1.5" style={{ color: "var(--text-dark-slate)" }}>
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold mb-1.5" style={{ color: "var(--text-dark-slate)" }}>
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+880 XXXXXXXXXX"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-semibold mb-1.5" style={{ color: "var(--text-dark-slate)" }}>
                    Subject *
                  </label>
                  <select
                    id="contact-subject"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600 bg-white transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option>Admission Inquiry</option>
                    <option>Program Information</option>
                    <option>Fee &amp; Scholarship</option>
                    <option>Existing Student Support</option>
                    <option>Alumni Related</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold mb-1.5" style={{ color: "var(--text-dark-slate)" }}>
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="Type your message here..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600 resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="w-full py-3.5 text-white font-bold rounded-xl transition-all duration-200 shadow-md"
                  style={{ backgroundColor: "var(--primary-green)" }}
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16" style={{ backgroundColor: "var(--bg-lite-grey)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Phone, title: "Call Us", desc: "+880 1700-000000", sub: "Mon–Thu, 9AM–5PM", color: "var(--primary-green)" },
              { icon: Mail, title: "Email Us", desc: "info@bitc.edu.bd", sub: "Response within 24h", color: "var(--secondary-navy)" },
              { icon: MapPin, title: "Visit Us", desc: "123 College Road", sub: "Dhaka-1207, Bangladesh", color: "var(--accent-red)" },
            ].map(({ icon: Icon, title, desc, sub, color }) => (
              <div key={title} className="bg-white rounded-2xl p-6 text-center shadow-sm border" style={{ borderColor: "var(--bg-card-border)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-white" style={{ backgroundColor: color }}>
                  <Icon size={20} />
                </div>
                <h3 className="font-display font-bold text-base mb-1" style={{ color: "var(--text-dark-slate)" }}>{title}</h3>
                <p className="text-sm font-semibold" style={{ color }}>{desc}</p>
                <p className="text-xs text-gray-400 mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
