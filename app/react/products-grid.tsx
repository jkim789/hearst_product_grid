import React, {useEffect, useState} from "react";
import {getProducts, getContents} from '../services';
import ProductsCard from './products-card';

const ProductsGrid = ({cardContents}) => {
  return (
    <div className="products-grid">
      {cardContents.map((content, idx) => (
        <ProductsCard key={content?.product_id ? content.product_id : `card_${idx}`} content={content} />
      ))}
  </div>
  )
};

export default ProductsGrid;