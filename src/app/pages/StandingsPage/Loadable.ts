/**
 *
 * Asynchronously loads the component for StandingsPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const StandingsPage = lazyLoad(
  () => import('./index'),
  module => module.StandingsPage,
);
