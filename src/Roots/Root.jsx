import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Root = () => {
  const navigation = useNavigation();

  return (
    <div className=" ">
      
      {navigation.state === 'loading' && (
         <span className="loading loading-spinner loading-lg"></span>
      )}

      <Header />
      
        <Outlet />
      
      <Footer />
    </div>
  );
};

export default Root;
