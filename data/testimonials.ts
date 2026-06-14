export interface Testimonial {
  id: number;
  name: string;
  batch: string;
  program: string;
  rating: number;
  review: string;
  imageInitials: string;
  imageColor: string;
  currentRole: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Arif Hossain",
    batch: "Batch 2020",
    program: "BBA",
    rating: 5,
    review:
      "Studying at BITC was a life-changing experience. The professors are highly qualified and always available to guide students. The campus environment is very supportive and motivating. I am proud to be a BITC graduate!",
    imageInitials: "AH",
    imageColor: "#1e3a5f",
    currentRole: "Branch Manager, City Bank",
  },
  {
    id: 2,
    name: "Sumaiya Rahman",
    batch: "Batch 2021",
    program: "CSE",
    rating: 5,
    review:
      "The CSE program at BITC is exceptional. Modern labs, experienced faculty, and the IT Club environment helped me land my dream job right after graduation. The practical approach to learning here is truly world-class.",
    imageInitials: "SR",
    imageColor: "#c9a84c",
    currentRole: "Junior Developer, Pathao",
  },
  {
    id: 3,
    name: "Tanvir Ahmed",
    batch: "Batch 2019",
    program: "LLB",
    rating: 5,
    review:
      "The LLB program prepared me beyond expectations. The moot court sessions, experienced legal faculty, and access to legal research resources were outstanding. BITC is the best place to study law in the region.",
    imageInitials: "TA",
    imageColor: "#3d1e5f",
    currentRole: "Advocate, Dhaka District Court",
  },
  {
    id: 4,
    name: "Roksana Khatun",
    batch: "Batch 2022",
    program: "MBA",
    rating: 4,
    review:
      "The MBA program gave me a fresh perspective on business strategy and management. The case study approach and guest lectures from industry leaders added tremendous value to my learning journey.",
    imageInitials: "RK",
    imageColor: "#1e6b5f",
    currentRole: "Marketing Executive, Square Group",
  },
  {
    id: 5,
    name: "Jahangir Alam",
    batch: "Batch 2018",
    program: "BBA",
    rating: 5,
    review:
      "From the notice board to the classrooms, everything at BITC runs professionally. The library resources, the dedicated faculty, and the vibrant student culture made my four years truly memorable and productive.",
    imageInitials: "JA",
    imageColor: "#5f3d1e",
    currentRole: "Entrepreneur & Co-Founder, TechBazar BD",
  },
];
