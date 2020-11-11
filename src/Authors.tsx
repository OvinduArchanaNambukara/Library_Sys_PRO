import React, {useState} from "react";
import {Container} from "react-bootstrap";
import AuthorsList from "./components/authors/AuthorsList";
import AddAuthor from "./components/authors/AddAuthor";
import CreateAuthor from "./components/authors/CreateAuthor";
import UpdateAuthor from "./components/authors/UpdateAuthor";

const Authors: React.FC = () => {
    const [isVisible,setIsVisible] = useState<boolean>(false);
    const [isUpdatable,setIsUpdatable] = useState<boolean>(false);

    const changeVisibility = (val: boolean) => {
        setIsVisible(val);
        setIsUpdatable(false);
    };
    const changeUpdatable = (val: boolean) => {
        setIsUpdatable(val);
        setIsVisible(false);
    };

    return (
        <React.Fragment>
            <Container className="books m-1 p-0 mt-0 pt-0 pl-1 pr-3" fluid>
                <h4 className="sub-title pb-2">Authors</h4>
               <label className='font-italic'>No authors listed here</label>
                <AuthorsList setIsUpdatable={changeUpdatable}/>
                <AddAuthor changeVisibility={changeVisibility}/>
                {isUpdatable && <UpdateAuthor  isUpdatable={changeUpdatable}/>}
                {isVisible && <CreateAuthor onEditorClosed={changeVisibility} />}
            </Container>
        </React.Fragment>
    );
};

export default Authors;
