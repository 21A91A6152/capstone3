import Axios from "axios";
import React, { useEffect, useState } from 'react';
import "./products1.css";
import "./recipe.css";
import { v4 as uuidv4 } from "uuid";

function Products1() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const YOUR_APP_ID = `455cbb9c`;
  const YOUR_APP_KEY = "aa295104091395e6a9de1ee7e06b376a";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
 
  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>Food Recipe Plaza 🍔</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingridient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>

      <div className="app__recipes">
        { 
           
           
            recipes.map((recipe) => {
              
             
            recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
              <div
                className="recipeTile"
                onClick={() => window.open(recipe["recipe"]["url"])}
              >
                <img className="recipeTile__img" src={recipe["recipe"]["image"]} />
                <p className="recipeTile__name" key={uuidv4()}>
                  {recipe["recipe"]["label"]}
                </p>
              </div>
            )
          })
          }
      </div>
    </div>
  );
}

export default Products1;
