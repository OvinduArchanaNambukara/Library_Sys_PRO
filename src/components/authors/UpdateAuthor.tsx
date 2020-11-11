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

    const handleOnSubmit = (e:FormEvent)=>{
        e.preventDefault();
        if(editAuthorName == null){
            alert("cannot be null");
        }else{
            // @ts-ignore
            const updateAuthor: IAuthor = {name: editAuthorName};
            // @ts-ignore
            props.onAuthorUpdate(updateAuthor, props.authorNo);
            setEditAuthorName('');
        }
        props.after();
    }

    return(
        <Row className="update-author ml-0 pl-1">
            <Col xs={12} className='form-title mb-3'>
                <label>Update Author</label>
                <i className='feather icon-x-circle text-dark text-right float-right cursor-pointer mt-2' onClick={() => props.after()}/>
            </Col>
            <Col xs={12} className='pl-5'>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group controlId="authorNameID">
                        <Form.Label>Name of author</Form.Label>
                        <Form.Control className="new-author-input" type="text" value={editAuthorName} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEditAuthorName(e.target.value)}/>
                    </Form.Group>
                    <Button type="submit" size='sm' className='float-right create-button'>Update</Button>
                </Form>
            </Col>
        </Row>
    );
};

export default UpdateAuthor;
