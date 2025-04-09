import React from 'react'
import ShopProductSingle from './ShopProductSingle'
import { useDispatch, useSelector } from 'react-redux';
import { changeRange } from '../Redux/features/productSlice';
import { NavLink } from 'react-router-dom';

function Shop() {
    const productState=useSelector((state)=>state.productR);
    const selectedRange=useSelector((state)=>state.productR.selectedRange)
    const dispatch=useDispatch();
    var filterProducts=[];
    if(productState.arrProducts.length==0){
        return <>loading.....</>
    }
    else{
      filterProducts=productState.arrProducts.filter(e=>(e.price>=selectedRange.min) && (e.price<selectedRange.max))
  
  return (
    <>
  {/* Shop Start */}
  <div className="container-fluid">
    <div className="row px-xl-5">
      {/* Shop Sidebar Start */}
      <div className="col-lg-3 col-md-4">
        {/* Price Start */}
        <h5 className="section-title position-relative text-uppercase mb-3">
          <span className="bg-secondary pr-3">Filter by price</span>
        </h5>
        <div className="bg-light p-4 mb-30">
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked=""
                id="price-all"
              />
              <label className="custom-control-label" htmlFor="price-all">
                All Price
              </label>
              <span className="badge border font-weight-normal">1000</span>
            </div>
            {productState.arrPriceRange.map((e,i)=>(<div key={i} className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input onClick={(element)=>{
                if(element.target.checked){
                  dispatch(changeRange({min:e.min,max:e.max}))
                  
                }
              }}
                type="checkbox"
                className="custom-control-input"
                id="price-1"
              />
              <label className="custom-control-label" htmlFor="price-1">
                ${e.min} - ${e.max}
              </label>
              <span className="badge border font-weight-normal">150</span>
            </div>))}
            
            
          </form>
        </div>
        {/* Price End */}
        {/* Color Start */}
        <h5 className="section-title position-relative text-uppercase mb-3">
          <span className="bg-secondary pr-3">Filter by color</span>
        </h5>
        <div className="bg-light p-4 mb-30">
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked=""
                id="color-all"
              />
              <label className="custom-control-label" htmlFor="price-all">
                All Color
              </label>
              <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-1"
              />
              <label className="custom-control-label" htmlFor="color-1">
                Black
              </label>
              <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-2"
              />
              <label className="custom-control-label" htmlFor="color-2">
                White
              </label>
              <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-3"
              />
              <label className="custom-control-label" htmlFor="color-3">
                Red
              </label>
              <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-4"
              />
              <label className="custom-control-label" htmlFor="color-4">
                Blue
              </label>
              <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input
                type="checkbox"
                className="custom-control-input"
                id="color-5"
              />
              <label className="custom-control-label" htmlFor="color-5">
                Green
              </label>
              <span className="badge border font-weight-normal">168</span>
            </div>
          </form>
        </div>
        {/* Color End */}
        {/* Size Start */}
        <h5 className="section-title position-relative text-uppercase mb-3">
          <span className="bg-secondary pr-3">Filter by size</span>
        </h5>
        <div className="bg-light p-4 mb-30">
          <form>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                defaultChecked=""
                id="size-all"
              />
              <label className="custom-control-label" htmlFor="size-all">
                All Size
              </label>
              <span className="badge border font-weight-normal">1000</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-1"
              />
              <label className="custom-control-label" htmlFor="size-1">
                XS
              </label>
              <span className="badge border font-weight-normal">150</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-2"
              />
              <label className="custom-control-label" htmlFor="size-2">
                S
              </label>
              <span className="badge border font-weight-normal">295</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-3"
              />
              <label className="custom-control-label" htmlFor="size-3">
                M
              </label>
              <span className="badge border font-weight-normal">246</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-4"
              />
              <label className="custom-control-label" htmlFor="size-4">
                L
              </label>
              <span className="badge border font-weight-normal">145</span>
            </div>
            <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input
                type="checkbox"
                className="custom-control-input"
                id="size-5"
              />
              <label className="custom-control-label" htmlFor="size-5">
                XL
              </label>
              <span className="badge border font-weight-normal">168</span>
            </div>
          </form>
        </div>
        {/* Size End */}
      </div>
      {/* Shop Sidebar End */}
      {/* Shop Product Start */}
      <div className="col-lg-9 col-md-8">
        <div className="row pb-3">
          <div className="col-12 pb-1">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div>
                <button className="btn btn-sm btn-light">
                  <i className="fa fa-th-large" />
                </button>
                <button className="btn btn-sm btn-light ml-2">
                  <i className="fa fa-bars" />
                </button>
              </div>
              <div className="ml-2">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-light dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Sorting
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <NavLink className="dropdown-item" to="#">
                      Latest
                    </NavLink>
                    <NavLink className="dropdown-item" to="#">
                      Popularity
                      </NavLink>
                    <NavLink className="dropdown-item" to="#">
                      Best Rating
                      </NavLink>
                  </div>
                </div>
                <div className="btn-group ml-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-light dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Showing
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <NavLink className="dropdown-item" to="#">
                      10
                    </NavLink>
                    
                    <NavLink className="dropdown-item" to="#">
                      20
                    </NavLink>

                    <NavLink className="dropdown-item" to="#">
                      30
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
             
                filterProducts.map((e,i)=>( <ShopProductSingle key={i} product={e}/>))
            
           
          }
          
          <div className="col-12">
            <nav>
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <NavLink className="page-link" to="#">
                    Previous
                  </NavLink>
                </li>
                <li className="page-item active">
                <NavLink className="page-link" to="#">
                    1
                  </NavLink>
                </li>
                <li className="page-item">
                <NavLink className="page-link" to="#">
                    2
                  </NavLink>
                </li>
                <li className="page-item">
                <NavLink className="page-link" to="#">
                    3
                  </NavLink>
                </li>
                <li className="page-item">
                <NavLink className="page-link" to="#">
                    Next
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Shop Product End */}
    </div>
  </div>
  {/* Shop End */}
</>

  )
}
}

export default Shop