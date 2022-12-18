import { Typography } from "@material-ui/core/";

import "./Footer.css";
import cake from "../../../assets/cake.avif";
import shrimp from "../../../assets/shrimp.avif";
import piza from "../../../assets/pizza.webp";
import salad from "../../../assets/salad.avif";
import chicken from "../../../assets/chicken.avif";

const Footer = () => {
  return (
    <div className="footer">
      <Typography variant="h5">Popular food</Typography>
      <Typography>
        We provide a variety of foods and beverage recipes with highest taste
        from famous chefs!
      </Typography>
      <div className="pics-container">
        <img src={cake} alt="cake"></img>
        <img src={shrimp} alt="shrimp"></img>
        <img src={piza} alt="piza"></img>
        <img src={salad} alt="salad"></img>
        <img src={chicken} alt="chicken"></img>
      </div>
    </div>
  );
};

export default Footer;
