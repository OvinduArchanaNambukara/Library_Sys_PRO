import {gql} from "@apollo/client";

export const CREATE_AUTHOR = gql`
    mutation($authorName: String!){
        addAuthor(name: $authorName){
            name
        }
    }
`;

export const DELETE_AUTHOR = gql`
    mutation($deleteAuthorID: String!){
        deleteAuthor(id: $deleteAuthorID){
            name
        }
    }
`;

export const UPDATE_AUTHOR = gql`
    mutation($updateName: String!, $id: String!){
        updateAuthor(updateName: $updateName, id: $id){
            name
        }
    }
`;

