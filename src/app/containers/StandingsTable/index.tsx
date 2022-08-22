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
import { selectAreStandingsLoading } from './slice/selectors';

interface Props {}

export const StandingsTable = memo((props: Props) => {
  // Register state and store and get the dispatcher
  useStandingsTableSlice();
  const dispatch = useDispatch();

  // Load state
  const isLoading = useSelector(selectAreStandingsLoading);

  return (
    <Div>
      hello world
      <Div>{isLoading ? "Loading..." : "Standings"}</Div>
      <button onClick={() => dispatch({ type: sagaTypes.LOAD_STANDINGS })}>Load Standings</button>
    </Div>
  );
});

const Div = styled.div``;
