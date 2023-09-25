/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */



const Category = ({categories}) => {

   const {image, title, category_name, category_color} = categories || []

   
    return (
        <div className="">
            
           <div className="card w-full mx-auto bg-base-100 shadow-xl">
  <figure className=" w-full px-0"><img src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{category_name}</h2>
    <p>{title}</p>
  </div>
</div>
        </div>
    );
};

export default Category;