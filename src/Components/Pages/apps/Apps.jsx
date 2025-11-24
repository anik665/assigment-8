import {useState} from 'react';
import { useLoaderData } from 'react-router';
import AppCard from './AppCard';
import ErrorPage from '../ErrorPage/ErrorPage';

const Apps = () => {
    const data = useLoaderData()
    const [searchText, setSearchText] = useState('')
    const displayData = 
        searchText.trim()===''?data:data.filter(app=>app.title.toLowerCase().includes(searchText.toLowerCase()))
       
    
    return (
        <div className=''>
            <div className="text-center my-10">
                <h1 className="font-bold text-5xl">Our All Applications</h1>
                <p className="text-gray-400 mt-4">Explore All Apps on the Market developed by us. We code for Millions</p>

            </div>

           
            <div className=" flex justify-between items-center p-4 ">
                 <h2 className="font-bold mb-4">({displayData.length}) Apps Found</h2>
                <label className="input bg-white border-gray-300 border-2">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input value={searchText} onChange={(e)=>setSearchText(e.target.value)} type="search" required placeholder="Search" />
                  
                   
                </label>
            </div>
            <div className="grid grid-cols-4 gap-4"> { displayData.length===0?<ErrorPage/>: displayData.map((data, index) => <AppCard data={data} key={index} />)}</div>

        </div>
    );
};

export default Apps;