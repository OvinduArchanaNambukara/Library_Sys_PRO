import {AuthorActionTypes} from "../../types/store/AuthorActionTypes";
import {ADD_AUTHOR, DELETE_AUTHOR, FETCH_ALL_AUTHORS, UPDATE_AUTHOR} from "../constants/AuthorConstants";
import {IAuthor} from "../../types/LibraryTypes";

export const addAuthor = (newAuthor: IAuthor): AuthorActionTypes => {
    return {
        type: ADD_AUTHOR,
        payload: newAuthor
    }
}

export const updateAuthor = (updatedAuthor: IAuthor, Index: number): AuthorActionTypes => {
    return {
        type: UPDATE_AUTHOR,
        payload: {
            updateAuthor: updatedAuthor,
            authorIndex: Index
        }
    }
}

export const deleteAuthor = (index: number): AuthorActionTypes => {
    return {
        type: DELETE_AUTHOR,
        payload: {
            authorIndex: index
        }
    }
}

export const fetchAllAuthors = (allAuthors: IAuthor[]): AuthorActionTypes => {
    return {
        type: FETCH_ALL_AUTHORS,
        payload: allAuthors
    }
}
