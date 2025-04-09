import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function TopNavBar() {
  const cartState = useSelector((state) => state.cartR);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid">
        <div className="row bg-secondary py-1 px-xl-5">
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-light dropdown-toggle"
                  data-toggle="dropdown"
                >
                  My Account
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <button className="dropdown-item" type="button">
                    Login
                  </button>
                  <button onClick={handleLogout} className="dropdown-item btn btn-danger btn-sm">
                    Logout
                  </button>
                </div>
              </div>
              <div className="btn-group mx-2">
                <button type="button" className="btn btn-sm btn-light">USD</button>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-light">EN</button>
              </div>

              {/* 🛒 Cart Count Display */}
              <div className="btn-group ml-2">
                <NavLink to="/shoppingcart" className="btn btn-sm btn-outline-light position-relative">
                  <i className="fas fa-shopping-cart" />
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: '10px' }}
                  >
                    {cartState.arrCart.length}
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <div className="col-lg-4">
            <a href="/" className="text-decoration-none">
              <span className="h1 text-uppercase text-primary bg-dark px-2">Multi</span>
              <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
            </a>
          </div>
          <div className="col-lg-4 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for products" />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-6 text-right">
            <p className="m-0">Customer Service</p>
            <h5 className="m-0">+012 345 6789</h5>
          </div>
        </div>
      </div>
      {/* Topbar End */}
    </>
  );
}

export default TopNavBar;
