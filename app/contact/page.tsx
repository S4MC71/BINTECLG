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
      {/* Hero — dark green */}
      <div
        className="py-24 text-white text-center"
        style={{ background: "linear-gradient(135deg, #011a0e 0%, #022c16 50%, #004D2C 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#F0D060] mb-4">
            Contact
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
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
                    lines: ["College Road", "Barisal-8200, Bangladesh"],
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
                    <div className="w-11 h-11 rounded-xl bg-[#006B3C] flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#D4A820]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#004D2C] text-sm mb-1">{title}</div>
                      {lines.map((l) => (
                        <div key={l} className="text-sm text-[#5a6a60]">{l}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Map Embed */}
              <div className="rounded-2xl overflow-hidden border border-[#006B3C]/15 h-56">
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
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-[#004D2C] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 border border-[#006B3C]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/30 focus:border-[#006B3C]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-[#004D2C] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 border border-[#006B3C]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/30 focus:border-[#006B3C]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-[#004D2C] mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+880 XXXXXXXXXX"
                    className="w-full px-4 py-3 border border-[#006B3C]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/30 focus:border-[#006B3C]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-semibold text-[#004D2C] mb-1.5">
                    Subject *
                  </label>
                  <select
                    id="contact-subject"
                    required
                    className="w-full px-4 py-3 border border-[#006B3C]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/30 focus:border-[#006B3C] bg-white"
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
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-[#004D2C] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="Type your message here..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-[#006B3C]/20 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/30 focus:border-[#006B3C] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="w-full py-3.5 bg-[#006B3C] text-white font-bold rounded-xl hover:bg-[#004D2C] hover:shadow-lg transition-all duration-300 shadow-md"
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
