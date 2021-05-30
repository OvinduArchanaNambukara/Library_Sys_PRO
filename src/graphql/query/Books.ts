import {gql} from "@apollo/client";

export const GET_ALL_BOOKS = gql`
    query{
        getAllBooks{
            book_name
            book_isbn
            _id
            author
        }
    }

`;
