"use client";

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Flame, 
  Award, 
  Plus, 
  Sparkles,
  Zap,
  Volume2,
  Lock,
  ChevronRight,
  TrendingUp,
  X,
  Search,
  BookOpen
} from 'lucide-react';
import { AnimeItem, UserProfile, Achievement, KanbanCategory } from '../types/anime';
import { 
  INITIAL_ANIME, 
  INITIAL_PROFILE, 
  INITIAL_ACHIEVEMENTS, 
  getLevelFromXp, 
  getNextLevelXp, 
  getPrevLevelXp 
} from '../data/initialData';
import { ANIME_DATABASE, DatabaseAnime } from '../data/animeDatabase';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import FocusMode from '../components/FocusMode';
import TrophyRoom from '../components/TrophyRoom';
import Statistics from '../components/Statistics';
import Graveyard from '../components/Graveyard';
import AnimeDetailModal from '../components/AnimeDetailModal';

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [animeList, setAnimeList] = useState<AnimeItem[]>([]);
  const [profile, setProfile] = useState<UserProfile>(INITIAL_PROFILE);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [activeFocusId, setActiveFocusId] = useState<string | null>(null);
  const [selectedDetailAnime, setSelectedDetailAnime] = useState<AnimeItem | null>(null);
  
  // Modals state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [levelUpModal, setLevelUpModal] = useState<{ oldLevel: string; newLevel: string } | null>(null);

  // Form State for Add Anime
  const [searchQuery, setSearchQuery] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [formTotalEps, setFormTotalEps] = useState(12);
  const [formStatus, setFormStatus] = useState<AnimeItem['status']>('watching');
  const [formKanbanCat, setFormKanbanCat] = useState<KanbanCategory>('interested');
  const [formGenres, setFormGenres] = useState('Action');
  const [formSynopsis, setFormSynopsis] = useState('');

  // Mount check for Next.js hydration safety
  useEffect(() => {
    setHasMounted(true);
    
    // Clear out stale mock data from previous version if not reset yet
    const hasResetStale = localStorage.getItem('anifocus_reset_stale_v3');
    if (!hasResetStale) {
      localStorage.removeItem('anifocus_anime');
      localStorage.removeItem('anifocus_profile');
      localStorage.removeItem('anifocus_achievements');
      localStorage.removeItem('anifocus_focus_id');
      localStorage.setItem('anifocus_reset_stale_v3', 'true');
    }

    // Load from LocalStorage
    const storedAnime = localStorage.getItem('anifocus_anime');
    const storedProfile = localStorage.getItem('anifocus_profile');
    const storedAchievements = localStorage.getItem('anifocus_achievements');
    const storedFocus = localStorage.getItem('anifocus_focus_id');

    if (storedAnime) {
      setAnimeList(JSON.parse(storedAnime));
    } else {
      setAnimeList(INITIAL_ANIME);
    }

    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    } else {
      setProfile(INITIAL_PROFILE);
    }

    if (storedAchievements) {
      setAchievements(JSON.parse(storedAchievements));
    } else {
      setAchievements(INITIAL_ACHIEVEMENTS);
    }

    if (storedFocus) {
      setActiveFocusId(storedFocus);
    }
  }, []);

  // Save to LocalStorage helper
  const saveState = (updatedAnime: AnimeItem[], updatedProfile: UserProfile, updatedAchievements: Achievement[]) => {
    localStorage.setItem('anifocus_anime', JSON.stringify(updatedAnime));
    localStorage.setItem('anifocus_profile', JSON.stringify(updatedProfile));
    localStorage.setItem('anifocus_achievements', JSON.stringify(updatedAchievements));
  };

  if (!hasMounted) {
    return <div className="min-h-screen bg-cyber-black flex items-center justify-center text-gray-400">Loading Console...</div>;
  }

  // 1. XP level up trigger logic
  const addXp = (amount: number, currentProfile: UserProfile, currentAchievements: Achievement[]): { profile: UserProfile; achievements: Achievement[] } => {
    const newXp = currentProfile.xp + amount;
    const currentLevel = currentProfile.level;
    const newLevel = getLevelFromXp(newXp);
    
    let updatedProfile: UserProfile = {
      ...currentProfile,
      xp: newXp,
      level: newLevel
    };

    let updatedAchievements = [...currentAchievements];

    // Trigger level up modal if upgraded
    if (currentLevel !== newLevel) {
      setLevelUpModal({ oldLevel: currentLevel, newLevel });
      // Confetti for level up
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    }

    return { profile: updatedProfile, achievements: updatedAchievements };
  };

  // 2. Increment episode log
  const handleUpdateEpisode = (id: string, newEp: number) => {
    const updatedList = animeList.map((anime) => {
      if (anime.id === id) {
        const epDiff = Math.max(0, newEp - anime.currentEp);
        const nextEp = Math.min(anime.totalEps, newEp);
        const hoursLogged = epDiff * anime.hoursPerEp;
        
        let status = anime.status;
        let completionDate = anime.completionDate;

        if (nextEp === anime.totalEps) {
          status = 'completed';
          completionDate = new Date().toISOString().split('T')[0];
          
          // Complete Confetti explosion
          confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.5 }
          });
        }

        return {
          ...anime,
          currentEp: nextEp,
          status,
          completionDate,
          lastWatchedDate: new Date().toISOString().split('T')[0]
        };
      }
      return anime;
    });

    // Check specific episode logged XP
    const prevAnime = animeList.find(a => a.id === id);
    if (prevAnime) {
      const epDiff = Math.max(0, newEp - prevAnime.currentEp);
      const xpGained = epDiff * 10; // 10 XP per episode
      const hoursInvested = epDiff * prevAnime.hoursPerEp;

      // Update active streak if logged on a new day
      let newStreak = profile.streak;
      const today = new Date().toISOString().split('T')[0];
      if (profile.lastActiveDate !== today) {
        newStreak = profile.streak === 0 ? 1 : profile.streak + 1;
      }

      let updatedProfile = {
        ...profile,
        streak: newStreak,
        lastActiveDate: today,
        totalHours: Math.round((profile.totalHours + hoursInvested) * 10) / 10
      };

      // If completing, add completion bonus
      const isFinishing = newEp >= prevAnime.totalEps && prevAnime.currentEp < prevAnime.totalEps;
      const finalXpGain = xpGained + (isFinishing ? 100 : 0);
      if (isFinishing) {
        updatedProfile.completedCount += 1;
      }

      // Check achievements
      let updatedAchievements = achievements.map(ach => {
        if (ach.id === 'first_step' && !ach.unlockedAt) {
          return { ...ach, unlockedAt: today };
        }
        if (ach.id === 'completed_1' && isFinishing && !ach.unlockedAt) {
          return { ...ach, unlockedAt: today };
        }
        if (ach.id === 'streak_3' && newStreak >= 3 && !ach.unlockedAt) {
          return { ...ach, unlockedAt: today };
        }
        return ach;
      });

      const result = addXp(finalXpGain, updatedProfile, updatedAchievements);
      
      setAnimeList(updatedList);
      setProfile(result.profile);
      setAchievements(result.achievements);
      saveState(updatedList, result.profile, result.achievements);
      
      if (selectedDetailAnime && selectedDetailAnime.id === id) {
        const updatedTarget = updatedList.find(a => a.id === id);
        if (updatedTarget) setSelectedDetailAnime(updatedTarget);
      }
    }
  };

  // 3. Update anime status
  const handleUpdateStatus = (id: string, newStatus: AnimeItem['status']) => {
    const updatedList = animeList.map((anime) => {
      if (anime.id === id) {
        let completionDate = anime.completionDate;
        let droppedDate = anime.droppedDate;
        
        if (newStatus === 'completed') {
          completionDate = new Date().toISOString().split('T')[0];
        } else if (newStatus === 'dropped') {
          droppedDate = new Date().toISOString().split('T')[0];
        }

        return {
          ...anime,
          status: newStatus,
          completionDate,
          droppedDate,
          kanbanCategory: newStatus === 'planning' ? (anime.kanbanCategory || 'interested') : undefined
        };
      }
      return anime;
    });

    const prevAnime = animeList.find(a => a.id === id);
    if (prevAnime) {
      let xpBonus = 0;
      let updatedProfile = { ...profile };

      if (newStatus === 'completed' && prevAnime.status !== 'completed') {
        xpBonus = 100;
        updatedProfile.completedCount += 1;
      }

      let updatedAchievements = [...achievements];
      if (newStatus === 'completed') {
        updatedAchievements = achievements.map(ach => {
          if (ach.id === 'completed_1' && !ach.unlockedAt) {
            return { ...ach, unlockedAt: new Date().toISOString().split('T')[0] };
          }
          return ach;
        });
      }

      const result = addXp(xpBonus, updatedProfile, updatedAchievements);

      setAnimeList(updatedList);
      setProfile(result.profile);
      setAchievements(result.achievements);
      saveState(updatedList, result.profile, result.achievements);

      if (selectedDetailAnime && selectedDetailAnime.id === id) {
        const updatedTarget = updatedList.find(a => a.id === id);
        if (updatedTarget) setSelectedDetailAnime(updatedTarget);
      }
    }
  };

  // 4. Update Kanban priority
  const handleUpdateKanbanCategory = (id: string, newCat: KanbanCategory) => {
    const updatedList = animeList.map((anime) => {
      if (anime.id === id) {
        return {
          ...anime,
          kanbanCategory: newCat
        };
      }
      return anime;
    });
    setAnimeList(updatedList);
    saveState(updatedList, profile, achievements);
  };

  // 5. Save reviews/ratings
  const handleUpdateDetails = (id: string, updates: Partial<AnimeItem>) => {
    const updatedList = animeList.map((anime) => {
      if (anime.id === id) {
        return {
          ...anime,
          ...updates
        };
      }
      return anime;
    });

    let xpBonus = 0;
    let updatedAchievements = [...achievements];
    if (updates.reviews) {
      xpBonus = 20;
      updatedAchievements = achievements.map(ach => {
        if (ach.id === 'perfect_score' && !ach.unlockedAt) {
          return { ...ach, unlockedAt: new Date().toISOString().split('T')[0] };
        }
        return ach;
      });
    }

    const result = addXp(xpBonus, profile, updatedAchievements);

    setAnimeList(updatedList);
    setProfile(result.profile);
    setAchievements(result.achievements);
    saveState(updatedList, result.profile, result.achievements);
  };

  // 6. Revive dropped anime
  const handleReviveAnime = (id: string) => {
    const updatedList = animeList.map((anime) => {
      if (anime.id === id) {
        return {
          ...anime,
          status: 'watching' as const,
          droppedDate: undefined,
          lastWatchedDate: new Date().toISOString().split('T')[0],
          motivationNudge: `Revived! Your focus score is high. Finish this arc!`
        };
      }
      return anime;
    });

    const xpBonus = 50;
    const updatedAchievements = achievements.map(ach => {
      if (ach.id === 'resurrector' && !ach.unlockedAt) {
        return { ...ach, unlockedAt: new Date().toISOString().split('T')[0] };
      }
      return ach;
    });

    const result = addXp(xpBonus, profile, updatedAchievements);

    setAnimeList(updatedList);
    setProfile(result.profile);
    setAchievements(result.achievements);
    saveState(updatedList, result.profile, result.achievements);
  };

  // 7. Start Focus helper
  const handleStartFocus = (id: string) => {
    setActiveFocusId(id);
    localStorage.setItem('anifocus_focus_id', id);
    setActiveTab('focus');
  };

  const handleSetFocusId = (id: string | null) => {
    setActiveFocusId(id);
    if (id) {
      localStorage.setItem('anifocus_focus_id', id);
    } else {
      localStorage.removeItem('anifocus_focus_id');
    }
  };

  // 8. Create new Anime from Form
  const handleAddNewAnimeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) return;

    const id = formTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') + '-' + Date.now();
    const genresArray = formGenres.split(',').map(g => g.trim()).filter(Boolean);

    const randomChance = Math.floor(Math.random() * 25) + 65; 

    const newAnime: AnimeItem = {
      id,
      title: formTitle,
      coverUrl: '',
      currentEp: 0,
      totalEps: formTotalEps,
      hoursPerEp: 0.4,
      status: formStatus,
      kanbanCategory: formStatus === 'planning' ? formKanbanCat : undefined,
      genres: genresArray.length > 0 ? genresArray : ['Other'],
      synopsis: formSynopsis.trim() || 'Custom watch target initiated.',
      probabilityOfCompleting: randomChance,
      motivationNudge: `This arc looks interesting! Keep watching to secure a high completion score.`
    };

    const updatedList = [newAnime, ...animeList];
    const result = addXp(20, profile, achievements);

    setAnimeList(updatedList);
    setProfile(result.profile);
    setAchievements(result.achievements);
    saveState(updatedList, result.profile, result.achievements);

    // Reset Form
    setFormTitle('');
    setFormTotalEps(12);
    setFormStatus('watching');
    setFormGenres('Action');
    setFormSynopsis('');
    setSearchQuery('');
    setIsAddModalOpen(false);

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  // 9. Quick select database anime to auto-fill
  const handleQuickImport = (anime: DatabaseAnime) => {
    setFormTitle(anime.title);
    setFormTotalEps(anime.totalEps);
    setFormGenres(anime.genres.join(', '));
    setFormSynopsis(`${anime.synopsis}\n\nFormat specifications: ${anime.info}`);
    setSearchQuery(''); // Close suggestion panel
  };

  // Filter 50-anime Database
  const filteredDatabase = searchQuery.trim() !== ''
    ? ANIME_DATABASE.filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.genres.some(g => g.toLowerCase().includes(searchQuery.toLowerCase())))
    : [];

  return (
    <div className="min-h-screen bg-cyber-black text-gray-200 flex flex-col lg:flex-row relative">
      
      {/* SCANLINES OVERLAY */}
      <div className="absolute inset-0 scanlines pointer-events-none opacity-20"></div>

      {/* SIDEBAR */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        profile={profile} 
      />

      {/* CORE DISPLAY STAGE */}
      <main className="flex-1 p-6 md:p-8 lg:p-12 overflow-y-auto max-h-screen relative z-10">
        
        {/* TOP COMMAND CONSOLE HEADER */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-[rgba(139,92,246,0.1)] pb-6">
          <div>
            <div className="text-[10px] text-primary-purple font-bold tracking-widest uppercase flex items-center gap-1 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-purple animate-ping"></span>
              Console session online
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-wide">
              Welcome Back, {profile.username}
            </h2>
            <p className="text-xs text-gray-500 font-semibold mt-0.5">
              Protocol: Reduce attention fragmentation. Complete your started series.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* ADD ANIME TRIGGER BUTTON */}
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-1.5 py-2.5 px-4 bg-gradient-to-r from-primary-purple to-indigo-600 hover:scale-105 active:scale-95 transition-all text-white font-extrabold text-xs rounded-xl shadow-lg cursor-pointer glow-purple"
            >
              <Plus className="w-4 h-4" />
              ADD ANIME
            </button>

            <div className="flex items-center gap-2 bg-zinc-950/60 border border-zinc-900 px-4 py-2.5 rounded-xl">
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-pulse" />
              <div>
                <p className="text-[8px] text-gray-500 uppercase tracking-widest font-black">Current Streak</p>
                <p className="text-xs font-extrabold text-white">{profile.streak} Days</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-zinc-950/60 border border-zinc-900 px-4 py-2.5 rounded-xl">
              <Award className="w-4 h-4 text-primary-purple" />
              <div>
                <p className="text-[8px] text-gray-500 uppercase tracking-widest font-black">Total Level</p>
                <p className="text-xs font-extrabold text-white truncate max-w-[120px]">{profile.level}</p>
              </div>
            </div>
          </div>
        </header>

        {/* ACTIVE TABS DISPATCHER */}
        <div className="relative z-10 transition-all duration-300">
          {activeTab === 'dashboard' && (
            <Dashboard 
              animeList={animeList}
              onUpdateEpisode={handleUpdateEpisode}
              onUpdateStatus={handleUpdateStatus}
              onUpdateKanbanCategory={handleUpdateKanbanCategory}
              onStartFocus={handleStartFocus}
              onOpenDetail={(anime) => setSelectedDetailAnime(anime)}
            />
          )}

          {activeTab === 'focus' && (
            <FocusMode 
              animeList={animeList}
              activeFocusId={activeFocusId}
              setActiveFocusId={handleSetFocusId}
              onUpdateEpisode={handleUpdateEpisode}
              onUpdateStatus={handleUpdateStatus}
            />
          )}

          {activeTab === 'stats' && (
            <Statistics 
              animeList={animeList} 
              profile={profile} 
            />
          )}

          {activeTab === 'trophy' && (
            <TrophyRoom 
              animeList={animeList}
              achievements={achievements}
              profile={profile}
            />
          )}

          {activeTab === 'graveyard' && (
            <Graveyard 
              animeList={animeList}
              onReviveAnime={handleReviveAnime}
            />
          )}
        </div>
      </main>

      {/* 1. ADD NEW ANIME MODAL (WITH 50 ANIME INSTANT SEARCH DATABASE) */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div 
            className="relative w-full max-w-xl rounded-2xl border border-[rgba(139,92,246,0.25)] bg-zinc-950 p-6 md:p-8 shadow-2xl glass-panel-purple max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-4 border-b border-zinc-900 mb-6">
              <h3 className="text-lg font-black text-white tracking-wide flex items-center gap-1.5">
                <Sparkles className="w-5 h-5 text-primary-purple" />
                INITIATE ANIME PROTOCOL
              </h3>
              <button 
                onClick={() => { setIsAddModalOpen(false); setSearchQuery(''); }}
                className="p-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* INSTANT DATABASE SEARCH COMPONENT */}
            <div className="space-y-1.5 mb-6 relative">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1">
                <Search className="w-3.5 h-3.5 text-primary-purple" />
                Quick Import from Database (50 Popular Series)
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search: e.g. Titan, Demon, Luffy, Movie..."
                  className="w-full bg-zinc-900 border border-zinc-800/80 rounded-xl p-3 pl-10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-neon-blue transition-all"
                />
                <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-600" />
              </div>

              {/* SEARCH RESULTS DROPDOWN */}
              {filteredDatabase.length > 0 && (
                <div className="absolute left-0 right-0 top-[64px] z-20 max-h-56 overflow-y-auto bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 shadow-2xl space-y-1 scrollbar-thin">
                  <p className="text-[9px] text-gray-600 uppercase font-black tracking-widest px-2 pb-1.5 border-b border-zinc-900/60">
                    Matches Found ({filteredDatabase.length})
                  </p>
                  {filteredDatabase.map((anime) => (
                    <div 
                      key={anime.id}
                      onClick={() => handleQuickImport(anime)}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-zinc-900 cursor-pointer transition-all border border-transparent hover:border-zinc-800 group"
                    >
                      <div className="min-w-0 pr-4">
                        <p className="text-xs font-bold text-white group-hover:text-primary-purple-hover transition-colors truncate">
                          {anime.title}
                        </p>
                        <p className="text-[9px] text-gray-500 font-semibold truncate mt-0.5">
                          {anime.genres.join(' • ')}
                        </p>
                      </div>
                      <span className="text-[9px] bg-zinc-900 border border-zinc-800/80 text-cyan-400 font-bold px-2 py-0.5 rounded shrink-0">
                        {anime.info.split('•')[0].trim()}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative flex items-center justify-center my-4">
              <span className="absolute left-0 right-0 h-[1px] bg-zinc-900"></span>
              <span className="relative px-3 bg-zinc-950 text-[9px] text-gray-600 uppercase tracking-widest font-black">
                or configure details manually
              </span>
            </div>

            <form onSubmit={handleAddNewAnimeSubmit} className="space-y-5">
              
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Anime Title
                </label>
                <input 
                  type="text" 
                  required
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g. Vinland Saga"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-primary-purple transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Total Episodes
                  </label>
                  <input 
                    type="number" 
                    required
                    min="1"
                    value={formTotalEps}
                    onChange={(e) => setFormTotalEps(parseInt(e.target.value) || 12)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-primary-purple transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Category Status
                  </label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value as AnimeItem['status'])}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-primary-purple transition-all"
                  >
                    <option value="watching">Active Watching</option>
                    <option value="planning">Plan To Watch</option>
                  </select>
                </div>
              </div>

              {formStatus === 'planning' && (
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Kanban Priority List
                  </label>
                  <select
                    value={formKanbanCat}
                    onChange={(e) => setFormKanbanCat(e.target.value as KanbanCategory)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-primary-purple transition-all"
                  >
                    <option value="high">🔥 High Priority</option>
                    <option value="interested">🎯 Interested</option>
                    <option value="maybe">⏳ Maybe Later</option>
                  </select>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Genres (comma separated)
                </label>
                <input 
                  type="text" 
                  value={formGenres}
                  onChange={(e) => setFormGenres(e.target.value)}
                  placeholder="Action, Adventure, Drama"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-primary-purple transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Synopsis / Motivation Notes
                </label>
                <textarea 
                  value={formSynopsis}
                  onChange={(e) => setFormSynopsis(e.target.value)}
                  rows={3}
                  placeholder="Why do you want to track this series? Enter your notes."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-primary-purple transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-primary-purple to-indigo-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl cursor-pointer shadow-lg hover:scale-103 active:scale-97 transition-all mt-4"
              >
                Launch Tracker Mission (+20 XP)
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 2. ANIME DETAIL OVERLAY MODAL */}
      {selectedDetailAnime && (
        <AnimeDetailModal 
          anime={selectedDetailAnime}
          onClose={() => setSelectedDetailAnime(null)}
          onUpdateEpisode={handleUpdateEpisode}
          onUpdateStatus={handleUpdateStatus}
          onUpdateDetails={handleUpdateDetails}
          onStartFocus={handleStartFocus}
        />
      )}

      {/* 3. LEVEL UP BANNER PROTOCOL */}
      {levelUpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-2xl border-2 border-orange-500/40 bg-zinc-950 p-8 text-center shadow-2xl glass-panel animate-float">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-orange-500/5 to-transparent rounded-2xl pointer-events-none"></div>

            <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-orange-500 animate-bounce" />
            </div>

            <p className="text-[10px] text-orange-500 font-black tracking-widest uppercase mb-1">
              ASCENSION SUCCESSFUL
            </p>
            <h3 className="text-3xl font-black text-white tracking-wide glow-text-purple mb-2">
              LEVEL UP!
            </h3>
            <p className="text-sm text-gray-400 font-semibold mb-6">
              You have completed milestones and ascended to a new level.
            </p>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between mb-8">
              <span className="text-xs text-gray-500 font-bold uppercase">{levelUpModal.oldLevel}</span>
              <span className="text-orange-500 text-lg">▶</span>
              <span className="text-sm text-white font-extrabold">{levelUpModal.newLevel}</span>
            </div>

            <button
              onClick={() => setLevelUpModal(null)}
              className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-rose-600 text-white font-extrabold text-xs rounded-xl uppercase tracking-wider cursor-pointer shadow-lg hover:scale-103 active:scale-97 transition-all"
            >
              Acknowledge & Continue
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
