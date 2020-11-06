import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products/actions";
import { selectAllCategories } from "../store/products/selectors";
import { productsInCart } from "../store/cart/selectors";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Button, Card } from "@material-ui/core";
import {
  addProductToCart,
  increaseTotalNumberOfProducts,
} from "../store/cart/actions";

export default function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productsInMyCart = useSelector(productsInCart);
  console.log("what is products in cart", productsInMyCart);

  const categories = useSelector(selectAllCategories);

  function clickedProduct(productId, name) {
    console.log("i got clicked");
    console.log(productId);

    dispatch(addProductToCart(productId, name));
    // dispatch(removeProductFromCart(productId));
    dispatch(increaseTotalNumberOfProducts());
  }

  return (
    <div>
      <h2>The products page: Our offer.</h2>
      <div className="allProducts">
        {categories.map((category) => {
          return category.products.map((product) => {
            return (
              <Card variant="outlined" key={product.id} className="productCart">
                <div>
                  <h4>{product.name}</h4>
                  <img className="productImg" src={product.imageUrl} /> <br />
                  <Button
                    variant="outlined"
                    onClick={() => {
                      clickedProduct(product.id, product.name);
                    }}
                  >
                    {" "}
                    <AddShoppingCartIcon />{" "}
                  </Button>
                  {/* <div>
                    {productsInMyCart.includes(product.id) ? (
                      <button>remove</button>
                    ) : (
                      <button>add</button>
                    )}
                  </div> */}
                </div>
              </Card>
            );
          });
        })}
      </div>
    </div>
  );
}
