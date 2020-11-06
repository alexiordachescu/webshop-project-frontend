export function productsCount(state) {
  return state.cart.totalProducts;
}

export function productsInCart(state) {
  return state.cart.all;
}
