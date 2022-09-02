import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { DashboardState, Matchup, SeasonMap, Team, TeamMap, TeamRecord } from './types';

// Reducers
function setSelectedSeason(state, action: PayloadAction<number>) {
  state.selectedSeason = action.payload;
}

function setSelectedWeek(state, action: PayloadAction<number>) {
  state.selectedWeek = action.payload;
}

function setLoadingRecords(state, action: PayloadAction<boolean>) {
  state.loadingRecords = action.payload;
}

function setLoadingMatchups(state, action: PayloadAction<boolean>) {
  state.loadingMatchups = action.payload;
}

function setLoadingSeasons(state, action: PayloadAction<boolean>) {
  state.loadingSeasons = action.payload;
}

function setSeasons(state, action: PayloadAction<SeasonMap>) {
  state.seasons = action.payload;
}

function setTeams(state, action: PayloadAction<Team[]>) {
  action.payload.forEach(t => (state.teams[t.id] = t));
}

function setRecords(state, action: PayloadAction<TeamRecord[]>) {
  state.records = action.payload;
}

function setMatchups(state, action: PayloadAction<Matchup[]>) {
  state.matchups = action.payload;
}

export const initialState: DashboardState = {
  selectedSeason: 0,
  selectedWeek: 0,
  loadingRecords: false,
  loadingMatchups: false,
  loadingSeasons: true,
  seasons: {} as SeasonMap,
  teams: {} as TeamMap,
  records: [],
  matchups: [],
};

const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setSelectedSeason,
    setSelectedWeek,
    setLoadingRecords,
    setLoadingMatchups,
    setLoadingSeasons,
    setSeasons,
    setTeams,
    setRecords,
    setMatchups,
  },
});

export default slice;
