import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Button } from "@material-ui/core";
import { productsCount } from "../store/cart/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ToolBar() {
  const totalNr = useSelector(productsCount);
  console.log("How many?", totalNr);
  return (
    <div>
      <Link to="/basket">
        <Button variant="outlined">
          {" "}
          <ShoppingBasketIcon className="shoppingbasketicon" />
          Currently you have {totalNr} items in your shopping cart. Please buy
          more!
        </Button>
      </Link>
    </div>
  );
}
