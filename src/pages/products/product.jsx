import React, { useState, useContext } from 'react';
import CartContext from '../../app/cart/context';

import './styles.css';

export default function Product({
  id,
  name,
  imageUrl,
  price,
  tags,
  colors,
}) {
  const [hover, setHover] = useState(false);
  const { addToCart } = useContext(CartContext);
  return (
    <div
      className={`product ${hover && 'hover'}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      {hover && (
        <div
          className='add-to-cart'
          onClick={() =>
            addToCart({
              id,
              name,
              price,
            })
          }>
          +<div>add to cart</div>
        </div>
      )}
      <div className='card'>
        <img src={imageUrl} alt={name} />
        <div className='name'>{name}</div>
        <div className='price'>Price: {price}</div>

        <div className='tags'>
          Tags:{' '}
          {tags.map((tag) => (
            <span className='tag'>{tag}</span>
          ))}
        </div>

        <div className='tags'>
          Available in:{' '}
          {colors.map((color) => (
            <span className='tag'>{color}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
