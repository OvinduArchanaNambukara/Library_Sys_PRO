import {IBook, StoreActionTypes} from "../../types/LibraryTypes";
import {CREATE_BOOK, DELETE_BOOK, UPDATE_BOOK} from "../../constants/actions/BooksActions";

export const createBook = (newBook: IBook): StoreActionTypes => {
    return {
        type: CREATE_BOOK,
        payload: newBook
    }
}

export const updateBook = (updateBook: IBook, index: number): StoreActionTypes => {
    return {
        type: UPDATE_BOOK,
        payload: {
            UpdateBook: updateBook,
            index: index
        }
    }
}

export const deleteBook = (deleteBook: IBook, index: number): StoreActionTypes => {
    return {
        type: DELETE_BOOK,
        payload: {
            DeleteAuthor: deleteBook,
            index: index
        }
    }
}