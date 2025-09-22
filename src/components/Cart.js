import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export default function Cart(){
  const { state, remove, setQty } = useCart();
  const navigate = useNavigate();
  const total = state.items.reduce((s,i)=> s + i.price * i.qty, 0);
  if(state.items.length === 0) return (
    <div>
      <h2>Carrinho</h2>
      <p>Seu carrinho está vazio.</p>
      <Link to="/">Voltar ao catálogo</Link>
    </div>
  );
  return (
    <div>
      <h2>Carrinho</h2>
      <div className="cart-list">
        {state.items.map(it => (
          <div key={it.id} className="cart-item">
            <img src={it.image} alt={it.title} width={80} />
            <div style={{flex:1}}>
              <strong>{it.title}</strong>
              <div>R$ {it.price.toFixed(2)}</div>
              <div style={{marginTop:8}}>
                <button className="btn secondary" onClick={()=> setQty(it.id, Math.max(1, it.qty-1))}>-</button>
                <span style={{margin:'0 8px'}}>{it.qty}</span>
                <button className="btn secondary" onClick={()=> setQty(it.id, it.qty+1)}>+</button>
              </div>
            </div>
            <div>
              <button className="btn" onClick={()=> remove(it.id)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{marginTop:12}}>
        <h3>Total: R$ {total.toFixed(2)}</h3>
        <button className="btn" onClick={()=> navigate('/checkout')}>Finalizar compra</button>
      </div>
    </div>
  );
}
