import React from "react";
import { motion } from "motion/react";
import { Project } from "../services/api";

interface CaseStudiesPageProps {
  projects: Project[];
}

const CaseStudies: React.FC<CaseStudiesPageProps> = ({ projects }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-12 py-10"
    >
      <div className="flex items-center gap-4">
        <span className="text-blue-500 font-mono text-xs">03</span>
        <h3 className="text-4xl font-black italic uppercase tracking-tighter text-white">Detailed_Analysis</h3>
      </div>
      <div className="grid gap-12">
        {projects.map((project, idx) => (
          <div key={`cs-${project._id}`} className="bg-[#0d1117] border border-[#1e293b] p-8 md:p-12 rounded-2xl space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="space-y-2">
                <span className="text-blue-500 font-mono text-[10px] uppercase font-bold tracking-widest">Analysis // 0{idx + 1}</span>
                <h4 className="text-3xl font-bold text-white uppercase italic">{project.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-[10px] font-mono text-[#64748b] uppercase tracking-widest">Problem_Statement</p>
                  <p className="text-slate-300 leading-relaxed text-sm">{project.description}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-mono text-[#64748b] uppercase tracking-widest">Solution_Architecture</p>
                  <p className="text-slate-300 leading-relaxed text-sm font-medium">{project.caseStudy}</p>
                </div>
              </div>
              <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                <p className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-4 font-bold">Technical_Specs</p>
                <ul className="space-y-3">
                  {["Flutter Engine (Skia)", "Bloc/Riverpod Integration", "Node.js (MVC) Backend", "MongoDB Persistence"].map((spec, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default CaseStudies;
