import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export default function Cart(){
  const { state, remove, setQty } = useCart();
  const navigate = useNavigate();
  const subtotal = state.items.reduce((s,i)=> s + i.price * i.qty, 0);

  // Novos estados para o CEP e o frete calculado
  const [cep, setCep] = useState('');
  const [shippingCost, setShippingCost] = useState(null);
  const [cepError, setCepError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Função para calcular o frete
  const handleCalculateShipping = async () => {
    const cleanedCep = cep.replace(/\D/g, '');
    if (cleanedCep.length !== 8) {
      setCepError('CEP inválido. O CEP deve ter 8 dígitos.');
      return;
    }

    setIsLoading(true);
    setCepError('');
    
    // Simulação de cálculo de frete baseado na região do CEP
    await new Promise(resolve => setTimeout(resolve, 1000));

    let simulatedCost = 25;
    if (cleanedCep.startsWith('58')) {
      simulatedCost = 10;
    } else if (cleanedCep.startsWith('0') || cleanedCep.startsWith('1')) {
      simulatedCost = 35;
    }

    setShippingCost(simulatedCost);
    setIsLoading(false);
  };

  const total = subtotal + (shippingCost !== null ? shippingCost : 0);

  if(state.items.length === 0) return (
    <div>
      <h2>Carrinho</h2>
      <p>Seu carrinho está vazio.</p>
      <Link to="/catalogo">Voltar ao catálogo</Link>
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
              <button className="btn remove" onClick={()=> remove(it.id)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{marginTop:12, padding:'20px', border:'1px solid #ddd', borderRadius:'8px'}}>
        <h3>Resumo da Compra</h3>
        <div style={{marginBottom:'15px'}}>
          <label style={{display:'block', marginBottom:'5px'}}>Calcular Frete:</label>
          <input 
            type="text"
            value={cep}
            onChange={e => setCep(e.target.value)}
            placeholder="Digite seu CEP"
            style={{padding:'8px', width:'150px'}}
          />
          <button 
            className="btn secondary"
            onClick={handleCalculateShipping}
            disabled={isLoading}
            style={{marginLeft:'10px'}}
          >
            {isLoading ? 'Calculando...' : 'Calcular'}
          </button>
          {cepError && <p style={{color:'red', fontSize:'12px', marginTop:'5px'}}>{cepError}</p>}
        </div>

        <div style={{display:'flex', justifyContent:'space-between', marginBottom:'8px'}}>
          <span>Subtotal:</span>
          <strong>R$ {subtotal.toFixed(2)}</strong>
        </div>
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:'8px'}}>
          <span>Frete:</span>
          <strong>
            {shippingCost !== null ? `R$ ${shippingCost.toFixed(2)}` : 'Calcule seu frete'}
          </strong>
        </div>
        <hr style={{borderTop:'1px dashed #ccc'}} />
        <div style={{display:'flex', justifyContent:'space-between', fontSize:'1.2rem', fontWeight:'bold', marginTop:'8px'}}>
          <span>Total:</span>
          <span>R$ {total.toFixed(2)}</span>
        </div>
        
        <div style={{marginTop:20}}>
          {/* Aqui, passamos o valor do frete no estado da navegação */}
          <button className="btn" onClick={()=> navigate('/checkout', { state: { shippingCost } })}>Finalizar compra</button>
        </div>
      </div>
    </div>
  );
}