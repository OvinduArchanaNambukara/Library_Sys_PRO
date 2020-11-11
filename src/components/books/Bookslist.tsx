import React from "react";
import Book from "./Book";

type BooksProps={
    onBookEdit:()=>void
}

const BookList: React.FC<BooksProps> = (props) =>{
    return(
        <React.Fragment>
            <Book onBookEdit={props.onBookEdit}/>
            <Book onBookEdit={props.onBookEdit}/>
        </React.Fragment>
    );
}
export default BookList;
