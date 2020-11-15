import React from "react";
import Book from "./Book";
import {IBook} from "../types/LibraryTypes";

type BooksProps = {
    onBookEdit: (bookNo: number) => void,
    books: IBook[],
    onBookDelete: (bookNo: number) => void
}

const BookList: React.FC<BooksProps> = (props) => {
    const renderBooks = props.books.map((book: IBook, index: number) =>
        <Book num={index+1} book={book} key={index} onBookEdit={props.onBookEdit} onBookDelete={props.onBookDelete}/>)

    return(
        <React.Fragment>
            {renderBooks}
        </React.Fragment>
    );
}
export default BookList;

