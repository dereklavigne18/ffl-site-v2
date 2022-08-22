/**
 *
 * Asynchronously loads the component for NavBar
 *
 */

import { lazyLoad } from 'utils/loadable';

export const NavBar = lazyLoad(
  () => import('./NavBar/index'),
  module => module.NavBar,
);

export const NavItem = lazyLoad(
  () => import('./NavItem/index'),
  module => module.NavItem,
);
