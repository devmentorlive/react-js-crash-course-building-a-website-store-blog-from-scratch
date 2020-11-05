import React from 'react';
import Seo from '../../app/seo';
import products from '../../data/products.json';

export default function Homepage({}) {
  return (
    <>
      <Seo title='Welcome to the machine' />
      <h1>
        A ReactJS based website using simple, client-side rendering
      </h1>
      <img src={products[0].imageUrl} alt={products[0].name} />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Doloremque iure tempora cumque ipsam numquam quos veritatis
        rerum quis a, ullam consequatur qui in aliquid maiores hic!
        Delectus possimus molestiae quod.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
        quam, id dolorum nulla nisi vero distinctio corrupti culpa
        error. Harum explicabo unde quidem eos modi voluptate
        voluptates veritatis iste accusantium.
      </p>
    </>
  );
}
