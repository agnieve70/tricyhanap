import { combineReducers } from "redux";

import {
  productReducer,
  selectedProductReducer,
} from "./reducers/productReducers";

const reducers = combineReducers({
  products: productReducer,
  product: selectedProductReducer,
});

export default reducers;
