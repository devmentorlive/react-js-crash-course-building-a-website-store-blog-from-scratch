import React, { useContext } from 'react';
import Context from './context';
import { formatCurrency } from '../../modules/string';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './form';

import './styles.css';

export default function Cart() {
  const { cartItems, changeQty } = useContext(Context);

  function total(cartItems) {
    return cartItems.reduce(function (acc, item) {
      acc += item.price * item.qty;
      return acc;
    }, 0);
  }

  return (
    <div>
      <table width='100%' cellSpacing={0} cellPadding={0}>
        <thead>
          <tr>
            <th>Product name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {cartItems.length === 0 && 'There is nothing in your cart!'}
          {cartItems.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <input
                  type='text'
                  value={product.qty}
                  onChange={(e) =>
                    changeQty(product, parseInt(e.target.value))
                  }
                />
              </td>
              <td>{formatCurrency(product.price * product.qty)}</td>
              <td></td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={3} className='total-label'>
              Total:
            </td>
            <td className='total'>${total(cartItems)}</td>
          </tr>
        </tfoot>
      </table>

      {cartItems.length > 0 && (
        <>
          <hr />
          <Elements
            stripe={loadStripe(
              'pk_test_51GtcaZKCYLlhiOccDSAoEzAvlXhRBwYKaFEgXoHzhvrvNJsV9Q5S6rSJiWOSwtcKsUrq17f4487b9wXJkIkHqAzx00ofidFSHw',
            )}
          >
            <CheckoutForm />
          </Elements>
        </>
      )}
    </div>
  );
}
