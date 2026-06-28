import React, { useState } from 'react';
import { X, Play, Sparkles, CheckCircle2, RotateCcw, AlertTriangle } from 'lucide-react';
import { AnimeItem } from '../types/anime';

interface AnimeDetailModalProps {
  anime: AnimeItem;
  onClose: () => void;
  onUpdateEpisode: (id: string, newEp: number) => void;
  onUpdateStatus: (id: string, newStatus: AnimeItem['status']) => void;
  onUpdateDetails: (id: string, updates: Partial<AnimeItem>) => void;
  onStartFocus: (id: string) => void;
}

export default function AnimeDetailModal({
  anime,
  onClose,
  onUpdateEpisode,
  onUpdateStatus,
  onUpdateDetails,
  onStartFocus
}: AnimeDetailModalProps) {
  const [currentEp, setCurrentEp] = useState(anime.currentEp);
  const [rating, setRating] = useState(anime.rating || 8);
  const [reviews, setReviews] = useState(anime.reviews || '');
  const [favoriteMoments, setFavoriteMoments] = useState(anime.favoriteMoments || '');
  const [activeTab, setActiveTab] = useState<'info' | 'ai' | 'notes'>('info');

  const progressPercent = Math.round((currentEp / anime.totalEps) * 100);

  const handleSaveNotes = () => {
    onUpdateDetails(anime.id, {
      rating,
      reviews,
      favoriteMoments
    });
    alert('Notes and review saved successfully!');
  };

  const handleApplyEpisodeUpdate = () => {
    onUpdateEpisode(anime.id, currentEp);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl rounded-2xl border border-[rgba(139,92,246,0.25)] overflow-hidden shadow-2xl glass-panel-purple max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sleek Gradient Banner instead of Cover Art Image */}
        <div className="relative bg-gradient-to-r from-zinc-950 via-primary-purple/10 to-neon-blue/5 p-6 md:p-8 border-b border-[rgba(139,92,246,0.15)] shrink-0">
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 border border-zinc-800 hover:bg-zinc-950 text-gray-300 hover:text-white transition-all z-10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-3">
              {anime.genres.map((g) => (
                <span key={g} className="text-[9px] bg-primary-purple/15 border border-primary-purple/35 text-primary-purple-hover px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  {g}
                </span>
              ))}
              <span className={`text-[9px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider border ${
                anime.status === 'watching' ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' :
                anime.status === 'planning' ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' :
                anime.status === 'completed' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' :
                'bg-rose-500/10 border-rose-500/30 text-rose-400'
              }`}>
                {anime.status}
              </span>
            </div>
            <h2 className="text-2xl md:text-3.5xl font-black text-white mb-2 tracking-wide glow-text-purple">
              {anime.title}
            </h2>
            <p className="text-gray-400 text-xs md:text-sm line-clamp-2 leading-relaxed">
              {anime.synopsis || 'No synopsis added yet.'}
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[rgba(139,92,246,0.15)] bg-zinc-950/60 shrink-0">
          {(['info', 'ai', 'notes'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3.5 text-xs font-bold uppercase tracking-widest border-b-2 transition-all cursor-pointer ${
                activeTab === tab 
                  ? 'border-primary-purple text-primary-purple-hover bg-primary-purple/5' 
                  : 'border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab === 'info' && 'General Info'}
              {tab === 'ai' && 'AI Insights'}
              {tab === 'notes' && 'Reviews & Notes'}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 bg-cyber-black/95">
          {activeTab === 'info' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Progress and status controls */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Watch Progress</h3>
                  <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-5 space-y-4">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-gray-400">Current Episode</span>
                      <span className="text-white bg-zinc-800 px-3 py-1 rounded-full">{currentEp} / {anime.totalEps}</span>
                    </div>
                    
                    <input 
                      type="range" 
                      min="0" 
                      max={anime.totalEps} 
                      value={currentEp} 
                      onChange={(e) => setCurrentEp(parseInt(e.target.value))}
                      className="w-full accent-primary-purple"
                    />

                    <div className="flex justify-between items-center text-[10px] text-gray-500">
                      <span>Start (Ep 0)</span>
                      <span>{progressPercent}% Complete</span>
                      <span>End (Ep {anime.totalEps})</span>
                    </div>

                    <div className="flex gap-2 justify-end">
                      <button 
                        onClick={handleApplyEpisodeUpdate}
                        disabled={currentEp === anime.currentEp}
                        className="px-4 py-2 bg-gradient-to-r from-primary-purple to-indigo-600 rounded-lg text-white font-bold text-xs hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all cursor-pointer shadow-lg"
                      >
                        Apply Progress
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Synopsis</h3>
                  <p className="text-xs text-gray-300 leading-relaxed bg-zinc-900/30 p-4 rounded-xl border border-zinc-900/80">
                    {anime.synopsis || 'No synopsis detailed yet.'}
                  </p>
                </div>
              </div>

              {/* Sidebar Quick Action Panel */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Quick Actions</h3>
                  <div className="space-y-2">
                    {anime.status !== 'completed' && (
                      <button 
                        onClick={() => { onStartFocus(anime.id); onClose(); }}
                        className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-primary-purple to-neon-blue rounded-xl text-white font-bold text-xs glow-purple glow-purple-hover hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                      >
                        <Play className="w-4 h-4 fill-white" />
                        Enter Focus Mode
                      </button>
                    )}
                    
                    <div className="grid grid-cols-2 gap-2">
                      <button 
                        onClick={() => onUpdateStatus(anime.id, 'watching')}
                        className={`py-2 px-3 text-[10px] font-bold rounded-lg border transition-all cursor-pointer ${
                          anime.status === 'watching' 
                            ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' 
                            : 'bg-zinc-900 border-zinc-800 text-gray-400 hover:text-white'
                        }`}
                      >
                        Watching
                      </button>
                      <button 
                        onClick={() => onUpdateStatus(anime.id, 'planning')}
                        className={`py-2 px-3 text-[10px] font-bold rounded-lg border transition-all cursor-pointer ${
                          anime.status === 'planning' 
                            ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' 
                            : 'bg-zinc-900 border-zinc-800 text-gray-400 hover:text-white'
                        }`}
                      >
                        Plan To Watch
                      </button>
                      <button 
                        onClick={() => {
                          onUpdateEpisode(anime.id, anime.totalEps);
                          onUpdateStatus(anime.id, 'completed');
                        }}
                        className={`py-2 px-3 text-[10px] font-bold rounded-lg border transition-all cursor-pointer ${
                          anime.status === 'completed' 
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                            : 'bg-zinc-900 border-zinc-800 text-gray-400 hover:text-white'
                        }`}
                      >
                        Complete
                      </button>
                      <button 
                        onClick={() => onUpdateStatus(anime.id, 'dropped')}
                        className={`py-2 px-3 text-[10px] font-bold rounded-lg border transition-all cursor-pointer ${
                          anime.status === 'dropped' 
                            ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' 
                            : 'bg-zinc-900 border-zinc-800 text-gray-400 hover:text-white'
                        }`}
                      >
                        Drop Series
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Total Duration:</span>
                    <span className="text-white font-bold">{Math.round(anime.totalEps * anime.hoursPerEp)} Hours</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Remaining time:</span>
                    <span className="text-neon-blue font-bold">
                      {Math.max(0, Math.round((anime.totalEps - currentEp) * anime.hoursPerEp * 10) / 10)} Hours
                    </span>
                  </div>
                  {anime.lastWatchedDate && (
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Last Watched:</span>
                      <span className="text-gray-300 font-semibold">{anime.lastWatchedDate}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-primary-purple/10 to-neon-blue/10 border border-primary-purple/30 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
                {/* Completion Predictor Gauge */}
                <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-95" viewBox="0 0 100 100">
                    <circle 
                      cx="50" cy="50" r="42" 
                      fill="transparent" 
                      stroke="#18181b" 
                      strokeWidth="8" 
                    />
                    <circle 
                      cx="50" cy="50" r="42" 
                      fill="transparent" 
                      stroke="url(#aiGlowGrad)" 
                      strokeWidth="8" 
                      strokeDasharray={263.8}
                      strokeDashoffset={263.8 - (263.8 * anime.probabilityOfCompleting) / 100}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="aiGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-white glow-text-blue">{anime.probabilityOfCompleting}%</span>
                    <span className="text-[8px] text-gray-400 uppercase tracking-widest font-black">Score</span>
                  </div>
                </div>

                <div className="space-y-2 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-neon-blue text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-neon-blue animate-pulse" />
                    AI Completion Predictor
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {anime.probabilityOfCompleting >= 80 ? 'High Likelihood of Completion' :
                     anime.probabilityOfCompleting >= 50 ? 'Moderate Likelihood of Completion' :
                     'Risk of Dropping (High Fragmentation)'}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Based on your genre completion speed, rating patterns, low action fragmentation, and consistent streak history, our model predicts an <span className="text-neon-blue font-bold">{anime.probabilityOfCompleting}%</span> chance that you will finish {anime.title}.
                  </p>
                </div>
              </div>

              {/* Motivational Nudges */}
              {anime.motivationNudge && (
                <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Motivational Nudge
                  </div>
                  <p className="text-xs text-gray-300">
                    "{anime.motivationNudge}"
                  </p>
                </div>
              )}

              <div className="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-5 text-center text-[10px] text-gray-500">
                AI completion predictor recalculates every time you log progress, rating updates, or change category priorities. Maintain your current daily streak to boost all completion probabilities!
              </div>
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 space-y-5">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Personal Rating (1 - 10)
                  </label>
                  <div className="flex items-center gap-3">
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      value={rating} 
                      onChange={(e) => setRating(parseInt(e.target.value))}
                      className="flex-1 accent-neon-blue cursor-pointer"
                    />
                    <span className="w-12 h-9 rounded-lg bg-zinc-950 border border-zinc-800 text-neon-blue font-black flex items-center justify-center">
                      {rating}/10
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Favorite Moments / Quotes
                  </label>
                  <textarea 
                    value={favoriteMoments}
                    onChange={(e) => setFavoriteMoments(e.target.value)}
                    rows={2}
                    placeholder="e.g. The final scene was legendary."
                    className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl p-3.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-primary-purple transition-all"
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Detailed Review & Thoughts
                  </label>
                  <textarea 
                    value={reviews}
                    onChange={(e) => setReviews(e.target.value)}
                    rows={4}
                    placeholder="Write a few sentences about what makes this anime great (or why it started lagging)..."
                    className="w-full bg-zinc-950 border border-zinc-800/80 rounded-xl p-3.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-primary-purple transition-all"
                  ></textarea>
                </div>

                <div className="flex justify-end pt-2">
                  <button 
                    onClick={handleSaveNotes}
                    className="px-6 py-2.5 bg-gradient-to-r from-primary-purple to-indigo-600 text-white font-bold text-xs rounded-xl hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg"
                  >
                    Save Notes & Review
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
