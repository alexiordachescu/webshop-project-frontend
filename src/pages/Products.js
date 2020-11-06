import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/products/actions";

export default function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts);
  }, [dispatch]);

  return (
    <div>
      <h2>The products page: Our offer.</h2>
    </div>
  );
}
