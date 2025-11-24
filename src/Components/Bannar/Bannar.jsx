import React from 'react';
import { NavLink } from 'react-router-dom';
import heroImg from '../../../public/assets/hero.png';
import googleImg from '../../../public/assets/google.png';
import appImg from '../../../public/assets/playstore.png';

const Bannar = () => {
  return (
    <div className="w-full">
      <div className="text-center px-4 sm:px-8 lg:px-16 mt-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
          We Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#632EE3] to-[#9F62F2]">
            Productive
          </span>{' '}
          Apps
        </h1>

        <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
          <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <NavLink to="https://play.google.com/store/games?hl=en">
            <button className="w-full sm:w-auto flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white border border-gray-300 text-black rounded-lg hover:scale-105 transition-transform duration-300">
              <img src={googleImg} alt="Google Play" className="w-5 h-5 sm:w-6 sm:h-6" />
              Google Play
            </button>
          </NavLink>

          <NavLink to="https://www.apple.com/app-store/">
            <button className="w-full sm:w-auto flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white border border-gray-300 text-black rounded-lg hover:scale-105 transition-transform duration-300">
              <img src={appImg} alt="App Store" className="w-5 h-5 sm:w-6 sm:h-6" />
              App Store
            </button>
          </NavLink>
        </div>

        <div className="mt-10 sm:mt-14 flex justify-center">
          <img src={heroImg} alt="Hero" className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2" />
        </div>
      </div>

      <div className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white py-12 px-4 sm:px-8 lg:px-16 mt-10">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Trusted by Millions, Built for You
        </h1>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-around items-center mt-8 sm:mt-10 gap-8 text-center">
          <div className="flex flex-col items-center">
            <p className="mb-2 sm:mb-5 text-sm sm:text-base">Total Downloads</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 sm:mb-4">29.6M</h1>
            <p className="text-sm sm:text-base">21% more than last month</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="mb-2 sm:mb-5 text-sm sm:text-base">Total Reviews</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 sm:mb-4">906K</h1>
            <p className="text-sm sm:text-base">46% more than last month</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="mb-2 sm:mb-5 text-sm sm:text-base">Active Apps</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 sm:mb-4">132+</h1>
            <p className="text-sm sm:text-base">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
