import React, {FormEvent, useState} from "react";
import {Col, Button, Form, Row} from "react-bootstrap";
import {IAuthor} from "../types/LibraryTypes";

type UpdateAuthorProps = {
    onAuthorUpdate: (updateAuthor:IAuthor,authorNo:number) => void,
    after: () => void,
    authorNo: null | number,
    authors: IAuthor[]

}

const UpdateAuthor: React.FC<UpdateAuthorProps> = (props) => {
    const [editAuthorName,setEditAuthorName] = useState<string>(props.authorNo!=null?props.authors[props.authorNo].name:'');
    const [validated,setValidated] = useState(false);

    const handleOnSubmit = (e:FormEvent)=>{
        e.preventDefault();
        e.stopPropagation();
        if(editAuthorName !== null && editAuthorName !== ''){
            const updateAuthor: IAuthor = {name: editAuthorName};
            // @ts-ignore
            props.onAuthorUpdate(updateAuthor, props.authorNo);
            setEditAuthorName('');
            setValidated(false);
            props.after();
        }else{
            setValidated(true);
        }
    }

    const onChangeUpdateAuthorName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEditAuthorName(e.target.value);
        setValidated(false);
    }

    return(
        <Row className="update-author ml-0 pl-1">
            <Col xs={12} className='form-title mb-3'>
                <label>Update Author</label>
                <i className='feather icon-x-circle text-dark text-right float-right cursor-pointer mt-2' onClick={() => props.after()}/>
            </Col>
            <Col xs={12} className='pl-5'>
                <Form onSubmit={handleOnSubmit} noValidate validated={validated}>
                    <Form.Group controlId="authorNameID">
                        <Form.Label>Name of author</Form.Label>
                        <Form.Control className="new-author-input" type="text" value={editAuthorName} required onChange={onChangeUpdateAuthorName}/>
                        <Form.Control.Feedback type="invalid">Please fill the author name</Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" size='sm' className='float-right create-button'>Update</Button>
                </Form>
            </Col>
        </Row>
    );
};

export default UpdateAuthor;
