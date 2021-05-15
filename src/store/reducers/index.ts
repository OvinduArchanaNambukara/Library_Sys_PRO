import {combineReducers, createStore} from "redux";
import {AuthorReducer} from "./AuthorReducer";
import {composeWithDevTools} from 'redux-devtools-extension';

export const rootReducer = combineReducers({
    authorReducer: AuthorReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());
