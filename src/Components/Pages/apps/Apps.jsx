import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router'
import AppCard from './AppCard'
import ErrorPage from '../ErrorPage/ErrorPage'

const Apps = () => {
  const data = useLoaderData()
  const [searchText, setSearchText] = useState('')
  const [filteredData, setFilteredData] = useState(data)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      const result =
        searchText.trim() === ''
          ? data
          : data.filter((item) =>
              item.title.toLowerCase().includes(searchText.toLowerCase())
            )
      setFilteredData(result)
      setIsLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [searchText, data])

  return (
    <div className="px-4">
      <div className="text-center my-10">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">Our All Applications</h1>
        <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="font-bold text-lg sm:text-xl mb-2 sm:mb-0">
          ({filteredData.length}) Apps Found
        </h2>
        <label className="flex items-center gap-2 w-full sm:w-auto bg-white border-2 border-gray-300 rounded-md px-3 py-2">
          <svg className="h-5 w-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="search"
            placeholder="Search"
            className="focus:outline-none w-full"
          />
        </label>
      </div>

      {isLoading && (
        <div className="w-full flex justify-center my-10">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}

      {!isLoading && (
        <>
          {filteredData.length === 0 ? (
            <div className="flex flex-col justify-center items-center w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
              <ErrorPage />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredData.map((item, index) => (
                <AppCard data={item} key={index} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Apps
