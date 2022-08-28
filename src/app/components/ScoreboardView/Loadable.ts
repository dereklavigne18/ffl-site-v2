/**
 *
 * Asynchronously loads the component for ScoreboardView
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ScoreboardView = lazyLoad(
  () => import('./index'),
  module => module.ScoreboardView,
);
