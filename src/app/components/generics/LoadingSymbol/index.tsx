/**
 *
 * LoadingSymbol
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface Props {}

export const LoadingSymbol = memo((props: Props) => {
  return (
    <Div>
      <SpinningImg src="/logo-inner-white.png" />
    </Div>
  );
});

const Div = styled.div`
  margin-left: 33%;
`;
const SpinningImg = styled.img`
  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }

  animation-name: spin;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  max-width: 50%;
  height: auto;
`;