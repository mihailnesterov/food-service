
import { Dispatch } from "react";
import { userAction, userActionTypes } from "../../types/users";
//import axios from "axios";
import Users from '../../data/users.json';

const users = Users;

export const fetchUsers = () => {
    return async (dispatch: Dispatch<userAction>) => {
        try {
            dispatch({
                type: userActionTypes.FETCH_USERS
            });
           
            setTimeout(() => {
                dispatch({
                    type: userActionTypes.FETCH_USERS_SUCCESS,
                    payload: users
                });
            }, 500);            
            
        } catch (error) {
            dispatch({
                type: userActionTypes.FETCH_USERS_ERROR,
                payload: 'Error on users loading!'
            });
        }
    }
}

export const fetchUser = (id: number) => {
    return async (dispatch: Dispatch<userAction>) => {
        try {
            dispatch({
                type: userActionTypes.FETCH_USERS
            });
            
            setTimeout(() => {
                dispatch({
                    type: userActionTypes.FETCH_USERS_SUCCESS,
                    payload: users.filter(user => user.id === id)
                });
            }, 500);
            
        } catch (error) {
            dispatch({
                type: userActionTypes.FETCH_USERS_ERROR,
                payload: 'Error on user loading!'
            });
        }
    }
}