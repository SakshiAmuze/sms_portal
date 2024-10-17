import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import dataprocess from '../../function/dataprocess';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import './AddLibrary.css'

export default function AddLibrary() {
  let navigate = useNavigate();
  var [val, setval] = useState();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)

    if (data != "") {
      dataprocess("library/add", {
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
        navigate('/add_lib')

    }

  };


  useEffect(() => {
    fetch('http://localhost:9000/library/show')
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        setval(json.data)
      })

  }, [])


  const deleteData = (ev, id) => {
    ev.preventDefault();
    console.log(id);

    fetch('http://localhost:9000/library/delete/' + id, {
      method: "delete"
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        ev.target.parentNode.parentNode.remove();
      })
  }


  return (
    <div className='container addlib-sec'>
      <div className='row'>
        <div className='container  col-6 ' >
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Add Library</h3>
            <input type=" text" className='form-control' {...register("lib_name", { required: true })} /><br />
            {errors.lib_name?.type === "required" && (
              <p role="alert">Library name required</p>
            )}
            <button type="submit" >Submit</button>
            
          </form>
        </div>
        <div className='col-6'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Library Name</th>
                <th scope="col">EDIT</th>
                <th scope="col">Delete</th>

              </tr>
            </thead>
            <tbody>
              {
                val && val.map(({ _id, lib_name }) =>

                  <tr>
                    <td scope="row">{lib_name}</td>
                    <td><Link to={'/editlib/' + _id}>Edit</Link></td>
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
