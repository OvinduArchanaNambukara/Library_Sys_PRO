import React, {useState} from "react";
import {Col, Container} from "react-bootstrap";
import BookList from "./components/books/Bookslist";
import AddBook from "./components/books/AddBook";
import CreateBook from "./components/books/CreateBook";
import UpdateBook from "./components/books/Updatebook";

const Books: React.FC = () => {
    const [isVisible,setIsVisible]=useState<boolean>(false);
    const [isDisable,setIsDisable]=useState<boolean>(false);

    const changeVisibility =(val:boolean)=>{
        setIsVisible(val);
        setIsDisable(false);
    }

    const handleEditClick = () => {
        setIsDisable(true);
        setIsVisible(false);
    }

    const onEditorClose = () => {
        setIsDisable(false);
    }

    return(
        <React.Fragment>
            <Container className="books m-1 p-0 mt-0 pt-0 pl-1 pr-3" fluid>
                <span className="text-left ml-1 pb-1 mb-3 books-title">Books</span>
                <label className='font-italic'>No Books listed here</label>
                <Col xs={12}>
                    <BookList onBookEdit={handleEditClick}/>
                </Col>
                <Col xs={12} className='mt-3'>
                    <AddBook changeVisibility={changeVisibility}/>
                </Col>
                <Col className='mt-3' >
                    {isVisible && <CreateBook changeVisibility={changeVisibility}/>}
                </Col>
                <Col className='mt-3' >
                    {isDisable && <UpdateBook onEditorClose={onEditorClose}/>}
                </Col>
            </Container>
        </React.Fragment>
    );
}
export default Books;
