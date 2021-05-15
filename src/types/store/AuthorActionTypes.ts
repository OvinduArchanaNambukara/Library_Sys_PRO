import {IAuthor} from "../LibraryTypes";
import {ADD_AUTHOR, DELETE_AUTHOR, UPDATE_AUTHOR} from "../../constants/StoreConstants";

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

export type AuthorActionTypes = AddAuthor | DeleteAuthor | UpdateAuthor;




