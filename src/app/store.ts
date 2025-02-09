import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from '../redusers/forprofile';
import forprofileReducer from "../redusers/forprofile";
import reviewReducer from "../redusers/review"
import productReducer from "../redusers/products";
import cartReducer from '../redusers/cartSlice';

export interface RootState {
  cities: ReturnType<typeof citiesReducer>;
  forProfile: ReturnType<typeof forprofileReducer>;
  review: ReturnType<typeof reviewReducer>;
  products: ReturnType<typeof productReducer>;
  cart: ReturnType<typeof cartReducer>;
}

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    forProfile: forprofileReducer,
    review: reviewReducer,
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;