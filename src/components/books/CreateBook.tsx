import React, {FormEvent, useEffect, useState} from "react";
import {Col, Button, Form} from "react-bootstrap"
import Select, {ValueType} from 'react-select';
import {selectorstyles} from '../../assets/stylesheets/selectorstyles';
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

        const onBookSubmit = (event: FormEvent) => {
            event.preventDefault();
            if (title == null || isbn == null || author == null || title == '' || isbn == '' || author == '') {
               alert('error')
            } else {
                // @ts-ignore
                props.onBookAdd({title: title, isbn: isbn, author:{name:author.value}});
                setTitle(null);
                setISBN(null);
                setAuthor(null);
                setSelectedAuthor(null)
            }
        }

        const allAuthors: { label: string, value: string }[] = [];
        authors.map((author: IAuthor) => {
            allAuthors.push({label: author.name, value: author.name});
        });

        const handleSelectAuthor = (selectAuthor: ValueType<any>) => {
            setSelectedAuthor(selectAuthor);
            setAuthor(selectAuthor);
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
            <Form className="pl-5" onSubmit={onBookSubmit}>
                <Form.Row>
                    <Form.Group controlId="titleSelectID"  className="form-bootstrap-area">
                        <Form.Label>Title of Book</Form.Label>
                        <Form.Control required type="text" className="form-input" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setTitle(e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="isbnSelectID"   className="form-bootstrap-area">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control className="form-input"  required type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setISBN(e.target.value)}/>
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
                        />
                    </Form.Group>
                </Form.Row>
                <Button size='sm' variant='primary' type="submit" className='float-right create-button'>Create</Button>
            </Form>
        </div>
    );
};
export default CreateBook;
