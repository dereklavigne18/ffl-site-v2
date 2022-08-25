/**
 *
 * StandingsView
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { TeamRecord } from './types';
import { StandingsTable } from './StandingsTable/index';

interface Props {
  teamRecords: TeamRecord[],
}

export const StandingsView = memo(({ teamRecords }: Props) => {
  return <StandingsTable teamRecords={teamRecords} />;
});

const Div = styled.div``;
