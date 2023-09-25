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
import ErrorPage from './component/ErrorPage/ErrorPage';
import CategoryCard from './pages/CategoryCard/CategoryCard';
import Banner from './component/Banner/Banner';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
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
      },
      {
        path:'/categories/:id',
        element:<CategoryCard></CategoryCard>,
        loader:()=> fetch('/donation.json')
      },
      {
        path:'/categories/:category_name',
        element:<Banner></Banner>,
        loader:()=> fetch('/donation.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
