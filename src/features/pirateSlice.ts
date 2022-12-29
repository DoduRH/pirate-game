import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SquareState from '../interfaces/squareState';

export interface PirateState {
  grid: SquareState[][];
  gridSize: number;
}

const iGridSize = 5;

const initialState: PirateState = {
  grid: new Array(iGridSize).fill(
    new Array(iGridSize).fill(SquareState.Empty)
  ),
  gridSize: iGridSize,
};

export const pirateSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setGridSize: (state, action: PayloadAction<number>) => {
      state.gridSize = action.payload;
      state.grid = new Array(state.gridSize).fill(
        new Array(state.gridSize).fill(SquareState.Empty)
      );
    },
  },
});

export const { setGridSize } = pirateSlice.actions;

export default pirateSlice.reducer;
