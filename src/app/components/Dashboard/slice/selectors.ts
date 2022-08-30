import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectSlice = (state: RootState) => state.dashboard || initialState;

export const selectDashboard = createSelector([selectSlice], state => state);

// UI Controls
export const selectSelectedSeason = createSelector(
  [selectDashboard],
  state => state.selectedSeason,
);
export const selectLoadingRecords = createSelector(
  [selectDashboard],
  state => state.loadingRecords,
);
export const selectLoadingMatchups = createSelector(
  [selectDashboard],
  state => state.loadingMatchups,
);

// Data
export const selectAvailableSeasons = createSelector(
  [selectDashboard],
  state => state.availableSeasons,
);
export const selectCurrentWeek = createSelector(
  [selectDashboard],
  state => state.currentWeek,
);

const selectTeams = createSelector([selectDashboard], state => state.teams);

// Standings and scoreboard enrichment
function enrichRecords(state) {
  const teams = state.teams;

  return state.records.map(tr => {
    const team = teams[tr.teamId];

    return {
      teamId: team.id,
      teamName: team.name,
      ownerName: team.ownerName,
      rank: team.rank,
      wins: tr.wins,
      losses: tr.losses,
      ties: tr.ties,
      pointsFor: tr.pointsFor,
      pointsAgainst: tr.pointsAgainst,
    };
  });
}

function enrichMatchups(state) {
  const teams = state.teams;

  return state.matchups.map(m => {
    const ht = teams[m.home.teamId];
    const at = teams[m.away.teamId];

    return {
      home: {
        teamId: ht.id,
        teamName: ht.name,
        rank: ht.rank,
        points: m.home.points,
      },
      away: {
        teamId: at.id,
        teamName: at.name,
        rank: at.rank,
        points: m.away.points,
      },
    };
  });
}

export const selectRecords = createSelector([selectDashboard], enrichRecords);
export const selectMatchups = createSelector([selectDashboard], enrichMatchups);
