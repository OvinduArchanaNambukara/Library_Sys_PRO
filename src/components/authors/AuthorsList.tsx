import React from "react";
import Author from "./Author";
import {IAuthor} from "../types/LibraryTypes";

type AuthorsListProps = {
    authors: IAuthor[],
    onAuthorDelete: (deleteAuthorNo: number) => void,
    updateAuthor: (authorNo: number) => void
};

const AuthorsList: React.FC<AuthorsListProps> = (props) => {
    const renderAuthors=()=>{
        return(
            props.authors.map((author:IAuthor,index:number)=>
                <Author key={index} author={author} num={index+1} updateAuthor={props.updateAuthor} onAuthorDelete={props.onAuthorDelete}/>)
        );
    }

    return(
    <React.Fragment>
        {renderAuthors()}
    </React.Fragment>
    );
};

export default AuthorsList;
