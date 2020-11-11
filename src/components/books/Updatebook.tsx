import React, {FormEvent, useState} from "react";
import {Col, Button, Form} from "react-bootstrap"
import Select, {ValueType} from 'react-select';
import {selectorstyles} from "../../assets/stylesheets/selectorstyles";
import {IAuthor, IBook} from "../types/LibraryTypes";

type UpdateBookProps = {
    selectedBook: IBook,
    onEditorClose: () => void,
    authors: IAuthor[]
    onBookUpdate: (updateBook: IBook) => void
}

const UpdateBook:React.FC<UpdateBookProps> = (props) =>{
    const [title, setTitle] = useState<string>(props.selectedBook.title);
    const [isbn, setISBN] = useState<string>(props.selectedBook.isbn);
    const [author, setAuthor] = useState<string | null>(null)
    const [selectedAuthor, setSelectedAuthor] = useState({label:props.selectedBook.author.name,value:props.selectedBook.author.name});

    const onBookSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (title == null || isbn == null || author == null || title == '' || isbn == '' || author == '') {
            alert('error')
        } else {
            // @ts-ignore
            const book: IBook = {title: title, isbn: isbn, author:{name:author.value}};
            props.onBookUpdate(book);
        }
    }

    const allAuthors: { label: string, value: string }[] = [];
    props.authors.map((author: IAuthor) => {
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
                    <span>Update Book</span>
                </Col>
                <Col  className="text-right">
                    <i className='feather icon-x-circle text-dark text-right' onClick={() => props.onEditorClose()}/>
                </Col>
            </Form.Row>
            <Form className="pl-5" onSubmit={onBookSubmit}>
                <Form.Row>
                    <Form.Group controlId="titleSelectID"  className="form-bootstrap-area">
                        <Form.Label>Title of Book</Form.Label>
                        <Form.Control required type="text" value={title} className="form-input" placeholder=""
                                      onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setTitle(e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="isbnSelectID" className="form-bootstrap-area">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control className="form-input" value={isbn} required type="text"
                                      placeholder="" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setISBN(e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="authorSelectID"  className="form-bootstrap-area">
                        <Form.Label>Author</Form.Label>
                        <Select
                            value={selectedAuthor}
                            options={allAuthors}
                            styles={selectorstyles}
                            isSearchable
                            isClearable
                            onChange={handleSelectAuthor}
                        />
                    </Form.Group>
                </Form.Row>
                <Button size='sm' type={"submit"} variant='primary' className='float-right create-button'>Update</Button>
            </Form>
        </div>
    );
};
export default UpdateBook;
