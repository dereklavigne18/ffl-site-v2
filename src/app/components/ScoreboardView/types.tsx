export interface TeamScore {
  rank: number;
  teamName: string;
  points: number;
}

export interface Matchup {
  home: TeamScore;
  away: TeamScore;
}