import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { RecipeT } from "../../../App";
import "./RecipeItem.css";

//Prop type
type Prop = {
  recipeItem: RecipeT;
  setFavoriteRecipe: React.Dispatch<React.SetStateAction<RecipeT[]>>;
  favoriteRecipe: RecipeT[];
};

//Interface
// interface ExpandMoreProps extends IconButtonProps {
//     expand: boolean;
//   }
// ExpandMore Type
type ExpandMoreProps = IconButtonProps & {
  expand: boolean;
};

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RecipeItem = ({
  recipeItem,
  setFavoriteRecipe,
  favoriteRecipe,
}: Prop) => {
  const [expanded, setExpanded] = useState(false);
  const [favoriteColor, setFavoriteColor] = useState("grey");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //ADD Fav and change the color
  const AddToFavriteHandler = () => {
    const result = [...favoriteRecipe, recipeItem];
    setFavoriteRecipe(result);
    setFavoriteColor("red");
  };

  // console.log(favoriteRecipe, "favorite");

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {recipeItem.strMeal.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={recipeItem.strMeal}
          subheader={recipeItem.strCategory}
        />
        <CardMedia
          component="img"
          height="100"
          image={recipeItem.strMealThumb}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" component="div">
            Ingriedents:
            <List className="list" disablePadding={true}>
              <ListItem>
                1. {recipeItem.strIngredient1}:{recipeItem.strMeasure1}
              </ListItem>
              <ListItem>
                2. {recipeItem.strIngredient2}:{recipeItem.strMeasure2}
              </ListItem>
              <ListItem>
                3. {recipeItem.strIngredient3}:{recipeItem.strMeasure3}
              </ListItem>
            </List>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={AddToFavriteHandler}
            sx={{ color: favoriteColor }}
          >
            <FavoriteIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Instructions:</Typography>
            <Typography>{recipeItem.strInstructions}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default RecipeItem;
