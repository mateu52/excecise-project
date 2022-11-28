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
        )   { 
                return 
            }
        setCalculation(calculation+value)
        
        if (!actions.includes(value)){
            setOutput(eval(calculation+value).toString())
        }
    }

    const calculate = () => {
        setCalculation(eval(calculation).toString());
    }

    const clear = () => {
        if(calculation ===''){
            return
        }
        const value=calculation.slice(0,-1)
        setCalculation(value)
    }

    //komponent - ekran
    return(
            <div>
                {calculation || '0'}
                <p></p>
                    {output ? <span className="preRes">{output}</span>:''}
                
            <Container >
                <Row className="row">
                    <Col className="col" type="button" value='4' onClick={()=>updateCalculation('2')}>2</Col>
                    <Col className="col" type="button" value='2' onClick={()=>updateCalculation('4')}>4</Col>
                    <Col className="col" type="button" value='45' onClick={()=>{updateCalculation('+')}}>+</Col>
                    <Col className="col" type="button" value='45' onClick={clear}> del </Col>
                </Row>
                <Row className="row">
                    <Col className="col" type="button" onClick={calculate}>=</Col>
                    <Col className="col" type="button" onClick={()=>{updateCalculation('.')}}>.</Col>
                    <Col className="col" type="button" onClick={()=>{updateCalculation('0')}}>0</Col>
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