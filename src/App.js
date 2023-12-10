import './App.css';
import Header from './Header/header';
import CategoryList from './CategoryList/categoryList';
import axios from './axios';
import { useEffect, useState } from 'react';
import Loading from './Loading/loading';
import FastFoodList from './FastFoodList/fastFoodList';
import SearchBar from './SearchBar/searchBar';
import notFound from './assets/images/404.jpg';

function App() {

  const [loading, setLoading] = useState(false);
  const [fastFoodItem, setFastFoods] = useState([]);
  const [isSearch,setIsSearch] = useState(false);

  const fetchData = async (category_id = null) => {
    const response = await axios.get(`/FastFood/list/${category_id ? "?categoryId=" + category_id : ""}`);
    setFastFoods(response.data);
  }

  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  const filterItems = (category_id) => {
    fetchData(category_id);
  }

  const serachItems = async (term) => {
    setIsSearch(true);
    setLoading(true);
    const response = await axios.get(`/FastFood/search/${term ? "?term=" + term : ""}`);
    setFastFoods(response.data);
    setLoading(false);
  }

  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark"></Loading>
    }
    
    if(fastFoodItem.length==0 && isSearch==true){
      return(
      <>
        <div className='alert alert-warning text-center'>
          موردی یافت نشد
        </div>
        <img className='mx-auto mt-5 d-block' width="600" height="400" src={notFound}></img>
      </>
      )
    }else{
      return <FastFoodList fastFoodItem={fastFoodItem}></FastFoodList>
    }
    
  }

  return (
    <div className='wrapper bg-faded-dark'>
      <Header></Header>
      <CategoryList filterItems={filterItems}>
        <SearchBar serachItems={serachItems}></SearchBar>
      </CategoryList>
      <div className='container mt-4'>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
