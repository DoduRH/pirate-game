import GridSquare from "./gridSquare"

interface gridProps {
    size: number,
    rowNum: number,
}

function GridRow({ size, rowNum }: gridProps) {
    return (<div className="gridRow">
        {
            Array.from({ length: size }).map(function (e, i) {
                return <GridSquare x={i} y={rowNum} key={i} />
            })
        }
    </div>
    )
}

export default GridRow