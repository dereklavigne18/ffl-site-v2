/**
 *
 * NavBar
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import BsNav from 'react-bootstrap/Nav';
import BsNavBar from 'react-bootstrap/Navbar';

interface Props {
  children: React.ReactNode;
}

export const NavBar = memo(({ children }: Props) => {
  return (
    <BsNavBar fixed="top" bg="dark" className="navbar-dark">
      <BsNav>
        <BsNav.Link href="/">Home</BsNav.Link>
        {children}
      </BsNav>
      <BsNav className="ms-auto">
        <BsNav.Link href="https://fantasy.espn.com/football/league?leagueId=1363114">ESPN</BsNav.Link>
        <BsNav.Link href="https://fantasy.espn.com/football/league?leagueId=1372219">Yahoo</BsNav.Link>
      </BsNav>
    </BsNavBar>
  );
});

const Div = styled.div``;
