import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import {IAuthor} from "../../types/LibraryTypes";
import Swal from "sweetalert2";
import {useDispatch} from "react-redux";
import {deleteAuthor} from "../../store/actions/AuthorActions";
import {useMutation} from "@apollo/client";
import {DELETE_AUTHOR} from "../../graphql/mutation/Authors";
import {GET_ALL_AUTHORS} from "../../graphql/query/Authors";

type AuthorProps = {
    author: IAuthor,
    num: number,
    updateAuthor: (authorNo: number) => void
};

const Author: React.FC<AuthorProps> = (props) => {

    //const dispatch = useDispatch();
    const [deleteAuthor, {data}] = useMutation(DELETE_AUTHOR);

    const handleAuthorDelete = (deleteAuthorId: string) => {
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
                //dispatch(deleteAuthor(deleteAuthorNo));
                deleteAuthor({
                    variables: {
                        deleteAuthorID: deleteAuthorId
                    },
                    refetchQueries: [{query: GET_ALL_AUTHORS}]
                })

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
        <Container fluid className="pl-0 ml-0">
            <Row className='author-item pr-0 mr-4 pt-2 ml-0'>
                <Col xs={9} className="pl-0">
                    <label className='mb-2'>{props.num}. {props.author.name}</label>
                </Col>
                <Col xs={3} className='text-right author-controls'>
                    <i className='feather icon-edit mr-3' onClick={() => props.updateAuthor(props.num - 1)}/>
                    <i className='feather icon-trash-2' onClick={() => handleAuthorDelete(props.author._id)}/>
                </Col>
            </Row>
        </Container>
    );
};

export default Author;
