import {IAuthor} from "../LibraryTypes";
import {ADD_AUTHOR, DELETE_AUTHOR, FETCH_ALL_AUTHORS, UPDATE_AUTHOR} from "../../store/constants/AuthorConstants";

export interface AddAuthor {
    type: typeof ADD_AUTHOR,
    payload: IAuthor
}

export interface DeleteAuthor {
    type: typeof DELETE_AUTHOR,
    payload: {
        authorIndex: number
    }
}

export interface UpdateAuthor {
    type: typeof UPDATE_AUTHOR,
    payload: {
        updateAuthor: IAuthor,
        authorIndex: number
    }
}

export interface FetchAllAuthors {
    type: typeof FETCH_ALL_AUTHORS,
    payload: IAuthor[]
}

export type AuthorActionTypes = AddAuthor | DeleteAuthor | UpdateAuthor | FetchAllAuthors;




