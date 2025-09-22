import React, { useContext } from 'react'
import {ThemContext} from './ThemContext'

const ThemeComp = () => {
    const {theme, ToggleTheme} = useContext(ThemContext);
  return (
    <div style={{backgroundColor: theme ===
        'light' ? '#fff' : '#333', color: theme === "light" ? "#000" : "#fff"
    }}>
        <p>This is New Theme{theme}</p>
        <button onClick={ToggleTheme}>Change The Theme</button>
    </div>
  )
}

export default ThemeComp;