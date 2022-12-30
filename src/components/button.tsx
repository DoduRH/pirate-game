import React from 'react'

interface buttonProps {
    onClick: (() => void) | ((e: React.MouseEvent) => void);
    text: string;
    className: string;
}

function Button({ onClick, text, className }: buttonProps) {
    return (
        <button onClick={onClick} className={`button ${className}`}>{text}</button>
    )
}

Button.defaultProps = {
    className: '',
}

export default Button