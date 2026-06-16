export interface Program {
  id: string;
  name: string;
  shortName: string;
  faculty: string;
  duration: string;
  totalCredits: number;
  description: string;
  icon: string;
  highlights: string[];
  syllabus: SemesterSyllabus[];
}

export interface SemesterSyllabus {
  semester: number;
  courses: { code: string; name: string; credits: number }[];
}

export const programs: Program[] = [
  {
    id: "bba",
    name: "Bachelor of Business Administration",
    shortName: "BBA",
    faculty: "Business Studies",
    duration: "4 Years (8 Semesters)",
    totalCredits: 136,
    description:
      "A comprehensive program covering management, marketing, finance, and entrepreneurship to develop future business leaders.",
    icon: "💼",
    highlights: ["Case-Study Based Learning", "Industrial Visits", "Internship Program", "Live Project"],
    syllabus: [
      {
        semester: 1,
        courses: [
          { code: "BBA-101", name: "Principles of Management", credits: 3 },
          { code: "BBA-102", name: "Business Communication", credits: 3 },
          { code: "BBA-103", name: "Business Mathematics", credits: 3 },
          { code: "BBA-104", name: "Introduction to Economics", credits: 3 },
          { code: "BBA-105", name: "Computer Fundamentals", credits: 3 },
        ],
      },
      {
        semester: 2,
        courses: [
          { code: "BBA-201", name: "Financial Accounting", credits: 3 },
          { code: "BBA-202", name: "Marketing Management", credits: 3 },
          { code: "BBA-203", name: "Business Statistics", credits: 3 },
          { code: "BBA-204", name: "Organizational Behavior", credits: 3 },
        ],
      },
    ],
  },
  {
    id: "cse",
    name: "Bachelor of Science in Computer Science & Engineering",
    shortName: "CSE",
    faculty: "Science & IT",
    duration: "4 Years (8 Semesters)",
    totalCredits: 148,
    description:
      "A rigorous technical program in programming, algorithms, databases, networks, and AI for the digital age.",
    icon: "💻",
    highlights: ["Modern Computer Labs", "Hackathons & Competitions", "Industry Mentorship", "AI/ML Electives"],
    syllabus: [
      {
        semester: 1,
        courses: [
          { code: "CSE-101", name: "Introduction to Programming (C)", credits: 3 },
          { code: "CSE-102", name: "Discrete Mathematics", credits: 3 },
          { code: "CSE-103", name: "Digital Logic Design", credits: 3 },
          { code: "CSE-104", name: "English for Engineers", credits: 2 },
          { code: "CSE-105", name: "Physics", credits: 3 },
        ],
      },
    ],
  },
  {
    id: "llb",
    name: "Bachelor of Laws",
    shortName: "LLB",
    faculty: "Law",
    duration: "2 Years (4 Semesters)",
    totalCredits: 72,
    description:
      "A professional law degree program covering constitutional law, contract law, criminal law, and legal procedures.",
    icon: "⚖️",
    highlights: ["Moot Court Practice", "Legal Aid Clinic", "Guest Lectures by Judges", "Bar Council Affiliation"],
    syllabus: [
      {
        semester: 1,
        courses: [
          { code: "LLB-101", name: "Constitutional Law", credits: 4 },
          { code: "LLB-102", name: "Law of Contract", credits: 4 },
          { code: "LLB-103", name: "Muslim Personal Law", credits: 3 },
          { code: "LLB-104", name: "Legal System of Bangladesh", credits: 3 },
        ],
      },
    ],
  },
  {
    id: "mba",
    name: "Master of Business Administration",
    shortName: "MBA",
    faculty: "Business Studies",
    duration: "2 Years (4 Semesters)",
    totalCredits: 60,
    description:
      "An advanced management program for working professionals and graduates seeking leadership and strategic skills.",
    icon: "🎓",
    highlights: ["Executive Leadership Track", "Global Business Perspective", "Capstone Project", "Alumni Network"],
    syllabus: [],
  },
  {
    id: "med",
    name: "Master of Education",
    shortName: "M.Ed",
    faculty: "Education",
    duration: "1 Year (2 Semesters)",
    totalCredits: 36,
    description:
      "Designed for practising teachers and education professionals to advance their pedagogical skills and research.",
    icon: "📚",
    highlights: ["Classroom Research", "Curriculum Design", "Educational Psychology", "Teaching Practicum"],
    syllabus: [],
  },
];

export const programsByFaculty = programs.reduce((acc, program) => {
  if (!acc[program.faculty]) acc[program.faculty] = [];
  acc[program.faculty].push(program);
  return acc;
}, {} as Record<string, Program[]>);
