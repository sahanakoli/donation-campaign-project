import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Category from "../../component/Category/Category";




const CategoryCard = () => {

    const [category, setCategory] = useState({});

    const {id} = useParams();
    console.log(id)

    const categories = useLoaderData();
    console.log(categories)

    useEffect(() => {
        const findCategory = categories?.find(category => category.id == id);

        setCategory(findCategory)
    } ,[id, categories]);

    console.log(category)
    return (
        <div>
            <Category category={category}></Category>
        </div>
    );
};

export default CategoryCard;