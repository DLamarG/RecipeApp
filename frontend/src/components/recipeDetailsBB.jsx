import React from 'react';
import logo from './logo.svg';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { basicFetch } from '../api';

function RecipeDetailBB(){
    const[recipeData,setRecipeData] = useState([]);
    const { recipe_id } = useParams();
    const base_url = import.meta.env.VITE_BASE_URL
    const baseUrl=`http://${base_url}/api/v2`;

    const getRecipeDetails = async () => {
        const userToken = localStorage.getItem("token")
        const payload = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${userToken}`
          },
        }
        const body = await basicFetch(baseUrl+'/recipe-details/'+recipe_id+'/', payload)
        setRecipeData(body)
        console.log(body)
        return body
      }
    useEffect(() => {
       
       getRecipeDetails();
    },[]);

    return (
        <section className="container mt-4">
            <div className="row">
            <div className='col-4'>
               <img src={recipeData.picture ? recipeData.picture : logo} className="img-thumbnail" alt="..."/>
            </div>
            <div className="col-8">
                <h3> {recipeData.title} </h3>
                <p> {recipeData.ingrediants} </p>
                <p className="mt-3">
                    <button title="Add to wishlist" className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart fa-1.5x">Add to Favorites</i></button>
                </p>
            </div>
            </div>
        </section>
    );
};

export default RecipeDetailBB;