import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Authors from "../Authors";
import Books from "../Books";
import {IAuthor} from "./types/LibraryTypes";
import Swal from "sweetalert2";

const ReadingArea: React.FC = () => {
    const [authors,setAuthors] = useState<IAuthor[]>([]);

    const handleOnAuthorCreated = (newAuthor: IAuthor) => {
        const allAuthors: IAuthor[] = authors ? authors.slice():[];
        allAuthors.push(newAuthor);
        setAuthors(allAuthors);
    }

    const handleAuthorUpdate = (updateAuthor: IAuthor,authorNo: number) => {
        const allAuthors: IAuthor[] = authors.slice();
        allAuthors[authorNo] = updateAuthor;
        setAuthors(allAuthors);
    }

    const handleAuthorDelete = (deleteAuthorNo: number) => {
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
                    'Author has been deleted.',
                    'success'
                )
                const allAuthors: IAuthor[] = authors.slice();
                allAuthors.splice(deleteAuthorNo,1);
                setAuthors(allAuthors);
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Author is safe :)',
                    'error'
                )
            }
        })
    }

    return (
        <Container fluid className='reading-area'>
            <Row>
                <Col className="ml-4 mr-3 pl-0 pr-0 mt-0 pt-0"><Books authors={authors}/></Col>
                <Col className="ml-5 mr-3 pl-0 pr-0 mt-0 pt-0">
                    <Authors authors={authors} onAuthorDelete={handleAuthorDelete}
                             onAuthorAdd={handleOnAuthorCreated} onAuthorUpdate={handleAuthorUpdate}/>
                </Col>
            </Row>
        </Container>
    );
}

export default ReadingArea;