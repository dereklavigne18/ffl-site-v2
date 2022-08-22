/* --- STATE --- */
interface TeamRecord {
  rank: number,
  teamName: string,
  ownerName: string,
  wins: number,
  losses: number,
  ties: number,
}

export interface StandingsTableState {
  teamStandings: TeamRecord[],
  isLoading: boolean,
}
