import {BookActionTypes} from "../../types/store/BookActionTypes";
import {IBook} from "../../types/LibraryTypes";
import {ADD_BOOK, DELETE_BOOK, FETCH_ALL_BOOKS, UPDATE_BOOK} from "../constants/BookConstants";

const initialState: BookTypes = {
    books: []
}

interface BookTypes {
    books: IBook[]
}

export const BookReducer = (state: BookTypes = initialState, action: BookActionTypes) => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                books: [action.payload, ...state.books]
            }
        case DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter((book: IBook, index: number) => index !== action.payload.deleteIndex)
            }
        case UPDATE_BOOK:
            const newBookArray: IBook[] = [...state.books];
            newBookArray[action.payload.bookIndex] = action.payload.updateBook;
            return {
                ...state,
                books: newBookArray
            }
        case FETCH_ALL_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        default:
            return state
    }
}
