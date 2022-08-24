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
      <StandingsTable year={2018} />
    </Div>
  );
});

const Div = styled.div``;
