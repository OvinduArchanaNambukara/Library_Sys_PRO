import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Authors from "../Authors";
import Books from "../Books";
import {IAuthor} from "./types/LibraryTypes";

const ReadingArea: React.FC = () => {
    const [authors,setAuthors]=useState<IAuthor[]>([]);
    const handleOnAuthorCreated=(newAuthor:IAuthor)=>{
        const allAuthors:IAuthor[]= authors ? authors.slice():[];
        allAuthors.push(newAuthor);
        setAuthors(allAuthors);
    }

    return (
        <Container fluid className='reading-area'>
            <Row>
                <Col className="ml-4 mr-3 pl-0 pr-0 mt-0 pt-0"><Books/></Col>
                <Col className="ml-5 mr-3 pl-0 pr-0 mt-0 pt-0">
                    <Authors authors={authors} onAuthorAdd={handleOnAuthorCreated}/>
                </Col>
            </Row>
        </Container>
    );
}

export default ReadingArea;