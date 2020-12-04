import {BookState, StoreActionTypes} from "../../types/LibraryTypes"
import {CREATE_BOOK, UPDATE_BOOK, DELETE_BOOK} from "../../constants/actions/BooksActions";

const initialState: BookState = {
    books: []
}

export const bookReducer = (action: StoreActionTypes, state: BookState = initialState): BookState => {
    switch (action.type) {
        case CREATE_BOOK:
            return state
        case UPDATE_BOOK:
            return state
        case DELETE_BOOK:
            return state
        default:
            return state
    }
}

