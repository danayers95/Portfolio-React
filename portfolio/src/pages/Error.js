import React from 'react';
import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron.js';

const Error = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>Error! Page not found!</h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
};


export default Error;