import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

function Calculator(){

    function useCounter(initialValue = ''){
        const [ value, setValue ] =useState(initialValue);
        const sendChange = ( props ) => {
            if(props==='del'){
                setValue('')
            }else{
                const sum= value+props;
                setValue(sum);
            }
        };
        return [ value, sendChange ];
    }
    const [ counter, setCounter ] = useCounter('');
    const hClick = ( event) => {
        setCounter(event)
    }
    //komponent - ekran
    return(
            <div>
                <h4>napis{counter}</h4>
            <Container >
                <Row className="row">
                    <Col className="col" type="button" value='4' onClick={() => hClick(2)}>7</Col>
                    <Col className="col" type="button" value='2' onClick={() => hClick(4)}>8</Col>
                    <Col className="col" type="button" value='45' onClick={() => hClick('del')}>9</Col>
                    <Col className="col">DEL</Col>
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