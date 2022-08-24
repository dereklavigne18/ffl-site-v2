/**
 *
 * StandingsTable
 *
 */
import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useStandingsTableSlice } from './slice';
import { loadStandings } from './slice/actions';
import {
  selectAreStandingsLoading,
  selectTeamStandings,
} from './slice/selectors';

interface Props {
  year: number;
}

export const StandingsTable = memo(({ year }: Props) => {
  // Register state and store and get the dispatcher
  useStandingsTableSlice();
  const dispatch = useDispatch();

  // On render we need to fetch the standings to display
  useEffect(() => {
    dispatch(loadStandings({ year }));
  }, [dispatch, year]);

  // Load state
  const isLoading = useSelector(selectAreStandingsLoading);
  const teamStandings = useSelector(selectTeamStandings);

  return (
    <Div>
      {isLoading ? (
        <Div>"Loading..."</Div>
      ) : (
        teamStandings.map(team => (
          <Div key={team.rank}>
            {team.rank} {team.teamName} {team.wins}-{team.losses}-{team.ties}
          </Div>
        ))
      )}
    </Div>
  );
});

const Div = styled.div``;
