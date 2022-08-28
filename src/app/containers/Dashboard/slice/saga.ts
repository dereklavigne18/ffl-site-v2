import { call, put, takeLatest } from 'redux-saga/effects';

import { standingsPayload } from 'app/samplePayloads/standingsPayload';
import { scoreboardPayload } from 'app/samplePayloads/scoreboardPayload';

import slice from './slice';

const {
  setLoadingRecords,
  setLoadingMatchups,
  setMatchups,
  setRecords,
  setTeams,
} = slice.actions;

// Services - they should be moved out of here
async function fetchTeamRecords() {
  return new Promise((resolve, reject) => {
    resolve(standingsPayload);
  });
}

async function fetchMatchups() {
  return new Promise((resolve, reject) => {
    resolve(scoreboardPayload);
  });
}

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
function* loadRecords() {
  yield put(setLoadingRecords(true));

  try {
    const response = yield call(() => fetchTeamRecords());
    yield put(setTeams(extractTeamsFromRecordsResponse({ payload: response })));
    yield put(
      setRecords(extractRecordsFromRecordsResponse({ payload: response })),
    );
  } catch (e) {} // In the future we'll want to handle this with a user prompt

  yield put(setLoadingRecords(false));
}

function* loadMatchups() {
  yield put(setLoadingMatchups(true));

  try {
    const response = yield call(() => fetchMatchups());
    yield put(setMatchups(denormalizeMatchupsResponse({ payload: response })));
  } catch (e) {} // In the future we'll want to handle this with a user prompt

  yield put(setLoadingMatchups(false));
}

// Define sagas
export const sagaTypes = {
  LOAD_RECORDS: 'LOAD_RECORDS',
  LOAD_MATCHUPS: 'LOAD_MATCHUPS',
};

export function* dashboardSaga() {
  yield takeLatest(sagaTypes.LOAD_RECORDS, loadRecords);
  yield takeLatest(sagaTypes.LOAD_MATCHUPS, loadMatchups);
}
