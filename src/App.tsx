import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Contact from "./pages/contact/Contact";
import Favorite from "./pages/favorite/Favorite";
import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import NavBar from "./components/navbar/NavBar";

// Recipe
export type RecipeT = {
  idMeal: number;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strInstructions: string;
};

function App() {
  // Initializing state arrays
  const [userInput, setUserInput] = useState("");
  const [recipes, setRecipes] = useState<RecipeT[]>([]);
  const [favoriteRecipe, setFavoriteRecipe] = useState<RecipeT[]>([]);

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`;

  // Get data and handle the effect
  useEffect(() => {
    const getData = async () => {
      const result = await fetch(url);
      const data = await result.json();
      setRecipes(data.meals);
    };
  }, [url]);

  return (
    <div className="App">
      <NavBar favoriteRecipe={favoriteRecipe} />

      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route
          path="/recipe"
          element={
            <Recipe
              setUserInput={setUserInput}
              recipes={recipes}
              setFavoriteRecipe={setFavoriteRecipe}
              favoriteRecipe={favoriteRecipe}
            />
          }
        ></Route>
        <Route
          path="/favorite"
          element={
            <Favorite
              favoriteRecipe={favoriteRecipe}
              setFavoriteRecipe={setFavoriteRecipe}
            />
          }
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
