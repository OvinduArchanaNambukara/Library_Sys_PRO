import {IAuthor} from "../../types/LibraryTypes";
import {AuthorActionTypes} from "../../types/store/AuthorActionTypes";
import {ADD_AUTHOR, DELETE_AUTHOR, UPDATE_AUTHOR} from "../../constants/StoreConstants";
import {addAuthor} from "../actions/AuthorActions";

const initialState: StoreType = {
    authors: [
        {name: "Kamal"},
        {name: "sunil"}
    ]
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
        default:
            return state;
    }
}
