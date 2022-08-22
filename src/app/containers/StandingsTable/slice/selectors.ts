import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectSlice = (state: RootState) => state.standingsTable || initialState;

const selectStandingsTable = createSelector([selectSlice], state => state);
export const selectTeamStandings = createSelector([selectStandingsTable], state => state.teamStandings);
export const selectAreStandingsLoading = createSelector([selectStandingsTable], state => state.isLoading);
