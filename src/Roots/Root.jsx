import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import { useContext } from 'react';
import { ThemeContext } from '@emotion/react';

const Root = () => {
    
    const isNotFoundPage = location.pathname === "/Invalid"
    const {darkMode} = useContext(ThemeContext)
    return <>
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
           {!isNotFoundPage &&  <Navbar ></Navbar>}
        </div>
        <main className={`min-h-[calc(100vh-350px)] `}>
            <Outlet></Outlet>
        </main>
       {!isNotFoundPage &&  <Footer></Footer>}
    
    </>;
};

export default Root;