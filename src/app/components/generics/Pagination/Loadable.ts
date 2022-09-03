/**
 *
 * Asynchronously loads the component for Pagination
 *
 */

import { lazyLoad } from 'utils/loadable';

import { PaginationSize as Size } from './types';

export const Pagination = lazyLoad(
  () => import('./index'),
  module => module.Pagination,
);

export const PaginationSize = Size;