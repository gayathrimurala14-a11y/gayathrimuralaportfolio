import React, { useState } from 'react';
import { ArrowDown, User } from 'lucide-react';
import { heroData } from '../data/heroData';
import { siteConfig } from '../data/siteConfig';

interface HeroProps {
  onExploreWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWorkClick }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Subtle background ambient warmth */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-gradient-to-b from-[#C6A15B]/6 via-[#C6A15B]/2 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clean Rectangular Portrait Container with Golden Outline */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[420px]">
              
              {/* Subtle Golden Outer Outline */}
              <div className="absolute -inset-2.5 rounded-3xl border border-[#C6A15B]/40 pointer-events-none transition-transform duration-500" />
              <div className="absolute -inset-1 rounded-2xl border border-[#C6A15B]/20 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#F2F2F0] border border-[#111111]/10 shadow-md aspect-[3/4] flex items-center justify-center">
                {!imageError ? (
                  <img
                    src={heroData.image}
                    alt={siteConfig.name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  /* Clean, elegant placeholder when image is unavailable */
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#F9F9F8]">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B] mb-3">
                      <User className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <div className="font-display text-lg font-bold text-[#111111]">
                      {siteConfig.name}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-[#8C6F2D] mt-1">
                      {siteConfig.role}
                    </div>
                    <div className="text-[11px] text-[#777777] mt-3 font-mono">
                      Place photo at {heroData.image}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Introduction & Explore CTA */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">

            {/* Main Heading: "Hi, I'm Gayathri Murala." */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.08] mb-3 sm:mb-4 text-balance">
              {heroData.heading}
            </h1>

            {/* Supporting Headline: Single line on mobile, elegant serif on all viewports */}
            <div className="hero-tagline mb-5 sm:mb-6">
              {heroData.headline}
            </div>

            {/* Clean Description */}
            <p className="text-[#555555] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              {heroData.description}
            </p>

            {/* Explore Button */}
            <div>
              <button
                onClick={onExploreWorkClick}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#111111] bg-[#C6A15B] hover:bg-[#B38E46] transition-all rounded-md shadow-xs cursor-pointer active:scale-[0.98]"
              >
                <span>{heroData.ctaText}</span>
                <ArrowDown className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
