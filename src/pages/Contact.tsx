import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12 py-10"
    >
      <div className="flex items-center gap-4">
        <span className="text-blue-500 font-mono text-xs">05</span>
        <h3 className="text-4xl font-black italic uppercase tracking-tighter text-white">Connection_Init</h3>
      </div>
      <div className="bg-[#0d1117] border border-[#1e293b] p-8 md:p-16 rounded-[40px] flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1 space-y-8 w-full">
          <h4 className="text-5xl font-black italic uppercase tracking-tighter leading-tight text-white">
            Let's Build <br />
            Something <br />
            <span className="text-blue-500 tracking-normal not-italic">Remotely.</span>
          </h4>
          <div className="p-6 border border-[#1e293b] rounded-2xl space-y-4">
            <p className="text-[10px] font-mono text-[#64748b] uppercase tracking-widest font-bold">Social_Sync</p>
            <div className="flex gap-6">
              <a href="https://github.com/mrityudata" target="_blank" rel="noopener noreferrer">
                <Github size={20} className="text-slate-400 hover:text-white cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/amit-chauhan-87939b203?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} className="text-slate-400 hover:text-white cursor-pointer" />
              </a>
              <a href="mailto:your-email@example.com">
                <Mail size={20} className="text-slate-400 hover:text-white cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full space-y-6">
           <div className="space-y-2">
            <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#64748b] ml-4">USER_ID</label>
            <input type="text" className="w-full bg-[#0a0c10] border border-[#1e293b] rounded-xl px-6 py-4 focus:border-blue-500/50 outline-none text-sm font-mono" placeholder="NAME_INPUT" />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#64748b] ml-4">EMAIL_LINK</label>
            <input type="email" className="w-full bg-[#0a0c10] border border-[#1e293b] rounded-xl px-6 py-4 focus:border-blue-500/50 outline-none text-sm font-mono" placeholder="EMAIL_INPUT" />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#64748b] ml-4">MESSAGE_BUFFER</label>
            <textarea className="w-full bg-[#0a0c10] border border-[#1e293b] rounded-xl px-6 py-4 focus:border-blue-500/50 outline-none h-32 resize-none text-sm font-mono" placeholder="MSG_INPUT" />
          </div>
          <button className="w-full py-5 bg-blue-600 text-white font-mono font-black uppercase tracking-[0.3em] rounded-xl hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all">
            SEND_PACKET
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
