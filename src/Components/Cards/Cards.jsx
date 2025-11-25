import React from 'react';
import { useLoaderData, NavLink } from 'react-router';
import Card from './Card';

const Cards = () => {
  const data = useLoaderData();

  return (
    <div className="px-4  lg:px-16 w-90 lg:w-full mx-auto lg:mx-auto my-10">
      <div className="text-black  lg:flex lg:flex-col lg:justify-center lg:items-center my-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Trending Apps</h1>
        <p className="mt-3 text-gray-400 text-sm sm:text-base md:text-lg">
          Explore all trending apps on the market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {data.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>

      <div className="flex justify-center items-center my-10 ">
        <NavLink to={'/app'}>
          <button className="btn btn-primary px-6 py-3 text-sm sm:text-base ">Show All</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Cards;
