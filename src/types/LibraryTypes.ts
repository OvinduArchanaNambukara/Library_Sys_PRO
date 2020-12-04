import {CREATE_AUTHOR, DELETE_AUTHOR, UPDATE_AUTHOR} from "../constants/actions/AuhtorActions";
import {CREATE_BOOK, DELETE_BOOK, UPDATE_BOOK} from "../constants/actions/BooksActions";

export interface IAuthor {
    name: string;
}

export interface AuthorState {
    authors: IAuthor[]
}

export interface BookState{
    books:IBook[]
}

export interface IBook {
    title: string;
    isbn: string;
    author: IAuthor;
}

export interface CreateBookAction {
    type: typeof CREATE_BOOK
    payload: IBook
}

export interface UpdateBookAction {
    type: typeof UPDATE_BOOK
    payload: {
        UpdateBook: IBook,
        index: number
    }
}

export interface DeleteBookAction {
    type: typeof DELETE_BOOK
    payload: {
        DeleteAuthor: IBook,
        index:number
    }
}

export interface CreateAuthorAction {
    type: typeof CREATE_AUTHOR
    payload: IAuthor
}

export interface UpdateAuthorAction {
    type: typeof UPDATE_AUTHOR
    payload: {
        UpdateAuthor: IAuthor,
        index:number
    }
}

export interface DeleteAuthorAction {
    type: typeof DELETE_AUTHOR
    payload: {
        DeleteAuthor: IAuthor,
        index: number
    }
}

export type StoreActionTypes = CreateAuthorAction | CreateBookAction | UpdateAuthorAction | UpdateBookAction |
    DeleteAuthorAction | DeleteBookAction;