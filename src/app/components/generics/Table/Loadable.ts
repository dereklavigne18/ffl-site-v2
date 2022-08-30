/**
 *
 * Asynchronously loads the component for Table
 *
 */

import { lazyLoad } from 'utils/loadable';
import { TableSize as Size } from './types';


export const Table = lazyLoad(
  () => import('./index'),
  module => module.Table,
);

export const TableSize = Size;
