import {ADD_BOOK, DELETE_BOOK, UPDATE_BOOK} from "../../store/constants/BookConstants";
import {IBook} from "../LibraryTypes";

export interface AddBook {
    type: typeof ADD_BOOK,
    payload: IBook
}

export interface DeleteBook {
    type: typeof DELETE_BOOK,
    payload: {
        deleteIndex: number
    }
}

export interface UpdateBook {
    type: typeof UPDATE_BOOK,
    payload: {
        updateBook: IBook,
        bookIndex: number
    }
}


export type BookActionTypes = AddBook | DeleteBook | UpdateBook;
