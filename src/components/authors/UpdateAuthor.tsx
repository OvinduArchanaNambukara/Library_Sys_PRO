import React, {FormEvent, useEffect, useState} from "react";
import {Col, Button, Form, Row} from "react-bootstrap";
import {IAuthor} from "../../types/LibraryTypes";
import Swal from "sweetalert2";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers";
import {updateAuthor} from "../../store/actions/AuthorActions";
import {useMutation} from "@apollo/client";
import {UPDATE_AUTHOR} from "../../graphql/mutation/Authors";
import {GET_ALL_AUTHORS} from "../../graphql/query/Authors";

type UpdateAuthorProps = {
    after: () => void,
    authorNo: number,
}

const UpdateAuthor: React.FC<UpdateAuthorProps> = (props) => {
    const authors: IAuthor[] = useSelector((state: RootState) => state.authorReducer.authors);
    const [editAuthorName, setEditAuthorName] = useState<string>(authors[props.authorNo].name);
    const [validated, setValidated] = useState<boolean>(false);
    const dispatch = useDispatch();
    const [updateAuthor, {data}] = useMutation(UPDATE_AUTHOR);

    useEffect(() => {
        setEditAuthorName(authors[props.authorNo].name);
    }, [props.authorNo]);

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (editAuthorName !== null && editAuthorName !== '') {
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
                        'Author has been updated.',
                        'success'
                    )
                    //const toUpdateAuthor: IAuthor = {name: editAuthorName};
                    //dispatch(updateAuthor(toUpdateAuthor, props.authorNo));
                    //props.onAuthorUpdate(updateAuthor, props.authorNo);
                    updateAuthor({
                        variables: {
                            updateName: editAuthorName,
                            id: authors[props.authorNo]._id
                        },
                        refetchQueries: [{query: GET_ALL_AUTHORS}]
                    })
                    setEditAuthorName('');
                    setValidated(false);
                    props.after();
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
        } else {
            setValidated(true);
        }
    }

    const onChangeUpdateAuthorName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditAuthorName(e.target.value);
        setValidated(false);
    }

    return (
        <Row className="update-author ml-0 pl-1">
            <Col xs={12} className='form-title mb-3'>
                <label>Update Author</label>
                <i className='feather icon-x-circle text-dark text-right float-right cursor-pointer mt-2'
                   onClick={() => props.after()}/>
            </Col>
            <Col xs={12} className='pl-5'>
                <Form onSubmit={handleOnSubmit} noValidate validated={validated}>
                    <Form.Group controlId="authorNameID">
                        <Form.Label>Name of author</Form.Label>
                        <Form.Control className="new-author-input" type="text" value={editAuthorName}
                                      required onChange={onChangeUpdateAuthorName}/>
                        <Form.Control.Feedback type="invalid">Please fill the author name</Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" size='sm' className='float-right create-button'>Update</Button>
                </Form>
            </Col>
        </Row>
    );
};

export default UpdateAuthor;
