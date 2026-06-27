import type { Metadata } from "next";
import AdmissionsContent from "./AdmissionsContent";

export const metadata: Metadata = {
  title: "Admissions — Eligibility, Fees & How to Apply",
  description:
    "Learn how to apply for BBA, CSE, LLB, MBA, and M.Ed programs at BITC. View eligibility criteria, fee structure, scholarship details, and application steps.",
};

export default function AdmissionsPage() {
  return <AdmissionsContent />;
}
