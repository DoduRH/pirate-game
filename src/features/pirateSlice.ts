import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
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

interface SetSquareInterface extends xyPos { }

const iGridSize = -1;

const initialState: PirateState = {
  grid: Array.from({ length: iGridSize },
    (_, i) => new Array(iGridSize).fill(SquareState.Empty)
  ),
  gridSize: iGridSize,
  history: [],
};

function setRecent(state: WritableDraft<PirateState>, pos: xyPos) {
  state.history = [pos, ...state.history];
  for (let x = 0; x < state.grid.length; x++) {
    for (let y = 0; y < state.grid[x].length; y++) {
      if (state.grid[x][y] == SquareState.Recent) {
        state.grid[x][y] = SquareState.Used;
      }
    }
  }
  state.grid[pos.x][pos.y] = SquareState.Recent;
}

function resetGrid(state: WritableDraft<PirateState>) {
  state.grid = new Array(state.gridSize).fill(
    new Array(state.gridSize).fill(SquareState.Empty)
  );
  state.history = [];
}

export const pirateSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    resetGrid: (state) => {
      resetGrid(state);
    },
    setGridSize: (state, action: PayloadAction<number>) => {
      state.gridSize = action.payload;
      if (state.gridSize > 0) {
        resetGrid(state);
      }
    },
    setRecentSquare: (state, action: PayloadAction<SetSquareInterface>) => {
      setRecent(state, action.payload);
    },
    toggleSquare: (state, action: PayloadAction<xyPos>) => {
      console.log("Toggle")
      if (state.grid[action.payload.x][action.payload.y] === SquareState.Empty) {
        setRecent(state, action.payload);
      } else {
        state.grid[action.payload.x][action.payload.y] = SquareState.Empty;
      }
    }
  },
});

export const { setGridSize, setRecentSquare, toggleSquare } = pirateSlice.actions;

export default pirateSlice.reducer;
