import {AuthorState, StoreActionTypes} from "../../types/LibraryTypes"
import {CREATE_AUTHOR, DELETE_AUTHOR, UPDATE_AUTHOR} from "../../constants/actions/AuhtorActions";

const initialState: AuthorState = {
    authors: [{name: 'ovindu'}, {name: 'Archana'}]
}

export const authorReducer = (action: StoreActionTypes, state: AuthorState = initialState): AuthorState => {
    switch (action.type) {
        case CREATE_AUTHOR:
            return state
        case UPDATE_AUTHOR:
            return state
        case DELETE_AUTHOR:
            return state
        default:
            return state
    }
}

