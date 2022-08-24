/**
 *
 * Asynchronously loads the component for Standings
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Standings = lazyLoad(
  () => import('./index'),
  module => module.Standings,
);