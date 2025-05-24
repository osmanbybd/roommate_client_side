import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

export const ThemeContext = createContext

const ThemeProvider = ({children}) => {

    const {user} = useContext(AuthContext)
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const fetchUserTheme =async() =>{
        if(user.email){
            const res = await fetch(`http://localhost:5000/users/?email=${user.email}`)
            const data = await res.json()
            if(data.theme === 'dark'){
                setDarkMode(true)
                document.documentElement.classList.add('add')
            }else{
                setDarkMode(false)
                document.documentElement.remove('dark')
            }
        }

            }
        fetchUserTheme()
    },[user])


    const handleThemeChange = async(newTheme) =>{
        setDarkMode(newTheme === 'dark')
        if(newTheme === 'dark'){
            document.documentElement.classList.add('add');

        }else{
            document.documentElement.classList.remove('dark')
        }


        fetch(`http://localhost:5000/users/theme`, {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify({
                email: user?.email,
                theme: newTheme
            })
        })

    }


    const theme ={
        darkMode,
        handleThemeChange
    }

    
    return <ThemeContext value={theme}>
        {children}
    </ThemeContext>
};

export default ThemeProvider;
