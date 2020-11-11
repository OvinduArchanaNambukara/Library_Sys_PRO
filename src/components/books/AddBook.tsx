import React from "react";
import {Container, Row} from "react-bootstrap";

const AddBook: React.FC = () => {
    return(
        <React.Fragment>
            <Container>
                <Row className="add-book mt-3 mb-4" >
                    <i className='feather icon-plus'/>
                    <span>Add Book</span>
                </Row>
            </Container>
        </React.Fragment>
    );
};
export default AddBook;
