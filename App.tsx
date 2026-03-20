
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { PROJECTS, EXPERIENCES, SKILLS } from './constants';
import { ProjectCard } from './components/ProjectCard';
import { Terminal } from './components/Terminal';
import { Project } from './types';
import { 
  Gamepad2, 
  User, 
  Briefcase, 
  Code2, 
  Github, 
  Linkedin, 
  Mail, 
  Target,
  Filter,
  Cpu,
  Send,
  ShieldCheck,
  Globe,
  X,
  Activity,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const App: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [activeSimulation, setActiveSimulation] = useState<Project | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allTechTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECTS.forEach(p => p.tech.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (!selectedTech) return PROJECTS;
    return PROJECTS.filter(p => p.tech.includes(selectedTech));
  }, [selectedTech]);

  const skillProgress = useMemo(() => {
    const progressMap: Record<string, number> = {};
    SKILLS.forEach(group => {
      group.items.forEach(skill => {
        // Generate a random percentage between 50 and 80
        progressMap[skill] = Math.floor(Math.random() * 31) + 50;
      });
    });
    return progressMap;
  }, []);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    setIsTransmitting(true);
    
    setTimeout(() => {
      setIsTransmitting(false);
      window.location.href = `mailto:annuetw143@gmail.com?subject=${encodeURIComponent(String(subject || 'Portfolio Inquiry'))}&body=${encodeURIComponent(`Name: ${name}\n\n${message}`)}`;
    }, 2000);
  };

  const SectionTitle = ({ icon: Icon, title, id, subtitle }: { icon: any, title: string, id: string, subtitle: string }) => (
    <div id={id} className="mb-16 pt-24 scroll-mt-24">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 border border-cyan-500/20">
          <Icon size={24} />
        </div>
        <div>
          <h2 className="text-4xl font-black text-zinc-100 uppercase tracking-tighter italic section-header relative">{title}</h2>
          <p className="text-xs font-bold mono text-zinc-500 mt-2 uppercase tracking-[0.2em]">{subtitle}</p>
        </div>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-cyan-500/30 via-zinc-800 to-transparent" />
    </div>
  );

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Simulation Room Modal */}
      {activeSimulation && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex flex-col animate-in fade-in zoom-in-95 duration-500">
          <div className="bg-slate-900 border-b border-cyan-500/20 px-6 py-4 flex items-center justify-between">
             <div className="flex items-center space-x-4">
                <div className="p-2 bg-gradient-to-br from-green-400 to-cyan-500 rounded-lg text-black">
                   <Gamepad2 size={18} />
                </div>
                <div>
                   <h2 className="text-zinc-100 font-black italic uppercase tracking-tighter">SIMULATION_LOAD: {activeSimulation.title}</h2>
                   <div className="flex items-center space-x-4 text-[9px] mono text-cyan-400 font-black">
                      <span className="flex items-center animate-pulse"><Activity size={10} className="mr-1" /> CORE_UPLINK: STABLE</span>
                      <span className="text-zinc-500">RES: DYNAMIC_UI</span>
                   </div>
                </div>
             </div>
             <button 
                onClick={() => setActiveSimulation(null)}
                className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-black px-4 py-2 rounded-lg mono text-[10px] font-black uppercase tracking-widest transition-all border border-red-500/30 flex items-center"
              >
                <X size={14} className="mr-2" />
                Terminate_Simulation
             </button>
          </div>
          <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 pointer-events-none z-10 opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
             {activeSimulation.play ? (
               <iframe 
                 src={activeSimulation.play}
                 className="w-full h-full border-0"
                 allow="autoplay; fullscreen; keyboard"
                 title={activeSimulation.title}
               />
             ) : (
               <div className="text-center space-y-6 glass p-12 rounded-3xl border-cyan-500/30">
                  <div className="relative inline-block">
                    <Cpu size={64} className="text-cyan-500 animate-pulse" />
                    <div className="absolute inset-0 blur-xl bg-cyan-500/30 animate-pulse" />
                  </div>
                  <p className="mono text-cyan-400 text-sm font-bold uppercase tracking-[0.4em]">External Deployment Link Pending</p>
                  <button onClick={() => setActiveSimulation(null)} className="text-xs text-zinc-500 hover:text-white mono underline underline-offset-4">Back to Matrix</button>
               </div>
             )}
          </div>
        </div>
      )}

      {/* HUD Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/10 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#introduction" className="flex items-center space-x-4 group">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center font-black text-black rounded-xl transform rotate-45 group-hover:rotate-0 transition-all duration-500 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
               <span className="-rotate-45 group-hover:rotate-0 transition-transform">AK</span>
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-black text-zinc-100 tracking-tighter">ANNU_KUSHWAH</span>
                <span className="text-[9px] font-bold mono tracking-widest text-cyan-500/60 uppercase">System_Active_v2.5</span>
            </div>
          </a>
          
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {[
              { label: 'Introduction', id: 'introduction' },
              { label: 'Experience', id: 'experience' },
              { label: 'Skills', id: 'skills' },
              { label: 'Projects', id: 'projects' },
              { label: 'Contact', id: 'contact' }
            ].map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className="text-[10px] font-black mono tracking-widest uppercase py-2 px-4 rounded-lg text-zinc-500 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all"
              >
                {nav.label}
              </a>
            ))}
          </nav>

          <div className="w-32 hidden sm:block">
            <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden border border-zinc-800">
               <div className="bg-gradient-to-r from-green-500 to-cyan-500 h-full transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto w-full px-8 flex-1">
        
        {/* INTRODUCTION SECTION */}
        <section id="introduction" className="min-h-screen flex items-center pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            <div className="space-y-12 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-px w-12 bg-cyan-500/50" />
                  <span className="text-xs font-bold mono text-cyan-500 uppercase tracking-widest">Protocol: Introduction</span>
                </div>
                <h1 className="text-8xl font-black tracking-tighter text-zinc-100 uppercase leading-[0.85]">
                  Architecting <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 glow-text">Digital Worlds</span>
                </h1>
                <div className="flex items-center space-x-3 text-zinc-400 mt-6">
                  <Target size={20} className="text-cyan-500 animate-pulse" />
                  <h2 className="text-2xl font-bold tracking-widest uppercase mono">
                    Lead Game Dev / XR Engineer
                  </h2>
                </div>
              </div>
              
              <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl font-light">
                Merging <span className="text-cyan-400 font-medium">high-performance C#</span> with visionary 3D design to create 
                unforgettable gaming and simulation experiences. From VR elevators to zombie-infested lands, I build the 
                infrastructure of immersion.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-black mono text-xs uppercase tracking-[0.2em] rounded-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  Explore_Deployments
                </a>
                <div className="flex space-x-4">
                  <a href="https://github.com/Annu769" target="_blank" className="p-4 glass rounded-xl hover:text-cyan-500 transition-all hover:translate-y-[-4px]">
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" className="p-4 glass rounded-xl hover:text-cyan-500 transition-all hover:translate-y-[-4px]">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative group">
              <div className="absolute -inset-10 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-full blur-3xl group-hover:opacity-100 opacity-50 transition-opacity" />
              <div className="h-[500px] relative z-10">
                <Terminal 
                  title="KERNEL_MANIFEST"
                  lines={[
                    "AUTH_STATE: VALIDATED",
                    "NAME: ANNU KUSHWAH",
                    "ROLE: GAME_DEV_ENGINEER",
                    "TECH: UNITY / C# / NETWORKING",
                    "PASSION: AR_VR_SIMULATION",
                    "LOCATION: IN_MATRIX_01",
                    "STATUS: READY_TO_CODE"
                  ]} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="py-20">
          <SectionTitle 
            id="experience" 
            icon={Briefcase} 
            title="Career_Path" 
            subtitle="Professional_Chronology" 
          />
          <div className="space-y-12 max-w-5xl">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative pl-12 border-l-2 border-cyan-500/20 group">
                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-md bg-slate-950 border-2 border-cyan-500 group-hover:rotate-45 transition-all shadow-[0_0_15px_rgba(6,182,212,0.5)] flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                </div>
                <div className="glass p-8 rounded-2xl hover:border-cyan-500/50 transition-all group-hover:translate-x-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <h3 className="text-3xl font-black text-zinc-100 tracking-tight uppercase italic">{exp.role}</h3>
                    <span className="text-xs font-black mono text-cyan-400 bg-cyan-500/5 px-4 py-2 rounded-lg border border-cyan-500/20">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-cyan-500 font-bold mb-6 flex items-center text-lg tracking-widest">
                    {exp.company}
                  </h4>
                  <ul className="space-y-4 mb-8">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="text-zinc-400 text-md leading-relaxed flex items-start">
                        <ChevronRight size={16} className="mt-1 mr-3 text-cyan-500 flex-shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-[10px] font-bold mono bg-slate-900 px-3 py-1.5 rounded-md border border-zinc-800 text-zinc-500 hover:text-cyan-400 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="py-20">
          <SectionTitle 
            id="skills" 
            icon={Code2} 
            title="Neural_Stack" 
            subtitle="Technical_Proficiency" 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SKILLS.map((group, i) => (
              <div key={i} className="glass p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/40 transition-all group">
                <h3 className="text-xl font-black tracking-[0.2em] uppercase text-zinc-100 mb-8 flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
                  {group.category}
                </h3>
                <div className="space-y-6">
                  {group.items.map((skill) => (
                    <div key={skill} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-md font-bold text-zinc-300 group-hover/skill:text-cyan-400 transition-colors">{skill}</span>
                        <span className="text-[10px] mono text-cyan-500/40 uppercase">{skillProgress[skill]}%_Ready</span>
                      </div>
                      <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-cyan-500 h-full transition-all duration-1000 group-hover:opacity-100 opacity-60" 
                          style={{ width: `${skillProgress[skill]}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="py-20">
          <SectionTitle 
            id="projects" 
            icon={Gamepad2} 
            title="Deployments" 
            subtitle="Operational_Builds" 
          />
          <div className="glass p-4 rounded-xl border border-cyan-500/10 mb-12 flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center space-x-3 text-zinc-500 mono text-xs font-bold uppercase tracking-widest border-r border-zinc-800 pr-6 mr-2">
              <Filter size={14} className="text-cyan-500" />
              <span>Filter_Protocol:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setSelectedTech(null)}
                className={`px-4 py-2 rounded-md text-[10px] mono font-bold transition-all border ${!selectedTech ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]' : 'bg-slate-900 text-zinc-500 border-zinc-800'}`}
              >
                ALL_SYSTEMS
              </button>
              {allTechTags.map(tag => (
                <button 
                  key={tag}
                  onClick={() => setSelectedTech(tag === selectedTech ? null : tag)}
                  className={`px-4 py-2 rounded-md text-[10px] mono font-bold transition-all border ${selectedTech === tag ? 'bg-cyan-500 text-black border-cyan-400' : 'bg-slate-900 text-zinc-500 border-zinc-800 hover:text-cyan-400'}`}
                >
                  {tag.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((proj) => (
              <ProjectCard 
                key={proj.title} 
                project={proj} 
                onPlay={() => setActiveSimulation(proj)}
              />
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-20">
          <SectionTitle 
            id="contact" 
            icon={Send} 
            title="Comms_Relay" 
            subtitle="Secure_Encrypted_Link" 
          />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="glass p-8 rounded-3xl border border-cyan-500/20 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Mail size={120} className="text-cyan-500" />
                </div>
                <h3 className="text-2xl font-black text-zinc-100 mb-6 uppercase tracking-tight italic">Direct_Uplink</h3>
                <p className="text-zinc-400 mb-12 leading-relaxed">Available for freelance simulations, architectural consulting, or high-tier game engine deployment.</p>
                
                <div className="space-y-8">
                  <div className="flex items-center group cursor-pointer">
                    <div className="p-4 bg-slate-900 rounded-2xl mr-5 border border-zinc-800 group-hover:border-cyan-500 transition-colors">
                      <Mail className="text-cyan-500" size={24} />
                    </div>
                    <div>
                      <span className="block text-[10px] mono text-cyan-500/50 uppercase font-black tracking-widest mb-1">Electronic_Mail</span>
                      <span className="text-zinc-200 font-bold group-hover:text-cyan-400 transition-colors">annuetw143@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="p-4 bg-slate-900 rounded-2xl mr-5 border border-zinc-800">
                      <Globe className="text-cyan-500" size={24} />
                    </div>
                    <div>
                      <span className="block text-[10px] mono text-cyan-500/50 uppercase font-black tracking-widest mb-1">Geo_Coordinate</span>
                      <span className="text-zinc-200 font-bold">Uttar Pradesh, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="glass p-8 rounded-3xl border border-cyan-500/10 relative overflow-hidden">
                {isTransmitting && (
                  <div className="absolute inset-0 bg-slate-950/95 z-50 flex items-center justify-center p-12">
                    <div className="w-full max-w-sm">
                      <Terminal 
                        title="TRANSMITTING_PACKETS" 
                        lines={["HANDSHAKE_INITIATED", "DATA_ENCRYPTED", "SENDING_UPLINK...", "REDIRECTING_TO_COMMS"]} 
                      />
                    </div>
                  </div>
                )}
                <form onSubmit={handleContactSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] mono text-cyan-500 font-black uppercase tracking-widest ml-1">Identity.Name</label>
                      <input required name="name" type="text" placeholder="WHO ARE YOU?" className="w-full bg-slate-900/50 border border-zinc-800 rounded-xl px-5 py-4 text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500 transition-all mono text-sm" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] mono text-cyan-500 font-black uppercase tracking-widest ml-1">Mission.Subject</label>
                      <input required name="subject" type="text" placeholder="MISSION GOAL" className="w-full bg-slate-900/50 border border-zinc-800 rounded-xl px-5 py-4 text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500 transition-all mono text-sm" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] mono text-cyan-500 font-black uppercase tracking-widest ml-1">Transmission.Body</label>
                    <textarea required name="message" rows={6} placeholder="ENCODE YOUR MESSAGE HERE..." className="w-full bg-slate-900/50 border border-zinc-800 rounded-xl px-5 py-5 text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500 transition-all mono text-sm resize-none" />
                  </div>
                  <button type="submit" className="w-full py-5 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-black mono text-xs uppercase tracking-[0.4em] rounded-xl hover:scale-[1.02] transition-all flex items-center justify-center group shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                    <Send size={18} className="mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Initiate_Transfer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950/90 backdrop-blur-md border-t border-cyan-500/10 px-8 py-8 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] mono text-zinc-500 font-bold uppercase tracking-widest">
          <div className="flex items-center space-x-12">
            <span className="flex items-center text-zinc-100"><Target size={14} className="mr-2 text-cyan-500" /> Annu Kushwah // Game Architect</span>
            <div className="flex items-center space-x-6">
                <div className="flex items-center text-green-500"><div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" /> LIVE_SYNC: 100%</div>
                <div className="h-4 w-px bg-zinc-800" />
                <div className="text-zinc-600">STABILITY: OPTIMAL</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-slate-900 px-6 py-2 rounded-full border border-zinc-800">
             <span className="text-cyan-500/50">Pattern:</span>
             <span className="text-cyan-400">CLEAN_CODE_ARCHITECTURE</span>
          </div>

          <div className="text-zinc-600">
            &copy; 2024 <span className="text-zinc-400">DATA_ARCHIVE_SECURED</span>
          </div>
        </div>
      </footer>
      
      {/* Floating Scroll Indicator */}
      <div className="fixed bottom-10 right-10 z-30 pointer-events-none opacity-20 sm:opacity-100">
        <div className="flex flex-col items-center">
          <div className="h-24 w-px bg-gradient-to-t from-cyan-500 to-transparent mb-4" />
          <div className="rotate-90 mono text-[9px] text-cyan-500 font-black uppercase tracking-[0.5em] origin-center">Scroll_Down</div>
        </div>
      </div>
    </div>
  );
};

export default App;
