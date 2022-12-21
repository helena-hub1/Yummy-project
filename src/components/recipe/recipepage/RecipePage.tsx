import React from "react";

import RecipeList from "../recipelist/RecipeList";
import SearchForm from "../../searchform/SearchForm";
import { RecipeT } from "../../../App";

//prop type
type Prop = {
  recipes: RecipeT[];
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  setFavoriteRecipe: React.Dispatch<React.SetStateAction<RecipeT[]>>;
  favoriteRecipe: RecipeT[];
};

const Recipes = ({
  recipes,
  setUserInput,
  setFavoriteRecipe,
  favoriteRecipe,
}: Prop) => {
  return (
    <div>
      <SearchForm setUserInput={setUserInput} />
      <RecipeList
        recipes={recipes}
        setFavoriteRecipe={setFavoriteRecipe}
        favoriteRecipe={favoriteRecipe}
      />
    </div>
  );
};

export default Recipes;
