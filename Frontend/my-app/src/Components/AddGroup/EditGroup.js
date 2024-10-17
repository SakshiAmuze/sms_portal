import React from 'react'
import { useForm } from "react-hook-form"
import { useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditGroup() {
    const [val, setVal] = useState({})

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }


    return (

        <div className='container upgrp-sec col-6' >
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Update Group</h3>
                <input type=" text" className='form-control' {...register("grp_name", { required: true })} defaultValue={val.grp_name} /><br />
                {errors.lib_name?.type === "required" && (
                    <p role="alert">Group name required</p>
                )}
                <button type="submit">Update</button>
            </form>
        </div>
    )
}
