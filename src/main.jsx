import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from "react-router/dom";
import Root from './Roots/Root.jsx'
import Home from './Components/Pages/Home/Home.jsx'
import Apps from './Components/Pages/apps/Apps.jsx'
import Bannar from './Components/Bannar/Bannar.jsx'
import Installtion from './Components/Pages/installation/Installtion.jsx'
import Error from './Error.jsx'
import AppDetails from './Components/Pages/apps/AppDetails.jsx'
import { ToastContainer } from 'react-toastify';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement:<ErrorPage/>,

    children: [
      {
        path: '/',
        loader: () => fetch('/public/data/home.json'),
        element: (<>
          <Bannar />
          <Home />
        </>)
      },
      {
        path: '/app',
        loader: () => fetch('/data.json'),
        Component: Apps,
        errorElement: <Error />

      },
      {
        path: '/appdetails/:id',
        loader: () => fetch('/data.json'),
          
        Component: AppDetails
      },
      {
        path: 'installation',
        loader: () => fetch('/data.json'),
        Component: Installtion
      },

      {
        path: '*',
        Component: Error
      }
    ]
  },
  {

  }
])
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />

  </StrictMode>,
)
