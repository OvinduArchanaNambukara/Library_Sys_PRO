import {authorReducer} from "./reducers/authorReducer";
import {bookReducer} from "./reducers/bookReducer";
import {combineReducers, createStore} from "redux"

const rootReducer = combineReducers({
    authors: authorReducer,
    books: bookReducer
})

const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>
export default store
