'use client';

import React, {useEffect, useState} from "react";
import {getProducts, getContents} from '../services';
import ProductsColumn from './products-column';


const App = () => {
  const [products, setProducts] = useState([]);
  const [contents, setContents] = useState([]);


  useEffect(() => {
    //hardcoded data
    const productsResponse = getProducts().products;
    const contentsResponse = getContents().data;

    setProducts(productsResponse);
    setContents(contentsResponse);

  }, [])

  return (<div>
    <ProductsColumn products={products} />
  </div>)
};

export default App;