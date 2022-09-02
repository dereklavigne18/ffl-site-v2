/**
 *
 * Asynchronously loads the component for Select
 *
 */

import { lazyLoad } from 'utils/loadable';
import { SelectSize as Size } from './types';

export const Select = lazyLoad(
  () => import('./index'),
  module => module.Select,
);

export const SelectSize = Size;
