/**
 * =========================================================================
 * GAYATHRI MURALA PORTFOLIO - CENTRAL CONFIGURATION FILE
 * =========================================================================
 * 
 * Edit all external links, resume Google Drive URL, email, phone, and
 * paths to public images and PDFs right here in this single file.
 */

export const siteConfig = {
  // Personal Details
  name: "Gayathri Murala",
  role: "Civil Engineer | Design Engineer",
  headline: "Designing Spaces. Shaping Stronger Futures.",
  location: "Vijayawada, Andhra Pradesh, India",
  email: "gayathrimurala14@gmail.com",
  phone: "+91 8099532979",

  // LinkedIn Profile URL
  linkedInUrl: "https://www.linkedin.com/in/gayathri-murala",

  // RESUME GOOGLE DRIVE LINK (Editable right here in VS Code!)
  // When visitors click "Resume" in the header or footer, they are redirected directly to this URL:
  resumeDriveUrl: "https://drive.google.com/file/d/1GayathriMuralaCivilEngineerResume/view?usp=sharing",
  resumeUrl: "https://drive.google.com/file/d/1GayathriMuralaCivilEngineerResume/view?usp=sharing",
  
  // Local fallback PDF in public/pdfs/resume.pdf
  resumeLocalPdf: "/pdfs/resume.pdf",

  // Profile Image in public/images/gayathri-profile.jpg
  profileImage: "/images/gayathri-profile.jpg",

  // Hero Section Content
  hero: {
    label: "CIVIL ENGINEER | DESIGN ENGINEER",
    heading: "Hi, I'm Gayathri Murala.",
    headline: "Designing Spaces. Shaping Stronger Futures.",
    description:
      "I'm passionate about transforming ideas into practical spaces and meaningful structures. With a foundation in civil engineering and hands-on project experience, I enjoy bringing precision, creativity, and thoughtful planning together to create solutions that make a difference.",
    ctaText: "Explore My Work",
  },

  // Infinite Horizontal Tools Scroller List
  tools: [
    "AutoCAD",
    "STAAD Pro",
    "Revit",
    "SketchUp",
    "Civil 3D",
    "MS Excel",
  ],

  // Featured Engineering Projects
  projects: [
    {
      id: "zaheerabad",
      title: "STP Building – Zaheerabad",
      category: "Structural Design & Analysis",
      shortDescription:
        "Structural analysis, modeling, and foundation drafting for municipal Sewage Treatment Plant (STP) civil infrastructure and water-retaining units.",
      image: "/images/projects/zaheerabad.jpg",
      pdf: "/pdfs/projects/zaheerabad.pdf",
      location: "Zaheerabad, India",
      period: "2025 – 2026",
    },
    {
      id: "dharmavaram",
      title: "STP Building – Dharmavaram",
      category: "Structural Design & Detailing",
      shortDescription:
        "Structural frame modeling, load computation, and reinforcement detailing for wastewater treatment facility buildings and retaining tanks.",
      image: "/images/projects/dharmavaram.jpg",
      pdf: "/pdfs/projects/dharmavaram.pdf",
      location: "Dharmavaram, India",
      period: "2025 – 2026",
    },
    {
      id: "penukonda",
      title: "Civil Engineering Project – Penukonda",
      category: "Civil & Infrastructure Design",
      shortDescription:
        "Civil structural drafting, site coordination drawings, and technical documentation conforming to Indian Standard engineering practices.",
      image: "/images/projects/penukonda.jpg",
      pdf: "/pdfs/projects/penukonda.pdf",
      location: "Penukonda, Andhra Pradesh, India",
      period: "2026",
    },
    {
      id: "koyambedu",
      title: "Koyambedu Metro Station, Chennai",
      category: "Metro Infrastructure & Interior Works",
      shortDescription:
        "Comprehensive interior drafting, technical drawings, suspended baffle ceiling plans, and MEP coordination for Chennai Metro Rail Limited (CMRL).",
      image: "/images/projects/koyambedu.jpg",
      pdf: "/pdfs/projects/koyambedu.pdf",
      location: "Chennai, Tamil Nadu, India",
      period: "2026",
    },
    {
      id: "bio-concrete",
      title: "Bio-Concrete Using Agricultural Waste",
      category: "Sustainable Materials & Research",
      shortDescription:
        "Experimental civil engineering research evaluating the partial replacement of Portland cement with agricultural pozzolanic ash to optimize compressive strength and reduce carbon emissions.",
      image: "/images/projects/bio-concrete.jpg",
      pdf: "/pdfs/projects/bio-concrete.pdf",
      location: "VRSEC Concrete Technology Laboratory, Vijayawada",
      period: "2025 – 2026",
    },
  ],
};
