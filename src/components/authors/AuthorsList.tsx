import React from "react";
import Author from "./Author";
import {IAuthor} from "../../types/LibraryTypes";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";

type AuthorsListProps = {
    updateAuthor: (authorNo: number) => void
};

const AuthorsList: React.FC<AuthorsListProps> = (props) => {

    const authors: IAuthor[] = useSelector((state: RootState) => state.authorReducer.authors);

    const renderAuthors = () => {
        return (
            authors.map((author: IAuthor, index: number) =>
                <Author key={index} author={author} num={index + 1} updateAuthor={props.updateAuthor}/>)
        );
    }

    return (
        <React.Fragment>
            {renderAuthors()}
        </React.Fragment>
    );
};

export default AuthorsList;
