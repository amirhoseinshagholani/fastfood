import './App.css';
import Header from './Header/header';
import CategoryList from './CategoryList/categoryList';
import axios from './axios';
import { useEffect, useState } from 'react';

function App() {

  const [loading,setLoading]=useState(false);
  const [fastFoodItem,setFastFoods]=useState([]);

  const fetchData = async (category_id=null)=>{
    const response = await axios.get(`/FastFood/list/${category_id ? "?categoryId=" + category_id : ""}`);
    setFastFoods(response.data);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  

  return (
    <div className='wrapper bg-faded-dark'>
      <Header></Header>
      <CategoryList></CategoryList>
    </div>
  );
}

export default App;
