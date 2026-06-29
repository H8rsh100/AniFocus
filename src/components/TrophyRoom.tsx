import React, { useState } from 'react';
import { Award, Calendar, Heart, MessageSquare, Star, Clock, Lock, Trash2 } from 'lucide-react';
import { AnimeItem, Achievement } from '../types/anime';

interface TrophyRoomProps {
  animeList: AnimeItem[];
  achievements: Achievement[];
  profile: any;
  onDeleteAnime?: (id: string) => void;
}

const FRANCHISES = [
  {
    id: 'jjk',
    name: 'Jujutsu Kaisen',
    titles: [
      'jujutsu kaisen (2 seasons',
      'jujutsu kaisen (season 3)',
      'jujutsu kaisen 0'
    ],
    masterTitle: 'Jujutsu Kaisen (Complete Saga)',
    masterGenre: 'Action',
    masterSynopsis: 'The ultimate chronicle of Tokyo Jujutsu High. Includes Season 1 & 2 (Shibuya Incident), Season 3 (Culling Game), and the prequel film Jujutsu Kaisen 0. Your cursed energy control is absolute.',
    masterReview: 'Consolidated franchise compilation: Mastered Tokyo Jujutsu High story arcs.'
  },
  {
    id: 'demonslayer',
    name: 'Demon Slayer',
    titles: [
      'demon slayer: kimetsu no yaiba',
      'mugen train'
    ],
    masterTitle: 'Demon Slayer (Complete Saga)',
    masterGenre: 'Action',
    masterSynopsis: 'The full journey of Tanjiro Kamado from a coal burner to a seasoned demon slayer, including the Mugen Train arc. Breathing styles fully mastered.',
    masterReview: 'Consolidated franchise compilation: All demons slain, family legacy honored.'
  }
];

