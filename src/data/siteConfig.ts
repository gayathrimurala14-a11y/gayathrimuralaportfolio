/**
 * =========================================================================
 * GENERAL WEBSITE CONFIGURATION
 * =========================================================================
 * Edit global details, resume URL, contact info and links in this file.
 */

export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedInUrl: string;
  resumeUrl: string;
  profileImage: string;
}

export const siteConfig: SiteConfig = {
  name: "Gayathri Murala",
  role: "Civil Engineer | Design Engineer",
  location: "Vijayawada, Andhra Pradesh, India",
  email: "gayathrimurala14@gmail.com",
  phone: "+91 9347032528",
  linkedInUrl: "https://www.linkedin.com/in/gayathri-murala",

  // Paste your Google Drive or external resume PDF link here:
  resumeUrl: "https://drive.google.com/file/d/1GayathriMuralaCivilEngineerResume/view?usp=sharing",

  // Profile image located in public/images/gayathri-profile.jpg
  profileImage: "/images/gayathri-profile.jpg",
};
