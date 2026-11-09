import React from 'react';
import { certificationsData } from '../data/certificationsData';
import { SectionHeading } from '../components/SectionHeading';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-[#FAFAF8] border-b border-[#111111]/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <SectionHeading
          kicker="Credentials & Accreditations"
          title="Certifications"
          description="Continuous professional development across sustainable construction management, BIM Revit modeling, wastewater recycling, and GIS spatial engineering."
        />

        {/* Clean, Minimal & Spacious List Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#111111]/8 hover:border-[#C6A15B] transition-all duration-300 hover:shadow-xs flex flex-col justify-start"
            >
              {/* Certification Provider Name */}
              <div className="font-semibold text-[#8C6F2D] uppercase tracking-wider text-[11px] mb-2.5">
                {cert.issuer.toUpperCase()}
              </div>

              {/* Certification Title */}
              <h3 className="font-display text-lg font-bold text-[#111111] mb-2 leading-snug">
                {cert.title}
              </h3>

              {/* Certification Category */}
              <div className="text-[11px] text-[#777777] uppercase tracking-wider font-medium mb-3">
                {cert.category}
              </div>

              {/* Certification Description */}
              <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
