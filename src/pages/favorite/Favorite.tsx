import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { Item } from "../../App";
import "./Favorite.css";

// Prop type declaration
type FavoriteType = {
  favorite: Item[];
  userInput: string;
};
const Favorite = ({ favorite, userInput }: FavoriteType) => {
  console.log(favorite, "props from favorite");
  return (
    <div>
      <Typography variant="h5">Favorite Recipe List</Typography>
      {favorite.map((item, index) => {
        return (
          <Card key={index} className="favorite-card">
            <CardHeader
              title={<Typography gutterBottom>{item.strMeal}</Typography>}
              subheader={userInput}
            />

            <CardContent>
              <Box>
                <img
                  src={item.strMealThumb}
                  width="130px"
                  height="100px"
                  alt="Favorite"
                ></img>
              </Box>
            </CardContent>
          </Card>
        );
      })}
      {/* {favorite} */}
    </div>
  );
};

export default Favorite;
