import { useState, useEffect, useRef } from 'react'
import Squear from './squear'
import Input from './input'
function App() {
    const [color, setColor] = useState('')
    const [hexColor, setHexColor] = useState('')
    const [isDark, setIsDark] = useState(false)
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, [inputRef])

    return (
        <div className='app'>
            <Squear color={color} isDark={isDark} hexColor={hexColor} />
            <Input inputRef={inputRef} color={color} setHexColor={setHexColor} setColor={setColor} />
            <button onClick={() => setIsDark(e => !e)}>{isDark ? 'Light mode' : 'DarkMode'}</button>
        </div>
    )
}

export default App