import React from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';

export default function ProductList(){
  return (
    <div>
      <h2>Catálogo</h2>
      <div className="grid" style={{marginTop:12}}>
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
