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
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Team</th>
          <th>Owner</th>
          <th>Record</th>
          <th>Points For</th>
          <th>Points Against</th>
        </tr>
      </thead>
      <tbody>
        {sortedRecords.map(teamRecord => (
          <StandingsRow key={teamRecord.teamId} {...teamRecord} />
        ))}
      </tbody>
    </Table>
  );
});

const Table = styled.table``;
