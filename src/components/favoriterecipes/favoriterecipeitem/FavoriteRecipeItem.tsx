import React from "react";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

import { RecipeT } from "../../../App";
import "../favoriterecipeitem/FavoriteRecipeItem.css";

type Prop = {
  favoriteItem: RecipeT;
  favoriteRecipe: RecipeT[];
  setFavoriteRecipe: React.Dispatch<React.SetStateAction<RecipeT[]>>;
};

const FavoriteRecipeItem = ({
  favoriteItem,
  favoriteRecipe,
  setFavoriteRecipe,
}: Prop) => {
  // Delete favorite handler
  const DeleteFromFavriteHandler = () => {
    const deleteFavorite = [...favoriteRecipe];
    const favoriteIndex = deleteFavorite.findIndex(
      (item) => item.idMeal === favoriteItem.idMeal
    );
    if (favoriteIndex !== -1) {
      deleteFavorite.splice(favoriteIndex, 1);
      // console.log(Index, "index....");
      setFavoriteRecipe(deleteFavorite);
    }
  };

  return (
    <div>
      <Card className="favorite-card">
        <CardHeader
          title={<Typography gutterBottom>{favoriteItem.strMeal}</Typography>}
          subheader={favoriteItem.strCategory}
        />
        <CardContent>
          <Box>
            <img
              src={favoriteItem.strMealThumb}
              width="130px"
              height="100px"
              alt="Favorite"
            ></img>
          </Box>
        </CardContent>
        <IconButton
          aria-label="delete from favorites"
          onClick={DeleteFromFavriteHandler}
        >
          <DeleteIcon />
        </IconButton>
      </Card>

      {/* {favorite} */}
    </div>
  );
};

export default FavoriteRecipeItem;
