/**
 *
 * Standings
 *
 */
import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StandingsView } from 'app/components/StandingsView/Loadable';

import { useStandingsSlice } from './slice';
import { loadStandings } from './slice/actions';
import {
  selectAreStandingsLoading,
  selectTeamStandings,
} from './slice/selectors';

interface Props {
  year: number;
}

export const Standings = memo(({ year }: Props) => {
  // Register state and store and get the dispatcher
  useStandingsSlice();
  const dispatch = useDispatch();

  // On render we need to fetch the standings to display
  useEffect(() => {
    dispatch(loadStandings({ year }));
  }, [dispatch, year]);

  // Load state
  const isLoading = useSelector(selectAreStandingsLoading);
  const teamStandings = useSelector(selectTeamStandings);

  return (
    <div>
      <div>Year: { year }</div>
      {isLoading ? (
        <div>"Loading..."</div>
      ) : <StandingsView teamRecords={teamStandings} />}
    </div>
  );
});
