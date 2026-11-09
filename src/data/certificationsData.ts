/**
 * =========================================================================
 * CERTIFICATIONS SECTION DATA
 * =========================================================================
 */

export interface CertificationItem {
  id: string;
  issuer: string;
  title: string;
  category: string;
  description: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "cman-4",
    issuer: "EDX",
    title: "CMAN-4: Sustainable Construction Management",
    category: "Sustainable Engineering & Management",
    description:
      "Advanced methodologies for resource optimization, lean construction principles, carbon reduction in civil projects, and sustainable site logistics.",
  },
  {
    id: "revit",
    issuer: "LearnTube",
    title: "Getting Started with Revit",
    category: "Building Information Modeling (BIM)",
    description:
      "Foundations of 3D parametric modeling, structural framing, wall and slab detailing, collision detection, and sheet generation.",
  },
  {
    id: "nptel-wastewater",
    issuer: "NPTEL",
    title: "Waste Water Treatment and Recycling",
    category: "Environmental Engineering",
    description:
      "Design principles of primary, secondary, and tertiary wastewater treatment units, sludge handling, and recycling technologies for municipal bodies.",
  },
  {
    id: "nptel-gis",
    issuer: "NPTEL (IIT Roorkee)",
    title: "Remote Sensing and GIS for Rural Development",
    category: "Geomatics & Spatial Analysis",
    description:
      "Satellite imagery analysis, GPS coordinate mapping, digital elevation models, and spatial data integration for watershed and civil planning.",
  },
  {
    id: "apsche",
    issuer: "APSCHE",
    title: "21st Century Employability Skilling Program",
    category: "Professional Leadership & Work Readiness",
    description:
      "Critical workplace competencies: corporate communication, client presentations, technical negotiation, and engineering ethics.",
  },
  {
    id: "tcs-ion",
    issuer: "TCS iON",
    title: "TCS iON Career Edge – Young Professional",
    category: "Industry Preparedness",
    description:
      "Core business communication, presentation structuring, project management fundamentals, and corporate readiness standards.",
  },
];
