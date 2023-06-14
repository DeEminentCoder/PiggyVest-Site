import React from 'react'

const Navbar = () => {

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-white shadow-sm py-3">
    <div className="container-fluid gap-2">
      <a className="navbar-brand ms-5" href="#"><img src="logo.svg" alt="" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mt-2 gap-3 ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Save</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Invest</a>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link" href="#">Stories</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">FAQs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Resources</a>
          </li>
        </ul>
        <form className="d-flex me-5 gap-3" role="search">
          <button className="btn btn-lg btn-outline-dark border" id='signInButt' type="submit">Sign in</button>
          <button className="btn btn-lg btn-dark border" id='createAccntButt' type="submit">Create free account</button>
        </form>
      </div>
    </div>
  </nav>
  </>
    
  )
}

export default Navbar