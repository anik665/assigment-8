import apperrorImg from '../../../assets/App-Error.png'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] lg:h-screen px-4 bg-gray-50 text-center">
      <img
        src={apperrorImg}
        alt="Error"
        className="w-48 sm:w-64 md:w-80 lg:w-[400px] mx-auto"
      />

      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 mt-6">
        OOPS! APP NOT FOUND
      </h1>

      <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl mt-3 mb-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        The app you are looking for is not available in our system. Please try another app or go back to home.
      </p>

      <NavLink
        to="/"
        className="inline-block px-5 sm:px-6 py-2 sm:py-3 bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
      >
        Go Back Home
      </NavLink>
    </div>
  )
}

export default ErrorPage
