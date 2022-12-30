import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

function HelpHover() {
  return (
    <div className='helper'>
      <p id="my-element">
        Help
      </p>
      <Tooltip anchorId="my-element" html='Enter - Next square<br/>R - Select gridsize' place='top'/>
    </div>
  )
}

export default HelpHover