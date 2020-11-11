import React from "react";
import {Col, Row,Container} from "react-bootstrap";

const Book: React.FC = () => {
    return(
        <React.Fragment>
            <Container fluid>
                <Row className="book-component pt-1 pb-1 pl-1 pr-4 text-left">
                    <Col sm md xs lg="10" className="text-left p-0" >
                       <label>1. Book name 1</label>
                    </Col>
                    <Col sm md xs lg="2" className="text-right pr-0 pb-0 mb-0 pt-1 mt-1">
                        <i className='feather icon-edit mr-3'/>
                        <i className='feather icon-trash-2'/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};
export default Book;
