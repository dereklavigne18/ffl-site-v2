/**
 *
 * Pagination
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import BsPagination from 'react-bootstrap/Pagination';

import { theme } from 'styles/global-styles';

import { PaginationSize } from './types';


interface Props {
  size: PaginationSize;
  children: React.ReactNode;
}

export const Pagination = memo(({ size, children }: Props) => {
  return (
    <Div>
      <BsPagination size={size == PaginationSize.SM ? 'sm' : 'lg'}>
        {children}
      </BsPagination>
    </Div>
  );
});

const Div = styled.div`
  .pagination .page-link {
    background-color: #2eade8;
    color: ${theme.regularTextColor};
    font-weight: bold;
  }
`;
