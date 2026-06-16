export interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  specialization: string;
  experience: string;
  email: string;
  imageInitials: string;
  imageColor: string;
  researchAreas: string[];
  publications?: number;
}

export const facultyMembers: FacultyMember[] = [
  {
    id: 1,
    name: "Prof. Dr. Md. Aminul Islam",
    designation: "Professor & Head of Department",
    department: "Business Studies",
    qualification: "PhD (Management), MBA",
    specialization: "Strategic Management & Organizational Behavior",
    experience: "22 Years",
    email: "aminul@bitc.edu.bd",
    imageInitials: "AI",
    imageColor: "#1e3a5f",
    researchAreas: ["Corporate Governance", "Leadership", "SME Development"],
    publications: 34,
  },
  {
    id: 2,
    name: "Dr. Nazmun Nahar",
    designation: "Associate Professor",
    department: "Business Studies",
    qualification: "PhD (Finance), M.Com",
    specialization: "Financial Management & Capital Markets",
    experience: "15 Years",
    email: "nazmun@bitc.edu.bd",
    imageInitials: "NN",
    imageColor: "#c9a84c",
    researchAreas: ["Stock Market", "Corporate Finance", "Microfinance"],
    publications: 21,
  },
  {
    id: 3,
    name: "Engr. Rafiqul Hasan",
    designation: "Assistant Professor",
    department: "Computer Science & Engineering",
    qualification: "M.Sc (CSE), B.Sc (CSE)",
    specialization: "Artificial Intelligence & Machine Learning",
    experience: "10 Years",
    email: "rafiqul@bitc.edu.bd",
    imageInitials: "RH",
    imageColor: "#1e6b5f",
    researchAreas: ["Deep Learning", "NLP", "Computer Vision"],
    publications: 12,
  },
  {
    id: 4,
    name: "Engr. Shahnaz Parvin",
    designation: "Lecturer",
    department: "Computer Science & Engineering",
    qualification: "M.Sc (CSE)",
    specialization: "Database Systems & Web Technologies",
    experience: "6 Years",
    email: "shahnaz@bitc.edu.bd",
    imageInitials: "SP",
    imageColor: "#5f1e4b",
    researchAreas: ["NoSQL Databases", "Cloud Computing", "IoT"],
    publications: 7,
  },
  {
    id: 5,
    name: "Adv. Kamrul Islam",
    designation: "Professor",
    department: "Law",
    qualification: "LLM (Constitutional Law), LLB",
    specialization: "Constitutional Law & Human Rights",
    experience: "25 Years",
    email: "kamrul@bitc.edu.bd",
    imageInitials: "KI",
    imageColor: "#3d1e5f",
    researchAreas: ["Constitutional Rights", "Labor Law", "Corporate Law"],
    publications: 18,
  },
  {
    id: 6,
    name: "Dr. Fatema Begum",
    designation: "Associate Professor",
    department: "Education",
    qualification: "PhD (Education), M.Ed",
    specialization: "Educational Psychology & Curriculum Development",
    experience: "18 Years",
    email: "fatema@bitc.edu.bd",
    imageInitials: "FB",
    imageColor: "#5f3d1e",
    researchAreas: ["Inclusive Education", "Teacher Training", "E-Learning"],
    publications: 15,
  },
  {
    id: 7,
    name: "Mr. Towhidur Rahman",
    designation: "Lecturer",
    department: "Business Studies",
    qualification: "MBA (Marketing), BBA",
    specialization: "Marketing & Consumer Behavior",
    experience: "5 Years",
    email: "towhid@bitc.edu.bd",
    imageInitials: "TR",
    imageColor: "#1e5f3d",
    researchAreas: ["Digital Marketing", "Brand Management", "Consumer Psychology"],
  },
  {
    id: 8,
    name: "Ms. Sadia Afrin",
    designation: "Lecturer",
    department: "Computer Science & Engineering",
    qualification: "M.Sc (Software Engineering)",
    specialization: "Software Engineering & Mobile Development",
    experience: "4 Years",
    email: "sadia@bitc.edu.bd",
    imageInitials: "SA",
    imageColor: "#5f1e1e",
    researchAreas: ["Agile Development", "Android Development", "UX Research"],
  },
];
