import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

function SingleRecipe(props){
    return (
        <div className='col-12 col-md-3 mb-4'>
            <div className="card shadow">
            <Link to={`/recipe/${props.recipe.title}/${props.recipe.recipe_id}`}>
                <img src={logo} className="card-img-top" alt="..."/>
            </Link>
                <div className="card-body">
                <h6 className="card-title">
                    <Link to={`/recipe/${props.recipe.title}/${props.recipe.recipe_id}`}>{props.recipe.title}
                </Link></h6>
            </div>
            <div className='card-footer'>
                <button title="Add to wishlist" className='btn btn-danger btn-sm ms-1'><i className="fa fa-heart fa-1.5x"></i></button>
            </div>
            </div>
        </div>
    )
};

export default SingleRecipe;