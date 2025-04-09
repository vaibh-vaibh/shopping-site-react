import React from 'react';
import CategoryDetails from './CategoryDetails';
import { useSelector } from 'react-redux';

function DisplayCategory() {
  const categoryState = useSelector((state) => state.categoryR);
  const productState = useSelector((state) => state.productR);

  const filteredCategories = categoryState.arrCategory.filter((cat) => {
    const match = productState.arrProducts.find(
      (p) => p.category.toLowerCase() === cat.toLowerCase()
    );
    return match && match.image; 
  });

  return (
    <>
      {/* Categories Start */}
      <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Categories</span>
        </h2>
        <div className="row px-xl-5 pb-3">
          {filteredCategories.map((e, i) => (
            <CategoryDetails key={i} category={e} />
          ))}
        </div>
      </div>
      {/* Categories End */}
    </>
  );
}

export default DisplayCategory;
