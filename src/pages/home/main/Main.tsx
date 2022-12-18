import React from "react";
import { Typography } from "@material-ui/core";
// Second way
// import Typography from "@material-ui/core/Typography";

import "./Main.css";
const Main = () => {
  return (
    <div className="main">
      <Typography variant="h4">HEALTHY DELICIOUS RECIPES</Typography>
      {/* <h1></h1> */}
    </div>
  );
};

export default Main;
