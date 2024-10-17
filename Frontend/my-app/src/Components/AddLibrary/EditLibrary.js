import React from 'react';
import { useForm } from "react-hook-form"
import { useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import'./EditLibrary.css';

export default function EditLibrary() {
    const [val, setVal] = useState({})
    let params = useParams();
    console.log(params);
    let navigate = useNavigate();


    useEffect(() => {
        fetch('http://localhost:9000/library/showById/' + params.libid)
          .then(res => res.json())
          .then(json => {
            console.log(json);
            setVal(json.data)
          })
    
      }, [params.libid])


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);

        var finalData = JSON.stringify(data);
        console.log(finalData);

        
    fetch('http://localhost:9000/library/update/' + params.libid , {
        method:"put",
        body:finalData,
        headers:{
        "Content-Type":"application/JSON"
        }
    })
        .then(res => res.json())
        .then(json => { 
            console.log(json);
            navigate("/add_lib")

        })


    }




    return (
        <div className='container uplib-sec col-6' >
            <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Update Library</h3>
                <input type=" text" className='form-control' {...register("lib_name", { required: true })} defaultValue={val.lib_name} /><br />
                {errors.lib_name?.type === "required" && (
                    <p role="alert">Library name required</p>
                )}
                <button type="submit">Update</button>
            </form>
        </div>
    )
}
