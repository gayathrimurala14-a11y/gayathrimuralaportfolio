import React from 'react';

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  description,
  className = "mb-12 sm:mb-14",
}) => {
  return (
    <div className={className}>
      <div className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#8C6F2D] mb-2.5 flex items-center gap-2">
        <span className="w-2.5 h-[1.5px] bg-[#C6A15B]" />
        <span>{kicker}</span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111]">
        {title}
      </h2>
      {description && (
        <p className="text-xs text-[#777777] mt-2 max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
