/**
 *
 * Asynchronously loads the component for Section
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Section = lazyLoad(
  () => import('./index'),
  module => module.Section,
);
