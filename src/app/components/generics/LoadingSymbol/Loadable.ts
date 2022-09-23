/**
 *
 * Asynchronously loads the component for LoadingSymbol
 *
 */

import { lazyLoad } from 'utils/loadable';

export const LoadingSymbol = lazyLoad(
  () => import('./index'),
  module => module.LoadingSymbol,
);
