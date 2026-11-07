import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Info, CheckCircle2, X } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      className="group flex flex-col bg-white rounded-2xl border border-[#DCE7F2] overflow-hidden card-shadow hover:card-shadow-hover hover:border-[#087BFF]/40 transition-all duration-300"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video sm:aspect-[16/10] w-full overflow-hidden bg-[#071B35]">
        {!imageError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#071B35] to-[#102C4E] p-6 text-center text-white">
            <div className="w-12 h-12 rounded-xl bg-[#087BFF]/20 border border-[#087BFF]/40 flex items-center justify-center text-[#087BFF] mb-2 font-bold font-mono">
              AJ
            </div>
            <span className="text-sm font-semibold text-[#DCE7F2]">{project.title}</span>
            <span className="text-xs text-[#64748B] mt-1">{project.category}</span>
          </div>
        )}

        {/* Category Pill Tag Overlay */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-md bg-[#071B35]/85 backdrop-blur-md text-[#087BFF] text-xs font-semibold border border-[#087BFF]/30 shadow-sm">
            {project.category}
          </span>
        </div>

        {/* View Details Quick Action Overlay */}
        <div className="absolute inset-0 bg-[#071B35]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <button
            onClick={() => onOpenModal(project)}
            className="px-4 py-2 rounded-lg bg-white text-[#102C4E] text-xs font-bold shadow-lg hover:bg-[#087BFF] hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Project Details</span>
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3
            onClick={() => onOpenModal(project)}
            className="text-lg sm:text-xl font-bold text-[#102C4E] group-hover:text-[#087BFF] transition-colors cursor-pointer leading-snug mb-2.5"
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#64748B] leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>
        </div>

        <div>
          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techTags.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-[#DCE7F2]/50 text-[#102C4E] text-xs font-medium border border-[#DCE7F2]/80"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="pt-3 border-t border-[#DCE7F2]/70 flex items-center justify-between">
            <button
              onClick={() => onOpenModal(project)}
              className="text-xs font-semibold text-[#087BFF] hover:text-[#0056b3] inline-flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>View Overview</span>
              <Info className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-[#64748B] hover:text-[#102C4E] hover:bg-[#DCE7F2]/40 transition-colors"
                  aria-label={`GitHub repository for ${project.title}`}
                  title="GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-[#087BFF] hover:bg-[#DCE7F2]/40 transition-colors"
                  aria-label={`Live demo for ${project.title}`}
                  title="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
