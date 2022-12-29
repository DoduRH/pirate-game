import { setGridSize } from './features/pirateSlice';
import './App.css';
import Grid from './components/grid';
import History from './components/history';
import CordDisplay from './components/cords';

function App() {
  return (
    <div className="App">
      <div className='infoCol'>
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
