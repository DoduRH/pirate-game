import GridSquare from "./gridSquare"

interface gridProps {
    size: number,
}

function GridRow({ size }: gridProps) {
    return (<div className="gridRow">
        {
            Array.from({ length: size }).map(function (e, i) {
                return <GridSquare />
            })
        }
    </div>
    )
}

export default GridRow