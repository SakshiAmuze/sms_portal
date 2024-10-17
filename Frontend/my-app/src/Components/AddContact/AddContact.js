import React from 'react';
import { useForm } from "react-hook-form"
import useFetch from '../../Functions/useFetch';
import dataprocess from '../../function/dataprocess';
import './AddConatact.css';


export default function AddContact() {

  var groupList = useFetch("group/show-grp");

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) =>{ 
    console.log(data)
   
    if(data !=""){
      dataprocess("contact/add-contact",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err)=>{
          console.log(err);
        
      })
    }
  };
  return (
    <div className='container  addcontact-sec'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Add Contact</h3>
        <label>Username</label>
        <input type=" text" className='form-control' {...register("username", { required: true })} /><br />
        {errors.username?.type === "required" && (
          <p role="alert">Username required</p>
        )}
        <label>Mobile No</label>
        <input type=" text" className='form-control' {...register("usermobile", { required: true })} /><br />
        {errors.usermobile?.type === "required" && (
          <p role="alert">Mobile No required</p>
        )}
        <label>Email</label>
        <input type=" text" className='form-control' {...register("useremail", { required: true })} /><br />
        {errors.useremail?.type === "required" && (
          <p role="alert">Email required</p>
        )}

        <label>Select Group</label><br />
        <select className='form-control' {...register("group_id",{ required: true })} >
          <option>Select group</option>
          {
            groupList.data && groupList.data.map(val=>
              <option value={val._id}>{val.grp_name}</option>)
          }
        
        </select><br />
        {errors.group_id?.type === "required" && (
          <p role="alert">Please Select Group </p>
        )}
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}
