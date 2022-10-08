/**
 *
 * ScoreboardView
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BsPagination from 'react-bootstrap/Pagination';

import { Pagination, PaginationSize } from 'app/components/generics/Pagination/Loadable';
import { Section } from 'app/components/generics/Section/Loadable';
import { Table, TableSize } from 'app/components/generics/Table/Loadable';

import { Matchup, TeamScore } from './types';


interface OnChangeWeek {
  (week: number): void;
}

interface Props {
  matchups: Matchup[];
  weeks: number[];
  selectedWeek: number;
  onChangeWeek: OnChangeWeek;
}

export const ScoreboardView = memo(({ matchups, weeks, selectedWeek, onChangeWeek }: Props) => {
  const onClickFirstWeek = () => onChangeWeek(1);
  const onClickDecrementWeek = () => onChangeWeek(Math.max(1, selectedWeek - 1));
  const onClickIncrementWeek = () => onChangeWeek(Math.min(weeks[weeks.length - 1], selectedWeek + 1));
  const onClickLastWeek = () => onChangeWeek(weeks[weeks.length - 1]);

  const scoreRows = matchups.reduce((d: React.ReactNode[], m) => {
    const h = m.home;
    const a = m.away;

    d.push(
      <HomeScore key={h.rank}>
        <td>{h.rank}</td>
        <td>{h.teamName}</td>
        <td>{h.points}</td>
      </HomeScore>
    );
    d.push(
      <AwayScore key={a.rank}>
        <td>{a.rank}</td>
        <td>{a.teamName}</td>
        <td>{a.points}</td>
      </AwayScore>
    );

    return d;
  }, []);

  // I need to shrink the text here
  return (
    <Section>
      <Container>
        <Row>
          <Col>
              <Pagination size={PaginationSize.SM}>
                <BsPagination.First onClick={onClickFirstWeek} />
                <BsPagination.Prev onClick={onClickDecrementWeek} />
              </Pagination>
          </Col>
          <Col>
            <WeekTitle>WEEK {selectedWeek}</WeekTitle>
          </Col>
          <Col>
            <AlignedRight>
              <Pagination size={PaginationSize.SM}>
                <BsPagination.Next onClick={onClickIncrementWeek} />
                <BsPagination.Last onClick={onClickLastWeek} />
              </Pagination>
            </AlignedRight>
          </Col>
        </Row>
      </Container>
      <Table size={TableSize.SM}>
        <thead>
          <tr>
            <th>RANK</th>
            <th>TEAM</th>
            <th>SCORE</th>
          </tr>
        </thead>
        <TBody>
          { scoreRows }
        </TBody>
      </Table>
    </Section>
  );
});

const AlignedRight = styled.div`
  display: flex;
  justify-content: right;
`;

const WeekTitle = styled.div`
  font-weight: bold;
  text-align: center;
`;

const HomeScore = styled.tr`
  border-top: 1px solid #dee2e6;
  border-bottom: 0;

  td {
    border: none;
  }
`;

const AwayScore = styled.tr`
  border: none;
  border-bottom-width: 0;

  td {
    border: none;
  }
`;

const TBody = styled.tbody`
  border-bottom: 1px solid #dee2e6;
`;
