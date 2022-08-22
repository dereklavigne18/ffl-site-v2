import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import slice from './slice';
import { standingsTableSaga } from './saga';


export const useStandingsTableSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: standingsTableSaga });
  return { actions: slice.actions };
};
