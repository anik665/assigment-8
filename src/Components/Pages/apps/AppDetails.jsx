import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downImg from '../../../../public/assets/icon-downloads.png'
import starImg from '../../../../public/assets/icon-ratings.png'
import likeImg from '../../../../public/assets/icon-review.png'
import { addToStoreDb } from '../../../storeBookdb';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import ErrorPage from "../ErrorPage/ErrorPage";


const AppDetails = () => {
  const { id } = useParams();
  const appid = parseInt(id)
  // console.log('The id is',appid)

  const data = useLoaderData(); // array of apps
  // console.log('the data',data)
  const singleData = data.find(app => app.id === appid);
  // console.log('This is the single data ', singleData)


  if (!singleData) {
    return <ErrorPage/>;
  }

  const { title, description, companyName, image, size, reviews, ratingAvg, downloads, ratings } = singleData;
  console.log(ratings)
  const [isActive, setIsActive] = useState(true)
  const handelDownload = (id) => {
    addToStoreDb(id)

  }

  const downloadC = (num) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + 'B';
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
    if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
    return num.toString();
  }
  const margin = {
    top: 20,
    right: 30,
    left: 20,
    bottom: 5,
  };

  return (
    <div className="p-4">
      <div className="">

      </div>
      <div className="flex justify-baseline items-center">
        <img src={ image} alt="" className="w-40 shadow-2xl p-4 h-40" />
        <div className="m-4">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-400">Developed by <a href="" className="bg-linear-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold  "> {companyName}</a></p>
          <div className="border border-gray-400 w-[850px] "></div>
          {/* card part */}
          <div className=" ">
            <div className="flex justify-between items-center  my-4 ">
              <div className="">
                <img src={downImg} alt="" className="" />
                <p className="text-gray-400">Downloads</p>
                <h1 className="text-4xl font-bold">{downloadC(downloads)}</h1>
              </div>
              <div className="">
                <img src={starImg} alt="" className="" />
                <p className="text-gray-400">Average Ratings</p>
                <h1 className="text-4xl font-bold">{downloadC(ratingAvg)}</h1>
              </div>
              <div className="">
                <img src={likeImg} alt="" className="" />
                <p className="text-gray-400">Total Reviews</p>
                <h1 className="text-4xl font-bold">{downloadC(reviews)}</h1>
              </div>


            </div>
            <button onClick={() => (handelDownload(id), setIsActive(false))} className="btn btn-success text-white">{isActive ? `Install Now (${size} MB)` : 'Installed'}</button>
          </div>
          <br />
        </div>
      </div>
      <div className="border border-gray-400 w-full "></div>
      {/* rechart  */}


      <BarChart width={600} height={300} data={[...ratings].reverse()} layout="vertical" margin={margin}>
        <XAxis type="number" dataKey="count" />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Bar dataKey="count" fill="rgba(255, 136, 17, 1)" barSize={20} />
      </BarChart>





      <div className="">
        <h1 className="font-bold ">Description</h1>
        <p className=" text-gray-500">{description}</p>
      </div>



    </div>
  );
};

export default AppDetails;
