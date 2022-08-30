/**
 *
 * ScoreboardView
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { Section } from 'app/components/generics/Section/Loadable';
import { Table, TableSize } from 'app/components/generics/Table/Loadable';

import { Matchup, TeamScore } from './types';


interface Props {
  matchups: Matchup[];
}

export const ScoreboardView = memo(({ matchups }: Props) => {
  const denormalized = matchups.reduce((d: TeamScore[], m) => {
    d.push(m.home);
    d.push(m.away);

    return d;
  }, []);

  // I need to shrink the text here
  return (
    <Section>
      <Table size={TableSize.SM}>
        <THead>
          <tr>
            <th>RANK</th>
            <th>TEAM</th>
            <th>SCORE</th>
          </tr>
        </THead>
        <TBody>
          { denormalized.map(matchup => (
            <tr key={matchup.rank}>
              <td>{matchup.rank}</td>
              <td>{matchup.teamName}</td>
              <td>{matchup.points}</td>
            </tr>
          ))}
        </TBody>
      </Table>
    </Section>
  );
});


const TBody = styled.tbody`
color: #b0bef7;
font-family: Roboto;
`;

const THead = styled.thead`
color: white;
font-family: Roboto;
`;

