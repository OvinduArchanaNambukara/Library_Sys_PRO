import React from "react";
import {Col, Button, Form} from "react-bootstrap"
import Select from 'react-select';
import {selectorstyles} from "../../assets/stylesheets/selectorstyles";

type UpdateBookProps={
    onEditorClose: () => void
}

const UpdateBook:React.FC<UpdateBookProps> = (props) =>{

    const options=[
        {label:'author 1',value:'author1'},
        {label:'author 2',value:'author2'},
        {label:'author 3',value:'author3'}
    ]

    return(
        <div className="create-book">
            <Form.Row>
                <Col className="text-left pl-1 mb-3">
                    <span>Update Book</span>
                </Col>
                <Col  className="text-right">
                    <i className='feather icon-x-circle text-dark text-right' onClick={() => props.onEditorClose()}/>
                </Col>
            </Form.Row>
            <Form className="pl-5">
                <Form.Row>
                    <Form.Group controlId="titleSelectID"  className="form-bootstrap-area">
                        <Form.Label>Title of Book</Form.Label>
                        <Form.Control required type="text" className="form-input" placeholder=""/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="isbnSelectID"   className="form-bootstrap-area">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control className="form-input"  required type="text" placeholder=""/>
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
                <Button size='sm' variant='primary' className='float-right create-button'>Update</Button>
            </Form>
        </div>
    );
};
export default UpdateBook;
