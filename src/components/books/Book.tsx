import React from "react";
import {Col, Row, Container} from "react-bootstrap";
import {IBook} from "../../types/LibraryTypes";

type bookProps = {
    onBookEdit: (bookNo: number) => void
    num: number,
    book: IBook,
    onBookDelete: (bookNo: number) => void
}

const Book: React.FC<bookProps> = (props) => {
    return(
        <React.Fragment>
            <Container fluid>
                <Row className="book-component pt-1 pb-1 pl-1 pr-4 text-left">
                    <Col sm md xs lg="10" className="text-left p-0" >
                       <label>{props.num}. {props.book.title}</label>
                    </Col>
                    <Col sm md xs lg="2" className="text-right pr-0 pb-0 mb-0 pt-1 mt-1">
                        <i className='feather icon-edit mr-3' onClick={ () => props.onBookEdit(props.num-1)}/>
                        <i className='feather icon-trash-2' onClick={ () => props.onBookDelete(props.num-1)}/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};
export default Book;
