import React from 'react';
import { Hero } from '../sections/Hero';
import { Tools } from '../sections/Tools';
import { Projects } from '../sections/Projects';
import { Education } from '../sections/Education';
import { About } from '../sections/About';
import { Certifications } from '../sections/Certifications';
import { Contact } from '../sections/Contact';

interface HomeProps {
  onExploreWorkClick: () => void;
  onContactClick: () => void;
}

export const Home: React.FC<HomeProps> = ({
  onExploreWorkClick,
  onContactClick,
}) => {
  return (
    <main className="flex-1">
      {/* 1. Hero Section */}
      <Hero onExploreWorkClick={onExploreWorkClick} />

      {/* 2. Infinite Horizontal Tools Scroller */}
      <Tools />

      {/* 3. Featured Projects Showcase */}
      <Projects />

      {/* 4. Education Section */}
      <Education />

      {/* 5. About Section */}
      <About onContactClick={onContactClick} />

      {/* 6. Certifications Section */}
      <Certifications />

      {/* 7. Contact Section */}
      <Contact />
    </main>
  );
};

export default Home;
