'use client';

import React, {useEffect, useState} from "react";
import {getProducts, getContents} from '../services';
import ProductsGrid from './products-grid';


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

  const cardContents = [...products, ...contents];

  return (<div>
    <ProductsGrid 
      cardContents={cardContents}
    />
  </div>)
};

export default App;