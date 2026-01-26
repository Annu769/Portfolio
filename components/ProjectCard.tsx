
import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github, Box, Gamepad2, Monitor, Terminal, Activity, Play } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onPlay?: () => void;
}

const StatusBadge: React.FC<{ status?: Project['status'] }> = ({ status }) => {
  if (!status) return null;

  const config = {
    COMPLETED: {
      label: 'MISSION_ACCOMPLISHED',
      color: 'text-green-500',
      bg: 'bg-green-500/10',
      border: 'border-green-500/30',
      dot: 'bg-green-500'
    },
    IN_PROGRESS: {
      label: 'UPLINK_DEVELOPING',
      color: 'text-yellow-500',
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/30',
      dot: 'bg-yellow-500 animate-pulse'
    },
    DEMO_READY: {
      label: 'SIMULATION_LIVE',
      color: 'text-cyan-500',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      dot: 'bg-cyan-500 animate-ping'
    }
  }[status];

  return (
    <div className={`flex items-center space-x-2 px-3 py-1 rounded-md border ${config.bg} ${config.border} ${config.color} mono text-[9px] font-black tracking-widest`}>
      <div className={`w-1.5 h-1.5 rounded-full ${config.dot} shadow-[0_0_5px_currentColor]`} />
      <span>{config.label}</span>
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPlay }) => {
  return (
    <div className="glass group relative p-6 rounded-xl border border-green-500/20 hover:border-green-500/80 transition-all duration-700 hover:scale-[1.04] overflow-hidden flex flex-col h-full">
      
      {project.imageUrl && (
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-1000 saturate-0 group-hover:saturate-100"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
      )}

      <div className="hud-corner top-0 left-0 border-t-2 border-l-2 rounded-tl-lg z-10" />
      <div className="hud-corner top-0 right-0 border-t-2 border-r-2 rounded-tr-lg z-10" />
      <div className="hud-corner bottom-0 left-0 border-b-2 border-l-2 rounded-bl-lg z-10" />
      <div className="hud-corner bottom-0 right-0 border-b-2 border-r-2 rounded-br-lg z-10" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10">
        <div 
          className="absolute w-full h-[3px] bg-green-500/50 blur-[2px] shadow-[0_0_20px_rgba(34,197,94,0.8)]"
          style={{ animation: 'scan-v 3s linear infinite' }}
        />
        <div className="absolute inset-0 bg-green-500/[0.02] mix-blend-overlay" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="absolute -top-2 -right-2 flex flex-col items-end space-y-2">
          <div className="px-2 py-0.5 bg-green-500 text-black text-[9px] font-black mono uppercase tracking-widest rounded-bl-lg transform group-hover:translate-x-0 transition-transform">
            {project.type}
          </div>
          <StatusBadge status={project.status} />
        </div>
        
        <div className="flex items-center space-x-4 mb-6 relative">
          <div className="relative">
            <div className="p-3 bg-green-500/10 rounded-lg text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all duration-500 transform group-hover:rotate-12">
              {project.type === '3D' ? <Box size={24} /> : project.type === 'VR' ? <Monitor size={24} /> : <Gamepad2 size={24} />}
            </div>
            <div className="absolute -inset-2 bg-green-500/30 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <h3 className="text-xl font-black tracking-tight text-zinc-100 group-hover:text-green-400 group-hover:glow-text transition-all duration-300 uppercase italic">
              {project.title}
            </h3>
            <div className="flex items-center text-[10px] text-green-500/50 mono mt-1">
              <Terminal size={10} className="mr-1" />
              <span>PROJECT_INIT</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-6 flex-grow">
          {project.description.map((desc, i) => (
            <div key={i} className="text-sm text-zinc-300 flex items-start group/line leading-relaxed">
              <span className="text-green-500 mr-2 opacity-50 group-hover/line:opacity-100 group-hover:scale-150 transition-all">▹</span>
              <span className="group-hover:text-white transition-colors">{desc}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 bg-black/60 backdrop-blur-md border border-zinc-800 group-hover:border-green-500/50 rounded-md text-[9px] mono text-zinc-400 group-hover:text-green-400 uppercase transition-all shadow-sm">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-5 border-t border-green-500/10 mt-auto">
          <div className="flex items-center space-x-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center space-x-2 text-[10px] mono text-zinc-500 hover:text-green-400 transition-all hover:translate-y-[-2px]">
                <Github size={14} className="group-hover:animate-bounce" />
                <span className="font-black">REPO</span>
              </a>
            )}
            {project.play && (
              <button 
                onClick={onPlay}
                className="flex items-center space-x-2 text-[10px] mono text-green-500 hover:text-green-300 transition-all hover:translate-y-[-2px] bg-green-500/10 px-3 py-1.5 rounded-lg border border-green-500/20 hover:border-green-500/50"
              >
                <Play size={14} className="fill-current" />
                <span className="font-black tracking-widest uppercase">Simulation_Start</span>
              </button>
            )}
          </div>
          
          <div className="flex items-center space-x-2 text-[10px] mono text-zinc-600">
            <Activity size={12} className="text-green-500/40" />
            <span className="group-hover:text-green-500 transition-colors">V1.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};
