/**
 *
 * StandingsTable
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface TeamRecord {
  rank: number,
  teamName: string,
  ownerName: string,
  wins: number,
  losses: number,
  ties: number,
  pointsFor: number,
  pointsAgainst: number,
}

interface Props {
  teamRecords: TeamRecord[],
}

export const StandingsTable = memo(({ teamRecords }: Props) => {
  const sortedRecords = teamRecords.sort((a, b) => {
    if (a.rank < b.rank) return -1;
    if (a.rank > b.rank) return 1;
    return 0;
  });

  return (
    <Div>
      sortedRecords.map((teamRecord) => <StandingsRow {...teamRecord} />)
    </Div>
  );
});

const Div = styled.div``;
