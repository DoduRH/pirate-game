import { xyPos } from '../features/pirateSlice'

interface CordFormatterProps extends xyPos {}

function CordFormatter({x, y}: CordFormatterProps) {
  const char = String.fromCharCode(x+65);
  return (
    <>{char}{y}</>
  )
}

export default CordFormatter