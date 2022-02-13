import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

export const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

// Infer the `RootState` and `AppDispatch` types from the store itself
// получаем тип state
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// получаем тип dispatch
export type AppDispatch = typeof store.dispatch;