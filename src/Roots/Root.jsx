import React from 'react';
import Nav from '../Components/Header/Nav';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Root = () => {
    return (
        <div className='flex flex-col max-w-[1140px] mx-auto'>
           <Header/>
           <div className=" flex-1">
             <Outlet/>
           </div>
            <Footer/>
            
        </div>
    );
};

export default Root;