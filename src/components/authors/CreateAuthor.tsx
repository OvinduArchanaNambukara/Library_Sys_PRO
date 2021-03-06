import React, {FormEvent, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {IAuthor} from "../../types/LibraryTypes";
import {useDispatch} from "react-redux";
import {addAuthor} from "../../store/actions/AuthorActions";
import {useMutation} from "@apollo/client";
import {CREATE_AUTHOR} from "../../graphql/mutation/Authors";
import {GET_ALL_AUTHORS} from "../../graphql/query/Authors";

type CreateAuthorProps = {
    onEditorClosed: (val: boolean) => void
}

const CreateAuthor: React.FC<CreateAuthorProps> = (props) => {
    const [authorName, setAuthorName] = useState<string | null>(null);
    const [validated, setValidated] = useState<boolean>(false);
    const dispatch = useDispatch();
    const [createAuthor, {data}] = useMutation(CREATE_AUTHOR);

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (authorName !== null && authorName !== '') {
            //const newAuthor: IAuthor = {name: authorName};
            //dispatch(addAuthor(newAuthor));
            createAuthor({
                variables: {
                    authorName: authorName
                },
                refetchQueries: [{query: GET_ALL_AUTHORS}]
            });
            setAuthorName(null);
            props.onEditorClosed(false);
            setValidated(false);
        } else {
            setValidated(true);
        }
    }

    const onChangeCreateAuthorName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValidated(false);
        setAuthorName(e.target.value);
    }

    return (
        <Row className="create-author ml-0 pl-1">
            <Col xs={12} className='form-title mb-3'>
                <label>Create Author</label>
                <i className='feather icon-x-circle text-dark text-right float-right cursor-pointer mt-2'
                   onClick={() => props.onEditorClosed(false)}/>
            </Col>
            <Col xs={12} className='pl-5'>
                <Form onSubmit={handleOnSubmit} noValidate validated={validated}>
                    <Form.Group controlId="authorNameID">
                        <Form.Label>Name of author</Form.Label>
                        <Form.Control className="new-author-input" type="text" placeholder="" required
                                      onChange={onChangeCreateAuthorName}/>
                        <Form.Control.Feedback type="invalid">Please fill the author name</Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" size='sm' className='float-right create-button'>Create</Button>
                </Form>
            </Col>
        </Row>
    );
};

export default CreateAuthor;
