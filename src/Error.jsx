import React from 'react';
import errImg from './assets/error-404.png';
import {NavLink } from 'react-router';
const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center py-10'>
           
            <img src={errImg} alt="Error" />
             <h1 className='text-4xl font-bold'>Oops, page not found!</h1>
             <p className="text-gray-400 my-3">The page you are looking for is not available.</p> 
            <NavLink to={'/'} className={"btn bg-linear-to-tr from-[#632EE3] to-[#9F62F2]"}> Go Back!</NavLink>
        </div>
    );
};

export default Error;
