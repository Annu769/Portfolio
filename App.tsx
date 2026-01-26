
import React, { useState, useEffect, useMemo } from 'react';
import { PROJECTS, EXPERIENCES, SKILLS } from './constants';
import { ProjectCard } from './components/ProjectCard';
import { Terminal } from './components/Terminal';
import { 
  Gamepad2, 
  User, 
  Briefcase, 
  Code2, 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  LayoutGrid,
  ChevronRight,
  Target,
  Filter,
  Cpu,
  Send,
  ShieldCheck,
  Globe
} from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'HOME' | 'PROJECTS' | 'EXPERIENCE' | 'SKILLS' | 'CONTACT'>('HOME');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [bootSequence, setBootSequence] = useState(true);
  const [isTransmitting, setIsTransmitting] = useState(false);

  // Extract all unique tech tags from projects
  const allTechTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECTS.forEach(p => p.tech.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (!selectedTech) return PROJECTS;
    return PROJECTS.filter(p => p.tech.includes(selectedTech));
  }, [selectedTech]);

  useEffect(() => {
    const timer = setTimeout(() => setBootSequence(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    setIsTransmitting(true);
    
    // Simulate high-tech transmission
    setTimeout(() => {
      setIsTransmitting(false);
      window.location.href = `mailto:annuetw143@gmail.com?subject=${encodeURIComponent(String(subject || 'Portfolio Inquiry'))}&body=${encodeURIComponent(`Name: ${name}\n\n${message}`)}`;
    }, 2000);
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'HOME':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-10">
                <div className="relative">
                  <div className="absolute -left-4 top-0 bottom-0 w-1 bg-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                  <h1 className="text-7xl font-black mb-4 tracking-tighter text-zinc-100 uppercase">
                    Annu <span className="text-green-500 glow-text">Kushwah</span>
                  </h1>
                  <div className="flex items-center space-x-3 text-zinc-400">
                    <Target size={20} className="text-green-500 animate-pulse" />
                    <h2 className="text-2xl font-bold tracking-widest uppercase mono">
                      Game Architect / XR Dev
                    </h2>
                  </div>
                </div>
                
                <p className="text-xl text-zinc-300 leading-relaxed max-w-xl font-light">
                  Crafting high-fidelity <span className="text-green-400 font-medium">3D worlds</span> and immersive 
                  <span className="text-green-400 font-medium"> AR/VR experiences</span>. Specialized in Unity engine 
                  optimization and advanced AI systems for professional simulation.
                </p>

                <div className="flex items-center space-x-6">
                  <a href="mailto:annuetw143@gmail.com" className="p-4 glass rounded-xl hover:text-green-500 transition-all hover:scale-110 group relative overflow-hidden">
                    <Mail size={24} />
                    <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" className="p-4 glass rounded-xl hover:text-green-500 transition-all hover:scale-110 group relative overflow-hidden">
                    <Linkedin size={24} />
                    <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="https://github.com" target="_blank" className="p-4 glass rounded-xl hover:text-green-500 transition-all hover:scale-110 group relative overflow-hidden">
                    <Github size={24} />
                    <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  
                  <div className="glass px-6 py-3 rounded-xl flex items-center space-x-3 border border-green-500/30">
                    <div className="relative">
                       <div className="w-3 h-3 rounded-full bg-green-500 animate-ping absolute" />
                       <div className="w-3 h-3 rounded-full bg-green-500 relative" />
                    </div>
                    <span className="text-xs font-black mono text-zinc-200 uppercase tracking-[0.2em]">Live_Status: Deployment_Ready</span>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block h-[450px] relative">
                <div className="absolute -inset-4 bg-green-500/5 rounded-3xl blur-3xl" />
                <Terminal 
                  title="CORE_MANIFEST"
                  lines={[
                    "USER_ID: ANNU_KUSHWAH",
                    "DEPLOYMENT_REGION: INDIA",
                    "TECH_STACK: UNITY / C# / AR / VR",
                    "XP_LEVEL: JUNIOR_ARCHITECT",
                    "COMPLETED_SIMS: 5+",
                    "READY_STATE: CRITICAL_PASS",
                    "MISSION: BUILD_THE_FUTURE_OF_GAMING"
                  ]} 
                />
              </div>
            </div>
          </div>
        );
      case 'PROJECTS':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* HUD Filter System */}
            <div className="glass p-4 rounded-xl border border-green-500/10 flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center space-x-3 text-zinc-500 mono text-xs font-bold uppercase tracking-widest border-r border-zinc-800 pr-4 mr-2">
                <Filter size={14} className="text-green-500" />
                <span>Filter_Protocol:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setSelectedTech(null)}
                  className={`px-3 py-1.5 rounded-md text-[10px] mono font-bold transition-all border ${!selectedTech ? 'bg-green-500 text-black border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.4)]' : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-green-500/30 hover:text-zinc-300'}`}
                >
                  ALL_SYSTEMS
                </button>
                {allTechTags.map(tag => (
                  <button 
                    key={tag}
                    onClick={() => setSelectedTech(tag === selectedTech ? null : tag)}
                    className={`px-3 py-1.5 rounded-md text-[10px] mono font-bold transition-all border ${selectedTech === tag ? 'bg-green-500 text-black border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.4)]' : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-green-500/30 hover:text-zinc-300'}`}
                  >
                    {tag.toUpperCase()}
                  </button>
                ))}
              </div>
              {selectedTech && (
                <div className="ml-auto text-[10px] mono text-green-500/60 font-bold hidden md:block">
                  MATCHES_FOUND: {filteredProjects.length}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((proj) => (
                <ProjectCard key={proj.title} project={proj} />
              ))}
              {filteredProjects.length === 0 && (
                <div className="col-span-full py-20 text-center glass rounded-2xl border-dashed border-2 border-green-500/20">
                  <div className="mono text-zinc-500 text-lg uppercase tracking-widest flex flex-col items-center">
                    <Cpu size={48} className="mb-4 text-zinc-800 animate-pulse" />
                    No Matching Protocols Located
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      case 'EXPERIENCE':
        return (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-5xl">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative pl-12 border-l-2 border-green-500/20 group">
                <div className="absolute -left-[11px] top-0 w-[20px] h-[20px] rounded-lg bg-black border-2 border-green-500 group-hover:rotate-45 transition-all shadow-[0_0_15px_rgba(34,197,94,0.5)] flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                </div>
                <div className="glass p-8 rounded-2xl hover:border-green-500/50 transition-all group-hover:translate-x-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <h3 className="text-3xl font-black text-zinc-100 tracking-tight uppercase italic">{exp.role}</h3>
                    <div className="flex items-center space-x-2">
                        <span className="text-xs font-black mono text-green-500 bg-green-500/10 px-4 py-1.5 rounded-lg border border-green-500/30">
                        {exp.period}
                        </span>
                    </div>
                  </div>
                  <h4 className="text-green-500 font-black mb-6 flex items-center text-lg tracking-widest">
                    <Briefcase size={20} className="mr-3" />
                    {exp.company}
                  </h4>
                  <ul className="space-y-4 mb-8">
                    {exp.description.map((desc, idx) => (
                      <li key={idx} className="text-zinc-300 text-md leading-relaxed flex items-start">
                        <div className="mt-1.5 mr-4 w-2 h-2 bg-green-500 rotate-45 flex-shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-[11px] font-bold mono bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-green-400 hover:border-green-500/30 transition-all cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'SKILLS':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {SKILLS.map((group, i) => (
              <div key={i} className="glass p-8 rounded-2xl border border-green-500/20 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   {i === 0 ? <Code2 size={120} /> : i === 1 ? <Gamepad2 size={120} /> : <LayoutGrid size={120} />}
                </div>
                <div className="flex items-center space-x-4 mb-8 relative">
                  <div className="p-3 bg-green-500/10 rounded-xl text-green-500 group-hover:scale-110 transition-transform">
                    {i === 0 ? <Code2 size={28} /> : i === 1 ? <Gamepad2 size={28} /> : <LayoutGrid size={28} />}
                  </div>
                  <h3 className="text-xl font-black tracking-[0.2em] uppercase text-zinc-100">{group.category}</h3>
                </div>
                <div className="space-y-6 relative">
                  {group.items.map((skill) => (
                    <div key={skill} className="relative group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-md font-bold text-zinc-300 group-hover/skill:text-green-400 transition-colors">{skill}</span>
                        <span className="text-[10px] mono text-green-500/60 uppercase">Ready</span>
                      </div>
                      <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden border border-zinc-800/50">
                        <div 
                          className="bg-gradient-to-r from-green-900 to-green-500 h-full rounded-full shadow-[0_0_10px_rgba(34,197,94,0.3)] transition-all duration-1000" 
                          style={{ width: '90%' }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case 'CONTACT':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Left Column: Direct Links & Info */}
              <div className="lg:col-span-2 space-y-8">
                <div className="glass p-8 rounded-2xl border-l-4 border-green-500 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <Send size={80} className="text-green-500" />
                  </div>
                  <h2 className="text-3xl font-black text-zinc-100 mb-6 uppercase tracking-tighter italic">Comms_Link</h2>
                  <p className="text-zinc-400 mb-8 leading-relaxed">
                    Always open to new collaborations, high-impact game projects, or XR simulation opportunities.
                  </p>
                  
                  <div className="space-y-6">
                    <a href="mailto:annuetw143@gmail.com" className="flex items-center group/link">
                      <div className="p-3 bg-zinc-900 rounded-lg mr-4 border border-zinc-800 group-hover/link:border-green-500/50 transition-colors">
                        <Mail className="text-green-500" size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] mono text-green-500/60 uppercase font-black">Email_Direct</span>
                        <span className="text-zinc-200 font-bold group-hover/link:text-green-400 transition-colors">annuetw143@gmail.com</span>
                      </div>
                    </a>
                    <div className="flex items-center group/link">
                      <div className="p-3 bg-zinc-900 rounded-lg mr-4 border border-zinc-800">
                        <Globe className="text-green-500" size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] mono text-green-500/60 uppercase font-black">Location_Base</span>
                        <span className="text-zinc-200 font-bold">Uttar Pradesh, India</span>
                      </div>
                    </div>
                    <div className="flex items-center group/link">
                      <div className="p-3 bg-zinc-900 rounded-lg mr-4 border border-zinc-800">
                        <ShieldCheck className="text-green-500" size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] mono text-green-500/60 uppercase font-black">Security_Protocol</span>
                        <span className="text-zinc-200 font-bold italic">Encrypted_Transmission_Enabled</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl border border-zinc-800 flex justify-around">
                  <a href="https://github.com" target="_blank" className="text-zinc-500 hover:text-green-500 transition-all hover:scale-125"><Github size={28} /></a>
                  <a href="https://linkedin.com" target="_blank" className="text-zinc-500 hover:text-green-500 transition-all hover:scale-125"><Linkedin size={28} /></a>
                  <a href="mailto:annuetw143@gmail.com" className="text-zinc-500 hover:text-green-500 transition-all hover:scale-125"><Mail size={28} /></a>
                </div>
              </div>

              {/* Right Column: High-Tech Form */}
              <div className="lg:col-span-3">
                <div className="glass p-8 rounded-2xl border border-green-500/10 relative overflow-hidden">
                   {isTransmitting && (
                     <div className="absolute inset-0 bg-black/90 z-50 flex items-center justify-center">
                        <div className="w-full max-w-sm px-6">
                           <Terminal 
                              title="ENCRYPTING_DATA" 
                              lines={[
                                "GENERATING HANDSHAKE...",
                                "WRAPPING PACKETS IN TLS...",
                                "BYPASSING FIREWALLS...",
                                "UPLINK ESTABLISHED.",
                                "REDIRECTING TO COMMS_CENTER..."
                              ]} 
                           />
                        </div>
                     </div>
                   )}
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] mono text-green-500 font-black uppercase tracking-widest ml-1">Input.User_Name</label>
                        <input 
                          required 
                          name="name"
                          type="text" 
                          placeholder="IDENTIFY YOURSELF"
                          className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all mono text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] mono text-green-500 font-black uppercase tracking-widest ml-1">Input.Subject_Header</label>
                        <input 
                          required
                          name="subject"
                          type="text" 
                          placeholder="MISSION_OBJECTIVE"
                          className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all mono text-sm"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] mono text-green-500 font-black uppercase tracking-widest ml-1">Input.Transmission_Body</label>
                      <textarea 
                        required
                        name="message"
                        rows={6}
                        placeholder="ENTER ENCRYPTED MESSAGE CONTENT HERE..."
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-4 text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all mono text-sm resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 bg-green-500 hover:bg-green-400 text-black font-black mono text-xs uppercase tracking-[0.3em] rounded-xl transition-all shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:scale-[1.01] active:scale-95 flex items-center justify-center group"
                    >
                      <Send size={16} className="mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Initiate_Transmission
                    </button>
                    
                    <div className="flex items-center justify-between text-[8px] mono text-zinc-700 font-bold uppercase tracking-widest px-2">
                       <span>Packet_Size: Auto</span>
                       <span>Compression: GZIP</span>
                       <span>Protocol: SMTP_SECURE</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* HUD Header */}
      <header className="sticky top-0 z-40 bg-black/60 backdrop-blur-xl border-b border-green-500/10 px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="w-10 h-10 bg-green-500 flex items-center justify-center font-black text-black rounded-lg transform rotate-45 group-hover:rotate-0 transition-transform duration-500">
               <span className="-rotate-45 group-hover:rotate-0 transition-transform">AK</span>
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-black text-zinc-100 tracking-tighter">ANNU_KUSHWAH</span>
                <span className="text-[9px] font-bold mono tracking-widest text-green-500/60 uppercase">Sys_Kernel v2.5.0</span>
            </div>
          </div>
          
          <nav className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
            {(['HOME', 'PROJECTS', 'EXPERIENCE', 'SKILLS', 'CONTACT'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[9px] sm:text-[11px] font-black mono tracking-widest uppercase transition-all relative py-2.5 px-3 sm:px-4 rounded-lg
                  ${activeTab === tab 
                    ? 'text-black bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)]' 
                    : 'text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800/50'}
                `}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Mission Control Area */}
      <main className="max-w-7xl mx-auto w-full px-8 py-12 md:py-20 flex-1">
        {renderContent()}
      </main>

      {/* Footer Info HUD */}
      <footer className="bg-black/80 backdrop-blur-md border-t border-green-500/10 px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] mono text-zinc-500 font-bold uppercase tracking-widest">
          <div className="flex items-center space-x-10">
            <span className="flex items-center text-zinc-400"><User size={14} className="mr-2 text-green-500" /> Annu Kushwah</span>
            <div className="flex items-center space-x-4">
                <div className="flex items-center text-green-500/60"><div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" /> Uplink Active</div>
                <div className="h-4 w-px bg-zinc-800" />
                <div className="text-zinc-600">Ping: 12ms</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 bg-zinc-900/50 px-4 py-2 rounded-full border border-zinc-800">
            <span className="text-zinc-500">Design_Pattern:</span>
            <span className="text-green-500">MVC_CLEAN_ARCH</span>
          </div>

          <div className="group cursor-default">
            &copy; 2024 <span className="text-zinc-300 group-hover:text-green-500 transition-colors">DELETION_PROTECTED</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
