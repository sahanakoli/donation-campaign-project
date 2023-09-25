/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const CategoriesCard = ({categories}) => {

   const {id, image, title, category_name, category_color} = categories || []

   
    return (
        <Link to={`/categories/${id}`}>
        <div className="">
            
            <div className="card w-full mx-auto bg-base-100 shadow-xl">
   <figure className=" w-full px-0"><img src={image} alt="" /></figure>
   <div className="card-body">
     <h2 className="card-title ">{category_name}</h2>
     <p>{title}</p>
   </div>
 </div>
         </div>
        </Link>
    );
};

export default CategoriesCard;