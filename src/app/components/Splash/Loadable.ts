/**
 *
 * Asynchronously loads the component for Splash
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Splash = lazyLoad(
  () => import('./index'),
  module => module.Splash,
);
