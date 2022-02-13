export enum authActionTypes {
    SET_AUTH           = 'SET_AUTH',
    SET_AUTH_SUCCESS   = 'SET_AUTH_SUCCESS',
    SET_AUTH_ERROR     = 'SET_AUTH_ERROR'
}

export interface IAuthState {
    isAuthorized: boolean;
}

interface ISetAuthAction {
    type: authActionTypes.SET_AUTH;
    payload: boolean;
}

interface ISetAuthSuccessAction {
    type: authActionTypes.SET_AUTH_SUCCESS;
    payload: boolean;
}

interface ISetAuthErrorAction {
    type: authActionTypes.SET_AUTH_ERROR;
    payload: string;
}

export type authAction = ISetAuthAction | ISetAuthSuccessAction | ISetAuthErrorAction;
