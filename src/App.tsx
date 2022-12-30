import { PirateState, setGridSize, setRecentSquare } from './features/pirateSlice';
import './App.css';
import Grid from './components/grid';
import History from './components/history';
import CordDisplay from './components/cords';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SquareState from './interfaces/squareState';
import Button from './components/button';
import MainGame from './pages/mainGame';
import LoadingScreen from './pages/loadingScreen';

function App() {
  const gridSize = useSelector((state: PirateState) => state.gridSize);

  return (<>
    {
      gridSize === -1 ? <LoadingScreen /> : <MainGame />
    }
  </>
  );
}

export default App;
