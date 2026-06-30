"use client";

import { useState } from "react";
import { Phone, Mail, ExternalLink, MessageCircleMore, X, Upload, Check, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const programDetails = {
  CSE: {
    fullName: "Computer Science & Engineering (CSE)",
    degree: "Honours 1st Year",
    duration: "4 Years (8 Semesters)",
    seats: 60,
    requirement: "SSC + HSC (Science) with minimum GPA 2.5 in both, Physics & Math compulsory",
    feeRows: [
      { criteria: "5.00 (Golden)", admission: "15,000", midTerm: "5,000", final: "5,000", semFee: "10,000", tuition: "N/A", total: "95,000" },
      { criteria: "5.00", admission: "15,000", midTerm: "8,000", final: "8,000", semFee: "16,000", tuition: "1,500 * 48", total: "215,000" },
      { criteria: "4.00 - 4.99", admission: "15,000", midTerm: "8,000", final: "8,000", semFee: "16,000", tuition: "2,500 * 48", total: "263,000" },
      { criteria: "2.50 - 3.99", admission: "15,000", midTerm: "8,000", final: "8,000", semFee: "16,000", tuition: "2,900 * 48", total: "282,000" },
    ]
  },
  BBA: {
    fullName: "Bachelor of Business Administration (BBA)",
    degree: "Honours 1st Year",
    duration: "4 Years (8 Semesters)",
    seats: 120,
    requirement: "SSC + HSC or equivalent with minimum GPA 2.0 in both",
    feeRows: [
      { criteria: "5.00 (Golden)", admission: "10,000", midTerm: "3,500", final: "3,500", semFee: "7,000", tuition: "N/A", total: "66,000" },
      { criteria: "5.00", admission: "10,000", midTerm: "5,000", final: "5,000", semFee: "10,000", tuition: "800 * 48", total: "128,400" },
      { criteria: "4.00 - 4.99", admission: "10,000", midTerm: "5,000", final: "5,000", semFee: "10,000", tuition: "1,200 * 48", total: "147,600" },
      { criteria: "2.00 - 3.99", admission: "10,000", midTerm: "5,000", final: "5,000", semFee: "10,000", tuition: "1,500 * 48", total: "162,000" },
    ]
  },
  LLB: {
    fullName: "Bachelor of Laws (LLB)",
    degree: "Professional (2-Year)",
    duration: "2 Years (4 Semesters)",
    seats: 80,
    requirement: "Any Honours/Pass degree from recognized university with minimum 2nd Division/Class",
    feeRows: [
      { criteria: "CGPA 3.50+ / 1st Class", admission: "12,000", midTerm: "4,000", final: "4,000", semFee: "8,000", tuition: "N/A", total: "44,000" },
      { criteria: "CGPA 3.00 - 3.49", admission: "12,000", midTerm: "5,500", final: "5,500", semFee: "11,000", tuition: "1,000 * 24", total: "80,000" },
      { criteria: "CGPA 2.00 - 2.99 / 2nd Class", admission: "12,000", midTerm: "5,500", final: "5,500", semFee: "11,000", tuition: "1,500 * 24", total: "92,000" },
    ]
  },
  MBA: {
    fullName: "Master of Business Administration (MBA)",
    degree: "Masters",
    duration: "2 Years (4 Semesters)",
    seats: 80,
    requirement: "BBA or any Honours degree with minimum 2nd Division/CGPA 2.0",
    feeRows: [
      { criteria: "CGPA 3.50+ / 1st Class", admission: "12,000", midTerm: "4,000", final: "4,000", semFee: "8,000", tuition: "N/A", total: "44,000" },
      { criteria: "CGPA 3.00 - 3.49", admission: "12,000", midTerm: "5,500", final: "5,500", semFee: "11,000", tuition: "1,200 * 24", total: "84,800" },
      { criteria: "CGPA 2.00 - 2.99 / 2nd Class", admission: "12,000", midTerm: "5,500", final: "5,500", semFee: "11,000", tuition: "1,800 * 24", total: "99,200" },
    ]
  },
  "B.Ed": {
    fullName: "Bachelor of Education (B.Ed)",
    degree: "Professional (1-Year)",
    duration: "1 Year (2 Semesters)",
    seats: 60,
    requirement: "Graduation or Honours degree with minimum 2nd Division, teaching experience preferred",
    feeRows: [
      { criteria: "CGPA 3.50+ / 1st Class", admission: "10,000", midTerm: "3,500", final: "3,500", semFee: "7,000", tuition: "N/A", total: "24,000" },
      { criteria: "CGPA 3.00 - 3.49", admission: "10,000", midTerm: "5,000", final: "5,000", semFee: "10,000", tuition: "1,000 * 12", total: "42,000" },
      { criteria: "CGPA 2.00 - 2.99 / 2nd Class", admission: "10,000", midTerm: "5,000", final: "5,000", semFee: "10,000", tuition: "1,500 * 12", total: "48,000" },
    ]
  }
};

const steps = [
  { step: "01", title: "Check Eligibility", desc: "Review the eligibility criteria for your chosen program." },
  { step: "02", title: "Visit NU Portal", desc: "Go to the National University admission portal and fill in your details." },
  { step: "03", title: "Select BITC", desc: "Choose Barisal Information Technology College (BITC) as your preferred college." },
  { step: "04", title: "Pay Admission Fee", desc: "Pay the required fees online or at designated bank branches." },
  { step: "05", title: "Submit Documents", desc: "Submit certified copies of academic certificates to the admission office." },
  { step: "06", title: "Confirm Admission", desc: "Receive your admission confirmation and student ID from BITC." },
];

export default function AdmissionsContent() {
  const [selected, setSelected] = useState("CSE");
  const programs = ["CSE", "BBA", "LLB", "MBA", "B.Ed"];

  const currentProgram = programDetails[selected as keyof typeof programDetails];
  const isUndergrad = selected === "CSE" || selected === "BBA";
  const criteriaHeader = isUndergrad ? "GPA (HSC)" : "CGPA / Entry Criteria";

  // Form State
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    program: "CSE",
    session: "2025-26",
    fullName: "",
    phone: "",
    dob: "",
    email: "",
    presentAddress: "",
    guardianName: "",
    guardianPhone: "",
    sscSchool: "",
    sscGpa: "",
    sscYear: "",
    hscCollege: "",
    hscGpa: "",
    hscYear: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  // Input Sanitizer to block XSS / Script injection
  const sanitizeInput = (val: string) => {
    return val
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Strict real-time type restricts to reject invalid keys
    if (name === "fullName" || name === "guardianName") {
      const lettersOnly = value.replace(/[^a-zA-Z\s\.\-]/g, "");
      setFormData((prev) => ({ ...prev, [name]: lettersOnly }));
      if (errors[name]) {
        setErrors((prev) => {
          const copy = { ...prev };
          delete copy[name];
          return copy;
        });
      }
      return;
    }
    
    if (name === "phone" || name === "guardianPhone") {
      const phoneOnly = value.replace(/[^0-9+]/g, "");
      setFormData((prev) => ({ ...prev, [name]: phoneOnly }));
      if (errors[name]) {
        setErrors((prev) => {
          const copy = { ...prev };
          delete copy[name];
          return copy;
        });
      }
      return;
    }
    
    if (name === "sscGpa" || name === "hscGpa") {
      let gpaOnly = value.replace(/[^0-9.]/g, "");
      const dotIndex = gpaOnly.indexOf(".");
      if (dotIndex !== -1) {
        gpaOnly = gpaOnly.slice(0, dotIndex + 1) + gpaOnly.slice(dotIndex + 1).replace(/\./g, "");
      }
      setFormData((prev) => ({ ...prev, [name]: gpaOnly }));
      if (errors[name]) {
        setErrors((prev) => {
          const copy = { ...prev };
          delete copy[name];
          return copy;
        });
      }
      return;
    }
    
    if (name === "sscYear" || name === "hscYear") {
      const digitsOnly = value.replace(/[^0-9]/g, "");
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
      if (errors[name]) {
        setErrors((prev) => {
          const copy = { ...prev };
          delete copy[name];
          return copy;
        });
      }
      return;
    }

    const sanitizedVal = sanitizeInput(value);
    setFormData((prev) => ({ ...prev, [name]: sanitizedVal }));
    
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validTypes = ["image/jpeg", "image/png", "image/webp"];
      
      if (!validTypes.includes(file.type)) {
        setErrors((prev) => ({ ...prev, image: "Only JPG, PNG and WebP images are allowed" }));
        setImageFile(null);
        setImagePreview("");
        return;
      }
      
      if (file.size > 2 * 1024 * 1024) { // 2MB Limit
        setErrors((prev) => ({ ...prev, image: "Image size must be less than 2MB" }));
        setImageFile(null);
        setImagePreview("");
        return;
      }
      
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.image;
        return copy;
      });
      
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Standard regex models for validations
    const nameRegex = /^[a-zA-Z\s\.\-]{3,50}$/;
    const phoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Program selection
    if (!formData.program) newErrors.program = "Program is required";
    if (!formData.session) newErrors.session = "Session is required";

    // Personal info
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    } else if (!nameRegex.test(formData.fullName)) {
      newErrors.fullName = "Full Name must contain letters and spaces only (3-50 chars)";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 11-digit Bangladeshi mobile number";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    } else {
      const birthDate = new Date(formData.dob);
      const today = new Date();
      if (birthDate >= today) {
        newErrors.dob = "Date of birth cannot be in the future";
      } else {
        const age = today.getFullYear() - birthDate.getFullYear();
        if (age < 14) {
          newErrors.dob = "Minimum required age is 14 years";
        }
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Image upload validation
    if (!imageFile) {
      newErrors.image = "Passport-sized photo upload is required";
    }

    // Academic Background
    // SSC
    if (!formData.sscSchool.trim()) {
      newErrors.sscSchool = "School name is required";
    } else if (formData.sscSchool.length < 3 || formData.sscSchool.length > 100) {
      newErrors.sscSchool = "School name must be between 3 and 100 characters";
    }
    
    if (!formData.sscGpa.trim()) {
      newErrors.sscGpa = "GPA is required";
    } else {
      const gpa = parseFloat(formData.sscGpa);
      if (isNaN(gpa) || gpa < 1.00 || gpa > 5.00) {
        newErrors.sscGpa = "GPA must be a number between 1.00 and 5.00";
      }
    }

    if (!formData.sscYear.trim()) {
      newErrors.sscYear = "Passing year is required";
    } else {
      const year = parseInt(formData.sscYear);
      const currentYear = new Date().getFullYear();
      if (isNaN(year) || year < 2000 || year > currentYear) {
        newErrors.sscYear = `Passing year must be between 2000 and ${currentYear}`;
      }
    }

    // HSC
    if (!formData.hscCollege.trim()) {
      newErrors.hscCollege = "College name is required";
    } else if (formData.hscCollege.length < 3 || formData.hscCollege.length > 100) {
      newErrors.hscCollege = "College name must be between 3 and 100 characters";
    }

    if (!formData.hscGpa.trim()) {
      newErrors.hscGpa = "GPA is required";
    } else {
      const gpa = parseFloat(formData.hscGpa);
      if (isNaN(gpa) || gpa < 1.00 || gpa > 5.00) {
        newErrors.hscGpa = "GPA must be a number between 1.00 and 5.00";
      }
    }

    if (!formData.hscYear.trim()) {
      newErrors.hscYear = "Passing year is required";
    } else {
      const year = parseInt(formData.hscYear);
      const currentYear = new Date().getFullYear();
      if (isNaN(year) || year < 2000 || year > currentYear) {
        newErrors.hscYear = `Passing year must be between 2000 and ${currentYear}`;
      }
    }

    // Address & Guardian
    if (!formData.presentAddress.trim()) {
      newErrors.presentAddress = "Present Address is required";
    } else if (formData.presentAddress.length < 10 || formData.presentAddress.length > 250) {
      newErrors.presentAddress = "Address must be between 10 and 250 characters";
    }

    if (!formData.guardianName.trim()) {
      newErrors.guardianName = "Guardian Name is required";
    } else if (!nameRegex.test(formData.guardianName)) {
      newErrors.guardianName = "Guardian Name must contain letters and spaces only (3-50 chars)";
    }

    if (!formData.guardianPhone.trim()) {
      newErrors.guardianPhone = "Guardian Phone is required";
    } else if (!phoneRegex.test(formData.guardianPhone)) {
      newErrors.guardianPhone = "Please enter a valid 11-digit Bangladeshi mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        data.append(key, val);
      });
      if (imageFile) {
        data.append("photo", imageFile);
      }

      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "https://api.bitc.edu.bd";
      const response = await fetch(`${backendUrl}/api/admissions`, {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Failed to submit application. Please verify server connectivity.");
      }

      setSubmitSuccess(true);
    } catch (err: any) {
      setErrors((prev) => ({
        ...prev,
        submit: err.message || "Something went wrong. Please try again later.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero — dark green + crimson red CTA */}
      <div
        className="py-24 text-white text-center"
        style={{ background: "linear-gradient(135deg, #011a0e 0%, #022c16 50%, #004D2C 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#F0D060] mb-4">
            Admissions 2025–26
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Begin Your Journey at BITC
          </h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto mb-8">
            Join a community of over 5,000 alumni. Apply now for Session 2025–26.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="http://admissions.nu.ac.bd/"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C41E1E] text-white font-bold rounded-xl hover:bg-[#9B1515] transition-colors shadow-lg text-base cursor-pointer"
            >
              Apply Online via NU Portal <ExternalLink size={16} />
            </a>
            <button
              onClick={() => {
                setIsFormOpen(true);
                setSubmitSuccess(false);
                setFormData({
                  program: "CSE",
                  session: "2025-26",
                  fullName: "",
                  phone: "",
                  dob: "",
                  email: "",
                  presentAddress: "",
                  guardianName: "",
                  guardianPhone: "",
                  sscSchool: "",
                  sscGpa: "",
                  sscYear: "",
                  hscCollege: "",
                  hscGpa: "",
                  hscYear: "",
                });
                setImageFile(null);
                setImagePreview("");
                setErrors({});
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-[#D4A820] hover:text-[#F0D060] transition-colors text-base cursor-pointer"
            >
              Apply for Admission at BITC
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Eligibility & Fee Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Program Info"
            title="Eligibility & Fee Structure"
            subtitle="Click on the buttons below to view specific academic requirements and detailed fee structures for each subject."
          />

          {/* Program Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-2xl mx-auto">
            {programs.map((prog) => {
              const isActive = selected === prog;
              return (
                <button
                  key={prog}
                  onClick={() => setSelected(prog)}
                  className={`px-6 py-3 rounded-xl font-display font-bold text-sm transition-all duration-300 shadow-sm border cursor-pointer ${
                    isActive
                      ? "bg-[#006B3C] border-[#006B3C] text-white scale-[1.02] shadow-md shadow-[#006B3C]/10"
                      : "bg-white border-[#006B3C]/15 text-[#004D2C] hover:bg-[#e8f5ee] hover:border-[#006B3C]/30"
                  }`}
                >
                  {prog}
                </button>
              );
            })}
          </div>

          {/* Dynamic Content Panel */}
          <div className="bg-white border border-[#006B3C]/10 rounded-3xl p-6 sm:p-8 shadow-xl max-w-5xl mx-auto space-y-8">
            
            {/* Program Header */}
            <div className="flex items-center gap-3 border-b border-[#006B3C]/10 pb-4">
              <div className="w-1.5 h-7 bg-[#006B3C] rounded-full" />
              <h2 className="font-display text-2xl font-bold text-[#004D2C]">
                {currentProgram.fullName}
              </h2>
            </div>

            {/* Eligibility & Overview Info Cards */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#e8f5ee]/40 border border-[#006B3C]/10 rounded-2xl p-4 transition-all duration-200 hover:bg-[#e8f5ee]/60">
                  <span className="text-[10px] font-bold text-[#5a6a60] uppercase tracking-wider block mb-1">Degree Type</span>
                  <p className="text-sm font-bold text-[#004D2C]">{currentProgram.degree}</p>
                </div>
                <div className="bg-[#e8f5ee]/40 border border-[#006B3C]/10 rounded-2xl p-4 transition-all duration-200 hover:bg-[#e8f5ee]/60">
                  <span className="text-[10px] font-bold text-[#5a6a60] uppercase tracking-wider block mb-1">Duration</span>
                  <p className="text-sm font-bold text-[#004D2C]">{currentProgram.duration}</p>
                </div>
                <div className="bg-[#e8f5ee]/40 border border-[#006B3C]/10 rounded-2xl p-4 transition-all duration-200 hover:bg-[#e8f5ee]/60">
                  <span className="text-[10px] font-bold text-[#5a6a60] uppercase tracking-wider block mb-1">Seats Available</span>
                  <p className="text-sm font-bold text-[#D4A820]">{currentProgram.seats} Seats</p>
                </div>
              </div>

              <div className="bg-[#e8f5ee]/20 border border-[#006B3C]/5 rounded-2xl p-5">
                <span className="text-[10px] font-bold text-[#5a6a60] uppercase tracking-wider block mb-1">Academic Eligibility Requirements</span>
                <p className="text-sm text-[#1a2e22] font-semibold leading-relaxed">{currentProgram.requirement}</p>
              </div>
            </div>

            {/* GPA-Wise Detailed Fees Table */}
            <div className="space-y-4 pt-4 border-t border-[#006B3C]/10">
              <h3 className="font-display text-lg font-bold text-[#004D2C] flex items-center gap-2">
                GPA-Wise Fee & Tuition Structure
              </h3>
              
              <div className="overflow-x-auto rounded-2xl border border-[#006B3C]/15 shadow-md">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#004D2C] text-white">
                      <th className="text-left px-5 py-4 font-semibold">{criteriaHeader}</th>
                      <th className="text-center px-5 py-4 font-semibold">Admission Fees</th>
                      <th className="text-center px-5 py-4 font-semibold">Before Mid-Term</th>
                      <th className="text-center px-5 py-4 font-semibold">Before Internal-Final</th>
                      <th className="text-center px-5 py-4 font-semibold">Total Sem Fees</th>
                      <th className="text-center px-5 py-4 font-semibold">Tuition Fees</th>
                      <th className="text-center px-5 py-4 font-bold text-[#F0D060]">Grand Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#006B3C]/10">
                    {currentProgram.feeRows.map((row, idx) => (
                      <tr 
                        key={idx} 
                        className={`transition-colors duration-150 hover:bg-[#e8f5ee]/20 ${
                          idx % 2 === 0 ? "bg-white" : "bg-[#e8f5ee]/5"
                        }`}
                      >
                        <td className="px-5 py-4 font-bold text-[#1a2e22] whitespace-nowrap">{row.criteria}</td>
                        <td className="text-center px-5 py-4 text-[#5a6a60] whitespace-nowrap">৳{row.admission}</td>
                        <td className="text-center px-5 py-4 text-[#5a6a60] whitespace-nowrap">৳{row.midTerm}</td>
                        <td className="text-center px-5 py-4 text-[#5a6a60] whitespace-nowrap">৳{row.final}</td>
                        <td className="text-center px-5 py-4 font-semibold text-[#004D2C] whitespace-nowrap">৳{row.semFee}</td>
                        <td className="text-center px-5 py-4 font-semibold text-[#D4A820] whitespace-nowrap">
                          {row.tuition.startsWith("N/A") ? row.tuition : `৳${row.tuition}`}
                        </td>
                        <td className="text-center px-5 py-4 font-bold text-[#004D2C] text-base whitespace-nowrap">৳{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Scholarship & Aid */}
      <section className="py-20 bg-[#f2faf6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Scholarships"
            title="Scholarship Opportunities"
            subtitle="Transparent, affordable fees with multiple scholarship opportunities available."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Merit Scholarship", desc: "Up to 50% fee waiver for students with GPA 5.00 in both SSC & HSC.", badge: "50% Waiver" },
              { title: "Need-Based Grant", desc: "Financial assistance for students from economically disadvantaged backgrounds.", badge: "Up to 100%" },
              { title: "Sports Quota", desc: "Special fee concession for nationally recognized athletes and sports persons.", badge: "25% Waiver" },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 border border-[#006B3C]/10 shadow-sm">
                <div className="inline-block px-3 py-1 bg-[#006B3C] text-white text-xs font-bold rounded-full mb-4">
                  {s.badge}
                </div>
                <h3 className="font-display text-lg font-bold text-[#004D2C] mb-2">{s.title}</h3>
                <p className="text-sm text-[#5a6a60]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Application Process"
            title="How to Apply"
            subtitle="Follow these simple steps to complete your application for admission at BITC."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="relative bg-[#e8f5ee] rounded-2xl p-6 border border-[#006B3C]/15 card-lift">
                <div className="font-display text-4xl font-bold text-[#006B3C]/20 mb-3">
                  {s.step}
                </div>
                <h3 className="font-display text-base font-bold text-[#004D2C] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-[#5a6a60]">{s.desc}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Admission Desk — light green background to separate from dark footer */}
      <section className="py-20 bg-[#f2faf6]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeader
            eyebrow="Need Help?"
            title="Admission Desk"
            subtitle="Our friendly admission team is here to answer all your questions."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: (props: any) => <Phone {...props} />, 
                label: "Hotline", 
                value: "+880 1700-000000", 
                href: "tel:+8801700000000" 
              },
              { 
                icon: MessageCircleMore, 
                label: "WhatsApp", 
                value: "+880 1800-000000", 
                href: "https://wa.me/8801800000000" 
              },
              { 
                icon: (props: any) => <Mail {...props} />, 
                label: "Email", 
                value: "admission@bitc.edu.bd", 
                href: "mailto:admission@bitc.edu.bd" 
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block bg-white rounded-2xl p-5 border border-[#006B3C]/10 shadow-sm hover:shadow-md hover:border-[#D4A820]/30 hover:scale-[1.02] transition-all duration-200 cursor-pointer text-center"
              >
                <Icon className="text-[#006B3C] w-6 h-6 mx-auto mb-3" />
                <p className="text-xs text-[#5a6a60] mb-1">{label}</p>
                <p className="font-bold text-[#004D2C]">{value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Form Modal Overlay */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#006B3C]/10 my-8 overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 bg-[#004D2C] text-white border-b border-[#006B3C]/20 flex-shrink-0">
              <div>
                <h2 className="font-display text-xl font-bold">BITC Admission Form</h2>
                <p className="text-xs text-green-200 mt-0.5">Please fill in all the details accurately to submit your application.</p>
              </div>
              <button 
                onClick={() => setIsFormOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors border-none cursor-pointer"
                aria-label="Close form"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body / Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-neutral-50/50">
              {submitSuccess ? (
                /* Success Screen */
                <div className="py-12 px-4 text-center max-w-md mx-auto space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#e8f5ee] border-2 border-[#006B3C] flex items-center justify-center mx-auto text-[#006B3C]">
                    <Check size={36} strokeWidth={3} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-[#004D2C]">Application Submitted!</h3>
                    <p className="text-sm text-[#5a6a60] leading-relaxed">
                      Thank you, <strong className="text-[#1a2e22]">{formData.fullName}</strong>. Your admission application for the <strong className="text-[#1a2e22]">{formData.program}</strong> program (Session {formData.session}) has been safely submitted.
                    </p>
                    <p className="text-xs text-[#5a6a60] bg-[#e8f5ee]/50 p-3 rounded-lg border border-[#006B3C]/10 mt-4">
                      Our admissions department will review your details and contact you at <strong className="text-[#1a2e22]">{formData.phone}</strong> or <strong className="text-[#1a2e22]">{formData.email}</strong> shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsFormOpen(false)}
                    className="w-full py-3.5 bg-[#006B3C] text-white font-bold text-sm rounded-xl hover:bg-[#004D2C] transition-all cursor-pointer border-none shadow-md shadow-[#006B3C]/15"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                /* The Form */
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Group 1: Program Selection */}
                  <div className="space-y-4 bg-white p-6 rounded-2xl border border-[#006B3C]/10 shadow-sm">
                    <div className="flex items-center gap-2 border-b border-[#006B3C]/10 pb-2.5">
                      <div className="w-1 h-4 bg-[#006B3C] rounded-full" />
                      <h3 className="font-display text-sm font-bold text-[#004D2C] uppercase tracking-wider">1. Program Selection</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="form-program" className="block text-xs font-bold text-[#5a6a60] mb-2 uppercase tracking-wide">Select Program *</label>
                        <select
                          id="form-program"
                          name="program"
                          value={formData.program}
                          onChange={handleInputChange}
                          className="w-full bg-neutral-50 border border-[#006B3C]/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/20 text-[#1a2e22] font-semibold"
                        >
                          <option value="CSE">Computer Science & Engineering (CSE)</option>
                          <option value="BBA">Bachelor of Business Administration (BBA)</option>
                          <option value="LLB">Bachelor of Laws (LLB)</option>
                          <option value="MBA">Master of Business Administration (MBA)</option>
                          <option value="B.Ed">Bachelor of Education (B.Ed)</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="form-session" className="block text-xs font-bold text-[#5a6a60] mb-2 uppercase tracking-wide">Session *</label>
                        <select
                          id="form-session"
                          name="session"
                          value={formData.session}
                          onChange={handleInputChange}
                          className="w-full bg-neutral-50 border border-[#006B3C]/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/20 text-[#1a2e22] font-semibold"
                        >
                          <option value="2025-26">2025–26 (Current)</option>
                          <option value="2026-27">2026–27 (Upcoming)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Group 2: Personal Information */}
                  <div className="space-y-4 bg-white p-6 rounded-2xl border border-[#006B3C]/10 shadow-sm">
                    <div className="flex items-center gap-2 border-b border-[#006B3C]/10 pb-2.5">
                      <div className="w-1 h-4 bg-[#006B3C] rounded-full" />
                      <h3 className="font-display text-sm font-bold text-[#004D2C] uppercase tracking-wider">2. Personal Information</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fullName" className="block text-xs font-bold text-[#5a6a60] mb-2 uppercase tracking-wide">Full Name *</label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          maxLength={50}
                          placeholder="e.g. Abul Kalam"
                          className={`w-full bg-neutral-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/20 text-[#1a2e22] font-medium ${
                            errors.fullName ? "border-[#C41E1E]" : "border-[#006B3C]/15"
                          }`}
                        />
                        {errors.fullName && <p className="text-[#C41E1E] text-xs mt-1.5 font-medium">{errors.fullName}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold text-[#5a6a60] mb-2 uppercase tracking-wide">Phone Number *</label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          maxLength={15}
                          placeholder="e.g. 01712345678"
                          className={`w-full bg-neutral-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/20 text-[#1a2e22] font-medium ${
                            errors.phone ? "border-[#C41E1E]" : "border-[#006B3C]/15"
                          }`}
                        />
                        {errors.phone && <p className="text-[#C41E1E] text-xs mt-1.5 font-medium">{errors.phone}</p>}
                      </div>
                      <div>
                        <label htmlFor="dob" className="block text-xs font-bold text-[#5a6a60] mb-2 uppercase tracking-wide">Date of Birth *</label>
                        <input
                          type="date"
                          id="dob"
                          name="dob"
                          value={formData.dob}
                          onChange={handleInputChange}
                          className={`w-full bg-neutral-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/20 text-[#1a2e22] font-medium ${
                            errors.dob ? "border-[#C41E1E]" : "border-[#006B3C]/15"
                          }`}
                        />
                        {errors.dob && <p className="text-[#C41E1E] text-xs mt-1.5 font-medium">{errors.dob}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-[#5a6a60] mb-2 uppercase tracking-wide">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          maxLength={60}
                          placeholder="e.g. name@example.com"
                          className={`w-full bg-neutral-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/20 text-[#1a2e22] font-medium ${
                            errors.email ? "border-[#C41E1E]" : "border-[#006B3C]/15"
                          }`}
                        />
                        {errors.email && <p className="text-[#C41E1E] text-xs mt-1.5 font-medium">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Image Upload Area */}
                    <div className="pt-2">
                      <span className="block text-xs font-bold text-[#5a6a60] mb-2 uppercase tracking-wide">Passport-sized Photo * (Max 2MB, JPG/PNG/WebP)</span>
                      <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border border-dashed border-[#006B3C]/30 bg-[#e8f5ee]/10 rounded-2xl">
                        {imagePreview ? (
                          <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-[#006B3C]/20 flex-shrink-0 bg-neutral-100">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                            <button
                              type="button"
                              onClick={() => {
                                setImageFile(null);
                                setImagePreview("");
                              }}
                              className="absolute top-0.5 right-0.5 p-0.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors border-none cursor-pointer"
                              aria-label="Remove image"
                            >
                              <X size={12} />
                            </button>
                          </div>
                        ) : (
                          <div className="w-20 h-20 rounded-xl border border-[#006B3C]/20 bg-white flex items-center justify-center text-[#006B3C]/40 flex-shrink-0">
                            <Upload size={24} />
                          </div>
                        )}
                        <div className="flex-1 text-center sm:text-left space-y-1">
                          <label className="inline-block px-4 py-2 bg-white border border-[#006B3C]/20 hover:border-[#006B3C]/50 rounded-xl text-xs font-bold text-[#006B3C] cursor-pointer transition-colors shadow-sm">
                            Choose Image File
                            <input 
                              type="file" 
                              accept="image/jpeg,image/png,image/webp" 
                              onChange={handleFileChange}
                              className="hidden" 
                            />
                          </label>
                          <p className="text-[10px] text-[#5a6a60]">
                            {imageFile ? `${imageFile.name} (${(imageFile.size / 1024 / 1024).toFixed(2)} MB)` : "No file chosen"}
                          </p>
                        </div>
                      </div>
                      {errors.image && <p className="text-[#C41E1E] text-xs mt-1.5 font-medium">{errors.image}</p>}
                    </div>
                  </div>

                  {/* Group 3: Academic Background */}
                  <div className="space-y-6 bg-white p-6 rounded-2xl border border-[#006B3C]/10 shadow-sm">
                    <div className="flex items-center gap-2 border-b border-[#006B3C]/10 pb-2.5">
                      <div className="w-1 h-4 bg-[#006B3C] rounded-full" />
                      <h3 className="font-display text-sm font-bold text-[#004D2C] uppercase tracking-wider">3. Academic Background</h3>
                    </div>

                    {/* SSC */}
                    <div className="space-y-3 p-4 bg-neutral-50 rounded-xl border border-neutral-200/60">
                      <h4 className="font-display text-xs font-bold text-[#004D2C] uppercase tracking-wide">SSC / O-Level Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-1">
                          <label htmlFor="sscSchool" className="block text-[10px] font-bold text-[#5a6a60] mb-1.5 uppercase">School / Institute Name *</label>
                          <input
                            type="text"
                            id="sscSchool"
                            name="sscSchool"
                            value={formData.sscSchool}
                            onChange={handleInputChange}
                            maxLength={100}
                            placeholder="e.g. Zilla School"
                            className={`w-full bg-white border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#006B3C]/20 text-[#1a2e22] font-medium ${
                              errors.sscSchool ? "border-[#C41E1E]" : "border-neutral-200"
                            }`}
                          />
                          {errors.sscSchool && <p className="text-[#C41E1E] text-[10px] mt-1 font-medium">{errors.sscSchool}</p>}
                        </div>
                        <div>
                          <label htmlFor="sscGpa" className="block text-[10px] font-bold text-[#5a6a60] mb-1.5 uppercase">GPA (Out of 5.00) *</label>
                          <input
                            type="text"
                            id="sscGpa"
                            name="sscGpa"
                            value={formData.sscGpa}
                            onChange={handleInputChange}
                            maxLength={4}
                            placeholder="e.g. 5.00"
                            className={`w-full bg-white border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#006B3C]/20 text-[#1a2e22] font-medium ${
                              errors.sscGpa ? "border-[#C41E1E]" : "border-neutral-200"
                            }`}
                          />
                          {errors.sscGpa && <p className="text-[#C41E1E] text-[10px] mt-1 font-medium">{errors.sscGpa}</p>}
                        </div>
                        <div>
                          <label htmlFor="sscYear" className="block text-[10px] font-bold text-[#5a6a60] mb-1.5 uppercase">Passing Year *</label>
                          <input
                            type="text"
                            id="sscYear"
                            name="sscYear"
                            value={formData.sscYear}
                            onChange={handleInputChange}
                            maxLength={4}
                            placeholder="e.g. 2023"
                            className={`w-full bg-white border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#006B3C]/20 text-[#1a2e22] font-medium ${
                              errors.sscYear ? "border-[#C41E1E]" : "border-neutral-200"
                            }`}
                          />
                          {errors.sscYear && <p className="text-[#C41E1E] text-[10px] mt-1 font-medium">{errors.sscYear}</p>}
                        </div>
                      </div>
                    </div>

                    {/* HSC */}
                    <div className="space-y-3 p-4 bg-neutral-50 rounded-xl border border-neutral-200/60">
                      <h4 className="font-display text-xs font-bold text-[#004D2C] uppercase tracking-wide">HSC / Diploma Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-1">
                          <label htmlFor="hscCollege" className="block text-[10px] font-bold text-[#5a6a60] mb-1.5 uppercase">College / Institute Name *</label>
                          <input
                            type="text"
                            id="hscCollege"
                            name="hscCollege"
                            value={formData.hscCollege}
                            onChange={handleInputChange}
                            maxLength={100}
                            placeholder="e.g. Govt. College"
                            className={`w-full bg-white border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#006B3C]/20 text-[#1a2e22] font-medium ${
                              errors.hscCollege ? "border-[#C41E1E]" : "border-neutral-200"
                            }`}
                          />
                          {errors.hscCollege && <p className="text-[#C41E1E] text-[10px] mt-1 font-medium">{errors.hscCollege}</p>}
                        </div>
                        <div>
                          <label htmlFor="hscGpa" className="block text-[10px] font-bold text-[#5a6a60] mb-1.5 uppercase">GPA (Out of 5.00) *</label>
                          <input
                            type="text"
                            id="hscGpa"
                            name="hscGpa"
                            value={formData.hscGpa}
                            onChange={handleInputChange}
                            maxLength={4}
                            placeholder="e.g. 4.80"
                            className={`w-full bg-white border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#006B3C]/20 text-[#1a2e22] font-medium ${
                              errors.hscGpa ? "border-[#C41E1E]" : "border-neutral-200"
                            }`}
                          />
                          {errors.hscGpa && <p className="text-[#C41E1E] text-[10px] mt-1 font-medium">{errors.hscGpa}</p>}
                        </div>
                        <div>
                          <label htmlFor="hscYear" className="block text-[10px] font-bold text-[#5a6a60] mb-1.5 uppercase">Passing Year *</label>
                          <input
                            type="text"
                            id="hscYear"
                            name="hscYear"
                            value={formData.hscYear}
                            onChange={handleInputChange}
                            maxLength={4}
                            placeholder="e.g. 2025"
                            className={`w-full bg-white border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#006B3C]/20 text-[#1a2e22] font-medium ${
                              errors.hscYear ? "border-[#C41E1E]" : "border-neutral-200"
                            }`}
                          />
                          {errors.hscYear && <p className="text-[#C41E1E] text-[10px] mt-1 font-medium">{errors.hscYear}</p>}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Group 4: Address & Guardian Info */}
                  <div className="space-y-4 bg-white p-6 rounded-2xl border border-[#006B3C]/10 shadow-sm">
                    <div className="flex items-center gap-2 border-b border-[#006B3C]/10 pb-2.5">
                      <div className="w-1 h-4 bg-[#006B3C] rounded-full" />
                      <h3 className="font-display text-sm font-bold text-[#004D2C] uppercase tracking-wider">4. Address & Guardian</h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="presentAddress" className="block text-xs font-bold text-[#5a6a60] mb-2 uppercase tracking-wide">Present Address *</label>
                        <textarea
                          id="presentAddress"
                          name="presentAddress"
                          rows={2}
                          value={formData.presentAddress}
                          onChange={handleInputChange}
                          maxLength={250}
                          placeholder="e.g. House 12, Road 4, Barisal Sadar, Barisal"
                          className={`w-full bg-neutral-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/20 text-[#1a2e22] font-medium resize-none ${
                            errors.presentAddress ? "border-[#C41E1E]" : "border-[#006B3C]/15"
                          }`}
                        />
                        {errors.presentAddress && <p className="text-[#C41E1E] text-xs mt-1.5 font-medium">{errors.presentAddress}</p>}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="guardianName" className="block text-xs font-bold text-[#5a6a60] mb-2 uppercase tracking-wide">Guardian Name *</label>
                          <input
                            type="text"
                            id="guardianName"
                            name="guardianName"
                            value={formData.guardianName}
                            onChange={handleInputChange}
                            maxLength={50}
                            placeholder="e.g. Rafiqul Islam"
                            className={`w-full bg-neutral-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/20 text-[#1a2e22] font-medium ${
                              errors.guardianName ? "border-[#C41E1E]" : "border-[#006B3C]/15"
                            }`}
                          />
                          {errors.guardianName && <p className="text-[#C41E1E] text-xs mt-1.5 font-medium">{errors.guardianName}</p>}
                        </div>
                        <div>
                          <label htmlFor="guardianPhone" className="block text-xs font-bold text-[#5a6a60] mb-2 uppercase tracking-wide">Guardian Phone *</label>
                          <input
                            type="text"
                            id="guardianPhone"
                            name="guardianPhone"
                            value={formData.guardianPhone}
                            onChange={handleInputChange}
                            maxLength={15}
                            placeholder="e.g. 01711122233"
                            className={`w-full bg-neutral-50 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/20 text-[#1a2e22] font-medium ${
                              errors.guardianPhone ? "border-[#C41E1E]" : "border-[#006B3C]/15"
                            }`}
                          />
                          {errors.guardianPhone && <p className="text-[#C41E1E] text-xs mt-1.5 font-medium">{errors.guardianPhone}</p>}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submission Action */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 flex-shrink-0">
                    {errors.submit && (
                      <p className="text-[#C41E1E] text-xs font-semibold mr-auto">{errors.submit}</p>
                    )}
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setIsFormOpen(false)}
                        className="px-5 py-3 rounded-xl border border-neutral-300 hover:bg-neutral-100 text-xs font-bold text-[#5a6a60] transition-colors cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-3 rounded-xl bg-[#006B3C] text-white hover:bg-[#004D2C] transition-colors text-xs font-bold shadow-md cursor-pointer disabled:opacity-50 flex items-center gap-2 border-none"
                      >
                        {isSubmitting ? "Submitting securely..." : "Submit Admission Application"}
                      </button>
                    </div>
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
