import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

function Calculator(){

    const [ calculation, setCalculation ] = useState('');
    const [ output, setOutput ] = useState('');
    const actions = ['/', '*', '+', '-', '.'];    
    
    const updateCalculation = value => {
        if (
            actions.includes(value) & calculation === '' ||
            actions.includes(value) & actions.includes()
        )
    }

    const calculate = () => {
        setCalculation(eval(calculation).toString());
    }

    //komponent - ekran
    return(
            <div>
                
            <Container >
                <Row className="row">
                    <Col className="col" type="button" value='4' onClick={()=>updateCalculation(2)}>2</Col>
                    <Col className="col" type="button" value='2' onClick={()=>updateCalculation(4)}>4</Col>
                    <Col className="col" type="button" value='45' onClick={()=>{updateCalculation('+')}}>9</Col>
                    <Col className="col" type="button" value='45' onClick={calculate}>DEL</Col>
                </Row>
                <Row className="row">
                    <Col className="col">4</Col>
                    <Col className="col">5</Col>
                    <Col className="col">6</Col>
                    <Col className="col">+</Col>
                </Row>
                <Row className="row"> 
                    <Col className="col">1</Col>
                    <Col className="col">2</Col>
                    <Col className="col">3</Col>
                    <Col className="col">-</Col>
                </Row>
                <Row className="row">
                    <Col className="col">.</Col>
                    <Col className="col">0</Col>
                    <Col className="col">/</Col>
                    <Col className="col">x</Col>
                </Row>
                <Row className="row">
                    <Col>RESET</Col>
                    <Col>=</Col>
                </Row>
        </Container>
        </div>
    )
}

export default Calculator;