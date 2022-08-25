/**
 *
 * StandingsPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { Standings } from '../../containers/StandingsContainer/Loadable';

interface Props {}

export const StandingsPage = memo((props: Props) => {
  return (
    <Div>
      <Standings year={2018} />
    </Div>
  );
});

const Div = styled.div``;
