import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import SearchForm from "../../components/searchform/SearchForm";
import { RecipeType } from "../../App";

// Proptype declaration
export type PropType = {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  onSearchHandler: React.MouseEventHandler<HTMLButtonElement>;
  filteredRecipe: RecipeType;
  addToFavorite: any;
  favoriteColor: string;
};

const Recipe = ({
  userInput,
  setUserInput,
  onSearchHandler,
  filteredRecipe,
  addToFavorite,
  favoriteColor,
}: PropType) => {
  // console.log(filteredRecipe, "from R");

  return (
    <div>
      <SearchForm
        userInput={userInput}
        setUserInput={setUserInput}
        onSearchHandler={onSearchHandler}
      />
      {/* Grid Item container */}

      <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{ ml: 10 }}>
        {filteredRecipe.meals.map((item, index) => {
          return (
            // Grid item
            <Grid key={index} sx={{ mb: 2, mt: 2 }}>
              {/* Item card */}
              <Card sx={{ maxWidth: 400, ml: 2 }}>
                {/* Header */}
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {item.strMeal.charAt(0)}
                    </Avatar>
                  }
                  title={item.strMeal}
                  subheader={userInput}
                />
                <CardMedia
                  component="img"
                  height="200"
                  image={item.strMealThumb}
                  alt={item.strMeal}
                />
                {/* Card content */}
                <CardContent>
                  <Typography component="div">
                    <Box
                      sx={{
                        m: 1,
                        textAlign: "center",
                      }}
                    >
                      Ingeriedent:
                    </Box>
                    <Box
                      sx={{
                        fontSize: "12px",
                        m: 1,
                        textAlign: "left",
                      }}
                    >
                      1.{item.strIngredient1}
                    </Box>
                    <Box
                      sx={{
                        fontSize: "12px",
                        m: 1,
                        textAlign: "left",
                      }}
                    >
                      2.{item.strIngredient2}
                    </Box>
                    <Box
                      sx={{
                        fontSize: "12px",
                        m: 1,
                        textAlign: "left",
                        listStyle: "number",
                      }}
                    >
                      3.{item.strIngredient3}
                    </Box>
                  </Typography>
                </CardContent>
                {/* Card action */}
                <CardActions>
                  <IconButton
                    sx={{ color: favoriteColor }}
                    onClick={() => {
                      addToFavorite(item);
                    }}
                  >
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Recipe;
