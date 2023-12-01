import axios from "../axios";
import { useEffect } from "react";

const CategoryList = ()=>{
    useEffect(()=>{
        const fetchCategories = async () =>{
            const response = await axios.get('/FoodCategory/categories');
            console.log(response.data);
        }
        fetchCategories();
    },[]);
    return(
        <div><h1>Category List</h1></div>
    )
}

export default CategoryList;