
import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github, Box, Gamepad2, Monitor, Terminal, Activity, Play, ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onPlay?: () => void;
}

const StatusBadge: React.FC<{ status?: Project['status'] }> = ({ status }) => {
  if (!status) return null;

  const config = {
    COMPLETED: {
      label: 'STATUS: DEPLOYED',
      color: 'text-green-500',
      bg: 'bg-green-500/10',
      border: 'border-green-500/20'
    },
    IN_PROGRESS: {
      label: 'STATUS: BUILDING',
      color: 'text-yellow-500',
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/20'
    },
    DEMO_READY: {
      label: 'STATUS: LIVE_DEMO',
      color: 'text-cyan-500',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20'
    }
  }[status];

  return (
    <div className={`px-3 py-1 rounded-md border ${config.bg} ${config.border} ${config.color} mono text-[9px] font-black tracking-widest`}>
      {config.label}
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPlay }) => {
  return (
    <div className="glass group relative p-6 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/50 transition-all duration-500 hover:translate-y-[-8px] overflow-hidden flex flex-col h-full">
      
      {project.imageUrl && (
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-1000 saturate-0"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent" />
        </div>
      )}

      <div className="hud-corner top-0 left-0 border-t-2 border-l-2 rounded-tl-xl z-10" />
      <div className="hud-corner bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl z-10" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-slate-900 rounded-xl text-cyan-500 border border-zinc-800 group-hover:border-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500">
            {project.type === '3D' ? <Box size={20} /> : project.type === 'VR' ? <Monitor size={20} /> : <Gamepad2 size={20} />}
          </div>
          <StatusBadge status={project.status} />
        </div>
        
        <h3 className="text-2xl font-black tracking-tight text-zinc-100 group-hover:text-cyan-400 transition-colors uppercase italic mb-4">
          {project.title}
        </h3>

        <div className="space-y-3 mb-8 flex-grow">
          {project.description.map((desc, i) => (
            <div key={i} className="text-sm text-zinc-400 flex items-start group/line leading-relaxed">
              <ChevronRight size={14} className="text-cyan-500 mr-2 mt-1 opacity-50 group-hover/line:opacity-100 transition-all" />
              <span className="group-hover:text-zinc-200 transition-colors">{desc}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 bg-slate-900/80 border border-zinc-800 rounded-lg text-[9px] mono text-zinc-500 group-hover:text-cyan-400 group-hover:border-cyan-500/30 uppercase transition-all">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-cyan-500/10">
          <div className="flex items-center space-x-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-500 hover:text-cyan-400 transition-colors">
                <Github size={18} />
              </a>
            )}
            {project.play && (
              <button 
                onClick={onPlay}
                className="flex items-center space-x-2 text-[10px] mono text-black bg-gradient-to-r from-green-500 to-cyan-500 px-4 py-2 rounded-lg font-black tracking-widest uppercase hover:scale-105 transition-all shadow-lg shadow-cyan-500/10"
              >
                <Play size={12} className="fill-current" />
                <span>Simulation_Start</span>
              </button>
            )}
          </div>
          <Activity size={14} className="text-cyan-500/20" />
        </div>
      </div>
    </div>
  );
};
