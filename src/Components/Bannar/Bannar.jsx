import React from 'react';
import {  NavLink } from 'react-router';
import heroImg from '../../../public/assets/hero.png'
import googleImg from '../../../public/assets/google.png'
import appImg from '../../../public/assets/playstore.png'

const Bannar = () => {
    return (
        <div >
            <div className="text-center">
                <h1 className=" text-5xl font-bold">We Build <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#632EE3] to-[#9F62F2]">  Productive</span>  Apps</h1>
                <p className=" mt-4 text-gray-500">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className="mt-10">
               
                  
                
                    <NavLink to={'https://play.google.com/store/games?hl=en'}>
                        <button  type="submit" className="btn  border-[rgba(210,210,210,1)] bg-white text-black mr-2"> <span className=""><img src={googleImg} alt="" className="" /></span> Google Play</button>
                        </NavLink>
                    <NavLink to={'https://www.apple.com/app-store/'} >
                        <button type="submit" className="btn  border-[rgba(210,210,210,1)] bg-white text-black "> <span className=""> <img src={appImg} alt="" className="" /></span> App Store</button>
                        </NavLink>
                </div>
               <div className=" mt-14 flex justify-center items-center">
                 <img className='' src={heroImg} alt="" />
               </div>

            </div>
            <div className="h-[418px] bg-[linear-gradient(125.07deg,_rgba(99,46,227,1),_rgba(159,98,242,1)_100%)] text-white p-12">
                <h1 className="text-center text-5xl font-bold">Trusted by Millions, Built for You</h1>
                <div className=" flex justify-around items-center mt-10 mb-5 ">
                    <div className=" text-center">
                        <p className=" mb-5">Total Downloads</p>
                        <h1 className='text-7xl font-extrabold mb-4'>29.6M</h1>
                        <p className="">21% more than last month</p>
                    </div>
                    <div className="text-center">
                        <p className=" mb-5">Total Reviews</p>
                        <h1 className='text-7xl font-extrabold mb-4'>906K</h1>
                        <p className="">46% more than last month</p>
                    </div>
                    <div className="text-center">
                        <p className=" mb-5">Active Apps</p>
                        <h1 className='text-7xl font-extrabold mb-4'>132+</h1>
                        <p className="">31 more will Launch</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Bannar;