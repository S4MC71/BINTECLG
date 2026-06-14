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
      {/* Hero */}
      <div
        className="py-24 text-white text-center"
        style={{ background: "linear-gradient(135deg, #0A1628 0%, #112550 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C] mb-4">
            Contact
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
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
                    <div className="w-11 h-11 rounded-xl bg-[#0A1628] flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0A1628] text-sm mb-1">{title}</div>
                      {lines.map((l) => (
                        <div key={l} className="text-sm text-gray-600">{l}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 h-56 bg-[#f0f5fb] flex flex-col items-center justify-center">
                <MapPin size={36} className="text-[#C9A84C] mb-2" />
                <p className="text-sm text-gray-500 font-medium">Google Maps</p>
                <p className="text-xs text-gray-400 mb-3">123 College Road, Dhaka-1207</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#C9A84C] font-semibold hover:underline"
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
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/40 focus:border-[#C9A84C]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/40 focus:border-[#C9A84C]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+880 XXXXXXXXXX"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/40 focus:border-[#C9A84C]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                    Subject *
                  </label>
                  <select
                    id="contact-subject"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/40 focus:border-[#C9A84C] bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option>Admission Inquiry</option>
                    <option>Program Information</option>
                    <option>Fee & Scholarship</option>
                    <option>Existing Student Support</option>
                    <option>Alumni Related</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-[#0A1628] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="Type your message here..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/40 focus:border-[#C9A84C] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="w-full py-3.5 bg-[#0A1628] text-white font-bold rounded-xl hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all duration-300 shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
