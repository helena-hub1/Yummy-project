import React from "react";
import { Grid } from "@mui/material";

import RecipeItem from "../recipeitem/RecipeItem";
import { RecipeT } from "../../../App";

// Prop type

type Prop = {
  recipes: RecipeT[];
  setFavoriteRecipe: React.Dispatch<React.SetStateAction<RecipeT[]>>;
  favoriteRecipe: RecipeT[];
};
const RecipeList = ({ recipes, setFavoriteRecipe, favoriteRecipe }: Prop) => {
  console.log(recipes, "recipes");

  if (recipes === null) {
    return <div>Sorry we have not got this recipe!</div>;
  }
  return (
    <div>
      <Grid container spacing={2} sx={{ ml: 2, mr: 2 }}>
        {recipes.map((recipeitem, index) => {
          return (
            <Grid item key={index} sx={{ mb: 2, mt: 2 }}>
              <RecipeItem
                key={index}
                recipeItem={recipeitem}
                setFavoriteRecipe={setFavoriteRecipe}
                favoriteRecipe={favoriteRecipe}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default RecipeList;
