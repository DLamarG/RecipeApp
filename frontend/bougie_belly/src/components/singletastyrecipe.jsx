import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

function SingleTastyRecipe(props){
    return (
        <div className='col-12 col-md-3 mb-4'>
            <div className="card shadow">
            <Link to={`/tastyrecipe/${props.recipe.name}/${props.recipe.id}`}>
                <img src={props.recipe.thumbnail_url} className="card-img-top" alt="..."/>
            </Link>
                <div className="card-body">
                <h6 className="card-title">
                    <Link to={`/tastyrecipe/${props.recipe.name}/${props.recipe.id}`}>{props.recipe.name}</Link>
                </h6>
                <h6 className="card-title text-muted">Calories:{props.recipe.nutrition.calories}, Carbs:{props.recipe.nutrition.carbohydrates}, Sugar:{props.recipe.nutrition.sugar}</h6>
            </div>
            <div className='card-footer'>
                <button title="Add to wishlist" className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart fa-1.5x"></i></button>
            </div>
            </div>
        </div>
    )
};

export default SingleTastyRecipe;