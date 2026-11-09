/**
 * =========================================================================
 * ABOUT SECTION DATA
 * =========================================================================
 */

export interface AboutData {
  sectionLabel: string;
  name: string;
  quote: string;
  bioParagraphs: string[];
  ctaText: string;
}

export const aboutData: AboutData = {
  sectionLabel: "About Me",
  name: "Gayathri Murala",
  quote: '"Every line in a blueprint carries real-world structural weight."',
  bioParagraphs: [
    "A driven Civil Engineering graduate and Junior Design Engineer with solid computational foundation in STAAD Pro, AutoCAD, Revit, and Civil 3D. Experienced in structural drafting, load distribution analysis, on-site quality inspection, and technical documentation for residential, commercial transit, and water treatment infrastructure.",
    "Dedicated to delivering safe, sustainable, and code-compliant structural solutions that bridge computational design with real-world constructability.",
  ],
  ctaText: "Contact Me",
};
