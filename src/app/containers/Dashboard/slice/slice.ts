import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { DashboardState, Matchup, Team, TeamMap, TeamRecord } from './types';

// Reducers
function setSelectedSeason(state, action: PayloadAction<number>) {
  state.selectedSeason = action.payload;
}

function setLoadingRecords(state, action: PayloadAction<boolean>) {
  state.loadingRecords = action.payload;
}

function setLoadingMatchups(state, action: PayloadAction<boolean>) {
  state.loadingMatchups = action.payload;
}

function setAvailableSeasons(state, action: PayloadAction<number[]>) {
  state.availableSeasons = action.payload;
}

function setCurrentWeek(state, action: PayloadAction<number>) {
  state.currentWeek = action.payload;
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
  loadingRecords: false,
  loadingMatchups: false,
  availableSeasons: [],
  currentWeek: 0,
  teams: {} as TeamMap,
  records: [],
  matchups: [],
};

const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setSelectedSeason,
    setLoadingRecords,
    setLoadingMatchups,
    setAvailableSeasons,
    setCurrentWeek,
    setTeams,
    setRecords,
    setMatchups,
  },
});

export default slice;
