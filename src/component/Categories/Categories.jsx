/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";


const Categories = () => {

    const categories = useLoaderData()
    console.log(categories)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 mx-10">
            {
                categories ?.map(category => <Category key={category.id} categories={category}></Category>)
            }
        </div>
    );
};

export default Categories;