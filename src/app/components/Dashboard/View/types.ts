export interface TeamScore {
  rank: number;
  teamName: string;
  points: number;
}

export interface Matchup {
  home: TeamScore;
  away: TeamScore;
}

export interface TeamRecord {
  teamId: number;
  rank: number;
  teamName: string;
  ownerName: string;
  wins: number;
  losses: number;
  ties: number;
  pointsFor: number;
  pointsAgainst: number;
}
