import React from "react";
import {Col, Button, Form} from "react-bootstrap"
import Select from 'react-select';
import {selectorstyles} from '../../assets/stylesheets/selectorstyles';

const CreateBook:React.FC =() =>{
    const options=[
        {label:'author 1',value:'author1'},
        {label:'author 2',value:'author2'},
        {label:'author 3',value:'author3'}
        ]

    return(
        <div className="create-book">
            <Form.Row>
                <Col className="text-left pl-1 mb-3">
                    <span>Create Book</span>
                </Col>
                <Col  className="text-right">
                    <i className='feather icon-x-circle text-dark text-right'/>
                </Col>
            </Form.Row>
            <Form className="pl-5">
                <Form.Row>
                    <Form.Group controlId="titleSelectID"  className="form-bootstrap-area">
                        <Form.Label>Title of Book</Form.Label>
                        <Form.Control required type="text" className="form-input"/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="isbnSelectID"   className="form-bootstrap-area">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control className="form-input"  required type="text"/>
                        <Form.Control.Feedback type="invalid">Please fill the ISBN</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="authorSelectID"  className="form-bootstrap-area">
                        <Form.Label>Author</Form.Label>
                        <Select
                            options={options}
                            styles={selectorstyles}
                            isSearchable
                            isClearable
                        />
                    </Form.Group>
                </Form.Row>
                <Button size='sm' variant='primary' className='float-right create-button'>Create</Button>
            </Form>
        </div>
    );
};
export default CreateBook;
