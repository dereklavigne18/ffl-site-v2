import { sagaTypes } from './saga';

export function loadRecords() {
  return { type: sagaTypes.LOAD_RECORDS };
}

export function loadMatchups() {
  return { type: sagaTypes.LOAD_MATCHUPS };
}
