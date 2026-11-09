import React from 'react';
import { toolsData } from '../data/toolsData';

export const Tools: React.FC = () => {
  // Quadruple the list to ensure perfectly seamless marquee scrolling across all viewport widths
  const marqueeItems = [...toolsData, ...toolsData, ...toolsData, ...toolsData];

  return (
    <section className="relative py-8 bg-[#FAFAF8] border-y border-[#111111]/8 overflow-hidden select-none">
      {/* Subtle edge fades for smooth gradient exit and entry */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAFAF8] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAFAF8] to-transparent z-10 pointer-events-none" />

      {/* Marquee Container */}
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center shrink-0">
          {marqueeItems.map((tool, index) => (
            <div
              key={`${tool}-${index}`}
              className="flex items-center gap-6 sm:gap-10 shrink-0 px-3 sm:px-5"
            >
              <span className="font-display text-base sm:text-lg font-semibold tracking-wide text-[#111111]/80 hover:text-[#C6A15B] transition-colors">
                {tool}
              </span>

              {/* Subtle Gold Separator Dot */}
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] shrink-0 opacity-80"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
