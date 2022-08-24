import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import slice from './slice';
import { standingsSaga } from './saga';

export const useStandingsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: standingsSaga });
  return { actions: slice.actions };
};
