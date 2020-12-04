import {IAuthor, StoreActionTypes} from "../../types/LibraryTypes";
import {CREATE_AUTHOR, DELETE_AUTHOR, UPDATE_AUTHOR} from "../../constants/actions/AuhtorActions";

export function createAuthor(newAuthor: IAuthor): StoreActionTypes {
    return {
        type: CREATE_AUTHOR,
        payload: newAuthor
    }
}

export function updateAuthor(updateAuthor: IAuthor, index: number): StoreActionTypes {
    return {
        type: UPDATE_AUTHOR,
        payload: {
            UpdateAuthor: updateAuthor,
            index: index
        }
    }
}

export function deleteAuthor(deleteAuthor:IAuthor, index: number): StoreActionTypes{
    return{
        type: DELETE_AUTHOR,
        payload: {
            DeleteAuthor : deleteAuthor,
            index: index
        }
    }
}