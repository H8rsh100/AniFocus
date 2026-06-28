import React, { useState, useEffect } from 'react';
import { Target, CheckCircle2, Volume2, VolumeX, Sparkles, Flame, Clock } from 'lucide-react';
import { AnimeItem } from '../types/anime';

interface FocusModeProps {
  animeList: AnimeItem[];
  activeFocusId: string | null;
  setActiveFocusId: (id: string | null) => void;
  onUpdateEpisode: (id: string, newEp: number) => void;
  onUpdateStatus: (id: string, newStatus: AnimeItem['status']) => void;
}

export default function FocusMode({
  animeList,
  activeFocusId,
  setActiveFocusId,
  onUpdateEpisode,
  onUpdateStatus
}: FocusModeProps) {
  const [isPlayingVisualizer, setIsPlayingVisualizer] = useState(false);
  const [activeAnimeId, setActiveAnimeId] = useState<string>(activeFocusId || '');

  const watchingAnimeList = animeList.filter(a => a.status === 'watching');

  // Sync state if prop changes
  useEffect(() => {
    if (activeFocusId) {
      setActiveAnimeId(activeFocusId);
    } else if (watchingAnimeList.length > 0 && !activeAnimeId) {
      setActiveAnimeId(watchingAnimeList[0].id);
    }
  }, [activeFocusId, watchingAnimeList, activeAnimeId]);

  const activeAnime = animeList.find(a => a.id === activeAnimeId);

  // If no anime is selected, show selector screen
  if (!activeAnime) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-6 max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full bg-primary-purple/10 border border-primary-purple/30 flex items-center justify-center glow-purple">
          <Target className="w-8 h-8 text-primary-purple animate-pulse" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-white tracking-wide">Enter the Focus Chamber</h2>
          <p className="text-gray-400 text-sm">
            Focus Mode temporarily locks your session onto a single anime series, hiding distractions, recommendations, and other lists to reduce decision fatigue.
          </p>
        </div>

        {watchingAnimeList.length === 0 ? (
          <div className="w-full bg-zinc-900/40 border border-zinc-800 p-4 rounded-xl text-gray-500 text-xs font-semibold">
            You don't have any active anime in your "Watching List" to focus on. Go to the Command Center and log an episode or revive a series!
          </div>
        ) : (
          <div className="w-full space-y-3">
            <label className="block text-left text-xs font-bold text-gray-400 uppercase tracking-widest">
              Select Your Target Mission
            </label>
            <select
              value={activeAnimeId}
              onChange={(e) => setActiveAnimeId(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-sm text-white focus:border-primary-purple outline-none"
            >
              <option value="" disabled>-- Choose active mission --</option>
              {watchingAnimeList.map((a) => (
                <option key={a.id} value={a.id}>{a.title} (Ep {a.currentEp}/{a.totalEps})</option>
              ))}
            </select>

            <button
              onClick={() => {
                if (activeAnimeId) {
                  setActiveFocusId(activeAnimeId);
                }
              }}
              disabled={!activeAnimeId}
              className="w-full py-3.5 bg-gradient-to-r from-primary-purple to-indigo-600 text-white font-extrabold rounded-xl text-sm shadow-[0_4px_15px_rgba(139,92,246,0.25)] hover:scale-102 active:scale-98 transition-all disabled:opacity-50"
            >
              Lock in Focus Target
            </button>
          </div>
        )}
      </div>
    );
  }

  // Calculate stats
  const progressPercent = Math.round((activeAnime.currentEp / activeAnime.totalEps) * 100);
  const remainingEpisodes = activeAnime.totalEps - activeAnime.currentEp;
  
  // Calculate remaining hours & minutes
  const totalMinutesRemaining = Math.round(remainingEpisodes * activeAnime.hoursPerEp * 60);
  const remainingHours = Math.floor(totalMinutesRemaining / 60);
  const remainingMins = totalMinutesRemaining % 60;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Back to normal dashboard button */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setActiveFocusId(null)}
          className="text-xs text-gray-500 hover:text-white flex items-center gap-1 font-bold uppercase tracking-wider transition-colors cursor-pointer"
        >
          ◀ Exit Focus Mode
        </button>
        <span className="text-[10px] bg-red-500/10 border border-red-500/30 text-red-400 font-black tracking-widest px-2.5 py-0.5 rounded-full animate-pulse">
          TARGET SYSTEM LOCKED
        </span>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-[rgba(139,92,246,0.3)] bg-gradient-to-b from-zinc-950 via-zinc-950/70 to-cyber-black p-8 md:p-12 text-center flex flex-col items-center justify-center space-y-8 glow-purple-hover glass-panel-purple">
        {/* Neon focus glow background ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-purple/5 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
        
        {/* Header Mission Title */}
        <div className="space-y-2 relative z-10">
          <div className="flex justify-center items-center gap-1.5 text-xs text-primary-purple-hover font-bold uppercase tracking-widest">
            <Target className="w-4 h-4 text-primary-purple" />
            Current Priority Mission
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-wide glow-text-purple">
            FINISH: {activeAnime.title}
          </h2>
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-1">
            Episode {activeAnime.currentEp} / {activeAnime.totalEps} logged
          </p>
        </div>

        {/* Circular Progress Gauge */}
        <div className="relative w-64 h-64 flex items-center justify-center z-10">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Outer track */}
            <circle 
              cx="50" cy="50" r="42" 
              fill="transparent" 
              stroke="#0f0f11" 
              strokeWidth="5" 
            />
            {/* Main Progress Ring */}
            <circle 
              cx="50" cy="50" r="42" 
              fill="transparent" 
              stroke="url(#focusGlowGrad)" 
              strokeWidth="5.5" 
              strokeDasharray={263.8}
              strokeDashoffset={263.8 - (263.8 * progressPercent) / 100}
              strokeLinecap="round"
              className="transition-all duration-700 ease-out"
            />
            <defs>
              <linearGradient id="focusGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-black text-white tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              {progressPercent}%
            </span>
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-black mt-1">
              Complete
            </span>
          </div>
        </div>

        {/* Focus Stats Details */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-xl relative z-10">
          <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-4 flex flex-col items-center justify-center">
            <Clock className="w-5 h-5 text-neon-blue mb-1" />
            <span className="text-white font-extrabold text-sm">
              {remainingHours > 0 ? `${remainingHours}h ${remainingMins}m` : `${remainingMins}m`}
            </span>
            <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Est. Time Left</span>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-4 flex flex-col items-center justify-center">
            <Flame className="w-5 h-5 text-orange-500 mb-1" />
            <span className="text-white font-extrabold text-sm">{remainingEpisodes}</span>
            <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Episodes Left</span>
          </div>

          <div className="col-span-2 md:col-span-1 bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-4 flex flex-col items-center justify-center">
            <Sparkles className="w-5 h-5 text-emerald-400 mb-1" />
            <span className="text-white font-extrabold text-sm">+{remainingEpisodes * 10} XP</span>
            <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Completion Reward</span>
          </div>
        </div>

        {/* Motivational nudge */}
        {activeAnime.motivationNudge && (
          <div className="max-w-md bg-primary-purple/5 border border-primary-purple/20 p-4 rounded-xl text-xs text-gray-300 relative z-10 leading-relaxed">
            <span className="font-extrabold text-primary-purple-hover block mb-1 uppercase tracking-wider">COMMAND HUD NUDGE</span>
            "{activeAnime.motivationNudge}"
          </div>
        )}

        {/* Quick Log CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md relative z-10">
          <button
            onClick={() => onUpdateEpisode(activeAnime.id, activeAnime.currentEp + 1)}
            disabled={activeAnime.currentEp >= activeAnime.totalEps}
            className="flex-1 py-3.5 bg-gradient-to-r from-primary-purple to-indigo-600 text-white font-bold text-sm rounded-xl shadow-lg hover:scale-102 active:scale-98 transition-all disabled:opacity-50 cursor-pointer"
          >
            Log Episode {activeAnime.currentEp + 1}
          </button>
          
          <button
            onClick={() => {
              onUpdateEpisode(activeAnime.id, activeAnime.totalEps);
              onUpdateStatus(activeAnime.id, 'completed');
            }}
            className="flex-1 py-3.5 bg-emerald-950/40 border border-emerald-800/40 hover:bg-emerald-950/80 hover:border-emerald-500 text-emerald-400 font-bold text-sm rounded-xl transition-all cursor-pointer"
          >
            Mark Series Completed
          </button>
        </div>

        {/* Aesthetic Ambient Audio/Visualizer Station */}
        <div className="w-full max-w-sm bg-zinc-950 border border-zinc-900 rounded-2xl p-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlayingVisualizer(!isPlayingVisualizer)}
              className={`p-2.5 rounded-full border transition-all ${
                isPlayingVisualizer 
                  ? 'bg-primary-purple/10 border-primary-purple/40 text-primary-purple-hover' 
                  : 'bg-zinc-900 border-zinc-800 text-gray-500 hover:text-white'
              }`}
            >
              {isPlayingVisualizer ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <div className="text-left">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Soundtrack</p>
              <p className="text-xs text-white font-bold tracking-wide">
                {isPlayingVisualizer ? 'Cyber-Lofi Focus Beats (Active)' : 'Audio visualizer (Muted)'}
              </p>
            </div>
          </div>

          {/* Bobbing CSS music bars visualizer simulation */}
          <div className="flex items-end gap-[3px] h-6 w-16">
            {[8, 14, 18, 11, 20, 15, 9].map((val, idx) => (
              <div
                key={idx}
                className="w-1 bg-gradient-to-t from-primary-purple to-neon-blue rounded-t transition-all duration-300"
                style={{
                  height: isPlayingVisualizer ? `${Math.floor(Math.random() * 20) + 4}px` : '3px',
                  transitionDelay: `${idx * 40}ms`,
                  animationName: isPlayingVisualizer ? 'bounceBar' : 'none',
                  animationDuration: '1.2s',
                  animationTimingFunction: 'ease-in-out',
                  animationIterationCount: 'infinite',
                  animationDirection: 'alternate',
                  animationDelay: `${idx * 150}ms`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bounce keyframe animation inject via custom style tag for standalone simplicity */}
      <style>{`
        @keyframes bounceBar {
          0% { height: 3px; }
          100% { height: 22px; }
        }
      `}</style>
    </div>
  );
}
