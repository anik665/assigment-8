
import apperrorImg from '../../../assets/App-Error.png'
import { NavLink } from 'react-router';


const ErrorPage = () => {


  return (
    <div className="text-center mt-10">
    

      <div className="mt-6 flex justify-center flex-col items-center">
        <img src={apperrorImg} alt="Error" className="w-[300px]" />
          <h1 className="text-3xl font-bold my-5 ">OPPS!! APP NOT FOddddUND</h1>
      <p className="text-gray-400 mb-4">The App you are requesting is not found on our system.  please try another apps</p>
        <NavLink to={'/'} className={"btn bg-linear-to-tr from-[#632EE3] to-[#9F62F2] mb-4"}> Go Back!</NavLink>
     

      </div>
    </div>
  );
};

export default ErrorPage;
