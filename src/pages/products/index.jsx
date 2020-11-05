import React from 'react';
import Seo from '../../app/seo';
import Product from './product';

import products from '../../data/products.json';

export default function ProductsPage({}) {
  return (
    <>
      <Seo title='Our products are awesome' />
      <h1>Welcome to our store!</h1>

      <div className='products'>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
