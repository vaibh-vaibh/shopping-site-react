import React from 'react'
import Category from './Category'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

function NavBar() {
  
  const cartState=useSelector((state)=>state.cartR);
  return (
    <>
  {/* Navbar Start */}
  <div className="container-fluid bg-dark mb-30">
    <div className="row px-xl-5">
      <Category/>
      <div className="col-lg-9">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
          <a href="" className="text-decoration-none d-block d-lg-none">
            <span className="h1 text-uppercase text-dark bg-light px-2">
              Multi
            </span>
            <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
              Shop
            </span>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav mr-auto py-0">
              <NavLink to="/home" className="nav-item nav-link active">
                Home
              </NavLink>
              <div className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Pages <i className="fa fa-angle-down mt-1" />
                </NavLink>
                <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                  <NavLink to="/shoppingCart" className="dropdown-item">
                    Shopping Cart
                  </NavLink>
                  <NavLink to="/" className="dropdown-item">
                    Logout
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
              <NavLink to="" className="btn px-0">
                <i className="fas fa-heart text-primary" />
                <span
                  className="badge text-secondary border border-secondary rounded-circle"
                  style={{ paddingBottom: 2 }}
                >
                  0
                </span>
              </NavLink>
              <NavLink to="" className="btn px-0 ml-3">
                <i className="fas fa-shopping-cart text-primary" />
                <span
                  className="badge text-secondary border border-secondary rounded-circle"
                  style={{ paddingBottom: 2 }}
                >
                   {cartState.arrCart.length}
                </span>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  {/* Navbar End */}
</>

  )
}

export default NavBar