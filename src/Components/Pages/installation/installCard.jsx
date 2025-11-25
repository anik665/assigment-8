import {useState} from 'react';
import downloadImg from '../../../../public/assets/download.png'
import starImg from '../../../../public/assets/star.png'


const InstallCard = ({ app, removedCard }) => {
  
   
      const { image, title, size, ratingAvg, downloads ,id} = app
    const downloadC = (num) => {
        if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + 'B';
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
        if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
        return num.toString();
    }
    



    return (
        <div className=' bg-white border-2 border-gray-200 rounded-sm flex justify-between items-center mb-2 p-4 ' >
            <div className="flex justify-center items-center gap-4 mb-2">
                <div className="flex justify-center items-center gap-4 mb-2 ">
                    <img className='w-25 h-20 p-2 border-2 border-gray-100' src={image} alt="" />


                    <div className=" flex flex-col">
                        <h1 className="">{title}</h1>
                        <div className="">
                            <h3>{size} MB</h3>
                            <div className="badge text-[#00d390] font-bold bg-[#f1f5e8] border-none "><span ><img src={downloadImg} alt="" /></span> {downloadC(downloads)}</div>
                            <div className="badge border-none bg-[#fff0e1] text-[#ff8811] "><span><img src={starImg} alt="" /></span>{ratingAvg}</div>
                        </div>
                    </div>
                </div>
              
            </div>
             <button onClick={()=>{removedCard(id)}} className="btn btn-success text-white">Uninstall</button>
        </div>


    );
};

export default InstallCard;