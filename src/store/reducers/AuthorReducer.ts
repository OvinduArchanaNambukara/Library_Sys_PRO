import {IAuthor} from "../../types/LibraryTypes";
import {AuthorActionTypes} from "../../types/store/AuthorActionTypes";
import {ADD_AUTHOR, DELETE_AUTHOR, FETCH_ALL_AUTHORS, UPDATE_AUTHOR} from "../constants/AuthorConstants";

const initialState: StoreType = {
    authors: []
};

interface StoreType {
    authors: IAuthor[],
}

export const AuthorReducer = (state: StoreType = initialState, action: AuthorActionTypes) => {

    switch (action.type) {
        case ADD_AUTHOR:
            return {
                ...state,
                authors: [...state.authors, action.payload]
            }
        case UPDATE_AUTHOR :
            const newAuthorsArray: IAuthor[] = [...state.authors];
            newAuthorsArray[action.payload.authorIndex] = action.payload.updateAuthor;
            return {
                ...state,
                authors: newAuthorsArray
            }
        case DELETE_AUTHOR :
            return {
                ...state,
                authors: state.authors.filter(
                    (author: IAuthor, index: number) => index !== action.payload.authorIndex
                )
            }
        case FETCH_ALL_AUTHORS :
            return {
                ...state,
                authors: action.payload
            }
        default:
            return state;
    }
}
