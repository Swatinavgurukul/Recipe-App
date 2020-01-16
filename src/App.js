import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import './App.css'
const App = () => {
  const APP_ID = "7a9e9696";
  const APP_KEY = "56d7b02ee04b92fcbe7a1f11cb4bf9c9	";
  
  const [recipes,setRecipes] = useState([]);
  
  const [search,setSearch] = useState("");

  const [query,setQuery] = useState('banana');


  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes = async () =>{
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
  const data = await response.json();
  setRecipes(data.hits)
  console.log(data.hits);
  };
  
  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">

      <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      <button className="search-button" type="submit">Search</button>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
      </form>
    </div>
  )
}



export default App;