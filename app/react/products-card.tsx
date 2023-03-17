import React, {useEffect, useState} from "react";
import {getProducts, getContents} from '../services';

const ProductsCard = ({content}) => {
  const classes = `product-card ${content?.position ? 'row' : ''}`

  return (
    <div className={classes}>
      <h3>{content?.title || ''}</h3>
      <div>{content?.contents}</div>
      <img src={content?.image} />
    </div>
  )
};

export default ProductsCard;