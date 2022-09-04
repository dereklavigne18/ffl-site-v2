import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { DashboardState, Matchup, SeasonMap, Team, TeamMap, TeamRecord } from './types';


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
    setSelectedSeason(state, action: PayloadAction<number>) {
      state.selectedSeason = action.payload;

      if (state.selectedSeason in state.seasons) {
        const weeks = state.seasons[state.selectedSeason].weeks;
        state.selectedWeek = weeks[weeks.length - 1];
      }
    },
    setSelectedWeek(state, action: PayloadAction<number>) {
      state.selectedWeek = action.payload;
    },
    setLoadingRecords(state, action: PayloadAction<boolean>) {
      state.loadingRecords = action.payload;
    },
    setLoadingMatchups(state, action: PayloadAction<boolean>) {
      state.loadingMatchups = action.payload;
    },
    setLoadingSeasons(state, action: PayloadAction<boolean>) {
      state.loadingSeasons = action.payload;
    },
    setSeasons(state, action: PayloadAction<SeasonMap>) {
      state.seasons = action.payload;
    },
    setTeams(state, action: PayloadAction<Team[]>) {
      action.payload.forEach(t => (state.teams[t.id] = t));
    },
    setRecords(state, action: PayloadAction<TeamRecord[]>) {
      state.records = action.payload;
    },
    setMatchups(state, action: PayloadAction<Matchup[]>) {
      state.matchups = action.payload;
    },
  },
});

export default slice;
