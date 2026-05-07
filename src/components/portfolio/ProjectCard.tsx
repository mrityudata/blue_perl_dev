import React from "react";
import { Project } from "../../services/api";
import { motion } from "motion/react";
import { Code, ExternalLink, Box } from "lucide-react";
import BeforeAfterImage from "./BeforeAfterImage";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group p-6 rounded-2xl bg-[#0d1117] border border-[#1e293b] hover:border-blue-500/30 transition-all duration-500"
    >
      <div className="mb-6 overflow-hidden rounded-xl">
        <BeforeAfterImage before={project.imageBefore} after={project.imageAfter} />
      </div>

      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[9px] uppercase tracking-[0.2em] text-blue-500 font-mono font-bold mb-1 block">
              {project.category} // {project.client}
            </span>
            <h3 className="text-xl font-bold font-sans tracking-tight text-white">{project.title}</h3>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded bg-[#1e293b] hover:bg-blue-600 hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        <p className="text-slate-400 text-xs leading-relaxed font-medium">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-[10px] font-mono bg-white/5 border border-white/10 rounded-md text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Box size={14} className="text-[#00FF9C]" />
            <span className="text-[10px] uppercase tracking-wider font-bold text-gray-500">
              Impact / Case Study
            </span>
          </div>
          <p className="text-xs text-gray-500 italic">{project.caseStudy}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
