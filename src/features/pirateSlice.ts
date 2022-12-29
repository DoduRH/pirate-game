import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PirateState {
  gridSize: number
}

const initialState: PirateState = {
  gridSize: -1
};

export const pirateSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setGridSize: (state, action: PayloadAction<number>) => {
      state.gridSize = action.payload;
    }
  },
});

export const { setGridSize } = pirateSlice.actions;

export default pirateSlice.reducer;
