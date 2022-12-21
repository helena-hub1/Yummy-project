import React from "react";
import Typography from "@mui/material/Typography";

import FavoriteRecipeItem from "../favoriterecipeitem/FavoriteRecipeItem";
import { RecipeT } from "../../../App";

// Prop type
type Prop = {
  favoriteRecipe: RecipeT[];
  setFavoriteRecipe: React.Dispatch<React.SetStateAction<RecipeT[]>>;
};

const FavoriteRecipes = ({ favoriteRecipe, setFavoriteRecipe }: Prop) => {
  return (
    <div>
      <Typography variant="h5">Favorite Recipe List</Typography>
      {favoriteRecipe.map((favoriteItem, index) => (
        <FavoriteRecipeItem
          key={index}
          favoriteItem={favoriteItem}
          favoriteRecipe={favoriteRecipe}
          setFavoriteRecipe={setFavoriteRecipe}
        />
      ))}
    </div>
  );
};

export default FavoriteRecipes;
