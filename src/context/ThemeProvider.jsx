import React, { createContext, useEffect, useState } from 'react';
export const ThemeContext= createContext()
const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const saveTheme = localStorage.getItem('theme')
        if(saveTheme === 'dark'){
            setDarkMode(true)
            document.documentElement.classList.add('dark')

        }else{
            setDarkMode(false)
            document.documentElement.classList.remove('dark')
        }
    },[])

    const handleThemeChange =(newTheme) =>{
        setDarkMode(newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
        
        if(newTheme === 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }

    }

    const theme = {
        darkMode,
        handleThemeChange
    }

    return <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
};

export default ThemeProvider;