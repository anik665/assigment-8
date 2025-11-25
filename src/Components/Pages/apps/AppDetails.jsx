import { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downImg from "../../../../public/assets/icon-downloads.png";
import starImg from "../../../../public/assets/icon-ratings.png";
import likeImg from "../../../../public/assets/icon-review.png";
import { addToStoreDb } from "../../../storeBookdb";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import ErrorPage from "../ErrorPage/ErrorPage";

const AppDetails = () => {
  const { id } = useParams();
  const appid = parseInt(id);

  const data = useLoaderData();
  const singleData = data.find((app) => app.id === appid);

  if (!singleData) {
    return <ErrorPage />;
  }

  const {
    title,
    description,
    companyName,
    image,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = singleData;

  const [isActive, setIsActive] = useState(true);

  const handelDownload = (id) => {
    addToStoreDb(id);
  };

  const downloadC = (num) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };

  const margin = {
    top: 20,
    right: 30,
    left: 20,
    bottom: 5,
  };

  return (
    <div className="p-4 max-w-6xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <img src={image} alt="" className="w-32 h-32 sm:w-40 sm:h-40 shadow-2xl p-4" />

        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
          <p className="text-gray-400">
            Developed by{" "}
            <span className="bg-linear-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
              {companyName}
            </span>
          </p>

          <div className="border border-gray-400 w-full my-4"></div>

          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <div>
              <img src={downImg} alt="" />
              <p className="text-gray-400">Downloads</p>
              <h1 className="text-3xl font-bold">{downloadC(downloads)}</h1>
            </div>

            <div>
              <img src={starImg} alt="" />
              <p className="text-gray-400">Average Ratings</p>
              <h1 className="text-3xl font-bold">{downloadC(ratingAvg)}</h1>
            </div>

            <div>
              <img src={likeImg} alt="" />
              <p className="text-gray-400">Total Reviews</p>
              <h1 className="text-3xl font-bold">{downloadC(reviews)}</h1>
            </div>
          </div>

          <button
            onClick={() => (handelDownload(id), setIsActive(false))}
            className="btn btn-success text-white mt-4"
          >
            {isActive ? `Install Now (${size} MB)` : "Installed"}
          </button>
        </div>
      </div>

      <div className="border border-gray-400 w-full my-6"></div>

      <div className="w-full h-72 sm:h-96">
        <ResponsiveContainer>
          <BarChart data={[...ratings].reverse()} layout="vertical" margin={margin}>
            <XAxis type="number" dataKey="count" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Bar dataKey="count" fill="rgba(255, 136, 17, 1)" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6">
        <h1 className="font-bold text-xl mb-2">Description</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
