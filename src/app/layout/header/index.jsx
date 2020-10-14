import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Header({}) {
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
      </ul>
    </div>
  );
}
