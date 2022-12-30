import { PirateState, setGridSize, setRecentSquare } from './features/pirateSlice';
import './App.css';
import Grid from './components/grid';
import History from './components/history';
import CordDisplay from './components/cords';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SquareState from './interfaces/squareState';
import Button from './components/button';

function App() {
  const dispatch = useDispatch();
  const gridSize = useSelector((state: PirateState) => state.gridSize);
  const grid = useSelector((state: PirateState) => state.grid);

  const [newGridSize, setNewGridSize] = useState<number>(NaN);

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
        dispatch(setGridSize(-1));
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [grid]);

  function changeGridSize() {
    if (newGridSize != undefined && newGridSize > 0) {
      dispatch(setGridSize(newGridSize))
    } else {
      alert(`Please enter a positive integer for the grid size`);
    }
  }

  return (<>
    {
      gridSize === -1 ?
        <>
          <h1>Enter the grid size</h1>
          <input type='number' placeholder='Gridsize' onChange={(e) => setNewGridSize(e.target.valueAsNumber)} value={newGridSize} />
          <br />
          <Button onClick={changeGridSize} text='Submit' />
        </>
        :
        <div className="App">
          <div className='infoCol'>
            <CordDisplay />
            <History />
          </div>
          <div className='gridArea'>
            <Grid />
          </div>
        </div>
    }
  </>
  );
}

export default App;
