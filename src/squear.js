import React from 'react'

function Squear({ isDark, color = 'Empty', hexColor = '' }) {
    return (
        <div className={`squear ${isDark ? 'dark' : ''}`} style={{ backgroundColor: color ? color : '#fff' }}>
            <span>
                {color ? color : "Empty"}
            </span>
            <span>
                {hexColor}
            </span>
        </div>
    )
}

export default Squear