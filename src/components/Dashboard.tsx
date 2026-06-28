import React, { useState } from 'react';
import { 
  Play, 
  Plus, 
  Check, 
  Trash2, 
  Sparkles, 
  Flame, 
  Clock, 
  Terminal as TermIcon,
  Tag
} from 'lucide-react';
import { AnimeItem, KanbanCategory } from '../types/anime';

interface DashboardProps {
  animeList: AnimeItem[];
  onUpdateEpisode: (id: string, newEp: number) => void;
  onUpdateStatus: (id: string, newStatus: AnimeItem['status']) => void;
  onUpdateKanbanCategory: (id: string, newCat: KanbanCategory) => void;
  onStartFocus: (id: string) => void;
  onOpenDetail: (anime: AnimeItem) => void;
  activeFocusId?: string | null;
}

export default function Dashboard({
  animeList,
  onUpdateEpisode,
  onUpdateStatus,
  onUpdateKanbanCategory,
  onStartFocus,
  onOpenDetail,
  activeFocusId
}: DashboardProps) {
  const [draggedAnimeId, setDraggedAnimeId] = useState<string | null>(null);
  const [flashingCardId, setFlashingCardId] = useState<string | null>(null);

  const watchingList = animeList.filter(a => a.status === 'watching');
  const planningList = animeList.filter(a => a.status === 'planning');

  // Prioritize whichever anime was last active in Focus Mode (activeFocusId)
  let continueWatching = activeFocusId 
    ? watchingList.find(a => a.id === activeFocusId) || null 
    : null;

  // Fallback to latest watched or highest progress if no activeFocusId match
  if (!continueWatching && watchingList.length > 0) {
    continueWatching = watchingList.reduce((prev, current) => {
      if (prev.lastWatchedDate && current.lastWatchedDate) {
        return new Date(prev.lastWatchedDate) > new Date(current.lastWatchedDate) ? prev : current;
      }
      return (prev.currentEp / prev.totalEps) > (current.currentEp / current.totalEps) ? prev : current;
    });
  }

  const handleDragStart = (e: React.DragEvent, id: string) => {
    setDraggedAnimeId(id);
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, category: KanbanCategory) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain') || draggedAnimeId;
    if (id) {
      onUpdateKanbanCategory(id, category);
      setDraggedAnimeId(null);
    }
  };

  const handleEpClick = (id: string, nextEp: number) => {
    setFlashingCardId(id);
    onUpdateEpisode(id, nextEp);
    setTimeout(() => {
      setFlashingCardId(null);
    }, 600);
  };

  // Helper to map genres/titles to custom CSS aura classes from globals.css
  const getAuraClassForAnime = (genres: string[], title: string): string => {
    const titleLower = title.toLowerCase();
    
    // Movie check
    if (titleLower.includes('movie') || titleLower.includes('film') || genres.some(g => g.toLowerCase().includes('movie'))) {
      return 'aura-movie';
    }
    
    const genreSet = new Set(genres.map(g => g.toLowerCase()));
    
    // Cyberpunk/Sci-Fi check
    if (genreSet.has('cyberpunk') || genreSet.has('sci-fi') || titleLower.includes('cyber')) {
      return 'aura-cyberpunk';
    }
    // Mecha check
    if (genreSet.has('mecha') || genreSet.has('robot') || titleLower.includes('gundam')) {
      return 'aura-mecha';
    }
    // Sports check
    if (genreSet.has('sports') || titleLower.includes('blue lock') || titleLower.includes('haikyu')) {
      return 'aura-sports';
    }
    // Isekai check
    if (genreSet.has('isekai') || titleLower.includes('re:') || titleLower.includes('world') || titleLower.includes('slime')) {
      return 'aura-isekai';
    }
    // Psychological/Horror/Thriller check
    if (genreSet.has('psychological') || genreSet.has('horror') || genreSet.has('thriller') || titleLower.includes('death')) {
      return 'aura-psychological';
    }
    // Slice of life / Drama check
    if (genreSet.has('slice of life') || genreSet.has('romance') || genreSet.has('drama')) {
      return 'aura-slice';
    }
    // Fantasy/Adventure check
    if (genreSet.has('fantasy') || genreSet.has('magic') || genreSet.has('adventure')) {
      return 'aura-fantasy';
    }
    
    // Shonen default aura
    return 'aura-shonen';
  };

  const kanbanColumns: { id: KanbanCategory; title: string; color: string; bg: string; border: string }[] = [
    { id: 'high', title: '🔥 High Priority', color: 'text-orange-400', bg: 'bg-orange-500/5', border: 'border-orange-500/20' },
    { id: 'interested', title: '🎯 Interested', color: 'text-indigo-400', bg: 'bg-indigo-500/5', border: 'border-indigo-500/20' },
    { id: 'maybe', title: '⏳ Maybe Later', color: 'text-gray-400', bg: 'bg-zinc-800/10', border: 'border-zinc-800/60' },
  ];

  return (
    <div className="space-y-10">
      
      {/* 1. CONTINUE WATCHING WIDGET */}
      {continueWatching && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-4 rounded bg-primary-purple"></span>
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              Continue Watching
            </h2>
          </div>
          
          <div className={`relative group overflow-hidden rounded-2xl border bg-gradient-to-r from-zinc-950/80 via-zinc-900/40 to-transparent p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between transition-all duration-500 glass-panel ${getAuraClassForAnime(continueWatching.genres, continueWatching.title)}`}>
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-purple/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow"></div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center w-full md:w-auto flex-1">
              {/* Text Console Accent Icon Block */}
              <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-zinc-900/80 border border-primary-purple/35 flex items-center justify-center text-2xl shrink-0 cursor-pointer shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                onClick={() => onOpenDetail(continueWatching)}
              >
                📺
              </div>

              <div className="space-y-3 text-center md:text-left flex-1 w-full">
                <div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1.5">
                    <span className="text-[9px] bg-primary-purple/15 border border-primary-purple/30 text-primary-purple-hover px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
                      <Flame className="w-3 h-3 text-orange-500 fill-orange-500 animate-pulse" />
                      Active Mission Target
                    </span>
                    <span className="text-[9px] bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 px-2 py-0.5 rounded-full font-semibold">
                      AI Completion chance: {continueWatching.probabilityOfCompleting}%
                    </span>
                  </div>
                  <h3 
                    onClick={() => onOpenDetail(continueWatching)}
                    className="text-2xl md:text-3xl font-extrabold text-white tracking-wide cursor-pointer hover:text-primary-purple-hover transition-colors font-bebas"
                  >
                    {continueWatching.title}
                  </h3>
                </div>

                <div className="space-y-2 max-w-xl">
                  <div className="flex justify-between items-center text-xs text-gray-400 font-semibold font-mono">
                    <span>Episode {continueWatching.currentEp} of {continueWatching.totalEps}</span>
                    <span className="text-neon-blue">{Math.round((continueWatching.currentEp / continueWatching.totalEps) * 100)}% Complete</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-950 border border-zinc-800 rounded-full p-[1px]">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-purple via-indigo-500 to-neon-blue rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                      style={{ width: `${(continueWatching.currentEp / continueWatching.totalEps) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {continueWatching.motivationNudge && (
                  <p className="text-xs text-gray-400 italic bg-primary-purple/5 border-l-2 border-primary-purple p-2.5 rounded-r-lg max-w-xl">
                    "{continueWatching.motivationNudge}"
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2.5 w-full md:w-48 shrink-0 relative z-10">
              <button 
                onClick={() => onStartFocus(continueWatching.id)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-primary-purple to-indigo-600 rounded-xl text-white font-extrabold text-xs shadow-[0_4px_15px_rgba(139,92,246,0.3)] hover:scale-[1.03] active:scale-[0.97] transition-all cursor-pointer glow-purple font-mono"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                Resume Focus
              </button>
              <button 
                onClick={() => handleEpClick(continueWatching.id, continueWatching.currentEp + 1)}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl text-gray-200 font-bold text-xs hover:bg-zinc-800 active:scale-98 transition-all cursor-pointer font-mono"
              >
                <Plus className="w-3.5 h-3.5" />
                Log Episode {continueWatching.currentEp + 1}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 2. WATCHING GRID (TEXT-BASED BOARDS) */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-4 rounded bg-neon-blue"></span>
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              Active Watch List ({watchingList.length})
            </h2>
          </div>
          <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider font-mono">
            +10 XP / EPISODE LOGGED
          </span>
        </div>

        {watchingList.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-zinc-800 rounded-2xl text-gray-500 bg-zinc-950/20">
            No active watches. Create a new anime mission or revive a series to get started!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {watchingList.map((anime) => {
              const progress = Math.round((anime.currentEp / anime.totalEps) * 100);
              const isFlashing = flashingCardId === anime.id;
              const auraClass = getAuraClassForAnime(anime.genres, anime.title);
              
              return (
                <div 
                  key={anime.id}
                  className={`group relative bg-cyber-gray border border-zinc-800 rounded-xl p-5 flex flex-col justify-between space-y-4 hover:border-cyan-500/30 transition-all duration-300 glass-panel ${auraClass} ${
                    isFlashing ? 'border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.6)] scale-[1.02]' : ''
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                        {anime.genres.slice(0, 2).map((g) => (
                          <span key={g} className="text-[9px] bg-zinc-900 border border-zinc-800/80 text-gray-400 px-1.5 py-0.2 rounded font-semibold uppercase font-mono">
                            {g}
                          </span>
                        ))}
                      </div>
                      <span className="text-[10px] font-black text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded font-mono">
                        {progress}%
                      </span>
                    </div>

                    <h4 
                      onClick={() => onOpenDetail(anime)}
                      className="font-extrabold text-white text-base tracking-wide group-hover:text-cyan-400 transition-colors cursor-pointer line-clamp-1"
                    >
                      {anime.title}
                    </h4>
                    
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-semibold font-mono">
                      <TermIcon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>EP {anime.currentEp} / {anime.totalEps}</span>
                    </div>
                  </div>

                  {/* Progress Line */}
                  <div className="space-y-1.5">
                    <div className="w-full h-1.5 bg-zinc-950 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-blue to-indigo-600 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="flex gap-1.5 pt-1 font-mono">
                    <button 
                      onClick={() => handleEpClick(anime.id, anime.currentEp + 1)}
                      className="flex-1 flex items-center justify-center gap-1 py-2 bg-cyan-950/30 border border-cyan-900/40 hover:bg-cyan-950/80 hover:border-cyan-500 text-cyan-400 rounded-lg text-xs font-bold transition-all cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      +1 Ep
                    </button>
                    <button 
                      onClick={() => {
                        handleEpClick(anime.id, anime.totalEps);
                        onUpdateStatus(anime.id, 'completed');
                      }}
                      className="p-2 bg-emerald-950/40 border border-emerald-800/40 hover:bg-emerald-950 hover:border-emerald-500 text-emerald-400 rounded-lg text-xs font-bold transition-all cursor-pointer"
                      title="Mark Completed"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                    <button 
                      onClick={() => onUpdateStatus(anime.id, 'dropped')}
                      className="p-2 bg-rose-950/40 border border-rose-800/40 hover:bg-rose-950 hover:border-rose-500 text-rose-400 rounded-lg text-xs font-bold transition-all cursor-pointer"
                      title="Drop Series"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 3. KANBAN BOARD */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-4 rounded bg-primary-purple"></span>
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              Planning to Watch Kanban
            </h2>
          </div>
          <span className="text-[10px] text-gray-500 font-semibold tracking-wider flex items-center gap-1 uppercase font-mono">
            Drag & Drop Cards to Categorize
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {kanbanColumns.map((col) => {
            const colAnime = planningList.filter(a => a.kanbanCategory === col.id);
            return (
              <div 
                key={col.id}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, col.id)}
                className={`rounded-2xl border ${col.border} ${col.bg} p-4 space-y-4 min-h-[250px] flex flex-col transition-all duration-300`}
              >
                <div className="flex items-center justify-between pb-2 border-b border-zinc-800/50">
                  <h3 className={`font-extrabold text-sm uppercase tracking-wider ${col.color}`}>
                    {col.title}
                  </h3>
                  <span className="bg-zinc-900 border border-zinc-800 text-[10px] text-gray-400 font-bold px-2 py-0.5 rounded-full font-mono">
                    {colAnime.length}
                  </span>
                </div>

                <div className="space-y-3 flex-1 overflow-y-auto">
                  {colAnime.length === 0 ? (
                    <div className="h-full flex items-center justify-center text-center text-xs text-gray-600 border border-dashed border-zinc-800/40 rounded-xl py-12">
                      Drop anime here
                    </div>
                  ) : (
                    colAnime.map((anime) => (
                      <div 
                        key={anime.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, anime.id)}
                        className="bg-cyber-black border border-zinc-800 rounded-xl p-3.5 space-y-3 hover:border-primary-purple cursor-grab active:cursor-grabbing transition-all glow-purple-hover"
                      >
                        <div>
                          <h4 
                            onClick={() => onOpenDetail(anime)}
                            className="font-bold text-white text-sm hover:text-primary-purple-hover cursor-pointer transition-colors line-clamp-1"
                          >
                            {anime.title}
                          </h4>
                          <div className="flex flex-wrap gap-1 mt-1.5">
                            {anime.genres.slice(0, 2).map(g => (
                              <span key={g} className="text-[9px] bg-zinc-900 text-gray-500 px-1 py-0.2 rounded font-medium uppercase font-mono">
                                {g}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between items-center text-[10px] text-gray-400 bg-zinc-900/40 p-1.5 rounded border border-zinc-900 font-mono">
                          <span>Length: {anime.totalEps} Eps</span>
                          <span className="text-primary-purple-hover font-bold">AI Chance: {anime.probabilityOfCompleting}%</span>
                        </div>

                        {/* Action buttons inside card */}
                        <div className="flex gap-1.5 pt-1.5 border-t border-zinc-900 font-mono">
                          <button 
                            onClick={() => onUpdateStatus(anime.id, 'watching')}
                            className="flex-1 flex items-center justify-center gap-1 py-1.5 bg-primary-purple/15 border border-primary-purple/30 text-primary-purple-hover hover:bg-primary-purple/35 rounded text-[10px] font-bold transition-all cursor-pointer"
                          >
                            <Play className="w-2.5 h-2.5 fill-current" />
                            Start Watching
                          </button>
                          
                          <div className="flex gap-1">
                            {col.id !== 'high' && (
                              <button 
                                onClick={() => onUpdateKanbanCategory(anime.id, col.id === 'maybe' ? 'interested' : 'high')}
                                className="p-1 px-2 bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-white rounded text-[9px]"
                                title="Move Priority Up"
                              >
                                ◀
                              </button>
                            )}
                            {col.id !== 'maybe' && (
                              <button 
                                onClick={() => onUpdateKanbanCategory(anime.id, col.id === 'high' ? 'interested' : 'maybe')}
                                className="p-1 px-2 bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-white rounded text-[9px]"
                                title="Move Priority Down"
                              >
                                ▶
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
