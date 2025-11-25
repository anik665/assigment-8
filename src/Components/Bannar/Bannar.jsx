import React from 'react';
import { NavLink } from 'react-router-dom';
import heroImg from '../../../public/assets/hero.png';
import googleImg from '../../../public/assets/google.png';
import appImg from '../../../public/assets/playstore.png';

const Bannar = () => {
  return (
    <div className="w-90 lg:w-full mx-auto">
      
      <div className="text-center mt-10 px-4 max-w-6xl mx-auto">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          We Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#632EE3] to-[#9F62F2]">
            Productive
          </span>{' '}
          Apps
        </h1>

        
        <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
          <br />
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        
        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
          <NavLink to="https://play.google.com/store/games?hl=en">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-white border border-gray-300 text-black rounded-lg hover:scale-105 transition-transform duration-300">
              <img src={googleImg} alt="Google Play" className="w-6 h-6" />
              Google Play
            </button>
          </NavLink>

          <NavLink to="https://www.apple.com/app-store/">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-white border border-gray-300 text-black rounded-lg hover:scale-105 transition-transform duration-300">
              <img src={appImg} alt="App Store" className="w-6 h-6" />
              App Store
            </button>
          </NavLink>
        </div>

        
        <div className="mt-10 sm:mt-14 flex justify-center">
          <img src={heroImg} alt="Hero" className="w-full max-w-xl sm:max-w-2xl object-contain" />
        </div>
      </div>

      
      <div className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white px-4  w-90 md:w-22 lg:w-full mx-auto lg:py-10 ">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Trusted by Millions, Built for You
        </h1>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-10 mt-10 max-w-5xl mx-auto text-center">
          
          <div>
            <p className="mb-2 text-base">Total Downloads</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">29.6M</h1>
            <p className="text-sm sm:text-base mt-2">21% more than last month</p>
          </div>

          <div>
            <p className="mb-2 text-base">Total Reviews</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">906K</h1>
            <p className="text-sm sm:text-base mt-2">46% more than last month</p>
          </div>

          <div>
            <p className="mb-2 text-base">Active Apps</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">132+</h1>
            <p className="text-sm sm:text-base mt-2">31 more will Launch</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Bannar;
