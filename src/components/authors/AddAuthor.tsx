import React from "react";
import {Container, Row} from "react-bootstrap";

type AddAuthorProps = {
    changeVisibility: (val: boolean) => void
};

const AddAuthor: React.FC<AddAuthorProps> = (props) => {
    return(
        <React.Fragment>
            <Container>
                <Row className="add-author mt-3 mb-4" onClick={() => props.changeVisibility(true)} >
                    <i className='feather icon-plus' onClick={() => props.changeVisibility(true)}/>
                    <span>Add Author</span>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default AddAuthor;
