/**
 *
 * ScoreboardView
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

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

  return (
    <Div>
      <div>Week 14 Scores</div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          { denormalized.map(matchup => (
            <tr key={matchup.rank}>
              <td>{matchup.rank}</td>
              <td>{matchup.teamName}</td>
              <td>{matchup.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Div>
  );
});

const Div = styled.div`
    // Outline
    border: 1px solid black;
    padding: 10px;

    // Text
    font-size: 12px;
`;


