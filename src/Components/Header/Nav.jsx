import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../../public/assets/logo.png'
import git from '../../../public/assets/github.png'

const Nav = () => {
  return (
    <div className=" w-90 lg:w-full shadow-sm bg-white">
      <div className="navbar mx-auto px-4">
        
        <div className="navbar-start w-1/3 sm:w-1/2"> 
        
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* Mobile Menu Links */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={'/'} className="w-full block py-2 px-3 hover:bg-gray-100 rounded">
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/app'} className="w-full block py-2 px-3 hover:bg-gray-100 rounded">
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  to={'/installation'}
                  className="w-full block py-2 px-3 hover:bg-gray-100 rounded"
                >
                  Installation
                </Link>
              </li>
            </ul>
          </div>
          
          
          <Link to={'/'} className="flex items-center gap-2 btn btn-ghost text-xl">
            <img className="w-10 h-10" src={Logo} alt="Logo" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-bold">
              HERO.IO
            </span>
          </Link>
        </div>

       
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 underline font-semibold' : 'font-semibold text-gray-700'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/app"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 underline font-semibold' : 'font-semibold text-gray-700'
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 underline font-semibold' : 'font-semibold text-gray-700'
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

       
        <div className="navbar-end w-2/3 sm:w-1/2">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white flex items-center gap-2"
          >
            <img src={git} alt="GitHub" className="w-5 h-5" />
            <span className="hidden sm:block">Contribute</span> 
          </a>
        </div>
      </div>
    </div>
  )
}

export default Nav