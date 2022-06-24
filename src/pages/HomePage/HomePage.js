import React from 'react';
import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import Product from '../../components/Product/Product';

function HomePage() {
  return (
    <main>
        <Hero />
        <Product />
    </main>
  )
}

export default HomePage