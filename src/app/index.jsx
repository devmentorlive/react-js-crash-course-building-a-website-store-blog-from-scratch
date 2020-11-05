import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartContext from './cart/context';
import useCart from '../hooks/use-cart';
import './styles.css';

import Layout from './layout';
import Homepage from '../pages/homepage';
import AboutUsPage from '../pages/about-us';
import ProductsPage from '../pages/products';
import CartPage from '../pages/cart';
import CheckoutPage from '../pages/checkout';

export default function App() {
  return (
    <CartContext.Provider value={useCart([])}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>

            <Route path='/about-us'>
              <AboutUsPage />
            </Route>

            <Route path='/products'>
              <ProductsPage />
            </Route>

            <Route path='/cart'>
              <CartPage />
            </Route>

            <Route path='/checkout'>
              <CheckoutPage />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </CartContext.Provider>
  );
}
