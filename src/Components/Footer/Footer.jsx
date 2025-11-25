import React from 'react';
import { Link } from 'react-router';
import Logo from '../../assets/logo.png'
import fblogo from '../../assets/fblogo.png'
import xlogo from '../../assets/xlogo.png'
import linlogo from '../../assets/lindin.png'

const Footer = () => {
    return (
        <div className='  bg-neutral text-neutral-content'>

            <footer className="footer  w-full flex justify-between items-center lg:w-full lg:flex lg:justify-between Lg:item-center p-4  mx-auto">
                
                    <Link to={'/'} className="flex items-center gap-2 btn btn-ghost text-xl">
                        <img className="w-10 h-10" src={Logo} alt="Logo" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-bold">
                            HERO.IO
                        </span>
                    </Link>
                    <div className="">
                        <h1 className="font-bold">Social Link</h1>
                        <div className="flex justify-center items-center gap-2 mt-3">
                            <img src={fblogo} className='w-5 h-5' alt="" />
                            <img src={linlogo} className='w-5 h-5' alt="" />
                            <img src={xlogo} className='w-5 h-5' alt="" />

                        </div>
                    </div>

                

            </footer>
            <div className="flex justify-center items-center">
                <h1 className="">Copyright © 2025 - All right reserved</h1>
            </div>

        </div>
    );
};

export default Footer;