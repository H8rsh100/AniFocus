export type AnimeStatus = 'watching' | 'planning' | 'completed' | 'dropped';
export type KanbanCategory = 'high' | 'interested' | 'maybe';

export interface AnimeItem {
  id: string;
  title: string;
  coverUrl: string;
  currentEp: number;
  totalEps: number;
  hoursPerEp: number; // e.g. 0.4 hours (24 mins)
  status: AnimeStatus;
  kanbanCategory?: KanbanCategory;
  rating?: number;
  reviews?: string;
  favoriteMoments?: string;
  completionDate?: string;
  lastWatchedDate?: string;
  droppedDate?: string;
  genres: string[];
  synopsis: string;
  probabilityOfCompleting: number; // e.g. 84 (%)
  motivationNudge?: string;
}

export interface UserProfile {
  username: string;
  level: '見習い' | '中級者' | '上級者' | 'オタク神';
  xp: number;
  streak: number;
  completedCount: number;
  totalHours: number;
  lastActiveDate?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  xpValue: number;
}
