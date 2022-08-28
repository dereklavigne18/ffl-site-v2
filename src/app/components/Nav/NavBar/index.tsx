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
        <BsNav.Link href="/">ESPN</BsNav.Link>
        <BsNav.Link href="/">Yahoo</BsNav.Link>
      </BsNav>
    </BsNavBar>
  );
});

const Div = styled.div``;
