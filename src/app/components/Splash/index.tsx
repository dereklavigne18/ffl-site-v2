/**
 *
 * Splash
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

export const Splash = memo(() => {
  return (
    <SplashDiv>
      <SplashImg src="/images/ffl-lineup.png" />
      <SplashIconImg src="/ffl-outer-colored-lg.png" />
    </SplashDiv>
  );
});

const SplashDiv = styled.div`
  position: relative;
`;

const SplashImg = styled.img`
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  width: 100%;
  z-index: -1;
`;

const SplashIconImg = styled.img`
  // Center
  top: 50px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  // Stack it on top of image
  position: absolute;
  z-index: 2;

  // Sizing and auto-scaling
  max-width: 30%;
  height: auto;
`;
