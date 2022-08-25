/**
 *
 * Asynchronously loads the component for StandingsView
 *
 */

import { lazyLoad } from 'utils/loadable';

export const StandingsView = lazyLoad(
  () => import('./index'),
  module => module.StandingsView,
);