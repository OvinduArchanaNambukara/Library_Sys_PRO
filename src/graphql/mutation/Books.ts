import {gql} from "@apollo/client";

export const DELETE_BOOK = gql`
    mutation($id: String!){
        deleteBook(id: $id){
            book_name
            book_isbn
        }
    }
`;

export const CREATE_BOOK = gql`
    mutation($name: String!, $isbn: String!, $author: String!) {
        addBook(name: $name, isbn: $isbn, author: $author){
            book_isbn
            book_name
            author
        }
    }
`;

export const UPDATE_BOOK = gql`
    mutation($updateName: String!, $id: String!, $updateISBN: String!, $updateAuthor: String!) {
        updateBook(updateName: $updateName, id: $id, updateISBN: $updateISBN, updateAuthor: $updateAuthor){
            book_name
            book_isbn
            author
        }
    }
`;
