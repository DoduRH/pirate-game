interface LabelSquareProps {
    text: string,
    gridSize: number,
}

function LabelSquare({ text, gridSize }: LabelSquareProps) {
    const style = {
        height: `min(calc(${45 / (gridSize + 1)}vw - 4px), calc(${90 / (gridSize + 1)}vh) - 4px)`,
        width: `min(calc(${45 / (gridSize + 1)}vw - 4px), calc(${90 / (gridSize + 1)}vh) - 4px)`,
    };

    return (
        <div className='gridSquare labelSquare' style={style}>
            <svg width='100%' height='100%' className='labelSvg'>
                <text x="50%" y="60%" textAnchor='middle' dominantBaseline='middle' fontSize={`min(calc(${45 / (gridSize + 1)}vw - 4px), calc(${90 / (gridSize + 1)}vh) - 4px)`}>{text}</text>
            </svg>
        </div>
    )
}

export default LabelSquare