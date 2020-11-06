import { combineReducers } from "redux";
import productsSliceReducer from "./products/reducer";

const reducer = combineReducers({
  products: productsSliceReducer,
});

export default reducer;
