/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

export default function App() {
  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#111111] font-sans selection:bg-[#C6A15B]/20 selection:text-[#111111]">
      {/* Sticky Minimal Navigation Header */}
      <Header
        onNavigateToHome={scrollToHome}
        onNavigateToAbout={scrollToAbout}
        onNavigateToContact={scrollToContact}
      />

      {/* Main Single-Page Portfolio Flow */}
      <Home
        onExploreWorkClick={scrollToProjects}
        onContactClick={scrollToContact}
      />

      {/* Minimal Footer */}
      <Footer
        onNavigateToHome={scrollToHome}
        onNavigateToAbout={scrollToAbout}
        onNavigateToContact={scrollToContact}
      />
    </div>
  );
}
