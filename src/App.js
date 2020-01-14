import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import './App.css'
const App = () => {
  const APP_ID = "7a9e9696";
  const APP_KEY = "56d7b02ee04b92fcbe7a1f11cb4bf9c9	";
  
  const [recipes,setRecipes] = useState([]);
  
  // const [search,setSearch] = useState("");
  useEffect(()=>{
    getRecipes();
  },[]);

  const getRecipes = async () =>{
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
  const data = await response.json();
  setRecipes(data.hits)
  console.log(data.hits);
  };
  
  return (
    <div>
      <input className="search-bar" type="text"/>
      <button className="search-button" type="submit">Search</button>
      {recipes.map(recipe => (
        <Recipe
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}/>
      ))}
    </div>
  )
}



export default App;