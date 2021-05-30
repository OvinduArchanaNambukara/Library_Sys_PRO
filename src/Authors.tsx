import React, {useEffect, useState} from "react";
import {Container, Spinner} from "react-bootstrap";
import AuthorsList from "./components/authors/AuthorsList";
import AddAuthor from "./components/authors/AddAuthor";
import CreateAuthor from "./components/authors/CreateAuthor";
import UpdateAuthor from "./components/authors/UpdateAuthor";
import {IAuthor} from "./types/LibraryTypes";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/reducers";
import {useQuery} from "@apollo/client";
import {GET_ALL_AUTHORS} from "./graphql/query/Authors";
import {fetchAllAuthors} from "./store/actions/AuthorActions";

type AuthorsProps = {}

const Authors: React.FC<AuthorsProps> = (props) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isDisable, setIsDisable] = useState<boolean>(false);
    const [authorNo, setAuthorNo] = useState<number>(0);
    const authors: IAuthor[] = useSelector((state: RootState) => state.authorReducer.authors);
    const {loading, data, error} = useQuery(GET_ALL_AUTHORS);
    const dispatch = useDispatch();


    useEffect(() => {
        if (data !== undefined) {
            dispatch(fetchAllAuthors(data.getAllAuthors));
        }
    }, [data]);

    const changeVisibility = (val: boolean) => {
        setIsVisible(val);
        setIsDisable(false);
    };

    const updateAuthor = (authorNo: number) => {
        setIsDisable(true);
        setIsVisible(false);
        setAuthorNo(authorNo);
    };

    return (
        <React.Fragment>
            <Container className="books m-1 p-0 mt-0 pt-0 pl-1 pr-3" fluid>
                <h4 className="sub-title pb-2">Authors</h4>
                {(loading) && <Spinner animation="border" role="status"/>}
                {error && <p>Error</p>}
                {(authors.length === 0) && (!loading) && (!error) &&
                <label className='font-italic'>No authors listed here</label>}
                {(authors.length !== 0) && <AuthorsList updateAuthor={updateAuthor}/>}
                <AddAuthor changeVisibility={changeVisibility}/>
                {isDisable && <UpdateAuthor authorNo={authorNo} after={() => setIsDisable(false)}/>}
                {isVisible && <CreateAuthor onEditorClosed={changeVisibility}/>}
            </Container>
        </React.Fragment>
    );
};

export default Authors;
