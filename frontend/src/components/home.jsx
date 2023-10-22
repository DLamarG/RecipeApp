import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleRecipe from './singlerecipe';
import { useState, useEffect } from 'react';
import { basicFetch } from '../api';

function Home(){

  const [Recipes, setRecipes] = useState([]);

     useEffect(() => {
        const getRecipes = async () => {
          const base_url = import.meta.env.VITE_BASE_URL
          const userToken = localStorage.getItem("token")
          const payload = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Token ${userToken}`
            },
          }
          const body = await basicFetch(`http://${base_url}/api/v2/recipes/`, payload)
          setRecipes(body)
          console.log(body)
          return body
        }
        // const fetchData = async () => {
        //     const apiData = await fetch("http://127.0.0.1:8000/api/v2/recipes/");
        //     const apiJSON = await(apiData.json());
        //     console.log(apiJSON)
        //     setRecipes(apiJSON)
        // };
        getRecipes();
     },[]);

    return (
        <main className='mt-4'>
        <div className='container'>
          {/* Latest Products */}
          <h3 className='mb-4'> All Recipes <Link to='#' className='float-end btn btn-sm btn-dark m-2'>View All Products<i className="fa-solid fa-arrow-right-long m-1"></i></Link></h3>
          <div className='row mb-4'>
          {
             Recipes.map((recipe) => <SingleRecipe key={recipe.recipe_id} recipe={recipe}/>)
            }
          </div>
          {/* End Latest Products */}
        </div>
      </main>
    );
};

export default Home;