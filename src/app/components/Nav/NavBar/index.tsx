/**
 *
 * NavBar
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

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
