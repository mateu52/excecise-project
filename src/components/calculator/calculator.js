import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

function Calculator(){
    const [ counter, setCounter ] = useState();
    return(
        <Container className="buttons" >
            <Row className="row">
                <Col>7</Col>
                <Col>8</Col>
                <Col>9</Col>
                <Col>DEL</Col>
            </Row>
            <Row className="row">
                <Col>4</Col>
                <Col>5</Col>
                <Col>6</Col>
                <Col>+</Col>
            </Row>
            <Row className="row"> 
                <Col>1</Col>
                <Col>2</Col>
                <Col>3</Col>
                <Col>-</Col>
            </Row>
            <Row className="row">
                <Col>.</Col>
                <Col>0</Col>
                <Col>/</Col>
                <Col>x</Col>
            </Row>
            <Row className="row">
                <Col>RESET</Col>
                <Col>=</Col>
            </Row>
        </Container>
    )
}

export default Calculator;