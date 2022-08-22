/**
 *
 * Asynchronously loads the component for StandingsTable
 *
 */

import { lazyLoad } from 'utils/loadable';

export const StandingsTable = lazyLoad(
  () => import('./index'),
  module => module.StandingsTable,
);
