import React from 'react';
import { 
  Play, 
  Sparkles, 
  Terminal, 
  Target, 
  Trophy, 
  Skull, 
  Flame, 
  ArrowRight,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

interface LandingHeroProps {
  onStart: () => void;
}

export default function LandingHero({ onStart }: LandingHeroProps) {
  return (
    <div className="min-h-screen bg-cyber-black text-white relative overflow-hidden flex flex-col justify-between font-sans scanline-sweep">
      
      {/* SCANLINES OVERLAY */}
      <div className="absolute inset-0 scanlines pointer-events-none opacity-30"></div>
      
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary-purple/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-neon-blue/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>

      {/* HEADER NAVBAR */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-purple to-neon-blue flex items-center justify-center glow-purple">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-wider">
              ANI<span className="text-neon-blue font-black">FOCUS</span>
            </h1>
            <p className="text-[8px] uppercase tracking-widest text-primary-purple font-semibold">
              COMPLETION PROTOCOL
            </p>
          </div>
        </div>
        
        <button 
          onClick={onStart}
          className="text-xs bg-zinc-950 border border-zinc-800 hover:border-primary-purple px-4 py-2 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1"
        >
          Console Login <ChevronRight className="w-3 h-3" />
        </button>
      </header>

      {/* MAIN HERO CONTENT */}
      <main className="w-full max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 flex-1">
        
        {/* LEFT TEXT CONTAINER */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-purple/10 border border-primary-purple/30 text-primary-purple-hover text-xs font-bold uppercase tracking-widest mx-auto lg:mx-0 glow-purple">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
            Anti-Attention Fragmentation
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.08] text-white">
            Stop Starting Anime. <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-purple via-indigo-400 to-neon-blue font-black glow-text-purple">
              Start Finishing Them.
            </span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed font-semibold">
            Track your journey, maintain momentum, and complete more anime than ever before. Minimize decision paralysis with gamified progression and absolute focus modes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button 
              onClick={onStart}
              className="px-8 py-4 bg-gradient-to-r from-primary-purple to-indigo-600 hover:scale-105 active:scale-95 transition-all text-white font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(139,92,246,0.4)] cursor-pointer glow-purple"
            >
              Start Tracking Now
              <ArrowRight className="w-4 h-4" />
            </button>
            <a 
              href="#features"
              className="px-8 py-4 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-gray-200 font-bold text-sm rounded-xl flex items-center justify-center gap-1 hover:bg-zinc-900 active:scale-98 transition-all"
            >
              Explore Protocol Features
            </a>
          </div>
        </div>

        {/* RIGHT DECORATIVE / FLOATING CARDS CONTAINER */}
        <div className="relative h-[480px] w-full max-w-md mx-auto hidden md:block">
          
          {/* Floating Card 1: Continue Watching Widget Mockup */}
          <div className="absolute top-4 left-4 w-76 bg-cyber-gray border border-primary-purple/30 rounded-2xl p-4 shadow-2xl glass-panel-purple animate-float z-20">
            <div className="flex gap-3">
              <div className="w-12 h-18 rounded bg-cover bg-center shrink-0 border border-zinc-800" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=200)' }}></div>
              <div className="min-w-0 flex-1">
                <p className="text-[8px] text-cyan-400 font-bold tracking-widest uppercase">Focus Active</p>
                <h4 className="font-extrabold text-white text-xs truncate">Vinland Saga</h4>
                <div className="w-full h-1 bg-zinc-950 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary-purple to-neon-blue rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="flex justify-between items-center text-[8px] text-gray-400 mt-1 font-semibold">
                  <span>Episode 18 / 24</span>
                  <span>75%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card 2: Streak Indicator Mockup */}
          <div className="absolute top-1/3 right-0 w-44 bg-zinc-950/90 border border-orange-500/25 rounded-2xl p-4 shadow-2xl glass-panel animate-float z-10" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                <Flame className="w-5 h-5 text-orange-500 fill-orange-500 animate-pulse" />
              </div>
              <div>
                <p className="text-[8px] text-gray-500 uppercase tracking-widest font-black">Daily Streak</p>
                <p className="text-sm font-extrabold text-white">🔥 5 Days Active</p>
              </div>
            </div>
          </div>

          {/* Floating Card 3: Completed Collection Badge Mockup */}
          <div className="absolute bottom-12 left-12 w-64 bg-cyber-gray border border-emerald-500/20 rounded-2xl p-4 shadow-2xl glass-panel animate-float z-20" style={{ animationDelay: '3s' }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Trophy className="w-4 h-4 fill-emerald-500/20" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-extrabold text-white text-[11px] truncate">Cyberpunk Edgerunners</h4>
                <div className="flex items-center justify-between text-[8px] text-gray-500 font-semibold mt-0.5">
                  <span>Score: 10/10</span>
                  <span className="text-emerald-400">✓ COMPLETED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card 4: Graveyard Mockup */}
          <div className="absolute bottom-28 -right-4 w-52 bg-cyber-gray border border-red-500/20 rounded-2xl p-4 shadow-2xl glass-panel opacity-80 animate-float z-10" style={{ animationDelay: '4.5s' }}>
            <div className="flex items-center gap-3">
              <Skull className="w-5 h-5 text-red-500" />
              <div className="min-w-0">
                <h4 className="font-bold text-gray-300 text-[10px] truncate">Death Note</h4>
                <p className="text-[8px] text-gray-500 font-semibold mt-0.5">Last active 8m ago</p>
              </div>
            </div>
          </div>

        </div>

      </main>

      {/* CORE FEATURES SECTION (FOR LANDING) */}
      <section id="features" className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-[rgba(139,92,246,0.1)] relative z-10 shrink-0">
        <div className="text-center space-y-2 mb-12">
          <p className="text-xs text-primary-purple font-bold uppercase tracking-widest">Tracking Redefined</p>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-wide">
            Designed for Completion, Not Endless Browsing
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-cyber-gray border border-zinc-900 rounded-2xl p-5 space-y-3 glass-panel">
            <div className="w-10 h-10 rounded-xl bg-primary-purple/10 border border-primary-purple/20 flex items-center justify-center text-primary-purple">
              <Terminal className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">Anime Command Center</h4>
            <p className="text-xs text-gray-500 leading-relaxed font-semibold">
              Manage your current watches, drop counts, and upcoming priority plans in a futuristic developer-dashboard shell.
            </p>
          </div>

          <div className="bg-cyber-gray border border-zinc-900 rounded-2xl p-5 space-y-3 glass-panel">
            <div className="w-10 h-10 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">Absolute Focus Mode</h4>
            <p className="text-xs text-gray-500 leading-relaxed font-semibold">
              Hides recommendations, watchlists, and options. Locks session into one series to eliminate anime-hopping fatigue.
            </p>
          </div>

          <div className="bg-cyber-gray border border-zinc-900 rounded-2xl p-5 space-y-3 glass-panel">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <Trophy className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">Gamified Leveling HUD</h4>
            <p className="text-xs text-gray-500 leading-relaxed font-semibold">
              Gain XP for completing episodes, writing reviews, maintaining login streaks, and rise from Rookie to Grandmaster Otaku.
            </p>
          </div>

          <div className="bg-cyber-gray border border-zinc-900 rounded-2xl p-5 space-y-3 glass-panel">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
              <Skull className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white text-sm">Anime Graveyard</h4>
            <p className="text-xs text-gray-500 leading-relaxed font-semibold">
              Resurrect dropped series with custom cyber animations, immediately restoring them back to your watchlists.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-[rgba(139,92,246,0.05)] py-6 text-center text-xs text-gray-600 relative z-10 shrink-0">
        <p>© 2026 AniFocus Completion System. Built for Harsh. Designed for momentum.</p>
      </footer>

    </div>
  );
}
