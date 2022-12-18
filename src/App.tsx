import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Contact from "./pages/contact/Contact";
import Favorite from "./pages/favorite/Favorite";
import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import NavBar from "./components/navbar/NavBar";

// Declaring the type of recipe
export type RecipeType = {
  meals: {
    idMeal: number;
    strMeal: string;
    strCategory: string;
    strMealThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
  }[];
};
// Declaring the type of item
export type Item = {
  idMeal: number;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
};
function App() {
  // Initializing state arrays
  const [userInput, setUserInput] = useState("");
  const [recipe, setRecipe] = useState<RecipeType>({ meals: [] });
  const [filteredRecipe, setFilteredRecipe] = useState<RecipeType>({
    meals: [],
  });
  const [favoriteColor, setFavoriteColor] = useState("grey");
  const [favorite, setFavorite] = useState<Item[]>([]);

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`;

  // Fetching data

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.log(error));
  }, [url]);
  //  On search handler
  const onSearchHandler = () => {
    //Validation
    if (userInput === "") {
      alert("please enter the recipe name");
      return;
    } else if (recipe.meals === null) {
      alert("Sorry we have not got this recipe yet !");
      // console.log("not available");
      return;
    } else {
      setFilteredRecipe(recipe);
    }
  };

  // On favorite color handler
  const onFavoriteIconClickHandler = (element: Item) => {
    const changeColor = [...filteredRecipe.meals];
    // console.log(changeColor, "...");
    const index = changeColor.findIndex(
      (item) => item.idMeal === element.idMeal
    );
    if (index !== -1) {
      setFavoriteColor("red");
    }
  };

  // Adding item to recipe
  const addToFavorite = (fitem: Item) => {
    let updateFavorite = [...favorite];
    updateFavorite = [...favorite, fitem];
    onFavoriteIconClickHandler(fitem);
    setFavorite(updateFavorite);
  };
  return (
    <div className="App">
      <NavBar favorite={favorite} />

      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route
          path="/recipe"
          element={
            <Recipe
              userInput={userInput}
              setUserInput={setUserInput}
              onSearchHandler={onSearchHandler}
              filteredRecipe={filteredRecipe}
              addToFavorite={addToFavorite}
              favoriteColor={favoriteColor}
            />
          }
        ></Route>
        <Route
          path="/favorite"
          element={<Favorite favorite={favorite} userInput={userInput} />}
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
