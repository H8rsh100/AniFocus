"use client";

import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'enter' | 'logo' | 'exit'>('enter');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('logo'), 400);
    const t2 = setTimeout(() => setPhase('exit'), 1600);
    const t3 = setTimeout(() => onComplete(), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-cyber-black flex items-center justify-center overflow-hidden transition-opacity duration-700 ${phase === 'exit' ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Manga Panels */}
      <div className="absolute inset-0">
        {/* Top-left panel */}
        <div className={`absolute top-0 left-0 w-1/2 h-1/2 border-b-2 border-r-2 border-zinc-700 bg-zinc-950 transition-transform duration-500 ease-out ${phase === 'exit' ? '-translate-x-full -translate-y-full' : 'translate-x-0 translate-y-0'}`} style={{ transitionDelay: '0ms' }}>
          <div className="w-full h-full p-4 opacity-20">
            <div className="w-3/4 h-2 bg-zinc-700 rounded mb-2"></div>
            <div className="w-1/2 h-2 bg-zinc-700 rounded mb-2"></div>
            <div className="w-full h-1 bg-zinc-800 rounded mb-1"></div>
            <div className="w-5/6 h-1 bg-zinc-800 rounded mb-1"></div>
            <div className="w-2/3 h-1 bg-zinc-800 rounded"></div>
          </div>
        </div>
        
        {/* Top-right panel */}
        <div className={`absolute top-0 right-0 w-1/2 h-1/2 border-b-2 border-l-2 border-zinc-700 bg-zinc-950 transition-transform duration-500 ease-out ${phase === 'exit' ? 'translate-x-full -translate-y-full' : 'translate-x-0 translate-y-0'}`} style={{ transitionDelay: '50ms' }}>
          <div className="w-full h-full p-4 opacity-20">
            <div className="w-full h-16 bg-zinc-800 rounded mb-2"></div>
            <div className="w-2/3 h-2 bg-zinc-700 rounded"></div>
          </div>
        </div>
        
        {/* Bottom-left panel */}
        <div className={`absolute bottom-0 left-0 w-1/2 h-1/2 border-t-2 border-r-2 border-zinc-700 bg-zinc-950 transition-transform duration-500 ease-out ${phase === 'exit' ? '-translate-x-full translate-y-full' : 'translate-x-0 translate-y-0'}`} style={{ transitionDelay: '100ms' }}>
          <div className="w-full h-full p-4 opacity-20">
            <div className="w-full h-1 bg-zinc-800 rounded mb-1"></div>
            <div className="w-4/5 h-1 bg-zinc-800 rounded mb-1"></div>
            <div className="w-full h-1 bg-zinc-800 rounded mb-2"></div>
            <div className="w-1/2 h-2 bg-zinc-700 rounded"></div>
          </div>
        </div>
        
        {/* Bottom-right panel */}
        <div className={`absolute bottom-0 right-0 w-1/2 h-1/2 border-t-2 border-l-2 border-zinc-700 bg-zinc-950 transition-transform duration-500 ease-out ${phase === 'exit' ? 'translate-x-full translate-y-full' : 'translate-x-0 translate-y-0'}`} style={{ transitionDelay: '150ms' }}>
          <div className="w-full h-full p-4 opacity-20">
            <div className="w-10 h-10 bg-zinc-800 rounded-full mb-2"></div>
            <div className="w-3/4 h-2 bg-zinc-700 rounded"></div>
          </div>
        </div>
      </div>

      {/* Center Logo */}
      <div className={`relative z-10 text-center transition-all duration-500 ${phase === 'enter' ? 'opacity-0 scale-90' : phase === 'exit' ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}>
        <div className="font-bebas text-5xl md:text-7xl font-black tracking-widest text-white">
          ANI<span className="text-primary-purple">FOCUS</span>
        </div>
        <div className="text-[10px] text-gray-500 uppercase tracking-[0.3em] mt-2 font-mono">
          Completion Protocol
        </div>
        <div className="w-24 h-0.5 bg-gradient-to-r from-primary-purple to-neon-blue mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 scanlines pointer-events-none opacity-10"></div>
    </div>
  );
}
