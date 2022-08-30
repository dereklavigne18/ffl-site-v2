/**
 *
 * Dashboard View
 *
 */
import React, { memo, useEffect } from 'react';
import styled from 'styled-components/macro';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { theme } from 'styles/global-styles';

import { ScoreboardView } from 'app/components/ScoreboardView/Loadable';
import { StandingsView } from 'app/components/StandingsView/Loadable';

import { Matchup, TeamRecord } from './types';


interface Props {
  loadingMatchups: boolean;
  loadingRecords: boolean;
  matchups: Matchup[];
  records: TeamRecord[];
}

export const View = memo(({
  loadingMatchups,
  loadingRecords,
  matchups,
  records,
}: Props) => {
  return (
    <Div>
      <StandingsHeader>SEASON DASHBOARD</StandingsHeader>
      <Container>
        <Row>
          <Col sm={8} md={8} lg={8} xl={8} xxl={8}>
            {loadingRecords ? (
              <div>Loading...</div>
            ) : (
              <StandingsView teamRecords={records} />
            )}
          </Col>
          <Col sm={{span:4, offset:0 }} md={{span:4, offset:0 }} lg={{span:4, offset:0 }} xl={{span:4, offset:0 }} xxl={{span:4, offset:0 }}>
            <ScoreboardDiv>
              Week <select><option>14</option></select> Scores
              {loadingMatchups ? (
                <div>Loading...</div>
              ) : (
                <ScoreboardView matchups={matchups} />
              )}
            </ScoreboardDiv>
          </Col>
        </Row>
      </Container>
    </Div>
  );
});


const {
  primaryBackgroundColor,
  regularTextColor
} = theme;

const Div = styled.div`
  background-color: ${primaryBackgroundColor};
  color: ${regularTextColor};
`;

const ScoreboardDiv = styled.div`
  padding-top: 60px;
  margin-left: 50px;
`;

const StandingsHeader = styled.h1`
  padding-bottom: 20px;
  text-align: center;
`;