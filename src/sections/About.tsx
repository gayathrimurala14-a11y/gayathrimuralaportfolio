import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { aboutData } from '../data/aboutData';
import { experienceData } from '../data/experienceData';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const [expandedId, setExpandedId] = useState<string | null>('seelams-group');

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#111111]/8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Two-Column About Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Typography-Focused Personal Introduction */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            <div className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#8C6F2D] mb-3 flex items-center gap-2">
              <span className="w-2.5 h-[1.5px] bg-[#C6A15B]" />
              <span>{aboutData.sectionLabel}</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#111111] mb-5">
              {aboutData.name}
            </h2>

            <div className="font-editorial text-xl sm:text-2xl italic text-[#8C6F2D] mb-6">
              {aboutData.quote}
            </div>

            {aboutData.bioParagraphs.map((paragraph, pIdx) => (
              <p
                key={pIdx}
                className={`text-base text-[#555555] leading-relaxed ${
                  pIdx === aboutData.bioParagraphs.length - 1 ? 'mb-8 text-sm text-[#666666]' : 'mb-6'
                }`}
              >
                {paragraph}
              </p>
            ))}

            {/* Contact Me Button */}
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#111111] bg-[#C6A15B] hover:bg-[#B38E46] transition-all rounded-md shadow-xs cursor-pointer active:scale-[0.98]"
            >
              <span>{aboutData.ctaText}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Right Column: Clean Professional Experience Timeline with Expandable Details */}
          <div className="lg:col-span-7">
            <div className="mb-6 pb-4 border-b border-[#111111]/8">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                Career Milestones & Roles
              </div>
              <h3 className="font-display text-2xl font-bold text-[#111111] mt-1">
                Professional Journey
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#111111]/8 space-y-6">
              {experienceData.map((item) => {
                const isExpanded = expandedId === item.id;

                return (
                  <div key={item.id} className="relative group">
                    {/* Timeline Node */}
                    <div
                      className={`absolute -left-[31px] sm:-left-[39px] top-4 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                        isExpanded
                          ? 'bg-[#C6A15B] border-[#111111]'
                          : 'bg-white border-[#C6A15B]'
                      }`}
                    />

                    {/* Timeline Card */}
                    <div className="rounded-xl bg-[#FAFAF8] border border-[#111111]/8 hover:border-[#C6A15B] p-5 sm:p-6 transition-all duration-200">
                      <div
                        onClick={() => setExpandedId(isExpanded ? null : item.id)}
                        className="flex items-start justify-between gap-4 cursor-pointer"
                      >
                        <div>
                          <div className="text-[11px] font-mono font-bold text-[#8C6F2D] uppercase tracking-wider">
                            {item.period}
                          </div>
                          <h4 className="font-display text-lg font-bold text-[#111111] mt-0.5">
                            {item.role}
                          </h4>
                          <div className="text-xs text-[#555555] font-medium">
                            {item.company} · {item.location}
                          </div>
                        </div>

                        <div className="p-1 rounded-full text-[#777777] hover:text-[#111111]">
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-[#111111]/8 animate-in fade-in duration-150">
                          <ul className="space-y-2 text-xs text-[#555555] leading-relaxed">
                            {item.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2">
                                <span className="text-[#C6A15B] font-bold mt-0.5">·</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-4 pt-3 flex flex-wrap gap-1.5 border-t border-[#111111]/5">
                            {item.keyTools.map((tool, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2 py-0.5 bg-white border border-[#111111]/8 rounded text-[10px] text-[#444444]"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
