/*const FETCH_CART           = 'FETCH_CART';
const FETCH_CART_SUCCESS   = 'FETCH_CART_SUCCESS';
const FETCH_CART_ERROR     = 'FETCH_CART_ERROR';*/

export enum cartActionTypes {
    FETCH_CART           = 'FETCH_CART',
    FETCH_CART_SUCCESS   = 'FETCH_CART_SUCCESS',
    FETCH_CART_ERROR     = 'FETCH_CART_ERROR'
}

export interface ICartState {
    cart: any;
    loading: boolean;
    error: null | string;
}

interface IFetchCartAction {
    // type: typeof FETCH_CART; // если без enum
    type: cartActionTypes.FETCH_CART;
}

interface IFetchCartSuccessAction {
    type: cartActionTypes.FETCH_CART_SUCCESS;
    payload: any;
}

interface IFetchCartErrorAction {
    type: cartActionTypes.FETCH_CART_ERROR;
    payload: string;
}

/*interface cartAction {
    type: string;
    payload?: any;
}*/

export type cartAction = IFetchCartAction | IFetchCartSuccessAction | IFetchCartErrorAction;
