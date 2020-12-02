import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../cart/context';
import './styles.css';

export default function Header({}) {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='__dml header'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>

        <li>
          <Link to='/products'>Store</Link>
        </li>

        <li>
          <Link to='/about-us'>About us</Link>
        </li>

        <li>
          <Link to='/cart'>Cart:</Link> (
          {cartItems.reduce((acc, item) => acc + item.qty, 0)})
        </li>
      </ul>
    </div>
  );
}
