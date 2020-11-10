import React from "react";
import {Row, Col, Container} from "react-bootstrap";

const Author: React.FC = () => {
    return(
        <Container fluid className="pl-0 ml-0">
            <Row className='author-item pr-0 mr-4 pt-2 ml-0'>
                <Col xs={9} className="pl-0">
                    <label className='mb-2'>1. Author name</label>
                </Col>
                <Col xs={3} className='text-right author-controls'>
                    <i className='feather icon-edit mr-3'/>
                    <i className='feather icon-trash-2'/>
                </Col>
            </Row>
        </Container>
    );
};

export default Author;
