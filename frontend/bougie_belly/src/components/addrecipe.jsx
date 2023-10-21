import React from 'react';
import { useState } from 'react';
import { addRecipe } from '../api';


function AddRecipe(){

    const [title, setTitle] = useState('');
    const [ingredients, setIngrediants] = useState('');
    const [isButtonClicked, setIsButtonClicked] = useState(false)

    const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleIngredientsChange = (e) => {
    setIngrediants(e.target.value);
  };

  const handleClick = () => {
    setIsButtonClicked(!isButtonClicked)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isButtonClicked){
        addRecipe({"title":title,"ingrediants":ingredients})
        setTitle('');
        setIngrediants('');
    }
   };

    return (
        <div className='container mt-4'>
            <div className="row">
                <div className="col-md-9 col-12 mb-2">
                <div className="card">
                  <h4 className="card-header">Add Recipe</h4>
                  <div className="card-body">
                        <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                                <label name="title" className="form-label">Title</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="title" 
                                name="title"
                                value={title}
                                onChange={handleTitleChange}
                                required
                                />
                            </div>
                            <div className="mb-3">
                                <label name="ingredients" className="form-label">Ingredients</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="ingredients" 
                                name='ingredients'
                                value={ingredients}
                                onChange={handleIngredientsChange}
                                required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
                        </form>
                  </div>
                  </div>
                </div>
            </div>
        </div>
    )
};

export default AddRecipe;