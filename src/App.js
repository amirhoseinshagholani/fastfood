import './App.css';
import Header from './Header/header';
import CategoryList from './CategoryList/categoryList';
import axios from './axios';
import { useEffect, useState } from 'react';
import Loading from './Loading/loading';
import FastFoodList from './FastFoodList/fastFoodList';

function App() {

  const [loading,setLoading]=useState(false);
  const [fastFoodItem,setFastFoods]=useState([]);

  const fetchData = async (category_id = null) => {
    const response = await axios.get(`/FastFood/list/${category_id ? "?categoryId=" + category_id : ""}`);
    setFastFoods(response.data);
  }

  useEffect(()=>{
    setLoading(true);
    fetchData();
    setLoading(false);
  },[]);

  const renderContent = () =>{
    if(loading){
      return <Loading theme="dark"></Loading>
    }else{
      return <FastFoodList fastFoodItem={fastFoodItem}></FastFoodList>
    } 
  }

  return (
    <div className='wrapper bg-faded-dark'>
      <Header></Header>
      <CategoryList></CategoryList>
      <div className='container mt-4'>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
