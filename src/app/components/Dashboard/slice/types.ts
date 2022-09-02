/* --- STATE --- */
export interface Team {
  id: string;
  rank: number;
  name: string;
  ownerName: string;
}

export interface TeamMap {
  [index: string]: Team;
}

export interface TeamRecord {
  teamId: string;
  wins: number;
  losses: number;
  ties: number;
  pointsFor: number;
  pointsAgainst: number;
}

export interface TeamScore {
  teamId: string;
  points: number;
}

export interface Matchup {
  home: TeamScore;
  away: TeamScore;
}

export interface Season {
  weeks: number[];
}

export interface SeasonMap {
  [year: number]: Season;
}

export interface DashboardState {
  // UI Controls
  selectedSeason: number;
  selectedWeek: number;
  loadingRecords: boolean;
  loadingMatchups: boolean;
  loadingSeasons: boolean;

  // Data Objects
  seasons: SeasonMap;
  teams: TeamMap;
  records: TeamRecord[];
  matchups: Matchup[];
}
