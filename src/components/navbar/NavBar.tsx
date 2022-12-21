import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import StyledBadge from "@mui/material/Badge";

import chef from "../../assets/chef.png";
import "./NavBar.css";

import { RecipeT } from "../../App";

type Prop = {
  favoriteRecipe: RecipeT[];
};
const NavBar = ({ favoriteRecipe }: Prop) => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={chef} alt="chef" height="40px" width="30px"></img>
        <Typography>YUMMY</Typography>
      </div>
      <div className="pages-container">
        <Link className="navBarLink" to="/">
          HOME
        </Link>
        <Link className="navBarLink" to="/recipe">
          RECIPE
        </Link>
        <StyledBadge
          badgeContent={favoriteRecipe.length}
          sx={{
            // vertical: "top",
            // horizontal: "right",
            // // right: -3,

            // textDecoration: purple,
            "& .MuiBadge-badge": {
              color: "purple",
              top: -3,
              // backgroundColor: "green",
            },
          }}
        >
          <Link className="navBarLink" to="/favorite">
            FAVORITE
          </Link>
          {/* <MailIcon color="action" /> */}
        </StyledBadge>

        <Link className="navBarLink" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
