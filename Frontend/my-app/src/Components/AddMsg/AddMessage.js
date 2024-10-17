import React from 'react'
import { useForm } from "react-hook-form"
import useFetch from '../../Functions/useFetch';
import dataprocess from '../../function/dataprocess';

export default function AddMessage() {

  var libList = useFetch("library/show");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    if (data != "") {
      dataprocess("msg/add-msg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);

        })
    }

  };

  return (
    <div className='container addmsg-sec'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Add Message</h3>
        <input type=" text" className='form-control' {...register("Message", { required: true })} /><br />
        {errors.Message?.type === "required" && (
          <p role="alert">Message required</p>
        )}
        <label>Select Library</label>
        <select className='form-control' {...register("lib_id", { required: true })} >
          <option>Select Library</option>
          {
            libList.data && libList.data.map(val =>
              <option value={val._id}>{val.lib_name}</option>)
          }

        </select><br />
        {errors.lib_id?.type === "required" && (
          <p role="alert">Please Select Library</p>
        )}

        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}
