import React from "react";

import FavoriteRecipes from "../../components/favoriterecipes/favoriteceripes/FavoriteRecipes";
import "./Favorite.css";
import { RecipeT } from "../../App";

type Prop = {
  favoriteRecipe: RecipeT[];
  setFavoriteRecipe: React.Dispatch<React.SetStateAction<RecipeT[]>>;
};
const Favorite = ({ favoriteRecipe, setFavoriteRecipe }: Prop) => {
  // console.log(favorite, "props from favorite");
  return (
    <div>
      <FavoriteRecipes
        favoriteRecipe={favoriteRecipe}
        setFavoriteRecipe={setFavoriteRecipe}
      />
    </div>
  );
};

export default Favorite;
