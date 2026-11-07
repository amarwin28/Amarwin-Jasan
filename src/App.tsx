import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#102C4E] flex flex-col font-sans selection:bg-[#087BFF]/20 selection:text-[#087BFF]">
      {/* Premium Sticky Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About & Philosophy */}
        <About />

        {/* Section 3: Professional Experience & Roles */}
        <Experience />

        {/* Section 4: Projects Showcase & Filters */}
        <Projects />

        {/* Section 5: Technical Skills & Competencies */}
        <Skills />

        {/* Section 6: Education, Certifications & Achievements */}
        <div id="education" className="bg-white">
          <Education />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
            <Certifications />
            <Achievements />
          </div>
        </div>

        {/* Section 7: Contact & Inquiries */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

