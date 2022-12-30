import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SquareState from '../interfaces/squareState';

export interface xyPos {
  x: number,
  y: number,
}

export interface PirateState {
  grid: SquareState[][];
  gridSize: number;
  history: xyPos[];
}

interface SetSquareInterface extends xyPos{}

const iGridSize = 5;

const initialState: PirateState = {
  grid: Array.from({length:iGridSize}, 
    (_, i) => new Array(iGridSize).fill(SquareState.Empty)
  ),
  gridSize: iGridSize,
  history: [],
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
    setRecentSquare: (state, action: PayloadAction<SetSquareInterface>) => {
      for (let x = 0; x < state.grid.length; x++) {
        for (let y = 0; y < state.grid[x].length; y++) {
          if (state.grid[x][y] == SquareState.Recent) {
            state.grid[x][y] = SquareState.Used;
            state.history = [{x, y}, ...state.history];
          }
        }
      }
      state.grid[action.payload.x][action.payload.y] = SquareState.Recent;
    }
  },
});

export const { setGridSize, setRecentSquare } = pirateSlice.actions;

export default pirateSlice.reducer;
