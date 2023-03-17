import React, {useEffect, useState} from "react";
import {getProducts, getContents} from '../services';

const ProductsCard = ({product}) => {

  console.log(product)
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <img src={product.image}></img>
    </div>
  )
};

export default ProductsCard;