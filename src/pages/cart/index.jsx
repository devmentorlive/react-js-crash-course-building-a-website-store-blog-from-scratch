import React, { useContext } from 'react';
import Seo from '../../app/seo';
import Cart from '../../app/cart';

export default function CartPage() {
  return (
    <>
      <Seo title='My cart' />
      <h1>My cart</h1>
      <Cart />
    </>
  );
}
