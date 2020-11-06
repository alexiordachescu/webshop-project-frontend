import React from "react";
import { useSelector } from "react-redux";
import { productsInCart } from "../store/cart/selectors";

export default function ShoppingCart() {
  const buyProducts = useSelector(productsInCart);
  console.log("what is", buyProducts);

  return (
    <div>
      <h1>Your Shoppingcart:</h1>
      {buyProducts.map((product) => {
        return <p>{product.name}</p>;
      })}
    </div>
  );
}
