import React, {FormEvent, useEffect, useState} from "react";
import {Col, Button, Form} from "react-bootstrap"
import Select, {ValueType} from 'react-select';
import {IAuthor, IBook} from "../../types/LibraryTypes";
import Swal from "sweetalert2";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";
import {useMutation} from "@apollo/client";
import {UPDATE_BOOK} from "../../graphql/mutation/Books";

type UpdateBookProps = {
    selectedBook: IBook,
    onEditorClose: () => void,
    onBookUpdate: (updateBook: IBook) => void
}

type optionTypes = { label: string, value: string }

const UpdateBook: React.FC<UpdateBookProps> = (props) => {
    const [title, setTitle] = useState<string>(props.selectedBook.book_name);
    const [isbn, setISBN] = useState<string>(props.selectedBook.book_isbn);
    const [author, setAuthor] = useState<string | null>(null)
    const [selectedAuthor, setSelectedAuthor] = useState<optionTypes | null>
    ({label: props.selectedBook.author, value: props.selectedBook.author});
    const [validated, setValidated] = useState(false);
    const [selectorColor, setSelectorColor] = useState<string>('#989898');
    const authors = useSelector((state: RootState) => state.authorReducer.authors);

    useEffect(() => {
        setTitle(props.selectedBook.book_name);
        setISBN(props.selectedBook.book_isbn);
        setSelectedAuthor({label: props.selectedBook.author, value: props.selectedBook.author});
    }, [props.selectedBook])

    const onBookSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (title == null || isbn == null || author == null || title == '' || isbn == '' || author == '') {
            setValidated(true);
            author == null || author == '' ? setSelectorColor('#f80046') : setSelectorColor('#989898');
        } else {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                }
            })
            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, update it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Updated!',
                        'Book has been updated.',
                        'success'
                    )
                    const book: IBook = {
                        book_name: title,
                        book_isbn: isbn,
                        author: author,
                        _id: props.selectedBook._id
                    };
                    props.onBookUpdate(book);
                    setValidated(false);
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Book is safe :)',
                        'error'
                    )
                }
            })
        }
    }

    const allAuthors: { label: string, value: string }[] = [];
    authors.map((author: IAuthor) => {
        allAuthors.push({label: author.name, value: author.name});
    });

    const handleSelectAuthor = (selectAuthor: ValueType<optionTypes>) => {
        if (selectAuthor == null) {
            setSelectedAuthor(null);
            setAuthor(null);
        } else {
            const value = (selectAuthor as optionTypes).value;
            const label = (selectAuthor as optionTypes).label;
            setSelectedAuthor({label: label, value: value});
            setAuthor(value);
            onChangeValidation();
        }
    }

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
        onChangeValidation();
    }

    const onChangeISBN = (e: React.ChangeEvent<HTMLInputElement>) => {
        setISBN(e.target.value);
        onChangeValidation();
    }

    const selectorStyles = {
        control: (provided: any, state: any) => ({
            ...provided,
            borderRadius: 0,
            border: '2px solid' + selectorColor
        })
    }

    const onChangeValidation = () => {
        setValidated(false);
        setSelectorColor('#989898');
    }

    return (
        <div className="create-book">
            <Form.Row>
                <Col className="text-left pl-1 mb-3">
                    <span>Update Book</span>
                </Col>
                <Col className="text-right">
                    <i className='feather icon-x-circle text-dark text-right' onClick={() => props.onEditorClose()}/>
                </Col>
            </Form.Row>
            <Form className="pl-5" onSubmit={onBookSubmit} noValidate validated={validated}>
                <Form.Row>
                    <Form.Group controlId="titleSelectID" className="form-bootstrap-area">
                        <Form.Label>Title of Book</Form.Label>
                        <Form.Control required type="text" value={title} className="form-input" placeholder=""
                                      onChange={onChangeTitle}/>
                        <Form.Control.Feedback type="invalid">Please fill the book title</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="isbnSelectID" className="form-bootstrap-area">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control className="form-input" value={isbn} required type="text"
                                      placeholder="" onChange={onChangeISBN}/>
                        <Form.Control.Feedback type="invalid">Please fill the ISBN</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="authorSelectID" className="form-bootstrap-area">
                        <Form.Label>Author</Form.Label>
                        <Select
                            value={selectedAuthor}
                            options={allAuthors}
                            styles={selectorStyles}
                            isSearchable
                            isClearable
                            onChange={handleSelectAuthor}
                        />
                    </Form.Group>
                </Form.Row>
                <Button size='sm' type={"submit"} variant='primary'
                        className='float-right create-button'>Update</Button>
            </Form>
        </div>
    );
};
export default UpdateBook;
