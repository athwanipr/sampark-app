import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-light bg-dark">
  <Link className="navbar-brand mx-2" to="/">Sampark App</Link> 
  {/* I have to correct its path */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link" to="/">Link</Link>
      </li> */}
    </ul>
    {localStorage.getItem('token')&&<button type="button" class="btn btn-outline-light mx-2" onClick={handleLogout}>Logout</button>}
  </div>
</nav>
    )
}
