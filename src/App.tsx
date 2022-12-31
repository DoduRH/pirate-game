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
    <a href='https://www.github.com/DoduRH/pirate-game'>
      <img src='/pirate-game/github-mark-white.svg' className='repoLink' alt='Github repository link'></img>
    </a>
  </>
  );
}

export default App;
