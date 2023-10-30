import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { basicFetch } from '../api';
import SingleRecipeList from './mysinglerecipe'


function MyRecipes(){

  const [Recipes, setRecipes] = useState([]);
  const base_url = import.meta.env.VITE_BASE_URL
     useEffect(() => {
       const getRecipes = async () => {

            const userToken = localStorage.getItem("token")
            const payload = {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${userToken}`
              },
            }
            const body = await basicFetch(`http://${base_url}/api/v3/myrecipes/`, payload)
            setRecipes(body)
            console.log(body)
            return body
          }
        getRecipes();
     },[]);

    return (
        <div className='container'>
          {/* Latest Products */}
          <h3 className='mb-4'> My Recipes <Link to='/home' className='float-end btn btn-sm btn-dark m-2'>View All Recipes<i className="fa-solid fa-arrow-right-long m-1"></i></Link></h3>
          <div className='row mb-4'>
          {
             Recipes.map((recipe) => <SingleRecipeList key={recipe.recipe_id} recipe={recipe}/>)
            }
          </div>
          </div>
    );

        };

export default MyRecipes;