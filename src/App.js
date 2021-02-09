import "./App.css";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Banner from './Banner'
import Nav from './Nav'

function App() {
  const APP_ID = "0633becd";
  const APP_KEY = "0e9a883fb63a5deabdc101beab7a59ca";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    
    <div className="App">
      <Nav />
      <Banner getSearch={getSearch} updateSearch={updateSearch} search={search} />
      
      <div className='container-fluid content-row'>
        <div className="row">
          {recipes.map((e) => (
            <Recipe
              key={e.recipe.label}
              title={e.recipe.label}
              calories={e.recipe.calories}
              imgUrl={e.recipe.image}
              ingredients={e.recipe.ingredients}
            />
          ))}
        </div>
      </div>
      <footer>
        <div className="main_footer">
          <h2>I am the footer</h2>
        </div>
      </footer>
    </div>
  );
}

export default App;
