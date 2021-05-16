import React, {useState} from "react";
import {Col, Container} from "react-bootstrap";
import BookList from "./components/books/Bookslist";
import AddBook from "./components/books/AddBook";
import CreateBook from "./components/books/CreateBook";
import UpdateBook from "./components/books/Updatebook";
import {IBook} from "./types/LibraryTypes";
import Swal from "sweetalert2";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/reducers";
import {deleteBook, updateBook} from "./store/actions/BookActions";

type BooksProps = {}

const Books: React.FC<BooksProps> = (props) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isDisable, setIsDisable] = useState<boolean>(false);
    const [bookNo, setBookNo] = useState<number>(0);
    const books = useSelector((state: RootState) => state.bookReducer.books);
    const dispatch = useDispatch();

    const changeVisibility = (val: boolean) => {
        setIsVisible(val);
        setIsDisable(false);
    }

    const handleEditClick = (bookNo: number) => {
        setIsDisable(true);
        setIsVisible(false);
        setBookNo(bookNo);
    }

    const onEditorClose = () => {
        setIsDisable(false);
    }

    const handleOnAdd = () => {
        setIsVisible(false);
    }

    const onBookUpdate = (book: IBook) => {
        dispatch(updateBook(book, bookNo));
        setIsDisable(false);

    }

    const onBookDelete = (deleteIndex: number) => {
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
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Book has been deleted.',
                    'success'
                )
                dispatch(deleteBook(deleteIndex));
                setIsDisable(false);
                setIsVisible(false);
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

    return (
        <React.Fragment>
            <Container className="books m-1 p-0 mt-0 pt-0 pl-1 pr-3" fluid>
                <span className="text-left ml-1 pb-1 mb-3 books-title">Books</span>
                {books.length === 0 && <label className='font-italic'>No Books listed here</label>}
                <Col xs={12}>
                    {books.length !== 0 && <BookList onBookEdit={handleEditClick} books={books}
                                                     onBookDelete={onBookDelete}/>}
                </Col>
                <Col xs={12} className='mt-3'>
                    <AddBook changeVisibility={changeVisibility}/>
                </Col>
                <Col className='mt-3'>
                    {isVisible && <CreateBook changeVisibility={changeVisibility} onBookAdd={handleOnAdd}/>}
                </Col>
                <Col className='mt-3'>
                    {isDisable && <UpdateBook onEditorClose={onEditorClose}
                                              onBookUpdate={onBookUpdate} selectedBook={books[bookNo]}/>}
                </Col>
            </Container>
        </React.Fragment>
    );
}
export default Books;
