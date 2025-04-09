import React, { useState, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotalValue } from '../BLL/utilty';
import { decreaseProduct, increaseProduct, removeFromCart } from '../Redux/features/cartSlice';

function ShoppingCart() {
  const cartState = useSelector((state) => state.cartR);
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleCheckout = () => {
    cartState.arrCart.forEach((item) => {
      dispatch(removeFromCart(item.product));
    });

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
  };

  return (
    <>
      {/* Cart Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {cartState.arrCart.map((e, i) => (
                  <tr key={i}>
                    <td className="align-middle">
                      <img src={e.product.image} alt={e.product.title} style={{ width: 50, loading: lazy }} />{" "}
                      {e.product.title}
                    </td>
                    <td className="align-middle">${e.product.price.toFixed(2)}</td>
                    <td className="align-middle">
                      <div
                        className="input-group quantity mx-auto"
                        style={{ width: 100 }}
                      >
                        <div className="input-group-btn">
                          <button onClick={() => dispatch(decreaseProduct(e.product))} className="btn btn-sm btn-primary btn-minus">
                            <i className="fa fa-minus" />
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm bg-secondary border-0 text-center"
                          value={e.quantity}
                          readOnly
                        />
                        <div className="input-group-btn">
                          <button onClick={() => dispatch(increaseProduct(e.product))} className="btn btn-sm btn-primary btn-plus">
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">
                      ${(e.product.price * e.quantity).toFixed(2)}
                    </td>
                    <td className="align-middle">
                      <button onClick={() => dispatch(removeFromCart(e.product))} className="btn btn-sm btn-danger">
                        <i className="fa fa-times" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <form className="mb-30" action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-0 p-4"
                  placeholder="Coupon Code"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary">Apply Coupon</button>
                </div>
              </div>
            </form>
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Cart Summary</span>
            </h5>
            <div className="bg-light p-30 mb-5">
              <div className="border-bottom pb-2">
                <div className="d-flex justify-content-between mb-3">
                  <h6>Subtotal</h6>
                  <h6>${getCartTotalValue(cartState.arrCart).toFixed(2)}</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">$10</h6>
                </div>
              </div>
              <div className="pt-2">
                <div className="d-flex justify-content-between mt-2">
                  <h5>Total</h5>
                  <h5>${(getCartTotalValue(cartState.arrCart) + 10).toFixed(2)}</h5>
                </div>
                <button
                  onClick={handleCheckout}
                  className="btn btn-block btn-primary font-weight-bold my-3 py-3"
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="alert alert-success text-center" role="alert">
          Order placed successfully!
        </div>
      )}
      {/* Cart End */}
    </>
  );
}

export default ShoppingCart;
