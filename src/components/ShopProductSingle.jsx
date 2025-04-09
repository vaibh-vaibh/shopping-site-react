import React from 'react'
import {useDispatch} from 'react-redux'
import { addToCart } from '../Redux/features/cartSlice'
import { NavLink } from 'react-router-dom'

function ShopProductSingle(props) {
  const dispatch= useDispatch()
  return (
    <>
    <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img
                  className="img-fluid"
                  src={props.product.image}
                  alt={props.product.title}
                  loading='lazy'
                  width="200"
                  height="200"
                  style={{objectFit: 'cover', borderRadius: '6px'}}
                />
                <div className="product-action">
                  <NavLink className="btn btn-outline-dark btn-square" to="">
                    <i className="fa fa-shopping-cart" />
                  </NavLink>
                  <NavLink className="btn btn-outline-dark btn-square" to="">
                    <i className="far fa-heart" />
                    </NavLink>
                  <NavLink className="btn btn-outline-dark btn-square" to="">
                    <i className="fa fa-sync-alt" />
                    </NavLink>
                  <NavLink className="btn btn-outline-dark btn-square" to="">
                    <i className="fa fa-search" />
                    </NavLink>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">
                {props.product.title}
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                <h5>${props.product.price.toFixed(2)}</h5>
                  <h6 className="text-muted ml-2">
                    <del>${props.product.price.toFixed(2)}</del>(Discount--{props.product.discountPercentage}%)
                  </h6>
                </div>
                <div>
                <input onClick={()=>{
                  dispatch(addToCart(props.product))
                }} className='btn btn-primary' type="button" value="Add to Cart" />
              </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}


export default ShopProductSingle