import axios from "axios";
import { CART_ADD_ITEM,CART_DELETE_ITEM} from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  //  getState() hook will get all the state factors from store
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const deleteItem=(id)=>async(dispatch,getState)=>{
    dispatch({
    type:CART_DELETE_ITEM,
    payload:id

  })
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}