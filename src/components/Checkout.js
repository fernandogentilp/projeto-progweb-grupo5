import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export default function Checkout(){
  const { state, clear } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const total = state.items.reduce((s,i)=> s + i.price * i.qty, 0);

  function handleSubmit(e){
    e.preventDefault();
    // Simula criação de pedido
    const orderId = 'ORD' + Date.now();
    const order = {
      id: orderId,
      name, email,
      items: state.items,
      total,
      createdAt: Date.now()
    };
    // Salva pedido simples no localStorage para recuperar na página de sucesso
    localStorage.setItem('lastOrder', JSON.stringify(order));
    clear();
    navigate(`/success/${orderId}`);
  }

  if(state.items.length === 0) return <p>Seu carrinho está vazio.</p>
  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Nome</label>
          <input required value={name} onChange={e=>setName(e.target.value)} style={{width:'100%', padding:8}} />
        </div>
        <div className="field">
          <label>E-mail</label>
          <input required value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%', padding:8}} />
        </div>
        <div style={{marginTop:12}}>
          <h3>Total: R$ {total.toFixed(2)}</h3>
          <button type="submit" className="btn">Simular pagamento</button>
        </div>
      </form>
    </div>
  );
}
