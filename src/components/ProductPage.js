import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../contexts/CartContext';

export default function ProductPage(){
  const { id } = useParams();
  const p = products.find(x => String(x.id) === String(id));
  const { add } = useCart();
  if(!p) return <p>Produto não encontrado.</p>
  return (
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:20}}>
      <div>
        <img src={p.image} alt={p.title} style={{width:'100%', borderRadius:8}} />
      </div>
      <div>
        <div className="badge">{p.type === 'ebook' ? 'E-BOOK' : 'FÍSICO'}</div>
        <h2>{p.title}</h2>
        <p className="price">R$ {p.price.toFixed(2)}</p>
        <p style={{color:'#374151'}}>{p.description}</p>
        <div style={{marginTop:12}}>
          <button className="btn" onClick={()=> add(p)}>Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  );
}
