import LabelSquare from "./labelSquare"

interface labelRowProps {
    gridSize: number,
}

function LabelRow({ gridSize }: labelRowProps) {
    return (<div className="gridRow">
        <LabelSquare text='' gridSize={gridSize} key={-1} />
        {
            Array.from({ length: gridSize }).map(function (e, i) {
                return <LabelSquare text={i.toString()} gridSize={gridSize} key={i} />
            })
        }
    </div>
    )
}

export default LabelRow