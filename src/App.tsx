import { setGridSize } from './features/pirateSlice';
import './App.css';
import Grid from './components/grid';

function App() {
  return (
    <div className="App">
      <Grid size={5}/>
    </div>
  );
}

export default App;
