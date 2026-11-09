import React, { useState } from 'react';
import { ExternalLink, ImageOff } from 'lucide-react';
import { projectsData, ProjectItem } from '../data/projectsData';
import { SectionHeading } from '../components/SectionHeading';

export const Projects: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleOpenProject = (project: ProjectItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (project.projectUrl && project.projectUrl.trim() !== '') {
      window.open(project.projectUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleImageError = (projectId: string | number) => {
    setFailedImages((prev) => ({ ...prev, [String(projectId)]: true }));
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#111111]/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Heading */}
        <SectionHeading
          kicker="Selected Works"
          title="Featured Projects"
        />

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => {
            const hasImageFailed = failedImages[String(project.id)];
            const hasUrl = Boolean(project.projectUrl && project.projectUrl.trim() !== '');

            return (
              <div
                key={project.id}
                onClick={() => hasUrl && handleOpenProject(project)}
                className={`group rounded-2xl bg-[#FAFAF8] border border-[#111111]/10 overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                  hasUrl
                    ? 'cursor-pointer hover:border-[#C6A15B] hover:shadow-md'
                    : 'cursor-default'
                }`}
              >
                {/* Project Image Container */}
                <div className="relative aspect-[4/3] bg-[#F2F2F0] overflow-hidden">
                  {!hasImageFailed && project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      onError={() => handleImageError(project.id)}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#F4F4F2]">
                      <ImageOff className="w-8 h-8 text-[#C6A15B] mb-2 stroke-[1.5]" />
                      <span className="text-xs font-semibold text-[#111111]">{project.title}</span>
                      {project.image && (
                        <span className="text-[10px] text-[#777777] mt-1 font-mono">
                          {project.image}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />

                  {/* Location & Period overlay at bottom of image */}
                  <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-[#F9F5EC]/90 drop-shadow-xs">
                      {project.location}
                    </span>
                    {project.period && (
                      <span className="font-mono text-[11px] text-[#F9F5EC]/70 drop-shadow-xs">
                        {project.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    {/* Category Label */}
                    <div className="text-[11px] font-semibold text-[#8C6F2D] uppercase tracking-wider mb-2">
                      {project.category}
                    </div>

                    {/* Project Title */}
                    <h3 className="font-display text-xl font-bold text-[#111111] group-hover:text-[#8C6F2D] transition-colors mb-3 leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Action Link Row */}
                  <div className="pt-4 border-t border-[#111111]/8 flex items-center justify-between">
                    {hasUrl ? (
                      <button
                        type="button"
                        onClick={(e) => handleOpenProject(project, e)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] group-hover:text-[#8C6F2D] transition-colors cursor-pointer"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                      </button>
                    ) : (
                      <span className="text-[11px] text-[#888888] italic">
                        Documentation on request
                      </span>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
