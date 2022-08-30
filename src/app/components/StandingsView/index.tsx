/**
 *
 * StandingsView
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { Section } from 'app/components/generics/Section/Loadable';
import { Table } from 'app/components/generics/Table/Loadable';

import { TeamRecord } from './types';
import { StandingsRow } from './StandingsRow/index';

interface Props {
  teamRecords: TeamRecord[];
}

export const StandingsView = memo(({ teamRecords }: Props) => {
  const sortedRecords = [...teamRecords].sort((a, b) => {
    if (a.rank < b.rank) return -1;
    if (a.rank > b.rank) return 1;
    return 0;
  });

  return (
    <Section>
      <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>TEAM</th>
          <th>OWNER</th>
          <th>RECORD</th>
          <th>PTS FOR</th>
          <th>PTS AGAINST</th>
        </tr>
      </thead>
      <tbody>
        {sortedRecords.map(teamRecord => (
          <StandingsRow key={teamRecord.teamId} {...teamRecord} />
        ))}
      </tbody>
    </Table>
    </Section>
  );
});
