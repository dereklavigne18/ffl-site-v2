import { put, takeLatest } from 'redux-saga/effects';
import slice from './slice';

const { setIsLoading } = slice.actions;

function* loadStandings() {
   yield put(setIsLoading(true));
   yield put(setIsLoading(false));
}

export const sagaTypes = {
  LOAD_STANDINGS: "LOAD_STANDINGS",
}

export function* standingsTableSaga() {
  yield takeLatest(sagaTypes.LOAD_STANDINGS, loadStandings);
}
