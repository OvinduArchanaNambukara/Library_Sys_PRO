import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import {IAuthor} from "../types/LibraryTypes";

type AuthorProps = {
    author: IAuthor
    num: number
    updateAuthor: (authorNo: number) => void
};

const Author: React.FC<AuthorProps> = (props) => {
    return(
        <Container fluid className="pl-0 ml-0">
            <Row className='author-item pr-0 mr-4 pt-2 ml-0'>
                <Col xs={9} className="pl-0">
                    <label className='mb-2'>{props.num}. {props.author.name}</label>
                </Col>
                <Col xs={3} className='text-right author-controls'>
                    <i className='feather icon-edit mr-3' onClick={() => props.updateAuthor(props.num-1)}/>
                    <i className='feather icon-trash-2'/>
                </Col>
            </Row>
        </Container>
    );
};

export default Author;
