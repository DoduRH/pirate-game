import React from 'react'

interface buttonProps {
    onClick: (() => void) | ((e: React.MouseEvent) => void);
    text: string;
}

function Button({ onClick, text }: buttonProps) {
    return (
        <button onClick={onClick} className='button'>{text}</button>
    )
}

export default Button