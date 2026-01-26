
import React from 'react';

interface TerminalProps {
  lines: string[];
  title?: string;
}

export const Terminal: React.FC<TerminalProps> = ({ lines, title = "SYS_LOG" }) => {
  return (
    <div className="glass rounded-lg overflow-hidden flex flex-col h-full border border-green-500/30">
      <div className="bg-zinc-900 px-4 py-2 border-b border-green-500/20 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <span className="text-xs mono text-green-500/60 uppercase tracking-widest">{title}</span>
      </div>
      <div className="p-4 mono text-sm overflow-y-auto custom-scrollbar flex-1 bg-black/40">
        {lines.map((line, idx) => (
          <div key={idx} className="mb-1">
            <span className="text-green-500 mr-2 opacity-50">$</span>
            <span className="text-zinc-300">{line}</span>
          </div>
        ))}
        <div className="animate-pulse inline-block w-2 h-4 bg-green-500 ml-1" />
      </div>
    </div>
  );
};
