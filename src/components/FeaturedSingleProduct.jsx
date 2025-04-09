import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/features/cartSlice';

function FeaturedSingleProduct({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
      <div className="product-item bg-light p-2 h-100 d-flex flex-column justify-content-between shadow-sm rounded">
        <div className="text-center">
          <img
            className="img-fluid mb-2"
            src={product.image}
            alt={product.title}
            loading='lazy'
            width="200"
            height="200"
            style={{ borderRadius: '6px', objectFit: 'cover'}}
          />
          <h6
            className="text-truncate mb-1"
            style={{ fontSize: '14px', minHeight: '38px' }}
          >
            {product.title}
          </h6>
          <div className="text-dark font-weight-bold" style={{ fontSize: '15px' }}>
            ${product.price.toFixed(2)}
          </div>
        </div>

        <div className="text-center mt-2">
          <button
            onClick={() => dispatch(addToCart(product))}
            className="btn btn-sm btn-primary px-3 text-white"
            style={{
              transition: 'all 0.3s ease',
              fontSize: '13px',
              fontWeight: '500'
            }}
            onMouseEnter={(e) => (e.target.style.color = '#fff')}
            onMouseLeave={(e) => (e.target.style.color = '')}
          >
            Add to Cart
          </button>

          <div className="text-warning mt-1" style={{ fontSize: '12px' }}>
            {'★'.repeat(Math.round(product.rating.rate))}{' '}
            <small>({product.rating.count})</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSingleProduct;
