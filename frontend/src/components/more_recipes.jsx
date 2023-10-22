import React, { useState, useEffect } from 'react';
import SingleTastyRecipe from './singletastyrecipe';


function RecipeSearch() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const url = `https://tasty.p.rapidapi.com/recipes/list`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '175e2ce5fbmshbe29e7f8c04a5bfp1059dajsn8adb67107d6c',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setSearchResults(result.results);
      console.log(result.results)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div>
      <div>
        <h2>Recipes from Tasty.com</h2>
        <div className="container">
          <div className="row mb-4">
            {searchResults.map((recipe) => (
              <SingleTastyRecipe key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeSearch;


