import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface HeaderProps {
  onNavigateToHome: () => void;
  onNavigateToAbout: () => void;
  onNavigateToContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigateToHome,
  onNavigateToAbout,
  onNavigateToContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (siteConfig.resumeUrl) {
      window.open(siteConfig.resumeUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#111111]/8 shadow-xs'
          : 'bg-[#FAFAF8] border-b border-[#111111]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Wordmark */}
        <button
          onClick={onNavigateToHome}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <div className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#111111] transition-colors group-hover:text-[#C6A15B] whitespace-nowrap shrink-0">
            {siteConfig.name}
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#555555]">
          <button
            onClick={onNavigateToHome}
            className="cursor-pointer transition-colors hover:text-[#111111] whitespace-nowrap shrink-0 py-1"
          >
            Home
          </button>

          <button
            onClick={onNavigateToAbout}
            className="cursor-pointer transition-colors hover:text-[#111111] whitespace-nowrap shrink-0 py-1"
          >
            About
          </button>

          {/* Resume link: Redirects directly to external Google Drive URL */}
          <a
            href={siteConfig.resumeUrl}
            onClick={handleResumeClick}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer transition-colors hover:text-[#111111] whitespace-nowrap shrink-0 py-1"
            title="Resume"
          >
            Resume
          </a>

          <button
            onClick={onNavigateToContact}
            className="cursor-pointer transition-colors hover:text-[#111111] whitespace-nowrap shrink-0 py-1"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Gold-accented Contact Button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onNavigateToContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#111111] bg-[#C6A15B] hover:bg-[#B38E46] transition-all rounded-md shadow-xs cursor-pointer active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onNavigateToContact}
            className="px-3 py-1.5 text-xs font-semibold text-[#111111] bg-[#C6A15B] rounded-md"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#111111] hover:text-[#C6A15B] focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#111111]/10 px-6 py-6 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4 text-base font-medium">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToHome();
              }}
              className="text-left py-2 border-b border-[#F2F2F0] text-[#111111]"
            >
              Home
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToAbout();
              }}
              className="text-left py-2 border-b border-[#F2F2F0] text-[#111111]"
            >
              About
            </button>
            <a
              href={siteConfig.resumeUrl}
              onClick={handleResumeClick}
              target="_blank"
              rel="noopener noreferrer"
              className="text-left py-2 border-b border-[#F2F2F0] text-[#111111]"
            >
              Resume
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToContact();
              }}
              className="text-left py-2 border-b border-[#F2F2F0] text-[#111111]"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
