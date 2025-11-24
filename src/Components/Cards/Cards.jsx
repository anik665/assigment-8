import React from 'react';
import { useLoaderData,NavLink } from 'react-router';
import Card from './Card';

const Cards = () => {
     const data=useLoaderData()
     console.log(data)
    
    return (
        <div>
             <div className=" text-black text-center my-12">
                <h1 className="text-5xl font-bold mb-2">Trending Apps</h1>
                <p className=" mt-3 text-gray-400">Explore All Trending Apps on the Market developed by us</p>
                {

                }
            </div>
           <div className="grid grid-cols-4 gap-4"> {data.map((data,index)=> <Card data={data} />)}</div>
          <div className="flex justify-center items-center mt-10">
             <NavLink to={'/app'}><button className="btn btn-primary">Show All</button> </NavLink>
          </div>
           
            
        </div>
    );
};

export default Cards;