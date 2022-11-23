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
    function useSume(value1 = '', value2 = '', value3 = ''){
        const [value, setValue ] = useState('');
        const val_1 = value1; 
        const val_2 = value2;
        const sendChange = () => {
            //if '+'
            setValue( val_1 + val_2 );
        }
        return [ value, sendChange ];
    }
    const [ counter, setCounter ] = useCounter(''); //wyswietlacz
    const [ numbers, setNumber ] = useState('') //liczba w stanie
    const [ action, setAction ] = useState('') // działanie
    const [ sume, setSume ] = useSume(''); //wynik
    const hClick = ( event) => {
        console.log(Number.isInteger(event))
        if(Number.isInteger(event)===true){
            setCounter(event)
        }else if(event === 'sum'){
            setSume(counter, numbers)
            console.log('hfg')
        }else if(event === '+' || '-' || '*' || '/' ){
            setNumber(counter)
            setCounter('del');
            setAction(event)
        }
    }
    console.log(counter, numbers, action);
    //komponent - ekran
    return(
            <div>
                <h4> counter: {counter},numbers: {numbers},action: {action}, suma: {sume} </h4>
            <Container >
                <Row className="row">
                    <Col className="col" type="button" value='4' onClick={() => hClick(2)}>7</Col>
                    <Col className="col" type="button" value='2' onClick={() => hClick(4)}>8</Col>
                    <Col className="col" type="button" value='45' onClick={() => hClick('+')}>9</Col>
                    <Col className="col" type="button" value='45' onClick={() => hClick('sum')}>DEL</Col>
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