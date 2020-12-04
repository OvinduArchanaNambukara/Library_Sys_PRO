import {IAuthor, StoreActionTypes} from "../../types/LibraryTypes";
import {CREATE_AUTHOR, DELETE_AUTHOR, UPDATE_AUTHOR} from "../../constants/actions/AuhtorActions";


export const createAuthor = (newAuthor: IAuthor): StoreActionTypes => {
    return {
        type: CREATE_AUTHOR,
        payload: newAuthor
    }
}

export const updateAuthor = (updatedAuthor: IAuthor, index: number): StoreActionTypes => {
    return {
        type: UPDATE_AUTHOR,
        payload: {
            UpdateAuthor: updatedAuthor,
            index: index
        }
    }
}

export const deleteAuthor = (deleteAuthor: IAuthor, index: number): StoreActionTypes => {
    return {
        type: DELETE_AUTHOR,
        payload: {
            DeleteAuthor: deleteAuthor,
            index: index
        }
    }
}