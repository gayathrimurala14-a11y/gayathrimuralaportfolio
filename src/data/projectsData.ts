/**
 * =========================================================================
 * FEATURED PROJECTS DATA
 * =========================================================================
 * Update titles, locations, descriptions, images and external project URLs here.
 * If projectUrl is set to an empty string, the card will display without a dead link.
 */

export interface ProjectItem {
  id: string | number;
  title: string;
  location: string;
  category: string;
  description: string;
  image: string;
  projectUrl: string;
  period?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "STP & WTP Buildings – Zaheerabad",
    location: "Zaheerabad",
    category: "Structural Design & Analysis",
    description:
      "Structural analysis, modeling, and foundation drafting for municipal Sewage Treatment Plant (STP) civil infrastructure and water-retaining units.",
    image: "/images/Zaheerabad.png",
    projectUrl: "",
  },
  {
    id: 2,
    title: "STP & WTP Buildings – Dharmavaram",
    location: "Dharmavaram",
    category: "Structural Design & Detailing",
    description:
      "Structural frame modeling, load computation, and reinforcement detailing for wastewater treatment facility buildings and retaining tanks.",
    image: "/images/Dharmavaram.png",
    projectUrl: "",
  },
  {
    id: 3,
    title: "STP & WTP Buildings – Penukonda",
    location: "Penukonda",
    category: "Civil & Infrastructure Design",
    description:
      "Civil structural drafting, site coordination drawings, and technical documentation conforming to Indian Standard engineering practices.",
    image: "/images/penukonda.png",
    projectUrl: "",
  },
  {
    id: 4,
    title: "Koyambedu Metro Station, Chennai",
    location: "Chennai, Tamil Nadu, India",
    category: "Metro Infrastructure & Interior Works",
    description:
      "Comprehensive interior drafting, technical drawings, suspended baffle ceiling plans, and MEP coordination for Chennai Metro Rail Limited (CMRL).",
    image: "/images/koyambedu metro.png",
    projectUrl: "",
  },
  
];
