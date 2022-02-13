import {authAction, authActionTypes, IAuthState} from '../../types/auth';

const initialState: IAuthState = {
    isAuthorized: false
};

export const authReducer = (state = initialState, action: authAction): IAuthState => {
    switch (action.type) {
        case authActionTypes.SET_AUTH:
            return {
                ...state, 
                isAuthorized: action.payload
            }
        case authActionTypes.SET_AUTH_SUCCESS:
            return {
                ...state, 
                isAuthorized: action.payload
            }
        case authActionTypes.SET_AUTH_ERROR:
            return {
                isAuthorized: false
            }
        default:
            return state;
    }
}