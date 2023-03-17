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

  const combinedLength = products.length + contents.length;
  const emptyCardContents = new Array(combinedLength).fill(null);

  contents.forEach((content) => {
    if (content?.position?.includes('row')) {
      const positionNumber = content?.position?.slice(4);

      emptyCardContents[positionNumber - 1] = content;
    }

    if (content?.position?.includes('cell')) {
      const positionNumber = content?.position?.slice(5);

      emptyCardContents[positionNumber - 1] = content;
    }
  })

  /*
  it would make sense to do it like this:
  [
    [content, product, content],
    [],
    []
  ]
  */

  const cardContents = emptyCardContents.map((cardContent) => {
    if (!cardContent) {
      const product = products.shift();
      return product;
    }
  })

  return (<div>
    <ProductsGrid 
      cardContents={cardContents}
    />
  </div>)
};

export default App;