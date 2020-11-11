import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Authors from "../Authors";
import Books from "../Books";

const ReadingArea: React.FC = () => {
    return (
        <Container fluid className='reading-area'>
            <Row>
                <Col className="ml-4 mr-3 pl-0 pr-0 mt-0 pt-0"><Books/></Col>
                <Col className="ml-5 mr-3 pl-0 pr-0 mt-0 pt-0">
                    <Authors/>
                </Col>
            </Row>
        </Container>
    );
}

export default ReadingArea;