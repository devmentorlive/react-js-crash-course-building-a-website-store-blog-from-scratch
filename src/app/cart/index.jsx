import React, { useContext } from 'react';
import Context from './context';
import { formatCurrency } from '../../modules/string';

export default function Cart() {
  const { cartItems, changeQty } = useContext(Context);

  return (
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
    </table>
  );
}
