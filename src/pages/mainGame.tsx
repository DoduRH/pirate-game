import { PirateState, setGridSize, setRecentSquare } from '../features/pirateSlice';
import Grid from '../components/grid';
import History from '../components/history';
import CordDisplay from '../components/cords';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SquareState from '../interfaces/squareState';

function MainGame() {
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
        dispatch(setGridSize(-1));
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [grid]);

  return (
    <div className="Game">
      <div className='infoCol'>
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