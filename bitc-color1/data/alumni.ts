export interface Alumni {
  id: number;
  name: string;
  batch: string;
  program: string;
  currentPosition: string;
  company: string;
  location: string;
  imageInitials: string;
  imageColor: string;
  achievement?: string;
  quote?: string;
  linkedIn?: string;
}

export const alumni: Alumni[] = [
  {
    id: 1,
    name: "Mohammad Shariful Islam",
    batch: "2015",
    program: "BBA",
    currentPosition: "Senior Manager",
    company: "BRAC Bank Limited",
    location: "Dhaka, Bangladesh",
    imageInitials: "MS",
    imageColor: "#1e3a5f",
    achievement: "Employee of the Year 2023",
    quote: "BITC gave me the foundation to thrive in the corporate world. The faculty's guidance was invaluable.",
    linkedIn: "#",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    batch: "2017",
    program: "CSE",
    currentPosition: "Software Engineer",
    company: "Brain Station 23",
    location: "Dhaka, Bangladesh",
    imageInitials: "NJ",
    imageColor: "#c9a84c",
    achievement: "Built a HealthTech startup serving 50,000+ users",
    quote: "The CSE program at BITC opened the door to my career in software development.",
    linkedIn: "#",
  },
  {
    id: 3,
    name: "Adv. Karim Uddin",
    batch: "2014",
    program: "LLB",
    currentPosition: "Senior Advocate",
    company: "Bangladesh Supreme Court",
    location: "Dhaka, Bangladesh",
    imageInitials: "KU",
    imageColor: "#3d1e5f",
    achievement: "Won landmark case on digital rights in 2022",
    quote: "The legal education I received at BITC was thorough, practical, and transformative.",
    linkedIn: "#",
  },
  {
    id: 4,
    name: "Farhana Akter",
    batch: "2016",
    program: "MBA",
    currentPosition: "Country Director",
    company: "Unilever Bangladesh",
    location: "Dhaka, Bangladesh",
    imageInitials: "FA",
    imageColor: "#1e6b5f",
    achievement: "Youngest Country Director in Unilever BD history",
    quote: "My MBA at BITC shaped my strategic thinking and leadership vision.",
    linkedIn: "#",
  },
  {
    id: 5,
    name: "Rubel Hossain",
    batch: "2018",
    program: "BBA",
    currentPosition: "Entrepreneur / CEO",
    company: "GreenAgro Solutions",
    location: "Chittagong, Bangladesh",
    imageInitials: "RH",
    imageColor: "#5f3d1e",
    achievement: "Forbes 30 Under 30 Asia — 2024",
    quote: "BITC cultivated my entrepreneurial spirit. I am proud to be a BITC graduate.",
    linkedIn: "#",
  },
  {
    id: 6,
    name: "Tahmina Khanam",
    batch: "2019",
    program: "M.Ed",
    currentPosition: "Principal",
    company: "Dhaka Model School & College",
    location: "Dhaka, Bangladesh",
    imageInitials: "TK",
    imageColor: "#5f1e4b",
    achievement: "National Teacher Award 2024",
    quote: "The M.Ed program gave me a new perspective on education leadership and student welfare.",
    linkedIn: "#",
  },
];
