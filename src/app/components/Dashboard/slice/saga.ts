import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchTeamRecords } from 'app/services/standings';
import { fetchMatchups } from 'app/services/scoreboard';
import { fetchSeasons } from 'app/services/seasons';

import slice from './slice';

const {
  setSelectedSeason,
  setSelectedWeek,
  setLoadingRecords,
  setLoadingMatchups,
  setLoadingSeasons,
  setMatchups,
  setRecords,
  setTeams,
  setSeasons,
} = slice.actions;

// Data Massaging
function extractTeamsFromRecordsResponse({ payload }) {
  return payload.data.standings.records.map(r => {
    const t = r.team;
    return {
      id: t.id,
      rank: r.rank,
      name: t.name,
      ownerName: t.owner.name,
    };
  });
}

function extractRecordsFromRecordsResponse({ payload }) {
  return payload.data.standings.records.map(r => {
    return {
      teamId: r.team.id,
      wins: r.record.wins,
      losses: r.record.losses,
      ties: r.record.ties,
      pointsFor: r.pointsFor,
      pointsAgainst: r.pointsAgainst,
    };
  });
}

function denormalizeMatchupsResponse({ payload }) {
  return payload.data.scoreboard.map(m => {
    return {
      home: {
        teamId: m.homeScore.teamRecord.team.id,
        points: m.homeScore.points,
      },
      away: {
        teamId: m.awayScore.teamRecord.team.id,
        points: m.awayScore.points,
      },
    };
  });
}

// Saga actions
interface LoadRecordsInput { season: number, week: number, type: string };
function* loadRecords({ season, week }: LoadRecordsInput) {
  yield put(setLoadingRecords(true));

  try {
    const response = yield call(() => fetchTeamRecords(season));
    yield put(setTeams(extractTeamsFromRecordsResponse({ payload: response })));
    yield put(
      setRecords(extractRecordsFromRecordsResponse({ payload: response })),
    );
  } catch (e) {} // In the future we'll want to handle this with a user prompt

  yield put(setLoadingRecords(false));
}

interface LoadMatchupsInput { season: number, week: number, type: string };
function* loadMatchups({ season, week }: LoadMatchupsInput) {
  yield put(setLoadingMatchups(true));

  try {
    const response = yield call(() => fetchMatchups(season, week));
    yield put(setMatchups(denormalizeMatchupsResponse({ payload: response })));
  } catch (e) {} // In the future we'll want to handle this with a user prompt

  yield put(setLoadingMatchups(false));
}

function* loadSeasons() {
  // This should only be done once, on page load, so we'll set the selected season and week to current
  yield put(setLoadingSeasons(true));

  try {
    const response = yield call(() => fetchSeasons());
    yield put(setSelectedSeason(response.data.currentSeason));
    yield put(setSelectedWeek(response.data.currentWeek));

    const s = response.data.seasons.reduce((result, season) => {
      result[season.year] = { weeks: season.weeks };
      return result;
    }, {});
    yield put(setSeasons(s));
  } catch (e) {} // In the future we'll want to handle this with a user prompt

  yield put(setLoadingSeasons(false));
}

// Define sagas
const sagaTypes = {
  LOAD_RECORDS: 'LOAD_RECORDS',
  LOAD_MATCHUPS: 'LOAD_MATCHUPS',
  LOAD_SEASONS: 'LOAD_SEASONS',
};

export function* dashboardSaga() {
  yield takeLatest(sagaTypes.LOAD_RECORDS, loadRecords);
  yield takeLatest(sagaTypes.LOAD_MATCHUPS, loadMatchups);
  yield takeLatest(sagaTypes.LOAD_SEASONS, loadSeasons);
};

export const sagaActions = {
  loadRecords(season, week){
    return { type: sagaTypes.LOAD_RECORDS, season: season, week: week };
  },
  loadMatchups(season, week) {
    return { type: sagaTypes.LOAD_MATCHUPS, season: season, week: week };
  },
  loadSeasons() {
    return { type: sagaTypes.LOAD_SEASONS };
  },
};
