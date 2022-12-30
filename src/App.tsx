import { PirateState, setGridSize, setRecentSquare } from './features/pirateSlice';
import './App.css';
import Grid from './components/grid';
import History from './components/history';
import CordDisplay from './components/cords';
import Button from './components/button';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SquareState from './interfaces/squareState';

function App() {
  const dispatch = useDispatch();
  const gridSize = useSelector((state: PirateState) => state.gridSize);
  const grid = useSelector((state: PirateState) => state.grid);

  function nextSquare() {
    let x: number, y: number;

    do {
      x = Math.floor(Math.random() * gridSize);
      y = Math.floor(Math.random() * gridSize);
    } while (grid[x][y] != SquareState.Empty);

    dispatch(setRecentSquare({ x: x, y: y }));

  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Enter') {
        if (e.target instanceof Element) {
          if (e.target.tagName != 'BUTTON') {
            nextSquare();
          }
        } else {
          nextSquare();
        }
      } else if (e.key == 'r') {
        dispatch(setGridSize(gridSize));
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [grid]);

  return (
    <div className="App">
      <div className='infoCol'>
        <Button onClick={nextSquare} text="Next" />
        <CordDisplay />
        <History />
      </div>
      <div className='gridArea'>
        <Grid />
      </div>
    </div>
  );
}

export default App;
