import React from "react";

import RecipePage from "../../components/recipe/recipepage/RecipePage";
import { RecipeT } from "../../App";

// Prop type
type Prop = {
  recipes: RecipeT[];
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  setFavoriteRecipe: React.Dispatch<React.SetStateAction<RecipeT[]>>;
  favoriteRecipe: RecipeT[];
};

const Recipe = ({
  recipes,
  setUserInput,
  setFavoriteRecipe,
  favoriteRecipe,
}: Prop) => {
  // console.log(filteredRecipe, "from R");
  return (
    <div>
      <RecipePage
        recipes={recipes}
        setUserInput={setUserInput}
        setFavoriteRecipe={setFavoriteRecipe}
        favoriteRecipe={favoriteRecipe}
      />
    </div>
  );
};

export default Recipe;
