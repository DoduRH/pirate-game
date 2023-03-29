import { useSelector } from 'react-redux';
import { PirateState, xyPos } from '../features/pirateSlice'

interface CordFormatterProps extends xyPos {}

function CordFormatter({x, y}: CordFormatterProps) {
  const gridSize: number = useSelector((state: PirateState) => state.gridSize);
  if (x === undefined || y === undefined) {
    return <></>
  }

  const length: number = Math.floor(Math.log10(gridSize))+1;

  const char = String.fromCharCode(y+65);
  return (
    <>{char}{(x+1).toString().padStart(length, '0')}</>
  )
}

export default CordFormatter