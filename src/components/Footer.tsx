import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowUp } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface FooterProps {
  onNavigateToHome: () => void;
  onNavigateToAbout: () => void;
  onNavigateToContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateToHome,
  onNavigateToAbout,
  onNavigateToContact,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (siteConfig.resumeUrl) {
      window.open(siteConfig.resumeUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="bg-[#111111] text-[#FAFAF8] pt-16 pb-12 border-t border-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Brand & Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-display text-2xl font-bold tracking-tight text-white">
              {siteConfig.name}
            </h3>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#C6A15B]">
              {siteConfig.role}
            </div>
            <p className="text-xs text-[#999999] leading-relaxed max-w-sm">
              Delivering structural analysis, AutoCAD drafting, Revit BIM modeling, and sustainable civil engineering solutions conforming to Indian Standard codes.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#AAAAAA] pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#C6A15B]">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={onNavigateToHome}
                  className="text-[#CCCCCC] hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateToAbout}
                  className="text-[#CCCCCC] hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <a
                  href={siteConfig.resumeUrl}
                  onClick={handleResumeClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CCCCCC] hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  Resume
                </a>
              </li>
              <li>
                <button
                  onClick={onNavigateToContact}
                  className="text-[#CCCCCC] hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#C6A15B]">
              Get In Touch
            </div>
            <div className="space-y-2 text-xs text-[#CCCCCC]">
              <div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#C6A15B] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>
              <div>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#C6A15B] transition-colors flex items-center gap-2 font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
              <div>
                <a
                  href={siteConfig.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6A15B] transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Civil Engineering Portfolio.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#CCCCCC] hover:text-[#C6A15B] transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
