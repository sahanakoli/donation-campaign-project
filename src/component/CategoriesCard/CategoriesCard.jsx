/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const CategoriesCard = ({categories}) => {

   const {id, image, title, category_name, card_bg, category_bg, text_color} = categories || []

   
    return (
        <Link to={`/categories/${id}`}>
        <div style={{backgroundColor:card_bg}} className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img className=" w-full"
      src={image}
      alt=""
    />
  </div>
  <div className="p-6">
    <h4 style={{color:text_color, backgroundColor:category_bg}} className=" inline mt-6 px-2 py-1 rounded font-sans text-sm font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
     {category_name}
    </h4>
    <p style={{color:text_color}} className="mt-3 block font-sans text-xl font-semibold leading-relaxed text-gray-700 antialiased">
      {title}
    </p>
  </div>
  
</div>
        </Link>
    );
};

export default CategoriesCard;