import { setGridSize } from './features/pirateSlice';
import './App.css';
import Grid from './components/grid';
import History from './components/history';
import CordDisplay from './components/cords';
import Button from './components/button';
import React, { useEffect } from 'react';

function App() {
  function nextSquare() {
    console.log("Next pos");
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Enter') {
        nextSquare();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <div className='infoCol'>
        <Button onClick={nextSquare} text="Next" />
        <CordDisplay />
        <History />
      </div>
      <div className='gridArea'>
        <Grid size={5} />
      </div>
    </div>
  );
}

export default App;
