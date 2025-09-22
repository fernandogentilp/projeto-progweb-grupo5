import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({product}){
  return (
    <div className="card">
      <div className="badge">{product.type === 'ebook' ? 'E-BOOK' : 'FÍSICO'}</div>
      <img src={product.image} alt={product.title} />
      <h3 style={{marginTop:8}}>{product.title}</h3>
      <p className="price">R$ {product.price.toFixed(2)}</p>
      <div style={{display:'flex', gap:8, marginTop:8}}>
        <Link to={`/product/${product.id}`} className="btn secondary">Ver</Link>
        <Link to="/cart" className="btn">Comprar</Link>
      </div>
    </div>
  );
}
