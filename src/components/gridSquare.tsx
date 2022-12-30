import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PirateState, toggleSquare } from '../features/pirateSlice'
import SquareState from '../interfaces/squareState'

interface GridSquareProps {
    x: number,
    y: number,
}

function GridSquare({ x, y }: GridSquareProps) {
    const dispatch = useDispatch();
    
    const state: SquareState = useSelector((state: PirateState) => state.grid[x][y]);

    return (
        <div className='gridSquare' style={{backgroundColor: state}} onClick={() => {
            dispatch(toggleSquare({x, y}))
        }}>
        </div>
    )
}

export default GridSquare