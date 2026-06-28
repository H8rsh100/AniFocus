import React from 'react';
import { 
  AreaChart, 
  Area, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer, 
  RadialBarChart, 
  RadialBar, 
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { Sparkles, Trophy, Calendar, ThumbsUp, Hash, Clock } from 'lucide-react';
import { AnimeItem } from '../types/anime';

interface StatisticsProps {
  animeList: AnimeItem[];
  profile: any;
}

export default function Statistics({ animeList, profile }: StatisticsProps) {
  
  // 1. Calculate Genre Distribution
  const genreCounts: { [key: string]: number } = {};
  animeList.forEach(a => {
    // only count watchings and completeds for preferred genres
    if (a.status === 'watching' || a.status === 'completed') {
      a.genres.forEach(g => {
        genreCounts[g] = (genreCounts[g] || 0) + 1;
      });
    }
  });

  const radarData = Object.keys(genreCounts).map(genre => ({
    subject: genre,
    count: genreCounts[genre],
    fullMark: 5
  })).slice(0, 6); // Cap at 6 genres for radar layout symmetry

  // Fallback if empty
  const finalRadarData = radarData.length > 0 ? radarData : [
    { subject: 'Action', count: 3, fullMark: 5 },
    { subject: 'Adventure', count: 2, fullMark: 5 },
    { subject: 'Fantasy', count: 4, fullMark: 5 },
    { subject: 'Drama', count: 2, fullMark: 5 },
    { subject: 'Sci-Fi', count: 1, fullMark: 5 },
  ];

  // 2. Completion rate logic
  const completedCount = animeList.filter(a => a.status === 'completed').length;
  const droppedCount = animeList.filter(a => a.status === 'dropped').length;
  const watchingCount = animeList.filter(a => a.status === 'watching').length;
  const totalStarted = completedCount + droppedCount;
  const completionRate = totalStarted > 0 ? Math.round((completedCount / totalStarted) * 100) : 0;

  const radialData = [
    {
      name: 'Completion Rate',
      value: completionRate,
      fill: 'url(#statsGlowGrad)',
    }
  ];

  // 3. Monthly watch trend (mock static data representing the user's progress)
  const monthlyTrendData = [
    { name: 'Jan', episodes: 25 },
    { name: 'Feb', episodes: 45 },
    { name: 'Mar', episodes: 30 },
    { name: 'Apr', episodes: 68 },
    { name: 'May', episodes: 50 },
    { name: 'Jun', episodes: profile.streak * 6 + 25 }, // responsive based on current streak
  ];

  // 4. Personal Insights
  const favoriteGenre = Object.keys(genreCounts).reduce((a, b) => genreCounts[a] > genreCounts[b] ? a : b, 'Action');
  const avgRating = animeList.filter(a => a.rating).reduce((acc, curr, _, array) => acc + (curr.rating || 0) / array.length, 0);

  return (
    <div className="space-y-10">
      
      {/* HEADER BANNER */}
      <section className="bg-gradient-to-r from-primary-purple/10 via-neon-blue/5 to-transparent border border-[rgba(139,92,246,0.15)] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 glass-panel">
        <div className="space-y-2">
          <span className="text-[10px] bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-2.5 py-0.5 rounded-full font-black tracking-widest uppercase">
            Spotify Wrapped Aesthetic
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-wide glow-text-purple">
            Your Anime Consumption Profile
          </h2>
          <p className="text-xs text-gray-400 max-w-lg leading-relaxed">
            Data insights compiled from your historical completions, focus mode logs, dropped counts, and average ratings. Complete more series to unlock deeper correlations.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-zinc-950/60 border border-zinc-900 px-5 py-4 rounded-2xl">
          <Clock className="w-8 h-8 text-primary-purple animate-pulse" />
          <div>
            <p className="text-[9px] text-gray-500 uppercase tracking-widest font-black">Invested Time</p>
            <p className="text-xl font-extrabold text-white">{profile.totalHours} Hours</p>
          </div>
        </div>
      </section>

      {/* CHARTS CONTAINER GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Trend Area Chart */}
        <div className="bg-cyber-gray border border-zinc-800 rounded-2xl p-6 glass-panel flex flex-col justify-between h-[360px]">
          <div>
            <h3 className="font-extrabold text-white text-sm uppercase tracking-wider mb-1">
              Episodes Logged per Month
            </h3>
            <p className="text-[10px] text-gray-500 font-semibold mb-4">
              Watch history over the last 6 months
            </p>
          </div>
          
          <div className="w-full h-60">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#121214', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff', fontSize: '11px', fontWeight: 'bold' }}
                  itemStyle={{ color: '#c084fc', fontSize: '11px' }}
                />
                <Area type="monotone" dataKey="episodes" stroke="#8B5CF6" strokeWidth={2.5} fillOpacity={1} fill="url(#areaGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Radar Genre Distribution */}
        <div className="bg-cyber-gray border border-zinc-800 rounded-2xl p-6 glass-panel flex flex-col justify-between h-[360px]">
          <div>
            <h3 className="font-extrabold text-white text-sm uppercase tracking-wider mb-1">
              Genre Distribution Map
            </h3>
            <p className="text-[10px] text-gray-500 font-semibold mb-4">
              Active/Completed genre overlap breakdown
            </p>
          </div>

          <div className="w-full h-60 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={finalRadarData}>
                <PolarGrid stroke="#27272a" />
                <PolarAngleAxis dataKey="subject" stroke="#a1a1aa" fontSize={10} />
                <PolarRadiusAxis angle={30} domain={[0, 5]} stroke="#52525b" fontSize={9} />
                <Radar name="Count" dataKey="count" stroke="#06B6D4" fill="#06B6D4" fillOpacity={0.25} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* COMPLETION GAUGE & INSIGHT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Radial Completion Rate Gauge */}
        <div className="bg-cyber-gray border border-zinc-800 rounded-2xl p-6 glass-panel flex flex-col items-center justify-center text-center space-y-4">
          <h3 className="font-extrabold text-white text-xs uppercase tracking-widest text-gray-400">
            Completion Rate Index
          </h3>
          
          <div className="relative w-40 h-40 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="90%" barSize={10} data={radialData} startAngle={90} endAngle={-270}>
                <RadialBar dataKey="value" cornerRadius={5} />
                <defs>
                  <linearGradient id="statsGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-white glow-text-blue">{completionRate}%</span>
              <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Finished Ratio</span>
            </div>
          </div>

          <div className="text-[10px] text-gray-500 font-semibold space-y-1">
            <p>Completed: <span className="text-emerald-400">{completedCount}</span> | Dropped: <span className="text-rose-400">{droppedCount}</span></p>
            <p className="text-[9px] uppercase tracking-widest text-cyan-400">Target score is 80% completion</p>
          </div>
        </div>

        {/* Insight Cards */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <div className="bg-cyber-gray border border-zinc-800 rounded-2xl p-5 glass-panel flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-primary-purple/10 border border-primary-purple/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-primary-purple" />
            </div>
            <div>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest font-black">Favorite Genre</p>
              <h4 className="text-lg font-bold text-white mt-0.5">{favoriteGenre}</h4>
              <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                You watch Action series {Math.round(genreCounts[favoriteGenre] || 2)}x faster and complete them more consistently than other categories.
              </p>
            </div>
          </div>

          <div className="bg-cyber-gray border border-zinc-800 rounded-2xl p-5 glass-panel flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center shrink-0">
              <ThumbsUp className="w-5 h-5 text-neon-blue" />
            </div>
            <div>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest font-black">Average Rating Given</p>
              <h4 className="text-lg font-bold text-white mt-0.5">{avgRating ? `${Math.round(avgRating * 10) / 10} / 10` : '8.5 / 10'}</h4>
              <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                Your rating scale is selective, indicating a high standard for narrative completion. Nice choices!
              </p>
            </div>
          </div>

          <div className="bg-cyber-gray border border-zinc-800 rounded-2xl p-5 glass-panel flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest font-black">Consistency Streak</p>
              <h4 className="text-lg font-bold text-white mt-0.5">{profile.streak} Days Active</h4>
              <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                Watching at least one episode daily reduces decision paralysis and keeps your momentum high. Keep it going!
              </p>
            </div>
          </div>

          <div className="bg-cyber-gray border border-zinc-800 rounded-2xl p-5 glass-panel flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest font-black">Focus Completion Index</p>
              <h4 className="text-lg font-bold text-white mt-0.5">High Efficiency</h4>
              <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                By maintaining focus on 1 target series, you complete seasons in under 9 days on average.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
