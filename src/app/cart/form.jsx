import React from 'react';

import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  async function handleSubmit(e) {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod(
      {
        type: 'card',
        card: elements.getElement(CardElement),
      },
    );

    if (error) {
      console.log(error);
    } else {
      console.log(paymentMethod);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type='submit' disabled={!stripe}>
        Pay now
      </button>
    </form>
  );
}
