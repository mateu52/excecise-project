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
                

            <Container className="containerCalc" fluid="md">
                <Row className="row mb-1">
                    <Col className="col d-flex justify-content-center pt-1 pb-1" type="button" onClick={()=>updateCalculation('7')}>7</Col>
                    <Col className="col d-flex justify-content-center pt-1 pb-1" type="button" onClick={()=>updateCalculation('8')}>8</Col>
                    <Col className="col d-flex justify-content-center pt-1 pb-1" type="button" onClick={()=>{updateCalculation('9')}}>9</Col>
                    <Col className="col d-flex justify-content-center pt-1 pb-1" type="button" onClick={clear}> del </Col>
                </Row>
                <Row className="row mb-1">
                    <Col className="col d-flex justify-content-center pt-1 pb-1 " type="button" onClick={()=>{updateCalculation('4')}}>4</Col>
                    <Col className="col d-flex justify-content-center pt-1 pb-1" type="button" onClick={()=>{updateCalculation('5')}}>5</Col>
                    <Col className="col d-flex justify-content-center pt-1 pb-1" type="button" onClick={()=>{updateCalculation('6')}}>6</Col>
                    <Col className="col d-flex justify-content-center pt-1 pb-1" type="button" onClick={()=>updateCalculation('+')}>+</Col>
                </Row>
                <Row className="row mb-1">
                    <Col className="col d-flex justify-content-center pt-1 pb-1" type="button" onClick={()=>updateCalculation('1')}>1</Col>
                    <Col className="col d-flex justify-content-center pt-1 pb-1" type="button" onClick={()=>updateCalculation('2')}>2</Col>
                    <Col className="col d-flex justify-content-center pt-1 pb-1" type="button" onClick={()=>updateCalculation('3')}>3</Col>
                    <Col className="col d-flex justify-content-center pt-1 pb-1" type="button" onClick={()=>updateCalculation('-')}>-</Col>
                </Row>
                <Row className="row mb-1"> 
                    <Col className="col d-flex justify-content-center pt-1 pb-1" type="button" onClick={()=>updateCalculation('.')}>.</Col>
                    <Col className="col d-flex justify-content-center pt-1 pb-1" type="button" onClick={()=>updateCalculation('0')}>0</Col>
                    <Col className="col d-flex justify-content-center pt-1 pb-1" type="button" onClick={()=>updateCalculation('/')}>/</Col>
                    <Col className="col d-flex justify-content-center pt-1 pb-1" type="button" onClick={()=>updateCalculation('*')}>x</Col>
                </Row>
                <Row className="row">
                    <Col className="col d-flex justify-content-center pt-1 pb-1" type="button" onClick={clear}>del</Col>
                    <Col className="col d-flex justify-content-center pt-1 pb-1" type="button" onClick={clear}>del</Col>
                    <Col className="col d-flex justify-content-center pt-1 pb-1" type="button" onClick={calculate}>=</Col>
                    <Col className="col d-flex justify-content-center pt-1 pb-1" type="button" onClick={calculate}>=</Col>
                </Row>
        </Container>
        </div>
    )
}

export default Calculator;