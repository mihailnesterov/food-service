import {combineReducers} from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";
import { clientReducer } from "./clientReducer";
import { themeReducer } from "./themeReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
    client: clientReducer,
    theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;