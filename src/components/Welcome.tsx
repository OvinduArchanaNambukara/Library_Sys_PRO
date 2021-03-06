import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import Banner from "../assets/images/banner.jpg"

const Welcome: React.FC = () => {
    return(
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <h1 className="title py-1">My Library</h1>
                    </Col>
                    <Col xs={12} className="pl-0 pr-0">
                        <Image src={Banner} className="banner"/>
                        <figcaption className="pr-4">
                            <span>Photo by <a href="https://unsplash.com/@annahunko?utm_source=unsplash&amp;
                            utm_medium=referral&amp;utm_content=creditCopyText">Anna Hunko</a> on
                            <a href="https://unsplash.com/s/photos/library?utm_source=unsplash&amp;
                            utm_medium=referral&amp;utm_content=creditCopyText"> Unsplash</a></span>
                        </figcaption>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};
export default Welcome;