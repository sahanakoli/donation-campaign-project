/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";



const Banner = ({categories}) => {

      const [category, setCategory] = useState()

    const handleSearch = (e)=>{
        e.preventDefault()
    
        const searchValue = e.target.search.value
      
        localStorage.setItem("search",searchValue)
    
    
        const findCategory = categories?.filter(category=> category.category_name === searchValue)
        setCategory(findCategory)

    
      }
    return (
       
        <div className=" h-[70vh]  -mt-28">
            
      <img
        className="h-full w-full opacity-10"
        src="https://i.ibb.co/ZHgnGH9/Rectangle-4281.png"
        alt=""
      />
      <div className=" flex justify-center items-center">
        <h2 className=" text-5xl font-bold absolute bottom-[65%] ">I Grow By Helping People In Need</h2>
      </div>
      <div className=" flex justify-center items-center">
      <div className="searchbar absolute bottom-[53%] w-3/12 ">
        <form onSubmit={handleSearch}>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              name="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by category..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-[#FF444A]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      </div>
        </div>
    );
};

export default Banner;