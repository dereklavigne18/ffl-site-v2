/**
 *
 * Dashboard
 *
 */
import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StandingsView } from 'app/components/StandingsView/Loadable';

import { useDashboardSlice } from './slice';
import { loadRecords } from './slice/actions';
import { selectLoadingRecords, selectRecords } from './slice/selectors';

export const Dashboard = memo(() => {
  // Config to slice
  useDashboardSlice();
  const dispatch = useDispatch();

  const year = 2018;

  // On initial render we need to fetch a bunch of data
  useEffect(() => {
    dispatch(loadRecords());
  }, [dispatch, year]);

  // Selectors
  const loadingRecords = useSelector(selectLoadingRecords);
  const records = useSelector(selectRecords);

  return (
    <div>
      <div>Year: {year}</div>
      {loadingRecords ? (
        <div>Loading...</div>
      ) : (
        <StandingsView teamRecords={records} />
      )}
    </div>
  );
});
