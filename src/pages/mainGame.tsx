import { PirateState, setGridSize, setRecentSquare } from '../features/pirateSlice';
import Grid from '../components/grid';
import History from '../components/history';
import CordDisplay from '../components/cords';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SquareState from '../interfaces/squareState';
import HelpHover from '../components/helpHover';

function MainGame() {
  const dispatch = useDispatch();
  const grid = useSelector((state: PirateState) => state.grid);

  useEffect(() => {
    function nextSquare() {
      let x: number, y: number;
  
      const flattened = grid.flat();
  
      const emptyCount = flattened.map(
        e => e === SquareState.Empty ? 1 : 0
      ).reduce((a: number, b: number) => a + b, 0);
  
      if (emptyCount === 0) {
        return;
      }
  
      const idx = Math.floor(Math.random() * emptyCount);
      let passed = 0;
  
      for (x = 0; x < grid.length; x++) {
        for (y = 0; y < grid[x].length; y++) {
          if (grid[x][y] === SquareState.Empty) {
            if (passed === idx) {
              dispatch(setRecentSquare({ x: x, y: y }));
              return;
            }
            passed++;
          }
        }
      }
  
      console.error("UNREACHABLE");
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Enter') {
        if (e.target instanceof Element) {
          if (e.target.tagName !== 'BUTTON') {
            nextSquare();
          }
        } else {
          nextSquare();
        }
      } else if (e.key === 'r') {
        dispatch(setGridSize(-1));
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch, grid]);

  return (
    <div className="Game">
      <div className='infoCol'>
        <HelpHover />
        <CordDisplay />
        <History />
      </div>
      <div className='gridArea'>
        <Grid />
      </div>
    </div>
  )
}

export default MainGame