import React from "react";
import {Container, Row} from "react-bootstrap";



const AddAuthor: React.FC = () => {
    return(
        <React.Fragment>
            <Container>
                <Row className="add-author mt-3 mb-4" >
                    <i className='feather icon-plus'/>
                    <span>Add Author</span>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default AddAuthor;
