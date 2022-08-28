/**
 *
 * StandingsRow
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { TeamRecord } from '../types';

export const StandingsRow = memo(
  ({
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
      <tr>
        <td>{rank}</td>
        <td>{teamName}</td>
        <td>{ownerName}</td>
        <td>
          {wins}-{losses}-{ties}
        </td>
        <td>{pointsFor}</td>
        <td>{pointsAgainst}</td>
      </tr>
    );
  },
);

const Div = styled.div``;
