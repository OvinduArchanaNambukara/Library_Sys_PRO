import React from "react";
import Author from "./Author";

type AuthorsListProps = {
    setIsUpdatable: (val: boolean) => void
};

const AuthorsList: React.FC<AuthorsListProps> = (props) => {
    return(
    <React.Fragment>
        <Author setIsUpdatable={props.setIsUpdatable}/>
        <Author setIsUpdatable={props.setIsUpdatable}/>
    </React.Fragment>
    );
};

export default AuthorsList;
