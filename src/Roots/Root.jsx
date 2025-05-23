import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const Root = () => {
   
    const isNotFoundPage = location.pathname === "/Invalid"

    return <>
        <div className='bg-gray-200 '>
           {!isNotFoundPage &&  <Navbar ></Navbar>}
        </div>
        <main className='min-h-[calc(100vh-350px)]'>
            <Outlet></Outlet>
        </main>
       {!isNotFoundPage &&  <Footer></Footer>}
    
    </>;
};

export default Root;