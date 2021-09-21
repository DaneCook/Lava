import React from "react";
import ReactDOM from "react";
import { Container, Row, Col, Button } from "reactstrap";

function LoginPage() {

    return(
        <Container className="container-fluid strip" id="login-container">
            <Row>
                <Col className="m-0 strip one"></Col>
                <Col className="m-0 strip two"></Col>
                <Col xs="6" className="d-flex strip three justify-content-around flex-column">    
                    <Row className="m-0 d-flex align-self-center align-items-center justify-content-around flex-column login-buttons">
                        <h1 className="logo text-center" id="logo">L a v a</h1>
                        <Button className="text-center login-btn">Login</Button>     
                        <Button className="login-btn">Register</Button>
                    </Row>
                </Col>
                <Col className="m-0 strip four"></Col>
                <Col className="m-0 strip five"></Col>
            </Row>
        </Container>
    );
}

export default LoginPage;