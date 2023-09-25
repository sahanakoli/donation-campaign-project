import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MainLayout from './Layout/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import Donation from './pages/Donation/Donation';
import Statistics from './pages/Statistics/Statistics';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('/donation.json')
      },
      {
        path:'/donation',
        element:<Donation></Donation>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
