import React from "react";
import Book from "./Book";

const BookList: React.FC = () =>{
    return(
        <React.Fragment>
            <Book/>
            <Book/>
        </React.Fragment>
    );
}
export default BookList;
