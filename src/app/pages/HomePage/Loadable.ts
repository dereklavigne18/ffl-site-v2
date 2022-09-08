/**
 *
 * Asynchronously loads the component for StandingsPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const HomePage = lazyLoad(
  () => import('./index'),
  module => module.HomePage,
);
