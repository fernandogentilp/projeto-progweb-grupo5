import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import boletoPlaceholder from '../assets/boleto.png';
import qrcodePlaceholder from '../assets/qrcode.png';

export default function Checkout(){
  const { state, clear } = useCart();
  const location = useLocation(); // Importamos e usamos o useLocation
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateUF, setStateUF] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [errors, setErrors] = useState({});
  const [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();

  // Recebemos o frete do estado da navegação. Valor padrão de 0 para segurança.
  const shippingCost = location.state?.shippingCost || 0;
  
  // O subtotal é calculado como antes
  const subtotal = state.items.reduce((s,i)=> s + i.price * i.qty, 0);
  
  // O total agora inclui o frete
  const total = subtotal + shippingCost;

  async function handleCepBlur() {
    const cep = postalCode.replace(/\D/g, '');
    setErrors(prev => ({...prev, postalCode: ''}));

    if (cep.length === 8) {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setErrors(prev => ({...prev, postalCode: 'CEP não encontrado.'}));
        setAddress('');
        setCity('');
        setStateUF('');
      } else {
        setAddress(`${data.logradouro}, ${data.bairro}`);
        setCity(data.localidade);
        setStateUF(data.uf);
      }
    } else if (cep.length > 0 && cep.length < 8) {
      setErrors(prev => ({...prev, postalCode: 'O CEP deve conter 8 dígitos.'}));
    }
  }

  function validateForm() {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Nome completo é obrigatório.';
    if (!email.trim()) {
      newErrors.email = 'E-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'E-mail inválido.';
    }
    if (!address.trim()) newErrors.address = 'Endereço é obrigatório.';
    if (!city.trim()) newErrors.city = 'Cidade é obrigatória.';
    if (!postalCode.trim() || postalCode.replace(/\D/g, '').length !== 8) newErrors.postalCode = 'CEP inválido.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e){
    e.preventDefault();
    if (!validateForm()) {
      setShowPayment(false);
      return;
    }
    setShowPayment(true);
  }

  function confirmPayment() {
    const orderId = 'ORD' + Date.now();
    const order = {
      id: orderId,
      name, email, address, city, state: stateUF, postalCode, paymentMethod,
      items: state.items,
      total,
      createdAt: Date.now()
    };
    localStorage.setItem('lastOrder', JSON.stringify(order));
    clear();
    navigate(`/success/${orderId}`);
  }

  if(state.items.length === 0) return <p>Seu carrinho está vazio.</p>
  
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Estamos quase lá! 🎉</h1>
      <p style={{ textAlign: 'center', color: '#555', marginBottom: '30px' }}>
        Complete os dados para finalizar sua compra com segurança.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Seção 1: Resumo do Pedido */}
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h3 style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '15px' }}>Resumo do Pedido</h3>
          {state.items.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontWeight: 'bold' }}>{item.title} ({item.qty})</span>
              <span>R$ {(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom:'8px'}}>
            <span>Subtotal:</span>
            <strong>R$ {subtotal.toFixed(2)}</strong>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', marginBottom:'8px'}}>
            <span>Frete:</span>
            <strong>R$ {shippingCost.toFixed(2)}</strong>
          </div>
          <hr style={{borderTop:'2px solid #333'}} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px', paddingTop: '10px' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Total:</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>R$ {total.toFixed(2)}</span>
          </div>
        </div>

        {/* Seção 2: Formulário de Informações */}
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h3 style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '15px' }}>Dados Pessoais e Entrega</h3>
          <form onSubmit={handleSubmit}>
            <div className="field" style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nome Completo</label>
              <input 
                value={name} 
                onChange={e=>setName(e.target.value)} 
                style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: `1px solid ${errors.name ? 'red' : '#ccc'}`, borderRadius: '4px' }}
              />
              {errors.name && <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.name}</p>}
            </div>
            <div className="field" style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>E-mail</label>
              <input 
                type="email" 
                value={email} 
                onChange={e=>setEmail(e.target.value)} 
                style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: `1px solid ${errors.email ? 'red' : '#ccc'}`, borderRadius: '4px' }}
              />
              {errors.email && <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.email}</p>}
            </div>
            <div className="field" style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>CEP</label>
              <input 
                value={postalCode} 
                onChange={e => setPostalCode(e.target.value)} 
                onBlur={handleCepBlur}
                style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: `1px solid ${errors.postalCode ? 'red' : '#ccc'}`, borderRadius: '4px' }}
              />
              {errors.postalCode && <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.postalCode}</p>}
            </div>
            <div className="field" style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Endereço de Entrega</label>
              <input 
                value={address} 
                onChange={e=>setAddress(e.target.value)} 
                style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: `1px solid ${errors.address ? 'red' : '#ccc'}`, borderRadius: '4px' }}
              />
              {errors.address && <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.address}</p>}
            </div>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
              <div className="field" style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Cidade</label>
                <input 
                  value={city} 
                  onChange={e=>setCity(e.target.value)} 
                  style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: `1px solid ${errors.city ? 'red' : '#ccc'}`, borderRadius: '4px' }}
                />
                {errors.city && <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.city}</p>}
              </div>
              <div className="field" style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Estado (UF)</label>
                <input 
                  value={stateUF} 
                  onChange={e=>setStateUF(e.target.value)} 
                  style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
                />
              </div>
            </div>

            {/* Seção 3: Método de Pagamento */}
            <h3 style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '15px', marginTop: '30px' }}>Método de Pagamento</h3>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ marginRight: '20px' }}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="pix" 
                  checked={paymentMethod === 'pix'}
                  onChange={e => setPaymentMethod(e.target.value)}
                  style={{ marginRight: '5px' }}
                />
                PIX
              </label>
              <label>
                <input 
                  type="radio" 
                  name="payment" 
                  value="boleto" 
                  checked={paymentMethod === 'boleto'}
                  onChange={e => setPaymentMethod(e.target.value)}
                  style={{ marginRight: '5px' }}
                />
                Boleto
              </label>
            </div>
            
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <button type="submit" className="btn" style={{ width: '100%', padding: '15px', fontSize: '1.2rem' }}>
                Finalizar compra
              </button>
            </div>
          </form>
        </div>

        {showPayment && (
          <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center' }}>
            {paymentMethod === 'pix' && (
              <div>
                <h3>Pague com PIX</h3>
                <p>Escaneie o QR Code abaixo para pagar:</p>
                <img src={qrcodePlaceholder} alt="QR Code de Pagamento" style={{ width: '200px', height: '200px', marginTop: '10px' }} />
                <p>Valor total: R$ {total.toFixed(2)}</p>
                <button className="btn" style={{ marginTop: '20px', width: '100%' }} onClick={confirmPayment}>Confirmo o Pagamento</button>
              </div>
            )}
            {paymentMethod === 'boleto' && (
              <div>
                <h3>Pague com Boleto</h3>
                <p>Seu boleto foi gerado com sucesso. Clique no botão abaixo para visualizá-lo e finalize a compra após o pagamento.</p>
                <img src={boletoPlaceholder} alt="Boleto Bancário" style={{ width: '100%', maxWidth: '400px', marginTop: '10px' }} />
                <button className="btn" style={{ marginTop: '20px', width: '100%' }} onClick={confirmPayment}>Finalizar Compra</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}