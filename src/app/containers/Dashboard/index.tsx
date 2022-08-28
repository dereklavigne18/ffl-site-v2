/**
 *
 * Dashboard
 *
 */
import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
    <Container>
      <Row>
        <Col sm={6} md={6} lg={6} xl={6} xxl={6}>
          {loadingRecords ? (
            <div>Loading...</div>
          ) : (
            <StandingsView teamRecords={records} />
          )}
        </Col>
        <Col sm={{span:3, offset:3 }} md={{span:3, offset:3 }} lg={{span:3, offset:3 }} xl={{span:3, offset:3 }} xxl={{span:3, offset:3 }}>
          {loadingMatchups ? (
            <div>Loading...</div>
          ) : (
            <ScoreboardView matchups={matchups} />
          )}
        </Col>
      </Row>
    </Container>
  );
});
