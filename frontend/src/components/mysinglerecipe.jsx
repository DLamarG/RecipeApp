import React from 'react';
import logo from './logo.svg';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { basicFetch2 } from '../api';



function SingleRecipeList(props){
    const [shouldRedirect, setShouldRedirect] = useState(false)
    const [isButtonClicked, setIsButtonClicked] = useState(false)

    const handleClick = async () => {
        setIsButtonClicked(!isButtonClicked);
        handleDelete();
      };


   const handleDelete = async () => {
        const base_url = import.meta.env.VITE_BASE_URL
        const userToken = localStorage.getItem("token")
        const payload = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${userToken}`
          },
        }
        const body = await basicFetch2(`http://${base_url}/api/v3/myrecipes/${props.recipe.recipe_id}`, payload)
        console.log(body)
        if(body.status !== 204){
            alert('Somthing went wrong!')
        } else {
            setShouldRedirect(true)
            alert('Recipe deleted successfully')
      }
   }

   
   if (shouldRedirect) {
    return <Navigate to="/home" />
   }else{
    return (
        <div className='col-12 col-md-3 mb-4'>
            <div className="card shadow">
            <Link to={`/recipe/${props.recipe.title}/${props.recipe.recipe_id}`}>
                <img src={props.recipe.picture ? props.recipe.picture : logo} 
                className="card-img-top" 
                width="100" 
                height="300"
                ></img>
            </Link>
                <div className="card-body">
                <h6 className="card-title">
                    <Link to={`/recipe/${props.recipe.title}/${props.recipe.recipe_id}`}>{props.recipe.title}
                </Link></h6>
            </div>
            <div className='card-footer'>
                <button title="Delete Recipe" 
                className='btn btn-danger btn-sm'
                onClick={handleClick}
                >
                    <i className="fa-solid fa-trash"></i></button>
                <Link to={`/recipe/${props.recipe.title}/${props.recipe.recipe_id}`}>
                    <button title="Recipe Details" className='btn btn-primary btn-sm ms-1'>
                        <i className="fa-solid fa-circle-info"></i>
                        </button>
                </Link>
            </div>
            </div>
        </div>
    )
   }
};

export default SingleRecipeList;