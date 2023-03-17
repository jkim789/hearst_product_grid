import React, {useEffect, useState} from "react";
import {getProducts, getContents} from '../services';
import ProductsCard from './products-card';

const ProductsColumn = ({products}) => {
  return (
    <div className="products-column">
      {products.map(product => (
        <ProductsCard key={product.product_id} product={product} />
      ))}
  </div>
  )
};

export default ProductsColumn;