/* --- STATE --- */
interface TeamRecord {
  rank: number;
  teamName: string;
  ownerName: string;
  wins: number;
  losses: number;
  ties: number;
  pointsFor: number;
  pointsAgainst: number;
}

export interface StandingsState {
  teamStandings: TeamRecord[];
  isLoading: boolean;
}
