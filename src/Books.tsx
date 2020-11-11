import React from "react";
import {Col, Container} from "react-bootstrap";
import BookList from "./components/books/Bookslist";
import AddBook from "./components/books/AddBook";
import CreateBook from "./components/books/CreateBook";
import UpdateBook from "./components/books/Updatebook";


const Books: React.FC = () => {
    return(
        <React.Fragment>
            <Container className="books m-1 p-0 mt-0 pt-0 pl-1 pr-3" fluid>
                <span className="text-left ml-1 pb-1 mb-3 books-title">Books</span>
                <label className='font-italic'>No Books listed here</label>
                <Col xs={12}>
                    <BookList/>
                </Col>
                <Col xs={12} className='mt-3'>
                    <AddBook/>
                </Col>
                <Col className='mt-3' >
                    <CreateBook/>
                </Col>
                <Col className='mt-3' >
                    <UpdateBook/>
                </Col>
            </Container>
        </React.Fragment>
    );
}
export default Books;
