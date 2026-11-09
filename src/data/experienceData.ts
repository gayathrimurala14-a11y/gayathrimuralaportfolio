/**
 * =========================================================================
 * WORK EXPERIENCE DATA
 * =========================================================================
 * Displayed in the professional journey timeline inside the About section.
 */

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  keyTools: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "seelams-group",
    role: "Junior Structural Design Engineer",
    company: "Seelam's Group",
    period: "August 2025 – Present",
    location: "Vijayawada, Andhra Pradesh, India",
    responsibilities: [
      "Hands-on experience with STAAD Pro for multi-storey structural modeling, load application (dead loads, live loads, seismic zones, and wind pressures), and structural analysis.",
      "AutoCAD drafting and detailing for primary reinforced concrete elements including slabs, beams, columns, and dog-legged staircases.",
      "Coordinating with lead structural engineers to generate member cross-sections, bar curtailment details, and footing layouts strictly conforming to IS 456.",
      "Conducting preliminary structural checks, member optimization, and reinforcement quantity estimations.",
    ],
    keyTools: ["STAAD Pro", "AutoCAD", "Structural Modeling"],
  },
  {
    id: "laasena-interiors",
    role: "Site & Design Engineer Intern",
    company: "Laasena Interiors and Exteriors Solutions",
    period: "April 2026 – July 2026",
    location: "Chennai, India",
    responsibilities: [
      "AutoCAD interior drafting and technical drawings for residential and commercial spaces, ensuring precise millwork, ceiling elevations, and partition details.",
      "Generated systematic billing, Daily Labour Reports (DLR), Daily Progress Reports (DPR), and Daily Material Reports (DMR) utilizing advanced MS Excel spreadsheets.",
      "Conducted on-site inspections, verified work progress against approved drawings, and coordinated between clients, contractors, and material vendors.",
      "Resolved on-site dimensional discrepancies and issued prompt revised sketches to maintain construction milestones.",
    ],
    keyTools: ["AutoCAD", "MS Excel", "DLR / DPR / DMR", "Site Inspection", "Client Coordination"],
  },
  {
    id: "apmsidc-internship",
    role: "Civil Engineering Trainee (Onsite)",
    company: "APMSIDC – Government Internship (Onsite)",
    period: "January 2026 – April 2026",
    location: "Vijayawada Govt Hospital, Pamarru & Machilipatnam Sites",
    responsibilities: [
      "Onsite building construction supervision and structural drawing interpretation across hospital and health infrastructure projects.",
      "Conducted accurate area calculations, plinth verification, and quantity takeoffs for masonry, plastering, and concrete pours.",
      "Observed and evaluated key structural elements, foundation excavation, pile cap reinforcement placement, and concrete slump testing.",
      "Gained deep practical comprehension of public sector construction practices, government tender specifications, and safety protocols.",
    ],
    keyTools: ["Drawing Interpretation", "Site Supervision", "Quantity Takeoff", "Quality Assurance",],
  },
];
