import { AnimeItem, UserProfile, Achievement } from '../types/anime';

export const INITIAL_ANIME: AnimeItem[] = [];

export const INITIAL_PROFILE: UserProfile = {
  username: 'Harsh',
  level: '見習い',
  xp: 0,
  streak: 0,
  completedCount: 0,
  totalHours: 0
};

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_step',
    title: 'First Step',
    description: 'Tracked your first anime episode',
    icon: '🚀',
    xpValue: 50
  },
  {
    id: 'streak_3',
    title: 'Consistent Otaku',
    description: 'Maintained a 3-day watching streak',
    icon: '🔥',
    xpValue: 100
  },
  {
    id: 'completed_1',
    title: 'The Finisher',
    description: 'Successfully completed your first anime series',
    icon: '🏆',
    xpValue: 150
  },
  {
    id: 'perfect_score',
    title: 'Master Reviewer',
    description: 'Rated and reviewed a completed series',
    icon: '✍️',
    xpValue: 75
  },
  {
    id: 'resurrector',
    title: 'Necromancer',
    description: 'Revived an anime from the Anime Graveyard',
    icon: '⚔️',
    xpValue: 200
  },
  {
    id: 'focus_master',
    title: 'Absolute Focus',
    description: 'Completed a 3-episode session in Focus Mode',
    icon: '🎯',
    xpValue: 150
  }
];

export function getLevelFromXp(xp: number): UserProfile['level'] {
  if (xp < 500) return '見習い';
  if (xp < 2000) return '中級者';
  if (xp < 5000) return '上級者';
  return 'オタク神';
}

export function getNextLevelXp(level: UserProfile['level']): number {
  switch (level) {
    case '見習い': return 500;
    case '中級者': return 2000;
    case '上級者': return 5000;
    default: return 10000;
  }
}

export function getPrevLevelXp(level: UserProfile['level']): number {
  switch (level) {
    case '見習い': return 0;
    case '中級者': return 500;
    case '上級者': return 2000;
    default: return 5000;
  }
}
