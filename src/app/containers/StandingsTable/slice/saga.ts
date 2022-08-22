import { call, put, takeLatest } from 'redux-saga/effects';
import slice from './slice';

const { setIsLoading, setTeamStandings } = slice.actions;

async function fetchTeamStandings() {
  return new Promise((resolve, reject) => {
    resolve([
      {
        rank: 1,
        teamName: 'Eggies',
        ownerName: 'Derek',
        wins: '5',
        losses: '6',
        ties: '2',
      },
    ]);
  });
}

function* loadStandings() {
  yield put(setIsLoading(true));

  try {
    const response = yield call(() => fetchTeamStandings());
    yield put(setTeamStandings(response));
  } catch (e) {} // In the future we'll want to handle this with a user prompt

  yield put(setIsLoading(false));
}

export const sagaTypes = {
  LOAD_STANDINGS: 'LOAD_STANDINGS',
};

export function* standingsTableSaga() {
  yield takeLatest(sagaTypes.LOAD_STANDINGS, loadStandings);
}