export default function TrophyRoom({ animeList, achievements, profile, onDeleteAnime }: TrophyRoomProps) {
  const [consolidate, setConsolidate] = useState(true);
  const completedList = animeList.filter(a => a.status === 'completed');

  // Find fully completed franchises
  const completedFranchises = FRANCHISES.filter(franchise => {
    return franchise.titles.every(targetTitle => {
      return completedList.some(c => c.title.toLowerCase().includes(targetTitle.toLowerCase()));
    });
  });

  // Filter which items to show individually
  const consolidatedCompletedList = completedList.filter(anime => {
    const isPartOfCompletedFranchise = completedFranchises.some(franchise => {
      return franchise.titles.some(targetTitle => anime.title.toLowerCase().includes(targetTitle.toLowerCase()));
    });
    return !(consolidate && isPartOfCompletedFranchise);
  });

  const displayCount = consolidate 
    ? consolidatedCompletedList.length + completedFranchises.length 
    : completedList.length;

  return (
    <div className="space-y-10">
      
      {/* 1. COMPLETION HONORS (TROPHY ROOM SHELF) */}
      <section>
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-4 rounded bg-amber-400"></span>
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              Completed Collection ({displayCount})
            </h2>
          </div>
          {completedFranchises.length > 0 && (
            <label className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-950/60 border border-zinc-900 text-[11px] font-bold font-mono text-gray-400 hover:text-white cursor-pointer transition-all">
              <input
                type="checkbox"
                checked={consolidate}
                onChange={(e) => setConsolidate(e.target.checked)}
                className="accent-amber-500 rounded border-zinc-700 bg-zinc-800 mr-1.5 cursor-pointer"
              />
              Consolidate Franchises
            </label>
          )}
        </div>

        {completedList.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-zinc-800 rounded-3xl text-gray-500 bg-zinc-950/20">
            No completed trophies yet. Finish an active mission in Focus Mode to unlock your first trophy!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Render Consolidated Franchises if enabled */}
            {consolidate && completedFranchises.map((franchise) => {
              const constituents = completedList.filter(c =>
                franchise.titles.some(t => c.title.toLowerCase().includes(t.toLowerCase()))
              );
              
              const totalEps = constituents.reduce((acc, curr) => acc + curr.totalEps, 0);
              const totalHours = Math.round(constituents.reduce((acc, curr) => acc + (curr.totalEps * curr.hoursPerEp), 0));
              const avgRating = (constituents.reduce((acc, curr) => acc + (curr.rating || 10), 0) / constituents.length).toFixed(1);
              const newestCompletionDate = constituents
                .map(c => c.completionDate)
                .filter(Boolean)
                .sort()
                .reverse()[0] || 'Recent';

              return (
                <div 
                  key={franchise.id}
                  className="group relative bg-cyber-gray border-2 border-amber-500/60 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-[0_0_15px_rgba(245,158,11,0.12)] transition-all duration-300 hud-panel-gold"
                >
                  {/* Gold aura animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-500/5 rounded-2xl pointer-events-none group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Header info */}
                  <div className="flex justify-between items-start gap-4 z-10">
                    <div>
                      <span className="text-[9px] bg-amber-500/20 border border-amber-500/40 text-amber-400 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit">
                        👑 FRANCHISE MASTERY
                      </span>
                      <h3 className="font-extrabold text-amber-400 text-xl tracking-wide mt-2 glow-text-gold">
                        {franchise.masterTitle}
                      </h3>
                    </div>
                    
                    {/* Rating value and delete button */}
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="bg-amber-500/20 border border-amber-500/50 text-amber-300 text-[10px] font-black tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5 uppercase shadow-lg">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        Avg: {avgRating}/10
                      </div>
                      {onDeleteAnime && (
                        <button
                          onClick={() => {
                            if (confirm(`Remove ALL entries of "${franchise.name}" from completed collection?`)) {
                              constituents.forEach(c => onDeleteAnime(c.id));
                            }
                          }}
                          className="p-1.5 bg-rose-950/30 border border-rose-900/40 hover:bg-rose-950 hover:border-rose-500 text-rose-400 rounded-lg transition-all cursor-pointer"
                          title="Remove Franchise Mastery"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Metadata details */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-400 font-semibold border-b border-zinc-900 pb-3 pt-1 z-10">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      Mastered: {newestCompletionDate}
                    </span>
                    <span className="flex items-center gap-1.5 justify-end">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      Watched: {totalHours} Hours ({totalEps} Eps)
                    </span>
                  </div>

                  {/* Synopsis */}
                  <div className="space-y-1 z-10">
                    <p className="text-[9px] text-amber-400 uppercase font-bold tracking-widest flex items-center gap-1">
                      📜 Franchise Synopsis
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed bg-amber-500/5 border-l-2 border-amber-500 p-2.5 rounded-r-lg">
                      {franchise.masterSynopsis}
                    </p>
                  </div>

                  {/* Covered Releases */}
                  <div className="space-y-1.5 z-10">
                    <p className="text-[9px] text-cyan-400 uppercase font-bold tracking-widest">
                      📦 Covered Releases
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {constituents.map(c => (
                        <span key={c.id} className="text-[10px] bg-zinc-900/80 border border-zinc-800 text-zinc-300 px-2 py-0.5 rounded-md">
                          ✓ {c.title.split('(')[0].trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Render Individual completed items */}
            {consolidatedCompletedList.map((anime) => (
              <div 
                key={anime.id}
                className="group relative bg-cyber-gray border border-zinc-800/80 rounded-2xl p-5 flex flex-col justify-between space-y-4 glow-purple-hover transition-all duration-300 glass-panel-purple"
              >
                {/* Header info */}
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[9px] bg-primary-purple/15 border border-primary-purple/30 text-primary-purple-hover px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      {anime.genres[0]}
                    </span>
                    <h3 className="font-extrabold text-white text-xl tracking-wide mt-2 glow-text-purple">
                      {anime.title}
                    </h3>
                  </div>
                  
                  {/* Rating value and delete button */}
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="bg-amber-500/10 border border-amber-500/40 text-amber-400 text-[10px] font-black tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5 uppercase shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      Score: {anime.rating}/10
                    </div>
                    {onDeleteAnime && (
                      <button
                        onClick={() => {
                          if (confirm(`Remove "${anime.title}" from completed collection?`)) {
                            onDeleteAnime(anime.id);
                          }
                        }}
                        className="p-1.5 bg-rose-950/30 border border-rose-900/40 hover:bg-rose-950 hover:border-rose-500 text-rose-400 rounded-lg transition-all cursor-pointer"
                        title="Remove Trophy"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Metadata details */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-400 font-semibold border-b border-zinc-900 pb-3 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary-purple" />
                    Completed: {anime.completionDate || 'Recent'}
                  </span>
                  <span className="flex items-center gap-1.5 justify-end">
                    <Clock className="w-3.5 h-3.5 text-neon-blue" />
                    Watched: {Math.round(anime.totalEps * anime.hoursPerEp)} Hours
                  </span>
                </div>

                {/* Favorite Moments Quote */}
                {anime.favoriteMoments && (
                  <div className="space-y-1">
                    <p className="text-[9px] text-primary-purple-hover uppercase font-bold tracking-widest flex items-center gap-1">
                      <Heart className="w-3 h-3 fill-current" />
                      Favorite Moment
                    </p>
                    <p className="text-xs text-gray-300 italic bg-primary-purple/5 border-l-2 border-primary-purple p-2.5 rounded-r-lg">
                      "{anime.favoriteMoments}"
                    </p>
                  </div>
                )}

                {/* Review */}
                {anime.reviews && (
                  <div className="space-y-1">
                    <p className="text-[9px] text-cyan-400 uppercase font-bold tracking-widest flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      Review Summary
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                      {anime.reviews}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 2. PROGRESSION ACHIEVEMENTS */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-4 rounded bg-primary-purple"></span>
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            Unlocked Achievements ({achievements.filter(ac => ac.unlockedAt).length} / {achievements.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((ach) => {
            const isUnlocked = !!ach.unlockedAt;
            return (
              <div 
                key={ach.id}
                className={`relative rounded-2xl border p-4 flex gap-4 transition-all duration-300 ${
                  isUnlocked 
                    ? 'bg-gradient-to-r from-zinc-950 to-indigo-950/20 border-primary-purple/30 glow-purple-hover' 
                    : 'bg-zinc-950/30 border-zinc-900 opacity-60'
                }`}
              >
                {/* Emoji / Icon Container */}
                <div className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center text-2xl border ${
                  isUnlocked 
                    ? 'bg-primary-purple/10 border-primary-purple/40 text-primary-purple' 
                    : 'bg-zinc-900 border-zinc-800 text-gray-500'
                }`}>
                  {isUnlocked ? ach.icon : <Lock className="w-5 h-5" />}
                </div>

                <div className="min-w-0 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className={`text-xs font-bold tracking-wide ${isUnlocked ? 'text-white' : 'text-gray-500'}`}>
                      {ach.title}
                    </h4>
                    <p className="text-[10px] text-gray-500 mt-1 leading-snug">
                      {ach.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center text-[9px] mt-2">
                    <span className={`font-semibold ${isUnlocked ? 'text-neon-blue' : 'text-gray-600'}`}>
                      +{ach.xpValue} XP
                    </span>
                    {isUnlocked && (
                      <span className="text-gray-500">
                        {ach.unlockedAt}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
