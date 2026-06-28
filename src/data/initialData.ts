import { AnimeItem, UserProfile, Achievement } from '../types/anime';

export const INITIAL_ANIME: AnimeItem[] = [];

export const INITIAL_PROFILE: UserProfile = {
  username: 'Harsh',
  level: 'Anime Rookie',
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
  if (xp < 200) return 'Anime Rookie';
  if (xp < 600) return 'Otaku Explorer';
  if (xp < 1200) return 'Anime Scholar';
  if (xp < 2000) return 'Season Hunter';
  if (xp < 3500) return 'Legendary Weeb';
  return 'Anime Grandmaster';
}

export function getNextLevelXp(level: UserProfile['level']): number {
  switch (level) {
    case 'Anime Rookie': return 200;
    case 'Otaku Explorer': return 600;
    case 'Anime Scholar': return 1200;
    case 'Season Hunter': return 2000;
    case 'Legendary Weeb': return 3500;
    default: return 5000; // Grandmaster cap or max
  }
}

export function getPrevLevelXp(level: UserProfile['level']): number {
  switch (level) {
    case 'Anime Rookie': return 0;
    case 'Otaku Explorer': return 200;
    case 'Anime Scholar': return 600;
    case 'Season Hunter': return 1200;
    case 'Legendary Weeb': return 2000;
    default: return 3500;
  }
}
