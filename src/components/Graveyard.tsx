import React, { useState } from 'react';
import { Skull, Calendar, RefreshCw, Zap } from 'lucide-react';
import { AnimeItem } from '../types/anime';

interface GraveyardProps {
  animeList: AnimeItem[];
  onReviveAnime: (id: string) => void;
}

export default function Graveyard({ animeList, onReviveAnime }: GraveyardProps) {
  const droppedList = animeList.filter(a => a.status === 'dropped');
  const [revivingId, setRevivingId] = useState<string | null>(null);

  const handleRevive = (id: string) => {
    setRevivingId(id);
    setTimeout(() => {
      onReviveAnime(id);
      setRevivingId(null);
    }, 1200);
  };

  return (
    <div className="space-y-10">
      
      {/* INTRO HERO BANNER */}
      <section className="bg-gradient-to-r from-red-950/15 via-zinc-900/40 to-transparent border border-red-500/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 glass-panel-blue">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-widest">
            <Skull className="w-4 h-4 text-red-500 animate-pulse" />
            The Anime Cemetery
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-wide">
            Where Abandoned Journeys Rest
          </h2>
          <p className="text-xs text-gray-400 max-w-lg leading-relaxed">
            Every anime you drop or forget gets buried here. We track exactly where you stopped so you can easily summon them back to life. Don't let your stories remain unfinished.
          </p>
        </div>
      </section>

      {/* GRAVEYARD LIST */}
      {droppedList.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-zinc-800 rounded-3xl text-gray-500 bg-zinc-950/20">
          The Graveyard is empty! You have completed or are actively pursuing all your tracked anime. Perfect focus!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {droppedList.map((anime) => {
            const isReviving = revivingId === anime.id;
            const progress = Math.round((anime.currentEp / anime.totalEps) * 100);
            return (
              <div 
                key={anime.id}
                className={`relative group bg-cyber-gray border rounded-2xl overflow-hidden flex flex-col p-5 space-y-4 transition-all duration-700 ${
                  isReviving 
                    ? 'border-cyan-400 bg-cyan-950/20 glow-blue scale-105 shadow-[0_0_40px_rgba(6,182,212,0.5)]' 
                    : 'border-zinc-800/80 opacity-55 hover:opacity-100 hover:border-red-500/30'
                }`}
              >
                {/* Background Gravestone Icon */}
                <Skull className={`absolute -bottom-4 -right-4 w-28 h-28 text-zinc-950/60 pointer-events-none transition-all duration-500 ${
                  isReviving ? 'text-cyan-950/30 scale-110 rotate-12' : 'group-hover:text-red-950/20'
                }`} />

                <div className="relative z-10 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] bg-red-500/10 border border-red-500/30 text-red-400 px-2 py-0.5 rounded font-black tracking-widest uppercase">
                      EP {anime.currentEp} / {anime.totalEps}
                    </span>
                    <span className="text-[9px] text-gray-500 font-bold uppercase">
                      {anime.genres.slice(0, 2).join(' • ')}
                    </span>
                  </div>
                  
                  <h3 className="font-extrabold text-white text-base tracking-wide truncate">
                    {anime.title}
                  </h3>
                </div>

                <div className="bg-zinc-950/60 border border-zinc-900/60 rounded-xl p-3.5 space-y-2 relative z-10 text-[11px]">
                  <div className="flex justify-between items-center text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Last Active:
                    </span>
                    <span className="font-bold text-gray-400">
                      {anime.droppedDate || 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-gray-500">
                    <span>Progress Score:</span>
                    <span className="font-bold text-red-400">{progress}% complete</span>
                  </div>
                </div>

                {/* Revive Button */}
                <button
                  onClick={() => handleRevive(anime.id)}
                  disabled={isReviving}
                  className={`w-full py-3 rounded-xl font-extrabold text-xs tracking-wider flex items-center justify-center gap-2 relative z-10 transition-all cursor-pointer ${
                    isReviving
                      ? 'bg-cyan-500 text-black shadow-lg animate-pulse'
                      : 'bg-zinc-900 border border-zinc-800 text-gray-300 hover:bg-zinc-800 hover:text-white hover:border-cyan-500/50'
                  }`}
                >
                  {isReviving ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      RESTRUCTURING TIMELINE...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                      ⚔️ REVIVE FALLEN JOURNEY
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
