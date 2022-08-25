import { call, put, takeLatest } from 'redux-saga/effects';

import { standingsPayload } from 'app/samplePayloads/standingsPayload';

import slice from './slice';

const { setIsLoading, setTeamStandings } = slice.actions;

async function fetchTeamStandings() {
  return new Promise((resolve, reject) => {
    resolve(standingsPayload);
  });
}

function denormalizeStandingsPayload({ payload }) {
  return payload['data']['standings']['records'].map(r => {
    return {
      rank: r.rank,
      teamName: r.team.name,
      ownerName: r.team.owner.name,
      wins: r.record.wins,
      losses: r.record.losses,
      ties: r.record.ties,
      pointsFor: r.pointsFor,
      pointsAgainst: r.pointsAgainst
    };
  });
}

function* loadStandings() {
  yield put(setIsLoading(true));

  try {
    const response = yield call(() => fetchTeamStandings());
    yield put(
      setTeamStandings(denormalizeStandingsPayload({ payload: response })),
    );
  } catch (e) {} // In the future we'll want to handle this with a user prompt

  yield put(setIsLoading(false));
}

export const sagaTypes = {
  LOAD_STANDINGS: 'LOAD_STANDINGS',
};

export function* standingsSaga() {
  yield takeLatest(sagaTypes.LOAD_STANDINGS, loadStandings);
}
