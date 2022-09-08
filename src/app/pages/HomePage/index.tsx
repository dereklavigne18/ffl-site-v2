/**
 *
 * StandingsPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { Dashboard } from 'app/components/Dashboard/Loadable';
import { Splash } from 'app/components/Splash/Loadable';


export const HomePage = memo(() => {
  return (
    <div>
      <Splash />
      <Dashboard />
    </div>
  );
});

