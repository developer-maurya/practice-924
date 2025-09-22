import React, { useState } from 'react'
import {ThemContext} from './ThemContext'


const ThemeProvider = ({children}) =>{
    const [theme , setTheme] = useState("light");


const ToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? 
        "dark" : "light"
    ));
};
  return (
    <div>
        <ThemContext.Provider value={{theme, ToggleTheme}}>{children}</ThemContext.Provider>
    </div>
  )
}

export default ThemeProvider;