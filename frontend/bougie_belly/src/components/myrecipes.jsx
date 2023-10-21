import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleRecipe from './singlerecipe';
import { useState, useEffect } from 'react';
import { basicFetch } from '../api';


function MyRecipes(){

  const [Recipes, setRecipes] = useState([]);

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
            const body = await basicFetch("http://localhost:8000/api/v3/myrecipes/", payload)
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
             Recipes.map((recipe) => <SingleRecipe key={recipe.recipe_id} recipe={recipe}/>)
            }
          </div>
          </div>
    );

        };

export default MyRecipes;