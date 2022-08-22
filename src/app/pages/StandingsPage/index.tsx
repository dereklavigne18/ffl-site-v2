/**
 *
 * StandingsPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { StandingsTable } from '../../containers/StandingsTable/Loadable';

interface Props {}

export const StandingsPage = memo((props: Props) => {
  return (
    <Div>
      <StandingsTable />
    </Div>
  );
});

const Div = styled.div``;
