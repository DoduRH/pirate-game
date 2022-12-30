import GridSquare from "./gridSquare"
import LabelSquare from "./labelSquare"

interface labelRowProps {
    size: number,
}

function LabelRow({ size }: labelRowProps) {
    return (<div className="gridRow">
        <LabelSquare text='' gridSize={size} key={-1} />
        {
            Array.from({ length: size }).map(function (e, i) {
                return <LabelSquare text={i.toString()} gridSize={size} key={i} />
            })
        }
    </div>
    )
}

export default LabelRow