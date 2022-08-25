/**
 *
 * StandingsRow
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { TeamRecord } from '../types';


export const StandingsRow = memo(({
  rank,
  teamName,
  ownerName,
  wins,
  losses,
  ties,
  pointsFor,
  pointsAgainst,
}: TeamRecord) => {
  return (
    <Div>
      {rank} {teamName} {ownerName} {wins}-{losses}-{ties} {pointsFor} {pointsAgainst}
    </Div>
  );
});

const Div = styled.div``;
