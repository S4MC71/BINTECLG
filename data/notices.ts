export type NoticeCategory = "Exam" | "Result" | "Holiday" | "General" | "Admission" | "Urgent" | "Academic" | "Event";
export type NoticeDepartment = "BBA" | "CSE" | "BTHM" | "MBA" | "MTHM" | "General";

export interface Notice {
  id: number;
  title: string;
  date: string;
  category: NoticeCategory;
  department: NoticeDepartment;
  isUrgent: boolean;
  description?: string;
  fileUrl?: string;
}

export const notices: Notice[] = [
  {
    id: 1,
    title: "Final Examination Schedule — Summer 2025 (BBA, MBA, CSE)",
    date: "2025-06-10",
    category: "Exam",
    department: "BBA",
    isUrgent: true,
    description: "The final examination for the Summer 2025 semester will commence on June 25, 2025. Students are advised to collect their admit cards from the admin office.",
    fileUrl: "#",
  },
  {
    id: 2,
    title: "Result Published: 4th Semester — Business Studies (Session 2022-23)",
    date: "2025-06-08",
    category: "Result",
    department: "BBA",
    isUrgent: false,
    description: "National University has published the 4th Semester result for Business Studies. Students can check their results on the NU website.",
    fileUrl: "#",
  },
  {
    id: 3,
    title: "Eid-ul-Adha Holiday Notice — Office & Classes Closed",
    date: "2025-06-05",
    category: "Holiday",
    department: "General",
    isUrgent: false,
    description: "The institute will remain closed from June 16 to June 20, 2025 on the occasion of Eid-ul-Adha.",
  },
  {
    id: 4,
    title: "Admission Open: Honours 1st Year (Session 2025-26) — All Programs",
    date: "2025-06-01",
    category: "Admission",
    department: "General",
    isUrgent: true,
    description: "Admission is now open for Honours 1st Year students for the academic session 2025-26. Last date for application: July 15, 2025.",
    fileUrl: "#",
  },
  {
    id: 5,
    title: "Form Fill-up Notice for CSE 2nd Year Students",
    date: "2025-05-28",
    category: "Exam",
    department: "CSE",
    isUrgent: false,
    description: "Students of CSE 2nd Year are requested to fill up their forms before June 10, 2025.",
    fileUrl: "#",
  },
  {
    id: 6,
    title: "Annual Sports Day 2025 — Participation Registration Open",
    date: "2025-05-20",
    category: "Event",
    department: "General",
    isUrgent: false,
    description: "Registration for Annual Sports Day 2025 is now open. Students interested in participating should register at the students' affairs office.",
  },
  {
    id: 7,
    title: "Library Book Return Notice — All Students",
    date: "2025-05-15",
    category: "General",
    department: "General",
    isUrgent: false,
    description: "All students who have borrowed books from the library are requested to return them before June 1, 2025 to avoid fines.",
  },
  {
    id: 8,
    title: "Special Scholarship for Meritorious Students 2025",
    date: "2025-05-10",
    category: "Academic",
    department: "General",
    isUrgent: false,
    description: "Applications are invited from meritorious students for the BITC Merit Scholarship 2025. Last date: June 5, 2025.",
    fileUrl: "#",
  },
  {
    id: 9,
    title: "Makeup Class Schedule — MBA Program (June 2025)",
    date: "2025-05-05",
    category: "Academic",
    department: "MBA",
    isUrgent: false,
    description: "The makeup class schedule for MBA students has been updated. Please collect from the department office.",
  },
  {
    id: 10,
    title: "IT Club Programming Contest Registration Open",
    date: "2025-04-30",
    category: "Event",
    department: "CSE",
    isUrgent: false,
    description: "BITC IT Club is organizing an inter-college programming contest. Registration deadline: May 25, 2025.",
    fileUrl: "#",
  },
  {
    id: 11,
    title: "BTHM Field Tour Notice — 3rd Year Students",
    date: "2025-04-20",
    category: "Academic",
    department: "BTHM",
    isUrgent: false,
    description: "3rd Year BTHM students are required to attend the field tour scheduled for May 10, 2025.",
    fileUrl: "#",
  },
  {
    id: 12,
    title: "MTHM Mid-Term Exam Routine Published",
    date: "2025-04-15",
    category: "Exam",
    department: "MTHM",
    isUrgent: false,
    description: "The mid-term examination routine for MTHM students has been published. Check the department notice board.",
    fileUrl: "#",
  },
];

export const tickerNotices = notices.filter((n) => n.isUrgent || n.category === "Exam" || n.category === "Result");
