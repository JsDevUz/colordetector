import React from 'react'
import colorNames from 'colornames'
function Input({ inputRef, color, setColor, setHexColor }) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                ref={inputRef}
                onChange={(e) => {
                    setColor(e.target.value)
                    setHexColor(colorNames(e.target.value))
                }}
                required
                value={color}
            />
        </form>
    )
}

export default Input