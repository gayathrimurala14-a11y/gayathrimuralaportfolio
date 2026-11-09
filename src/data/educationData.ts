/**
 * =========================================================================
 * EDUCATION SECTION DATA
 * =========================================================================
 */

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  grade: string;
  period: string;
  location: string;
  highlights?: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "vrsec",
    institution: "Velagapudi Ramakrishna Siddhartha Engineering College",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Civil Engineering",
    grade: "CGPA: 8.0 / 10",
    period: "2022 – 2026",
    location: "Vijayawada, Andhra Pradesh, India",
    highlights: [
      "Comprehensive coursework in Structural Analysis, Concrete Technology, Geotechnical Engineering, and BIM.",
      "Lead student investigator on agricultural waste bio-concrete experimental research.",
    ],
  },
  {
    id: "chaitanya",
    institution: "Sri Chaitanya Junior College",
    degree: "Intermediate (10+2)",
    field: "Mathematics, Physics, Chemistry (MPC)",
    grade: "First Class with Distinction",
    period: "2020 – 2022",
    location: "Vijayawada, Andhra Pradesh, India",
    highlights: [
      "Built rigorous foundation in higher mathematics, statics, mechanics, and physical chemistry.",
    ],
  },
  {
    id: "vuyyuru",
    institution: "Vuyyuru English Medium High School",
    degree: "Secondary School Certificate (SSC)",
    field: "Class 10 Board Curriculum",
    grade: "Distinction",
    period: "Completed 2020",
    location: "Vuyyuru, Andhra Pradesh, India",
  },
];
