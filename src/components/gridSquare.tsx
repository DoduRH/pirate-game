import React from 'react'
import { useSelector } from 'react-redux'
import { PirateState } from '../features/pirateSlice'
import SquareState from '../interfaces/squareState'

interface GridSquareProps {
    x: number,
    y: number,
}

function GridSquare({ x, y }: GridSquareProps) {
    const state: SquareState = useSelector((state: PirateState) => state.grid[x][y]);

    return (
        <div className='gridSquare' style={{backgroundColor: state}}>
        </div>
    )
}

export default GridSquare