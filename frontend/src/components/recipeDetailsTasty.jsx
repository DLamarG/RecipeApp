import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


function RecipeDetailTasty(){
    const[recipeData,setRecipeData] = useState([]);
    const { recipe_id } = useParams();
    const baseUrl=`https://tasty.p.rapidapi.com/recipes/get-more-info?id=${recipe_id}`;

    const getTastyRecipeDetails = async () => {
        const userToken = localStorage.getItem("token")
        const payload = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '175e2ce5fbmshbe29e7f8c04a5bfp1059dajsn8adb67107d6c',
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(baseUrl, payload);
            const result = await response.json();
            setRecipeData(result);
            console.log(result)
          } catch (error) {
            console.error(error);
          }
      }
    useEffect(() => {
       getTastyRecipeDetails();
    },[]);

    return (
        <section className="container mt-4">
            <div className="row">
            <div className='col-4'>
               <img src={recipeData.thumbnail_url} className="img-thumbnail" alt="..."/>
            </div>
            <div className="col-8">
                <h3> {recipeData.name} </h3>
                <p> {recipeData.description} </p>
                <h6>Calories:{recipeData.nutrition.calories}, Carbs:{recipeData.nutrition.carbohydrates}, Sugar:{recipeData.nutrition.sugar}</h6>
                <p className="mt-3">
                    <button title="Add to wishlist" className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart fa-1.5x">Add to Favorites</i></button>
                </p>
            </div>
            </div>
        </section>
    );
};

export default RecipeDetailTasty;