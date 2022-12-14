/**
 *
 * NavBar
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import BsNav from 'react-bootstrap/Nav';
import BsNavBar from 'react-bootstrap/Navbar';

import { theme } from 'styles/global-styles';

interface Props {
  children: React.ReactNode;
}

export const NavBar = memo(({ children }: Props) => {
  return (
    <Div>
      <BsNavBar fixed="top">
        <BsNav>
          <BsNav.Link href="/"><LogoDiv><LogoImg src="/ffl-inner-colored-xs.png" />FFL</LogoDiv></BsNav.Link>
          {children}
        </BsNav>
        <BsNav className="ms-auto">
          <BsNav.Link href="https://fantasy.espn.com/football/league?leagueId=1363114">ESPN</BsNav.Link>
          <BsNav.Link href="https://fantasy.espn.com/football/league?leagueId=1372219">Yahoo</BsNav.Link>
        </BsNav>
      </BsNavBar>
    </Div>
  );
});

const Div = styled.div`
  .navbar {
    background-color: #2eade8;

    .navbar-nav a {
      color: white;
      font-weight: bold;
    }
  }
`;

const LogoDiv = styled.div`
  color: #835c96;
  font-weight: 999;
`;

const LogoImg = styled.img`
  margin-top: -5px;
  padding-left: 15px;
  padding-right: 10px;
`;
