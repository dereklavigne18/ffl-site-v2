import { sagaTypes } from './saga';

export function loadStandings({ year }) {
  return { type: sagaTypes.LOAD_STANDINGS, year };
}
