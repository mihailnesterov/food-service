import {cartAction, cartActionTypes, ICartState} from '../../types/cart';

const initialState: ICartState = {
    cart: [{}],
    loading: false,
    error: null
};

export const cartReducer = (state = initialState, action: cartAction): ICartState => {
    switch (action.type) {
        case cartActionTypes.FETCH_CART:
            return {
                cart: [{}],
                loading: true,
                error: null
            }
        case cartActionTypes.FETCH_CART_SUCCESS:
            return {
                cart: action.payload,
                loading: false,
                error: null
            }
        case cartActionTypes.FETCH_CART_ERROR:
            return {
                cart: [{}],
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}