import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

function Calculator(){
    function useCounter(initialValue){
        const [ value, setValue ] =useState(initialValue);
        const sendChange = ( props ) => {
            setValue(props);
            console.log(props)
        };
        return [ value, sendChange ];
    }

    const [ counter, setCounter ] = useCounter();//useState({        //x:'34',y:'',z:[2,45,5]    });
    const onClick = ( props ) => {
        setCounter(props);
        console.log(counter)
    }
    console.log(counter)
    //komponent - ekran
    return(
            <div>
                <h4>napis{counter}</h4>
            <Container >
                <Row className="row">
                    <Col className="col" type="button" onClick={()=>onClick(1)}>7</Col>
                    <Col className="col" type="button" onClick={()=>onClick(2)}>8</Col>
                    <Col className="col">9</Col>
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