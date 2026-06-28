import React from 'react';
import { 
  Terminal, 
  Target, 
  Trophy, 
  BarChart3, 
  Skull,
  User,
  Zap,
  Flame,
  Award,
  Clock
} from 'lucide-react';
import { UserProfile } from '../types/anime';
import { getNextLevelXp, getPrevLevelXp } from '../data/initialData';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  profile: UserProfile;
}

export default function Sidebar({ activeTab, setActiveTab, profile }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Command Center', icon: Terminal, desc: 'Anime trackers & Kanban' },
    { id: 'focus', label: 'Absolute Focus', icon: Target, desc: 'Zero-distraction watch mode', badge: 'FOCUS' },
    { id: 'stats', label: 'Wrapped Stats', icon: BarChart3, desc: 'Visual watch trends & analytics' },
    { id: 'trophy', label: 'Trophy Room', icon: Trophy, desc: 'Completed collection & honors' },
    { id: 'graveyard', label: 'Anime Graveyard', icon: Skull, desc: 'Revive abandoned series', countKey: 'graveyard' },
  ];

  const nextLevelXp = getNextLevelXp(profile.level);
  const prevLevelXp = getPrevLevelXp(profile.level);
  const xpRange = nextLevelXp - prevLevelXp;
  const xpCurrent = profile.xp - prevLevelXp;
  const xpPercent = Math.min(100, Math.max(0, Math.round((xpCurrent / xpRange) * 100)));

  return (
    <aside className="w-full lg:w-72 bg-cyber-gray border-b lg:border-b-0 lg:border-r border-[rgba(139,92,246,0.15)] flex flex-col lg:h-screen sticky top-0 z-40 glass-panel">
      {/* Brand Header */}
      <div className="p-6 border-b border-[rgba(139,92,246,0.15)] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-purple to-neon-blue flex items-center justify-center glow-purple">
            <Zap className="w-4 h-4 text-white animate-pulse" />
          </div>
          <div>
            <h1 className="font-bold text-xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-purple-400">
              ANI<span className="text-neon-blue font-black">FOCUS</span>
            </h1>
            <p className="text-[9px] uppercase tracking-widest text-primary-purple font-semibold">
              COMPLETION PROTOCOL
            </p>
          </div>
        </div>
        <div className="lg:hidden flex items-center gap-2">
          <div className="flex items-center gap-1 bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded text-amber-400 text-xs">
            <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-pulse" />
            <span className="font-bold">{profile.streak}d</span>
          </div>
        </div>
      </div>

      {/* User Dashboard Profile Section */}
      <div className="p-6 border-b border-[rgba(139,92,246,0.1)] bg-gradient-to-b from-transparent to-[rgba(139,92,246,0.02)]">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full border-2 border-primary-purple flex items-center justify-center bg-zinc-900 overflow-hidden">
              <User className="w-6 h-6 text-gray-400" />
            </div>
            <span className="absolute -bottom-1.5 -right-1.5 px-1.5 py-0.5 rounded-full bg-gradient-to-r from-orange-600 to-rose-500 text-[9px] font-black flex items-center gap-0.5 text-white border border-zinc-950 shadow-md">
              🔥{profile.streak}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <h2 className="font-semibold text-gray-200 text-sm truncate">{profile.username}</h2>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-primary-purple" />
              <p className="text-xs text-primary-purple-hover font-medium truncate">{profile.level}</p>
            </div>
          </div>
        </div>

        {/* Level XP Bar */}
        <div>
          <div className="flex justify-between items-center text-[10px] mb-1.5">
            <span className="text-gray-400">XP Progress</span>
            <span className="text-neon-blue font-bold">{profile.xp} / {nextLevelXp} XP</span>
          </div>
          <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/80 p-[1px]">
            <div 
              className="h-full bg-gradient-to-r from-primary-purple via-indigo-500 to-neon-blue rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]"
              style={{ width: `${xpPercent}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center text-[9px] text-gray-500 mt-1">
            <span>{prevLevelXp} XP</span>
            <span>{xpPercent}% Completed</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Menu */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 group relative text-left ${
                isActive 
                  ? 'bg-gradient-to-r from-primary-purple/15 to-transparent text-white border-l-4 border-primary-purple' 
                  : 'text-gray-400 hover:text-gray-200 hover:bg-zinc-900/60 border-l-4 border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-primary-purple glow-text-purple' : 'text-gray-500 group-hover:text-gray-300'}`} />
                <div>
                  <div className="text-sm font-semibold tracking-wide flex items-center gap-1.5">
                    {item.label}
                    {item.badge && (
                      <span className="text-[9px] bg-neon-blue/10 border border-neon-blue/30 text-neon-blue px-1.5 py-0.5 rounded font-black tracking-widest uppercase animate-pulse">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-gray-500 font-medium group-hover:text-gray-400 transition-colors">
                    {item.desc}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Quick stats footer */}
      <div className="p-4 border-t border-[rgba(139,92,246,0.1)] bg-zinc-950/60 grid grid-cols-3 gap-2 text-center text-[10px] font-semibold text-gray-400">
        <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-900/50 border border-zinc-800/40">
          <Flame className="w-4 h-4 text-orange-500 mb-1" />
          <span className="text-white text-xs">{profile.streak}d</span>
          <span>Streak</span>
        </div>
        <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-900/50 border border-zinc-800/40">
          <Trophy className="w-4 h-4 text-amber-400 mb-1" />
          <span className="text-white text-xs">{profile.completedCount}</span>
          <span>Finished</span>
        </div>
        <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-900/50 border border-zinc-800/40">
          <Clock className="w-4 h-4 text-neon-blue mb-1" />
          <span className="text-white text-xs">{profile.totalHours}h</span>
          <span>Watched</span>
        </div>
      </div>
    </aside>
  );
}
