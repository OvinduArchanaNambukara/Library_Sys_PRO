import React, {useState} from "react";
import {Container} from "react-bootstrap";
import AuthorsList from "./components/authors/AuthorsList";
import AddAuthor from "./components/authors/AddAuthor";
import CreateAuthor from "./components/authors/CreateAuthor";
import UpdateAuthor from "./components/authors/UpdateAuthor";

const Authors: React.FC = () => {
    return (
        <React.Fragment>
            <Container className="books m-1 p-0 mt-0 pt-0 pl-1 pr-3" fluid>
                <h4 className="sub-title pb-2">Authors</h4>
               <label className='font-italic'>No authors listed here</label>
                <AuthorsList/>
                <AddAuthor/>
                <UpdateAuthor/>
                <CreateAuthor/>
            </Container>
        </React.Fragment>
    );
};

export default Authors;
