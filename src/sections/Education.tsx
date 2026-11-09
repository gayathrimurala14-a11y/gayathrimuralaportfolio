import React from 'react';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { educationData } from '../data/educationData';
import { SectionHeading } from '../components/SectionHeading';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#111111]/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <SectionHeading
          kicker="Academic Background"
          title="Education & Qualifications"
        />

        {/* Clean 3-Column Educational Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((item, idx) => (
            <div
              key={item.id}
              className={`rounded-2xl p-7 flex flex-col justify-between border transition-all duration-300 ${
                idx === 0
                  ? 'bg-[#FAFAF8] border-[#C6A15B]/50 shadow-xs ring-1 ring-[#C6A15B]/20'
                  : 'bg-[#FAFAF8] border-[#111111]/8 hover:border-[#C6A15B]/40'
              }`}
            >
              <div>
                {/* Period */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#111111]/8 flex items-center justify-center text-[#C6A15B]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#8C6F2D] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#C6A15B]" />
                    {item.period}
                  </span>
                </div>

                {/* Institution Name */}
                <h3 className="font-display text-lg font-bold text-[#111111] mb-2 leading-snug">
                  {item.institution}
                </h3>

                {/* Degree & Field */}
                <div className="text-sm font-semibold text-[#8C6F2D] mb-1">
                  {item.degree}
                </div>
                <div className="text-xs text-[#555555] mb-3">
                  {item.field}
                </div>

                {/* Grade */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#C6A15B]/30 rounded-md text-xs font-bold text-[#111111] mb-4">
                  <Award className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>{item.grade}</span>
                </div>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="pt-3 border-t border-[#111111]/8 text-xs text-[#555555] space-y-1.5">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-1.5">
                        <span className="text-[#C6A15B] font-bold">·</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Location */}
              <div className="mt-6 pt-4 border-t border-[#111111]/8 flex items-center gap-1.5 text-[11px] text-[#777777]">
                <MapPin className="w-3 h-3 text-[#C6A15B]" />
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
