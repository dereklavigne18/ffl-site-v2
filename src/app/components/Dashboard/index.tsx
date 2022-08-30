/**
 *
 * Dashboard
 *
 */
import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { View } from './View/index';
import { useDashboardSlice } from './slice';
import { loadMatchups, loadRecords } from './slice/actions';
import { selectLoadingMatchups, selectLoadingRecords, selectMatchups, selectRecords } from './slice/selectors';


export const Dashboard = memo(() => {
  // Config to slice
  useDashboardSlice();
  const dispatch = useDispatch();

  const year = 2016;

  // On initial render we need to fetch a bunch of data
  useEffect(() => {
    dispatch(loadRecords());
    dispatch(loadMatchups());
  }, [dispatch, year]);

  // Selectors
  const loadingMatchups = useSelector(selectLoadingMatchups);
  const loadingRecords = useSelector(selectLoadingRecords);
  const matchups = useSelector(selectMatchups);
  const records = useSelector(selectRecords);

  return <View loadingMatchups={loadingMatchups} loadingRecords={loadingRecords} matchups={matchups} records={records} />;
});
