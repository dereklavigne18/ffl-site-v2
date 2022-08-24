import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectSlice = (state: RootState) => state.standings || initialState;

const selectStandings = createSelector([selectSlice], state => state);
export const selectTeamStandings = createSelector(
  [selectStandings],
  state => state.teamStandings,
);
export const selectAreStandingsLoading = createSelector(
  [selectStandings],
  state => state.isLoading,
);
