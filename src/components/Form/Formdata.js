import React, { useState } from "react";
//import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "./style.css"
function Formdata(){
    //const { register, handleSubmit, watch, formState: { errors } } = useForm();
    //const onSubmit = data => console.log(data) ;
    //const d =new Date();
    //console.log(d)
    return(
        <Form className="forminput">
          <Form.Group className="mb-3 "  controlId="formBasicName">
            <Form.Label className="mb-3 formgroup">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>
    )
    
}
//srapi
/* <form onSubmit={handleSubmit(onSubmit)}>
            <input  {...register("name")}  className="input"/>
            <input {...register("name")} />

            <input type="submit" />
        </form> */
export default Formdata;