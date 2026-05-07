import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layers, Menu, X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "PROFILE", index: "01" },
    { path: "/projects", label: "PROJECTS", index: "02" },
    { path: "/case-studies", label: "CASE STUDIES", index: "03" },
    { path: "/testimonials", label: "TESTIMONIALS", index: "04" },
    { path: "/contact", label: "CONTACT", index: "05" },
  ];

  const currentItem = navItems.find(item => item.path === location.pathname) || navItems[0];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="h-screen w-full flex flex-col lg:flex-row bg-[#0a0c10] text-[#cbd5e1] font-sans overflow-hidden">
      {/* Sidebar Navigation - Hidden on mobile, visible on LG */}
      <aside className={`
        fixed inset-0 z-[60] lg:relative lg:z-0
        w-full lg:w-72 border-r border-[#1e293b] flex flex-col bg-[#0d1117] transition-transform duration-300
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        <div className="p-10 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              <Layers size={28} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-white tracking-tight font-mono uppercase">DEV_CORE</h1>
            <p className="text-[10px] text-blue-500 font-mono mt-1 underline decoration-blue-500/30 tracking-widest font-bold">FLUTTER_SPECIALIST.EXE</p>
          </div>
          <button onClick={toggleMenu} className="lg:hidden text-[#64748b]">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 px-6 space-y-2 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`w-full flex items-center px-4 py-4 text-[11px] font-mono tracking-widest transition-all rounded-md group ${location.pathname === item.path
                  ? "text-white bg-[#1e293b]"
                  : "text-[#64748b] hover:text-white hover:bg-[#1e293b]/50"
                }`}
            >
              <span className={`mr-4 text-[9px] opacity-40 group-hover:opacity-100 transition-opacity`}>{item.index}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-10 border-t border-[#1e293b]">
          <p className="text-[10px] text-[#64748b] font-mono uppercase tracking-widest mb-4">SYSTEM_STATUS</p>
          <div className="flex items-center text-[10px] font-mono font-bold text-green-400">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></span>
            AVAILABLE_FOR_DEPLOY
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden h-full">
        <div className="absolute inset-0 tech-grid pointer-events-none opacity-40"></div>

        {/* Header */}
        <header className="h-20 border-b border-[#1e293b] flex items-center justify-between px-6 lg:px-10 z-10 shrink-0">
          <div className="flex items-center space-x-4 lg:space-x-6">
            <button onClick={toggleMenu} className="lg:hidden text-[#64748b] p-2 bg-[#1e293b] rounded">
              <Menu size={20} />
            </button>
            <div className="hidden sm:flex items-center space-x-6">
              <span className="text-[10px] font-mono text-[#64748b] truncate max-w-[100px] md:max-w-none">LOC: /GLOBAL_REMOTE</span>
              <span className="w-1 h-1 bg-[#1e293b] rounded-full"></span>
              <span className="text-[10px] font-mono text-[#64748b] uppercase">STATE: {currentItem.label}</span>
            </div>
          </div>
          <Link
            to="/contact"
            className="px-4 lg:px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-mono font-black rounded shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all uppercase tracking-widest"
          >
            CONTACT_INIT
          </Link>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12 z-10 scroll-smooth">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>

        {/* Footer Bar */}
        <footer className="h-12 border-t border-[#1e293b] px-6 lg:px-10 flex items-center justify-between z-10 bg-[#0a0c10] shrink-0">
          <div className="flex items-center text-[9px] font-mono text-[#475569] space-x-4 lg:space-x-6 overflow-hidden">
            <span className="truncate">ROOT / AMIT / STACK / FLUTTER</span>
            <span className="hidden sm:inline">::</span>
            <span className="text-blue-900 font-bold hidden sm:inline">BUILD_V0.0.1</span>
            <span className="w-2 h-2 bg-blue-500/20 rounded-full hidden sm:inline"></span>
          </div>
          <div className="flex space-x-4 lg:space-x-8 shrink-0">
            <a href="https://github.com/mrityudata" target="_blank" rel="noopener noreferrer" className="text-[9px] font-mono text-[#475569] hover:text-white cursor-pointer transition-colors tracking-widest font-bold">
              GITHUB
            </a>
            <a href="https://www.linkedin.com/in/amit-chauhan-87939b203?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-[9px] font-mono text-[#475569] hover:text-white cursor-pointer transition-colors tracking-widest font-bold">
              LINKEDIN
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Layout;
