import React from "react";
import { motion } from "motion/react";

const Profile: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid lg:grid-cols-12 gap-16 items-center py-10"
    >
      <div className="lg:col-span-12">
        <div className="mb-4">
          <span className="px-3 py-1 border border-blue-500/30 text-blue-400 text-[10px] font-mono rounded bg-blue-500/5 uppercase tracking-[0.3em] font-bold">
            [ ARCHITECT_IDENTITY_VERIFIED ]
          </span>
        </div>
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[0.9] mb-4 uppercase tracking-tighter italic">
          Amit <span className="text-blue-500">Chauhan</span>
        </h2>
        <p className="text-xl md:text-2xl font-mono text-blue-500/80 mb-12 uppercase tracking-widest font-bold">
          Flutter_Developer // Sr_Level
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 text-[#64748b]">
           <div className="max-w-md space-y-6">
            <p className="text-sm leading-relaxed border-l-2 border-blue-600 pl-6 font-medium text-slate-300">
              Specialized in high-performance mobile architectures, custom rendering engines, and modular state management. Focused on delivering production-grade Flutter applications with clean MVC patterns and robust Node.js backends.
            </p>
            <div className="flex gap-4">
               {["DART", "FLUTTER", "NODE", "MONGO"].map(tech => (
                 <span key={tech} className="text-[10px] font-mono border border-[#1e293b] px-2 py-1 rounded text-[#475569]">
                   {tech}
                 </span>
               ))}
            </div>
          </div>
          
          <div className="flex gap-12 lg:gap-20 shrink-0">
            <div>
              <p className="text-4xl font-black text-white italic">04</p>
              <p className="text-[9px] font-mono text-blue-500 uppercase tracking-widest font-bold">Years_Exp</p>
            </div>
            {/* 
            <div>
              <p className="text-4xl font-black text-white italic">28+</p>
              <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Solutions_Deployed</p>
            </div>
            */}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Profile;
