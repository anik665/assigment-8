import React from 'react';
import Cards from '../../Cards/Cards'
import { useLoaderData } from 'react-router';

const Home = () => {
   
    return (
        <div>
            <Cards />
            <h1>his is home</h1>
            
        </div>
    );
};

export default Home;