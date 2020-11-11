import React, {FormEvent, useState} from "react";
import {Container} from "react-bootstrap";
import AuthorsList from "./components/authors/AuthorsList";
import AddAuthor from "./components/authors/AddAuthor";
import CreateAuthor from "./components/authors/CreateAuthor";
import UpdateAuthor from "./components/authors/UpdateAuthor";
import {IAuthor} from "./components/types/LibraryTypes";

type AuthorsProps={
    authors: IAuthor[],
    onAuthorAdd: (newAuthor: IAuthor) => void,
    onAuthorUpdate: (updateAuthor: IAuthor,authorNo: number) => void
}

const Authors: React.FC<AuthorsProps> = (props) => {
    const [isVisible,setIsVisible] = useState<boolean>(false);
    const [isDisable,setIsDisable] = useState<boolean>(false);
    const [authorNo,setAuthorNo]=useState<number|null>(null);


    const changeVisibility = (val: boolean) => {
        setIsVisible(val);
        setIsDisable(false);
    };

    const updateAuthor = (authorNo:number) => {
        setIsDisable(true);
        setIsVisible(false);
        setAuthorNo(authorNo);
    };

    return (
        <React.Fragment>
            <Container className="books m-1 p-0 mt-0 pt-0 pl-1 pr-3" fluid>
                <h4 className="sub-title pb-2">Authors</h4>
                {(props.authors.length == 0) && <label className='font-italic'>No authors listed here</label>}
                {(props.authors.length != 0) && <AuthorsList updateAuthor={updateAuthor} authors={props.authors}/>}
                <AddAuthor changeVisibility={changeVisibility}/>
                {isDisable && <UpdateAuthor  authorNo={authorNo} onAuthorUpdate={props.onAuthorUpdate} after={() => setIsDisable(false)} authors={props.authors}/>}
                {isVisible && <CreateAuthor onEditorClosed={changeVisibility} onAuthorAdd={props.onAuthorAdd} />}
            </Container>
        </React.Fragment>
    );
};

export default Authors;
