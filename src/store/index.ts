import {authorReducer} from "./reducers/authorReducer";
import {bookReducer} from "./reducers/bookReducer";
import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";


const initialState = {};
const rootReducer = combineReducers({
    authors: authorReducer  ,
    books: bookReducer
})

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export type RootState = ReturnType<typeof rootReducer>
export default store
