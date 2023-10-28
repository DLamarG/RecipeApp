import React from 'react';
import { useState } from 'react';
import { addRecipe } from '../api';
import { Navigate } from 'react-router-dom';



function AddRecipe(){

    const [title, setTitle] = useState('');
    const [ingrediants, setIngredients] = useState('');
    const [picture, setRecipePhoto] = useState();
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const [shouldRedirect, setShouldRedirect] = useState(false)



    const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
  };

  const handlePhotoChange = (e) => {
    setRecipePhoto(e.target.files[0]);
  };

  const handleClick = () => {
    setIsButtonClicked(!isButtonClicked)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isButtonClicked){
        const resp = await addRecipe({"title":title,"ingrediants":ingrediants,"picture":picture})
        setIngredients('');
        setRecipePhoto();
        setTitle('')
        console.log(resp)
        if(resp.success !== 'Your new recipe has been added!'){
          alert(`Oops something went wrong!`);
        }else{
         setShouldRedirect(true)
        }
    }
   };
   if (shouldRedirect) {
    return <Navigate to="/home" />
   } else {
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
                                value={ingrediants}
                                onChange={handleIngredientsChange}
                                required
                                />
                            </div>
                            <div className="mb-3">
                              <label name="picture" id="customFile" className="form-label">Upload a Photo</label>
                              <input 
                              className="form-control" 
                              name="picture" 
                              id="customFile"
                              type="file"
                              onChange={handlePhotoChange}
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
   }
};

export default AddRecipe;