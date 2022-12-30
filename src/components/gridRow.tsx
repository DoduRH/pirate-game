import GridSquare from "./gridSquare"
import LabelSquare from "./labelSquare"

interface gridProps {
    size: number,
    rowNum: number,
}

function GridRow({ size, rowNum }: gridProps) {
    return (<div className="gridRow">
        <LabelSquare text={String.fromCharCode(rowNum+65)} gridSize={size} key={-1} />
        {
            Array.from({ length: size }).map(function (e, i) {
                return <GridSquare x={i} y={rowNum} gridSize={size} key={i} />
            })
        }
    </div>
    )
}

export default GridRow