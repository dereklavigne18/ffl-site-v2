/**
 *
 * StandingsTable
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { TeamRecord } from '../types';
import { StandingsRow } from '../StandingsRow/index';


interface Props {
  teamRecords: TeamRecord[];
}

export const StandingsTable = memo(({ teamRecords }: Props) => {
  const sortedRecords = [...teamRecords].sort((a, b) => {
    if (a.rank < b.rank) return -1;
    if (a.rank > b.rank) return 1;
    return 0;
  });

  return (
    <Div>
      {sortedRecords.map((teamRecord) => (<StandingsRow {...teamRecord} />))}
    </Div>
  );
});

const Div = styled.div``;
