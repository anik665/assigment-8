import React from 'react';
import downloadImg from '../../../public/assets/download.png'
import starImg from '../../../public/assets/star.png'
import { Link } from 'react-router';

const Card = ({ data }) => {
    const { title, ratingAvg, downloads,image,id } = data
    const downloadC = (num) => {
        if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + 'B';
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
        if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
        return num.toString();
    }
    return (
        <div>
            <Link to={`/appdetails/${id}`}  >
             <div className="card  w-70 shadow-sm">
                <figure>
                    <img className='w-70 h-70 p-2 border-2 border-gray-200'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body bg-white">
                    <h2 className="card-title">
                        {title}

                    </h2>

                    <div className="card-actions justify-between">
                        <div className="badge text-[#00d390] font-bold bg-[#f1f5e8] border-none "><span><img src={downloadImg} alt="" /></span> {downloadC(downloads)}</div>
                        <div className="badge border-none bg-[#fff0e1] text-[#ff8811] "><span><img src={starImg} alt="" /></span>{ratingAvg}</div>
                    </div>
                </div>
            </div>

            </Link>
           

        </div>
    );
};

export default Card;