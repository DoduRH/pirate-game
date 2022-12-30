import { xyPos } from '../features/pirateSlice'

interface CordFormatterProps extends xyPos {}

function CordFormatter({x, y}: CordFormatterProps) {
  if (x === undefined || y === undefined) {
    return <></>
  }
  const char = String.fromCharCode(x+65);
  return (
    <>{char}{y+1}</>
  )
}

export default CordFormatter