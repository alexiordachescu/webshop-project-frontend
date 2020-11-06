//remove a product
//if product is in cart, show remove button
//button onclick removes item

//create selector which gets products in cart

export function addProductToCart(productId, name) {
  return {
    type: "ADD_TO_CART",
    payload: { productId, name },
  };
}

export function increaseTotalNumberOfProducts() {
  return {
    type: "INCREMENT_TOTAL",
  };
}

export function decreaseTotalNumberOfProducts() {
  return {
    type: "DECREMENT_TOTAL",
  };
}
