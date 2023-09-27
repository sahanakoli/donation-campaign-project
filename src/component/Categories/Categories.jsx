/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CategoriesCard from "../CategoriesCard/CategoriesCard";


const Categories = ({categories}) => {

    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20 mx-16 mb-6">
            {
                categories ?.map(categoriesCard => <CategoriesCard key={categoriesCard.id} categories={categoriesCard}></CategoriesCard>)
            }
        </div>
    );
};

export default Categories;