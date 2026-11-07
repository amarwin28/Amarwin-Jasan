import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { projectsData, projectFilterCategories } from '../data/projects';
import { Project, ProjectFilterCategory } from '../types';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleOpenModal = (project: Project) => {
    setActiveModalProject(project);
    setSelectedImageIndex(0);
  };

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.filterCategories.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <SectionHeading
            badge="PROJECT SHOWCASE"
            title="Featured Projects"
            subtitle="Real software products, mobile applications, AI solutions, and system utilities."
            className="mb-0!"
          />

          {/* Quick Count Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#DCE7F2]/40 border border-[#DCE7F2] text-xs font-mono text-[#102C4E]">
            <span className="font-bold text-[#087BFF]">{projectsData.length}</span>
            <span>Total Projects</span>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {projectFilterCategories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#087BFF] text-white shadow-md shadow-[#087BFF]/30 scale-[1.02]'
                    : 'bg-[#DCE7F2]/40 text-[#64748B] hover:text-[#102C4E] hover:bg-[#DCE7F2]/70 border border-[#DCE7F2]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={handleOpenModal}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#F8FAFC] rounded-2xl border border-dashed border-[#DCE7F2]">
            <p className="text-base text-[#64748B]">No projects found in this category.</p>
          </div>
        )}

      </div>

      {/* Project Detail Modal Dialog */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="absolute inset-0 bg-[#071B35]/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#DCE7F2] z-10 max-h-[90vh] flex flex-col"
            >
              {/* Header with Close */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#DCE7F2] bg-[#F8FAFC]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#087BFF]/15 text-[#087BFF] text-xs font-semibold">
                    {activeModalProject.category}
                  </span>
                  <span className="text-xs text-[#64748B]">Project Overview</span>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-1.5 rounded-lg text-[#64748B] hover:text-[#102C4E] hover:bg-[#DCE7F2]/50 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Modal Content */}
              <div className="overflow-y-auto p-5 sm:p-6 space-y-5">
                {/* Image Banner & Gallery */}
                <div>
                  <div className="w-full h-52 sm:h-72 rounded-xl overflow-hidden bg-[#071B35] relative border border-[#DCE7F2]">
                    <img
                      src={
                        activeModalProject.gallery && activeModalProject.gallery.length > 0
                          ? activeModalProject.gallery[selectedImageIndex] || activeModalProject.image
                          : activeModalProject.image
                      }
                      alt={activeModalProject.title}
                      className="w-full h-full object-cover object-top transition-all duration-300"
                    />
                  </div>

                  {/* Thumbnail Row if project has multiple gallery images */}
                  {activeModalProject.gallery && activeModalProject.gallery.length > 1 && (
                    <div className="flex items-center gap-2 overflow-x-auto pt-2.5 pb-1">
                      {activeModalProject.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImageIndex(idx)}
                          className={`relative h-12 w-16 sm:h-14 sm:w-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                            selectedImageIndex === idx
                              ? 'border-[#087BFF] ring-2 ring-[#087BFF]/30 scale-105'
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102C4E] mb-2">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                {/* Key Highlights */}
                {activeModalProject.highlights && activeModalProject.highlights.length > 0 && (
                  <div className="bg-[#DCE7F2]/30 rounded-xl p-4 border border-[#DCE7F2]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#102C4E] mb-2.5 font-mono">
                      Engineering Highlights
                    </h4>
                    <div className="space-y-2">
                      {activeModalProject.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#087BFF] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-[#102C4E] leading-snug">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2 font-mono">
                    Technologies &amp; Architecture
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.techTags.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-[#DCE7F2]/60 text-[#102C4E] text-xs font-medium border border-[#DCE7F2]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-4 sm:p-5 border-t border-[#DCE7F2] bg-[#F8FAFC] flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#64748B] hover:text-[#102C4E] hover:bg-[#DCE7F2]/40 transition-colors"
                >
                  Close
                </button>

                <div className="flex items-center gap-3">
                  {activeModalProject.githubUrl && (
                    <a
                      href={activeModalProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#102C4E] hover:bg-[#071B35] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {activeModalProject.liveUrl && (
                    <a
                      href={activeModalProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#087BFF] hover:bg-[#0069e0] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 shadow-sm transition-colors"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
