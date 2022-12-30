import { useDispatch, useSelector } from 'react-redux'
import { PirateState, toggleSquare, xyPos } from '../features/pirateSlice'
import SquareState from '../interfaces/squareState'

interface GridSquareProps extends xyPos {
    gridSize: number,
}

function GridSquare({ x, y, gridSize }: GridSquareProps) {
    const dispatch = useDispatch();

    const colour: SquareState = useSelector((state: PirateState) => state.grid[x][y]);

    const style = {
        backgroundColor: colour,
        height: `min(calc(${45 / gridSize}vw - 4px), calc(${90 / gridSize}vh) - 4px)`,
        width: `min(calc(${45 / gridSize}vw - 4px), calc(${90 / gridSize}vh) - 4px)`,
    };

    return (
        <div className='gridSquare' style={style} onClick={() => {
            dispatch(toggleSquare({ x, y }))
        }}>
        </div>
    )
}

export default GridSquare