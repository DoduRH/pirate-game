import { PirateState } from './features/pirateSlice';
import './App.css';
import { useSelector } from 'react-redux';
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
