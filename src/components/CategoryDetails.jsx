import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from '../Redux/features/categorySlice';

function getFilteredProductsOfCategory(categoryName,arrProduct){
    var arrFilteredProduct=arrProduct.filter(e=>e.category.toUpperCase()==categoryName.toUpperCase())
        return arrFilteredProduct;
    }
    
function CategoryDetails(props) {
    const productState=useSelector((state)=>state.productR);
    const dispatch=useDispatch();
    if(productState.arrProducts.length==0){
        return <>loading.....</>
    }
    else{
        var arrFilter=getFilteredProductsOfCategory(props.category,productState.arrProducts);
        if(arrFilter.length==0){
            return ''
        }
        
  return (
    <div onClick={()=>{dispatch(changeCategory(props.category))}} className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <span className="text-decoration-none" >
          <div className="cat-item d-flex align-items-center mb-4">
            <div
              className="overflow-hidden"
              style={{ width: 100, height: 100 }}
            >
              <img className="img-fluid" src={arrFilter[0].image} alt={arrFilter[0].title} />
            </div>
            <div className="flex-fill pl-3">
              <h6 onClick={()=> dispatch(changeCategory(props.category))}>{props.category}</h6>
              <small className="text-body">{arrFilter.length} Products</small>
            </div>
          </div>
        </span>
      </div>
  )
}
}

export default CategoryDetails