/**
 *
 * NavBar
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { NavItem } from '../NavItem/index';

interface Props {
    children: React.ReactNode;
}

export const NavBar = memo(({ children }: Props) => {
  return (
    <Div>
      <a href="/">Home</a>
      {children}
    </Div>
  );
});

const Div = styled.div``;
