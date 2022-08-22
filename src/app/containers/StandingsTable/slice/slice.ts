import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';

import { StandingsTableState } from './types';

export const initialState: StandingsTableState = {
  teamStandings: [],
  isLoading: false,
};

const slice = createSlice({
  name: 'standingsTable',
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export default slice;