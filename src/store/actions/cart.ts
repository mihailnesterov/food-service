
import { Dispatch } from "react";
import { cartAction, cartActionTypes } from "../../types/cart";
//import axios from "axios";

export const fetchCart = (cart: any[]) => {
    return async (dispatch: Dispatch<cartAction>) => {
        try {
            dispatch({
                type: cartActionTypes.FETCH_CART
            });
           
            setTimeout(() => {
                dispatch({
                    type: cartActionTypes.FETCH_CART_SUCCESS,
                    payload: cart
                });
            }, 100);            
            
        } catch (error) {
            dispatch({
                type: cartActionTypes.FETCH_CART_ERROR,
                payload: 'Error on users loading!'
            });
        }
    }
}
