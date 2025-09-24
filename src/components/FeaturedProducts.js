// src/components/FeaturedProducts.js

import React from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';

export default function FeaturedProducts({ limit }) {
  // Exibe apenas a quantidade de produtos especificada pelo 'limit'
  const displayedProducts = products.slice(0, limit);

  return (
    <div className="grid" style={{ marginTop: 12 }}>
      {displayedProducts.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}