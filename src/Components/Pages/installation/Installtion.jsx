import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import InstallCard from './installCard';
import { getStoreApps, removestoreApp } from '../../../storeBookdb';
import dropImg from '../../../../public/assets/dropdown.png'
import { toast } from 'react-toastify';

const Installtion = () => {
    const data = useLoaderData()
    const [install, setInstall] = useState([])
    const [sortType, setSortType] = useState('Defult')

    useEffect(() => {
        const storeApps = getStoreApps()
        const ConvertStortApps = storeApps.map((id) => parseInt(id))
        const installApp = data.filter(app => ConvertStortApps.includes(app.id))
        setInstall(installApp)
        console.log(installApp)
    }, [data])

    const removedCard = (id) => {
        const filterCards = install.filter(card => card.id !== id)
        toast('uninstall successfull')
        setInstall(filterCards)
        removestoreApp(id)
        console.log('click me')

    }
    const sortedInstallApp=[...install]
    if(sortType==='Low'){
        sortedInstallApp.sort((a,b)=>a.size-b.size)
    }
    else if(sortType==='High'){
        sortedInstallApp.sort((a,b)=>b.size-a.size)
        
    }

    return (
        <div>
            <div className="text-center my-10">
                <h1 className="font-bold text-5xl">Your Installed Apps</h1>
                <p className="text-gray-400 mt-4">Explore All Trending Apps on the Market developed by us</p>

            </div>
            <div className="flex justify-between items-center my-10">
                <div className="">
                    <h1 className='font-bold text-3xl'>App Found {install.length}</h1>
                    </div>
                <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="btn bg-white text-gray-400  border border-gray-200">Sort By Size <span><img src={dropImg} alt="" /></span></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-white text-gray-400 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=>setSortType('Low')}>  {sortType === 'Low' && <span className='text-gray-400'>✔️</span>} Low To High</a></li>
                    <li><a onClick={()=>setSortType('High')}> {sortType === 'High' && <span className='text-gray-400'>✔️</span>}High To low</a></li>
                    <li><a onClick={()=>setSortType('Defult')}>{sortType === 'Defult' && <span className='text-gray-400'>✔️</span>}Defult</a></li>
                </ul>
                
            </div>
            </div>
            <div className="">
                {sortedInstallApp.map((app) => <InstallCard removedCard={removedCard} app={app} />)}
            </div>

        </div>
    );
};

export default Installtion;