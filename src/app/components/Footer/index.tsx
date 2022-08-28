/**
 *
 * Footer
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

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
  margin-top: 1px;
  padding: 1px;

  // Position
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  // Borders
  border-top: 1px solid black;

  // Content Position (Centered)
  text-align: center;
`;
