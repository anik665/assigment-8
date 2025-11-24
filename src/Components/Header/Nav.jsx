import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../../public/assets/logo.png'
import git from '../../../public/assets/github.png'
import Cards from '../Cards/Cards';

const Nav = () => {
    return (
        <div>
            <div className="navbar  shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <Link to={'/'}>Home</Link>
              <Link to={'/app'}>Apps</Link>
              <Link to={'/installation'}>Installation</Link>
            
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><span><img className='w-10 h-10' src={Logo} alt="" /></span> <span className="text-transparent bg-clip-text bg-linear-to-r from-[#632EE3] to-[#9F62F2]"> HERO.IO</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink  className={({ isActive }) => 
          isActive ? "text-blue-600 underline font-semibol" : ""
        } to={'/'}>Home</NavLink></li>
            <li><NavLink  className={({ isActive }) => 
          isActive ? "text-blue-600 underline font-semibol" : ""
        } to={'/app'}>Apps</NavLink> </li>
            <li><NavLink to={'/installation'} className={({ isActive }) => 
          isActive ? "text-blue-600 underline font-semibol" : ""
        }>Installation</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
         
          <NavLink to={'https://github.com/'} className={"btn bg-linear-to-tr from-[#632EE3] to-[#9F62F2]"}> <span> <img src={git} alt="" /></span> Contribute</NavLink>
        </div>
       
      </div>
    

        </div>
    );
};

export default Nav;