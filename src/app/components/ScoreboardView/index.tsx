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


interface Props {
  matchups: Matchup[];
  weeks: number[];
}

export const ScoreboardView = memo(({ matchups, weeks }: Props) => {
  const denormalized = matchups.reduce((d: TeamScore[], m) => {
    d.push(m.home);
    d.push(m.away);

    return d;
  }, []);

  // I need to shrink the text here
  return (
    <Section>
      <Container>
        <Row>
          <Col>
              <Pagination size={PaginationSize.SM}>
                <BsPagination.First />
                <BsPagination.Prev />
              </Pagination>
          </Col>
          <Col>
            <WeekTitle>WEEK 10</WeekTitle>
          </Col>
          <Col>
            <AlignedRight>
              <Pagination size={PaginationSize.SM}>
                <BsPagination.Next />
                <BsPagination.Last />
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
        <tbody>
          { denormalized.map(matchup => (
            <tr key={matchup.rank}>
              <td>{matchup.rank}</td>
              <td>{matchup.teamName}</td>
              <td>{matchup.points}</td>
            </tr>
          ))}
        </tbody>
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
`
