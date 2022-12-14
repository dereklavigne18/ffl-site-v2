/**
 *
 * NavItem
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import BsNav from 'react-bootstrap/Nav';

interface Props {
  displayName: string;
  url: string;
}

export const NavItem = memo(({ displayName, url }: Props) => {
  return <BsNav.Link href={url}>{displayName}</BsNav.Link>;
});
