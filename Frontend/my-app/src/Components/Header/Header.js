import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Feature-Image-sms-portal.png'
import './Header.css'

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={logo} className='img-fluid logo'/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  sms-nav" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/add_lib">Add Library</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="add_grp">Add Group</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="add_contact">Add Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="add_msg">Add Message</Link>
        </li>
        
        
       
      </ul>
      
    </div>
  </div>
</nav>
  )
}
