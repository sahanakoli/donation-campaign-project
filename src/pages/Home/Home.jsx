import { useEffect, useState } from "react";
import Banner from "../../component/Banner/Banner";
import Categories from "../../component/Categories/Categories";



const Home = () => {

    const [categories , setCategories] = useState([]);

    const [category, setCategory] = useState('');
    

    const handleSearchBtn = () => {
        const filterCategories = categories.filter(categories => categories.category_name == category)
        setCategories(filterCategories)
    }

    useEffect(() => {
        fetch('/donation.json')
        .then(res => res.json())
        .then(data =>setCategories(data));
    }, [])

    
    return (
        <div>
           <Banner category={category} setCategory={setCategory} handleSearchBtn={handleSearchBtn}></Banner> 
           <Categories categories={categories}></Categories>
        </div>
    );
};

export default Home;