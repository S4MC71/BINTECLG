export interface Event {
  id: number;
  title: string;
  type: "event" | "news";
  date: string;
  category: string;
  excerpt: string;
  imageGradient: string;
  tag: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Annual Science & Technology Fair 2025",
    type: "event",
    date: "2025-07-05",
    category: "Academic",
    excerpt:
      "Students from all departments will showcase innovative projects and research at BITC's flagship Science & Technology Fair.",
    imageGradient: "from-blue-600 to-indigo-800",
    tag: "Upcoming",
  },
  {
    id: 2,
    title: "Inter-College Debate Competition",
    type: "event",
    date: "2025-06-28",
    category: "Cultural",
    excerpt:
      "BITC Debate Club is hosting the annual inter-college debate competition. Teams from 20+ colleges will participate.",
    imageGradient: "from-amber-500 to-orange-700",
    tag: "Registration Open",
  },
  {
    id: 3,
    title: "Alumni Meet 2025 — Reconnect & Inspire",
    type: "event",
    date: "2025-07-20",
    category: "Alumni",
    excerpt:
      "Join us for the grand annual alumni gathering. Network with graduates, hear success stories, and reconnect with your alma mater.",
    imageGradient: "from-emerald-600 to-teal-800",
    tag: "Upcoming",
  },
  {
    id: 4,
    title: "BITC Wins Best College Award at National Education Summit",
    type: "news",
    date: "2025-06-02",
    category: "Achievement",
    excerpt:
      "BITC has been awarded the 'Best Private College of the Year' at the National Education Summit 2025, recognizing excellence in academic outcomes.",
    imageGradient: "from-purple-600 to-violet-800",
    tag: "Achievement",
  },
  {
    id: 5,
    title: "New Computer Lab with 50 High-End Workstations Inaugurated",
    type: "news",
    date: "2025-05-18",
    category: "Infrastructure",
    excerpt:
      "The state-of-the-art Computer Lab II has been inaugurated, featuring 50 high-performance workstations and high-speed internet access.",
    imageGradient: "from-cyan-600 to-blue-800",
    tag: "Infrastructure",
  },
  {
    id: 6,
    title: "BITC Students Secure Top Positions in NU Scholarship Exam",
    type: "news",
    date: "2025-05-10",
    category: "Academic",
    excerpt:
      "12 BITC students secured positions in the National University merit scholarship examination, reflecting our academic excellence.",
    imageGradient: "from-rose-600 to-pink-800",
    tag: "Academic",
  },
];
