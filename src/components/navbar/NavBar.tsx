import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import StyledBadge from "@mui/material/Badge";
import { purple } from "@mui/material/colors";

import { Item } from "../../App";
import chef from "../../assets/chef.png";
import "./NavBar.css";

type FavoriteType = {
  favorite: Item[];
};

const NavBar = ({ favorite }: FavoriteType) => {
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
        <StyledBadge badgeContent={favorite.length} sx={{ bgcolor: purple }}>
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
