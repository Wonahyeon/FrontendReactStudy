import React from 'react'
import Counter from './features/counter/Counter';
import ProductList from './features/product/ProductList';

function CounterApp(props) {
  return (
    <div>
      <Counter/>
      <ProductList/>
    </div>
  );
}

export default CounterApp;

