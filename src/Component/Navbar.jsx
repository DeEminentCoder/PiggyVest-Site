import React from 'react'

const Navbar = () => {

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-white shadow-sm py-3 px-5">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src="logo.svg" alt="" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
        <form className="d-flex" role="search">
          <button className="btn btn-lg btn-outline-success" type="submit">Sign in</button>
          <button className="btn btn-lg btn-outline-success" type="submit">Create free account</button>
        </form>
      </div>
    </div>
  </nav>
  </>
    
  )
}

export default Navbar