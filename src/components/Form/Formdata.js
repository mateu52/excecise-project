import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./style.css"
function Formdata(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data) ;
    //const d =new Date();
    //console.log(d)
    return(
      <Container>
          <Form onSubmit={handleSubmit(onSubmit)} className="forminput mt-3">
          <Row className="">
            <Col className="colclass">
            <Form.Group className="mb-1 mt-3 formgroup"  controlId="formBasicName">
              <InputGroup.Text>Name</InputGroup.Text>
              <Form.Control className="formcontrol"
                type="name" placeholder="Enter name" 
                {...register("name")}
                />
            </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="colclass">
            <Form.Group className="mb-3 formgroup"  controlId="formBasicEmail">
            <InputGroup.Text>Email</InputGroup.Text>
              <Form.Control 
                type="e-mail" placeholder="Enter email" 
                {...register("email")}
                />
            </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="colclass">
              <Button variant="primary" type="submit" className="button mb-4">
            Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      
    )
    
}
//srapi
/* <form onSubmit={handleSubmit(onSubmit)}>
            <input  {...register("name")}  className="input"/>
            <input {...register("name")} />

            <input type="submit" />
        </form> */
export default Formdata;