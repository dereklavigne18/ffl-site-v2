/**
 *
 * Select
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import Form from 'react-bootstrap/Form';

import { theme } from 'styles/global-styles';

import { SelectSize } from './types';

interface OnChange {
  (event: React.ChangeEvent<HTMLSelectElement>): void;
}

interface Props {
  selectedValue: any;
  onChange: OnChange;
  size: SelectSize;
  disabled: boolean;
  children: React.ReactNode;
}

export const Select = memo(({ selectedValue, onChange, size, disabled, children }: Props) => {
  return (
    <Div>
      <Form.Select value={selectedValue} disabled={disabled} size={size == SelectSize.SM ? "sm" : "lg"} onChange={onChange}>
        {children}
      </Form.Select>
    </Div>
  );
});

const Div = styled.div`
  width: 20%;

  select {
    background-color: ${theme.titleTextColor};
    font-weight: bold;
  }

  option {
    background-color: ${theme.headerTextColor};
    font-weight: bold;
  }
`;
