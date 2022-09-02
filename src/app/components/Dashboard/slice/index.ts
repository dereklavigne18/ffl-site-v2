import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { dashboardSaga, sagaActions } from './saga';
import slice from './slice';

export const useDashboardSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: dashboardSaga });
  return { ...slice.actions, ...sagaActions };
};
