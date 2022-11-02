import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  productListReducer,
  productDetailReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { userLoginReducer, userRegisterReducer,userDetailReducer,updateProfileReducer } from "./reducers/userReducers";
import{orderCreateReducer,orderDetailsReducer} from './reducers/orderReducers.js'
const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails:userDetailReducer,
  userUpdateProfile:updateProfileReducer,
  orderCreate:orderCreateReducer,
  orderDetails:orderDetailsReducer

});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
  const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : null;

  const paymentMethodFromStorage=localStorage.getItem("paymentMethod")?JSON.parse(localStorage.getItem('paymentMethod'))
  : null;
const preloadedState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress:shippingAddressFromStorage,
    paymentMethod:paymentMethodFromStorage
  },
  userLogin: { userInfo: userInfoFromStorage },
  userRegister:{}
};
const store = configureStore({ reducer, preloadedState, middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
}) });
export default store;
