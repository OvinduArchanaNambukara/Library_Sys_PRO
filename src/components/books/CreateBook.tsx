import React, {FormEvent, useEffect, useState} from "react";
import {Col, Button, Form} from "react-bootstrap"
import Select, {ValueType} from 'react-select';
import {IAuthor, IBook} from "../types/LibraryTypes";

type CreateBookProps={
    changeVisibility: (val: boolean) => void,
    onBookAdd: (book: IBook) => void;
    authors: IAuthor[]
}

const CreateBook:React.FC<CreateBookProps> = (props) =>{
        const {authors} = props;
        const [title, setTitle] = useState<string | null>(null);
        const [isbn, setISBN] = useState<string | null>(null);
        const [author, setAuthor] = useState<string | null>(null)
        const [selectedAuthor, setSelectedAuthor] = useState(null);
        const [validated, setValidated] = useState(false);
        const [selectorColor, setSelectorColor] = useState<string>('#989898');

        const onBookSubmit = (event: FormEvent) => {
            event.preventDefault();
            if (title == null || isbn == null || author == null || title == '' || isbn == '' || author == '') {
                setValidated(true);
                author == null || author == '' ? setSelectorColor('#f80046') : setSelectorColor('#989898');
            }else{
                // @ts-ignore
                props.onBookAdd({title: title, isbn: isbn, author:{name:author.value}});
                setTitle(null);
                setISBN(null);
                setAuthor(null);
                setSelectedAuthor(null)
                setValidated(false);
            }
        }

        const allAuthors: { label: string, value: string }[] = [];
        authors.map((author: IAuthor) => {
            allAuthors.push({label: author.name, value: author.name});
        });

        const handleSelectAuthor = (selectAuthor: ValueType<any>) => {
            setSelectedAuthor(selectAuthor);
            setAuthor(selectAuthor);
            onChangeValidation();
        }

        const onChangeTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value)
            onChangeValidation();
        }

        const onChangeISBN = (e:React.ChangeEvent<HTMLInputElement>) => {
            setISBN(e.target.value);
            onChangeValidation();

        }

        const selectorstyles = {
            control: (provided: any, state: any) => ({
                ...provided,
                borderRadius: 0,
                border: '2px solid'+ selectorColor
            })
        }

        const onChangeValidation = () => {
            setValidated(false);
            setSelectorColor('#989898');
        }

        return(
        <div className="create-book">
            <Form.Row>
                <Col className="text-left pl-1 mb-3">
                    <span>Create Book</span>
                </Col>
                <Col  className="text-right">
                    <i className='feather icon-x-circle text-dark text-right' onClick={() => props.changeVisibility(false)}/>
                </Col>
            </Form.Row>
            <Form className="pl-5" onSubmit={onBookSubmit} noValidate validated={validated}>
                <Form.Row>
                    <Form.Group controlId="titleSelectID"  className="form-bootstrap-area">
                        <Form.Label>Title of Book</Form.Label>
                        <Form.Control required type="text" className="form-input" onChange={onChangeTitle}/>
                        <Form.Control.Feedback type="invalid">Please fill the book title</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="isbnSelectID"   className="form-bootstrap-area">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control className="form-input"  required type="text" onChange={onChangeISBN}/>
                        <Form.Control.Feedback type="invalid">Please fill the ISBN</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="authorSelectID"  className="form-bootstrap-area">
                        <Form.Label>Author</Form.Label>
                        <Select
                            options={allAuthors}
                            styles={selectorstyles}
                            isSearchable
                            isClearable
                            value={selectedAuthor}
                            onChange={handleSelectAuthor}
                            required
                        />
                    </Form.Group>
                </Form.Row>
                <Button size='sm' variant='primary' type="submit" className='float-right create-button'>Create</Button>
            </Form>
        </div>
    );
};
export default CreateBook;
