import React from 'react';
import Seo from '../../app/seo';
import Cart from '../../app/cart';

export default function CheckoutPage() {
  return (
    <>
      <Seo title='Buy your stuff now!' />
      <h1>Buy my stuff!</h1>
      <Cart />
    </>
  );
}
