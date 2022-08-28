/**
 *
 * Dashboard
 *
 */
import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { ScoreboardView } from 'app/components/ScoreboardView/Loadable';
import { StandingsView } from 'app/components/StandingsView/Loadable';

import { useDashboardSlice } from './slice';
import { loadMatchups, loadRecords } from './slice/actions';
import {
  selectLoadingMatchups,
  selectLoadingRecords,
  selectMatchups,
  selectRecords,
} from './slice/selectors';

// TODO - These will go once I have moved this all into a view
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';




export const Dashboard = memo(() => {
  // Config to slice
  useDashboardSlice();
  const dispatch = useDispatch();

  const year = 2016;

  // On initial render we need to fetch a bunch of data
  useEffect(() => {
    dispatch(loadRecords());
    dispatch(loadMatchups());
  }, [dispatch, year]);

  // Selectors
  const loadingMatchups = useSelector(selectLoadingMatchups);
  const loadingRecords = useSelector(selectLoadingRecords);
  const matchups = useSelector(selectMatchups);
  const records = useSelector(selectRecords);

  return (
    <Div>
      <Container>
        <Row>
          <Col sm={8} md={8} lg={8} xl={8} xxl={8}>
            <h1>Standings</h1>
            {loadingRecords ? (
              <div>Loading...</div>
            ) : (
              <StandingsView teamRecords={records} />
            )}
          </Col>
          <Col sm={{span:3, offset:1 }} md={{span:3, offset:1 }} lg={{span:3, offset:1 }} xl={{span:3, offset:1 }} xxl={{span:3, offset:1 }}>
            <ScoreboardDiv>
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

const Div = styled.div`
  background-color: white;
  width: 100%;
  margin: auto;
`;

const ScoreboardDiv = styled.div`
  padding-top: 120px;
`;