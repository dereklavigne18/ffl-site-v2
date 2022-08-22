/**
 *
 * StandingsTable
 *
 */
import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useStandingsTableSlice } from './slice';
import { sagaTypes } from './slice/saga';
import { selectAreStandingsLoading, selectTeamStandings } from './slice/selectors';

interface Props {}

export const StandingsTable = memo((props: Props) => {
  // Register state and store and get the dispatcher
  useStandingsTableSlice();
  const dispatch = useDispatch();

  // Load state
  const isLoading = useSelector(selectAreStandingsLoading);
  const teamStandings = useSelector(selectTeamStandings);
  console.log(teamStandings);

  return (
    <Div>
      {isLoading
        ? <Div>"Loading..."</Div>
        : teamStandings.map(team =><Div>{team.teamName}</Div>)}
      <button onClick={() => dispatch({ type: sagaTypes.LOAD_STANDINGS })}>Load Standings</button>
    </Div>
  );
});

const Div = styled.div``;
