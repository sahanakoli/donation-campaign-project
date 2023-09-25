/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import CategoriesCard from "../CategoriesCard/CategoriesCard";


const Categories = () => {

    const categories = useLoaderData()
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20 mx-16">
            {
                categories ?.map(categoriesCard => <CategoriesCard key={categoriesCard.id} categories={categoriesCard}></CategoriesCard>)
            }
        </div>
    );
};

export default Categories;