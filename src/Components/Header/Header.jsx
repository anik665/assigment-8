import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <header className=" ">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
