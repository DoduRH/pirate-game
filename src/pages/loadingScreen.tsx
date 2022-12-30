import { setGridSize } from '../features/pirateSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../components/button';

function LoadingScreen() {
  const dispatch = useDispatch();
  const [newGridSize, setNewGridSize] = useState<number>(0);

  function changeGridSize() {
    if (newGridSize != undefined && newGridSize > 0) {
      dispatch(setGridSize(newGridSize))
    } else {
      alert(`Please enter a positive integer for the grid size`);
    }
  }

  return (
    <>
      <h1>Enter the grid size</h1>
      <input type='number' placeholder='Gridsize' onChange={(e) => setNewGridSize(e.target.valueAsNumber)} value={newGridSize} />
      <br />
      <Button onClick={changeGridSize} text='Submit' />
    </>
  )
}

export default LoadingScreen