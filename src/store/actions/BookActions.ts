import {BookActionTypes} from "../../types/store/BookActionTypes";
import {ADD_BOOK, DELETE_BOOK, FETCH_ALL_BOOKS, UPDATE_BOOK} from "../constants/BookConstants";
import {IBook} from "../../types/LibraryTypes";


export const addBook = (newBook: IBook): BookActionTypes => {
    return {
        type: ADD_BOOK,
        payload: newBook
    }
}

export const deleteBook = (deleteIndex: number): BookActionTypes => {
    return {
        type: DELETE_BOOK,
        payload: {
            deleteIndex: deleteIndex
        }
    }
}

export const updateBook = (updateBook: IBook, bookIndex: number): BookActionTypes => {
    return {
        type: UPDATE_BOOK,
        payload: {
            updateBook: updateBook,
            bookIndex: bookIndex
        }
    }
}
export const fetchAllBooks = (allBooks: IBook[]): BookActionTypes => {
    return {
        type: FETCH_ALL_BOOKS,
        payload: allBooks
    }
}
