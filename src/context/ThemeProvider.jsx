import React, { createContext } from 'react';

const ThemeContext = createContext

const ThemeProvider = ({children}) => {




    
    return <ThemeContext>
        {children}
    </ThemeContext>
};

export default ThemeProvider;
