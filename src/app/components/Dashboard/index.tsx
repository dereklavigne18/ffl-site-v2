/**
 *
 * Dashboard
 *
 */
import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { View } from './View/index';
import { useDashboardSlice } from './slice';
import {
  selectLoadingMatchups,
  selectLoadingRecords,
  selectLoadingSeasons,
  selectMatchups,
  selectRecords,
  selectSeasons,
  selectWeeksInCurrentSeason,
  selectLatestWeekInSeason,
  selectSelectedSeason,
  selectSelectedWeek,
} from './slice/selectors';


export const Dashboard = memo(() => {
  // Config to slice
  const {
    loadMatchups,
    loadRecords,
    loadSeasons,
    setSelectedSeason,
    setSelectedWeek,
  } = useDashboardSlice();
  const dispatch = useDispatch();

  // Selectors
  const selectedSeason = useSelector(selectSelectedSeason);
  const selectedWeek = useSelector(selectSelectedWeek);
  const latestWeekInSeason = useSelector(selectLatestWeekInSeason(selectedSeason));

  // Hooks to load things when items change
  useEffect(() => {
    dispatch(loadSeasons());
  }, [dispatch]);
  useEffect(() => {
    dispatch(loadRecords(selectedSeason, latestWeekInSeason));
  }, [dispatch, selectedSeason, latestWeekInSeason]);
  useEffect(() => {
    dispatch(loadMatchups(selectedSeason, selectedWeek));
  }, [dispatch, selectedSeason, selectedWeek])

  return <View
    loadingSeasons={useSelector(selectLoadingSeasons)}
    seasons={useSelector(selectSeasons)}
    selectedSeason={selectedSeason}
    onChangeSeason={(season) => dispatch(setSelectedSeason(season))}
    weeksInSeason={useSelector(selectWeeksInCurrentSeason)}
    selectedWeek={useSelector(selectSelectedWeek)}
    onChangeWeek={(week) => dispatch(setSelectedWeek(week))}
    loadingRecords={useSelector(selectLoadingRecords)}
    records={useSelector(selectRecords)}
    matchups={useSelector(selectMatchups)}
    loadingMatchups={useSelector(selectLoadingMatchups)}
  />;
});
