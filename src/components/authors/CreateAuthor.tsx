import React, {FormEvent, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

const CreateAuthor: React.FC = () => {
    return(
        <Row className="create-author ml-0 pl-1">
            <Col xs={12} className='form-title mb-3'>
                <label>Create Author</label>
                <i className='feather icon-x-circle text-dark text-right float-right cursor-pointer mt-2'/>
            </Col>
            <Col xs={12} className='pl-5'>
                <Form>
                    <Form.Group controlId="authorNameID">
                        <Form.Label>Name of author</Form.Label>
                        <Form.Control  className="new-author-input" type="text" placeholder="" required/>
                    </Form.Group>
                    <Button type="submit" size='sm'  className='float-right create-button'>Create</Button>
                </Form>
            </Col>
        </Row>
    );
};

export default CreateAuthor;
