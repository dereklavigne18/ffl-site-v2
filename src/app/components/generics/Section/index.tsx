/**
 *
 * Section
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { theme } from 'styles/global-styles';

interface Props {
  children: React.ReactNode;
}

export const Section = memo(({ children }: Props) => {
  return <Div>{ children }</Div>;
});

const Div = styled.div`
  background-color: ${theme.secondaryBackgroundColor};
  padding: 10px;
  border-radius: 2%;
`;
