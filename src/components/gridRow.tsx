import GridSquare from "./gridSquare"
import LabelSquare from "./labelSquare"

interface gridProps {
    gridSize: number,
    rowNum: number,
}

function GridRow({ gridSize, rowNum }: gridProps) {
    return (<div className="gridRow">
        <LabelSquare text={(rowNum+1).toString()} gridSize={gridSize} key={-1} />
        {
            Array.from({ length: gridSize }).map(function (e, i) {
                return <GridSquare x={i} y={rowNum} gridSize={gridSize} key={i} />
            })
        }
    </div>
    )
}

export default GridRow