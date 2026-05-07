import React from "react";
import { motion } from "motion/react";
import { Project } from "../services/api";
import ProjectCard from "../components/portfolio/ProjectCard";

interface ProjectsPageProps {
  projects: Project[];
  isLoading: boolean;
}

const Projects: React.FC<ProjectsPageProps> = ({ projects, isLoading }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-12 py-10"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-blue-500 font-mono text-xs">02</span>
          <h3 className="text-4xl font-black italic uppercase tracking-tighter text-white">Selected_Production</h3>
        </div>
        <div className="h-px flex-1 bg-[#1e293b] mx-8 hidden md:block"></div>
      </div>
      
      <div className="grid md:grid-cols-1 gap-12">
        {isLoading ? (
          [...Array(2)].map((_, i) => (
            <div key={i} className="aspect-video bg-white/5 border border-[#1e293b] rounded-xl animate-pulse" />
          ))
        ) : (
          projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))
        )}
      </div>
    </motion.section>
  );
};

export default Projects;
