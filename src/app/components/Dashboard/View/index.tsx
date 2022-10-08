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

import { LoadingSymbol } from 'app/components/generics/LoadingSymbol/Loadable';
import { Select, SelectSize } from 'app/components/generics/Select/Loadable';
import { ScoreboardView } from 'app/components/ScoreboardView/Loadable';
import { StandingsView } from 'app/components/StandingsView/Loadable';

import { Matchup, TeamRecord } from './types';

interface OnChangeSeason {
  (season: number): void;
}

interface OnChangeWeek {
  (week: number): void;
}

interface Props {
  loadingSeasons: boolean,
  seasons: number[];
  selectedSeason: number;
  onChangeSeason: OnChangeSeason;
  weeksInSeason: number[];
  selectedWeek: number;
  onChangeWeek: OnChangeWeek;
  loadingMatchups: boolean;
  matchups: Matchup[];
  records: TeamRecord[];
  loadingRecords: boolean;
}

export const View = memo(({
  loadingSeasons,
  seasons,
  selectedSeason,
  onChangeSeason,
  weeksInSeason,
  selectedWeek,
  onChangeWeek,
  loadingMatchups,
  matchups,
  loadingRecords,
  records,
}: Props) => {
  return (
    <Div>
      <StandingsHeader>SEASON DASHBOARD</StandingsHeader>
      {loadingSeasons ? <LoadingSymbol />
      : (
        <Container>
          <Row>
            <Col sm={8} md={8} lg={8} xl={8} xxl={8}>
              <SeasonSelect>
                <Select selectedValue={selectedSeason} size={SelectSize.SM} disabled={loadingRecords} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onChangeSeason(Number(e.target.value))} >
                  {seasons.map(season => <option key={season} value={season}>Season {season}</option>)}
                </Select>
              </SeasonSelect>
              {loadingRecords ? (
                <LoadingSymbol />
              ) : (
                <StandingsView teamRecords={records} />
              )}
            </Col>
            <Col sm={{span:4, offset:0 }} md={{span:4, offset:0 }} lg={{span:4, offset:0 }} xl={{span:4, offset:0 }} xxl={{span:4, offset:0 }}>
              <ScoreboardDiv>
                {loadingMatchups ? (
                  <LoadingSymbol />
                ) : (
                  <ScoreboardView matchups={matchups} weeks={weeksInSeason} selectedWeek={selectedWeek} onChangeWeek={onChangeWeek} />
                )}
              </ScoreboardDiv>
            </Col>
          </Row>
        </Container>
      )}
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
  padding-top: 31px;
`;

const StandingsHeader = styled.h1`
  padding-bottom: 20px;
  text-align: center;
`;

const SeasonSelect = styled.div`
  min-width: 120px;
  width: 20%;
`;