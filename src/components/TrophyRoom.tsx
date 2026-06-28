import React from 'react';
import { Award, Calendar, Heart, MessageSquare, Star, Clock, Lock } from 'lucide-react';
import { AnimeItem, Achievement } from '../types/anime';

interface TrophyRoomProps {
  animeList: AnimeItem[];
  achievements: Achievement[];
  profile: any;
}

export default function TrophyRoom({ animeList, achievements, profile }: TrophyRoomProps) {
  const completedList = animeList.filter(a => a.status === 'completed');

  return (
    <div className="space-y-10">
      
      {/* 1. COMPLETION HONORS (TROPHY ROOM SHELF) */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-4 rounded bg-amber-400"></span>
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            Completed Collection ({completedList.length})
          </h2>
        </div>

        {completedList.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-zinc-800 rounded-3xl text-gray-500 bg-zinc-950/20">
            No completed trophies yet. Finish an active mission in Focus Mode to unlock your first trophy!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {completedList.map((anime) => (
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
                  
                  {/* Rating value */}
                  <div className="bg-amber-500/10 border border-amber-500/40 text-amber-400 text-[10px] font-black tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5 uppercase shadow-lg shrink-0">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    Score: {anime.rating}/10
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
