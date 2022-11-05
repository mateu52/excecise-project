import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Form(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data) ;
    const d =new Date();
    console.log(d)
    return(
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} />
            <input {...register("name")} />

            <input type="submit" />
        </form>
        </div>
    )
    
}
//srapi

export default Form;