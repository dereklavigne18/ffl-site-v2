/**
 *
 * Footer
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { theme } from 'styles/global-styles';

interface Props {}

export const Footer = memo((props: Props) => {
  return (
    <Div>
      <p>Built and maintained by Derek Lavigne - <a href="https://github.com/dereklavigne18">GitHub</a></p>
    </Div>
  );
});

const Div = styled.div`
  // Spacing
  margin-top: 20px;
  padding: 3px;

  // Position
  width: 100%;

  // Borders
  border-top: 1px solid ${theme.headerTextColor};

  // Content Position (Centered)
  text-align: center;

  // Colors
  background-color: ${theme.primaryBackgroundColor};
  color: ${theme.headerTextColor};
  a {
    color: #2eade8;
  }

  // Text
  font-size: 11px;
`;
