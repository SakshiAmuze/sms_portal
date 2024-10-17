import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import dataprocess from '../../function/dataprocess';
import './AddGroup.css';
import { Link } from 'react-router-dom';


export default function AddGroup() {

  var [val, setval] = useState();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)

    if (data != "") {
      dataprocess("group/add-grp", {
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



  useEffect(() => {
    fetch('http://localhost:9000/group/show-grp')
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        setval(json.data)
      })

  }, [])



  const deleteData = (ev, id) => {
    ev.preventDefault();
    console.log(id);

    fetch('http://localhost:9000/group/delete-grp/' + id, {
      method: "delete"
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        ev.target.parentNode.parentNode.remove();
      })
  }



  return (
    <div className='container addgrp-sec'>
      <div className='row'>
        <div className='conatiner col-6'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Add Group</h3>
            <input type=" text" className='form-control' {...register("grp_name", { required: true })} /><br />
            {errors.grp_name?.type === "required" && (
              <p role="alert">Group name required</p>
            )}
            <button type="submit" >Submit</button>
          </form>
        </div>

        <div className='col-6'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Group Name</th>
                <th scope="col">EDIT</th>
                <th scope="col">Delete</th>

              </tr>
            </thead>
            <tbody>
              {
                val && val.map(({ _id, grp_name }) =>

                  <tr>
                    <td scope="row">{grp_name}</td>
                    <td><Link to={'/editgrp/' + _id}>Edit</Link></td>
                    <td><a href='#' onClick={(ev) => { deleteData(ev, _id) }}>Delete</a></td>
                  </tr>
                )
              }


            </tbody>
          </table>
        </div>
      </div>

    </div>

  )
}
