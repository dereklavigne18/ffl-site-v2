/**
 *
 * NavItem
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

interface Props {
  displayName: string,
  url: string,
}

export const NavItem = memo(({ displayName, url }: Props) => {
  return <Div><a href={url}>{displayName}</a></Div>;
});

const Div = styled.div``;
