import React from "react";
import Book from "./Book";
import {IBook} from "../../types/LibraryTypes";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";

type BooksProps = {
    onBookEdit: (bookNo: number) => void,
    books: IBook[],
    onBookDelete: (bookId: string) => void
}

const BookList: React.FC<BooksProps> = (props) => {

    const books = useSelector((state: RootState) => state.bookReducer.books);
    const renderBooks = books.map((book: IBook, index: number) =>
        <Book num={index + 1} book={book} key={index} onBookEdit={props.onBookEdit} onBookDelete={props.onBookDelete}/>)

    return (
        <React.Fragment>
            {renderBooks}
        </React.Fragment>
    );
}
export default BookList;

