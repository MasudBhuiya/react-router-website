import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Main from './component/Main/Main';
import About from './component/About/About';
import Login from './component/Login/Login';
import Details from './component/CountryDetails/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://restcountries.com/v3.1/all')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/name/:CountryName',
        element: <Details></Details>,
        loader: ({params})=> fetch(`https://restcountries.com/v3.1/name/${params.CountryName}`)
      },
      {
        path: 'login',
        element : <Login></Login>
      },
      {
        path: '*',
        element: <div>This Page Is Not Exists</div>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
