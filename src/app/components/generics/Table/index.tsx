/**
 *
 * Table
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import BsTable from 'react-bootstrap/Table';

import { theme } from 'styles/global-styles';

import { TableSize } from './types';


interface Props {
  size?: TableSize;
  children: React.ReactNode;
}

export const Table = memo(({ size = TableSize.MD, children }: Props) => {
  return size == TableSize.SM ? (
    <SmallTable>
      <BsTable size="sm" responsive="lg">{ children }</BsTable>
    </SmallTable>) : (
    <MediumTable>
      <BsTable responsive="lg">{ children }</BsTable>
    </MediumTable>
  );
});

const SmallTable = styled.div`
  table {
    font-size: 14px;

    thead {
      color: ${theme.headerTextColor};
    }
    tbody {
      color: ${theme.regularTextColor};
    }
  }
`;
const MediumTable = styled.div`
  table {
    thead {
      color: ${theme.headerTextColor};
    }
    tbody {
      color: ${theme.regularTextColor};
    }
  }
`;

