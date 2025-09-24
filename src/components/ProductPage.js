import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../contexts/CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => String(p.id) === String(id));
  const { add } = useCart();
  const [showNotification, setShowNotification] = useState(false);

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Produto não encontrado.</h1>
        <p>O produto que você está procurando não existe ou foi removido.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    add(product);
    setShowNotification(true);
    // Faz a notificação desaparecer após 3 segundos
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px',
      backgroundColor: '#f8f8f8',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        maxWidth: '1000px',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '30px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
      }}>
        {/* Coluna da Imagem */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: '80%',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease-in-out'
            }}
          />
        </div>

        {/* Coluna das Informações */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="badge" style={{
            backgroundColor: product.type === 'ebook' ? '#2ecc71' : '#3498db',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            fontSize: '14px',
            fontWeight: 'bold',
            display: 'inline-block',
            marginBottom: '10px'
          }}>
            {product.type.toUpperCase()}
          </div>
          <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '10px' }}>{product.title}</h1>
          <p className="price" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#e74c3c' }}>
            R$ {product.price.toFixed(2)}
          </p>
          
          <h3 style={{ marginTop: '20px', color: '#555' }}>Descrição</h3>
          <p style={{ color: '#666', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>{product.description}</p>
          
          <p style={{ color: '#888', fontSize: '14px', marginTop: '10px' }}>
            SKU: {product.sku}
          </p>

          <div style={{ marginTop: '30px' }}>
            <button
              className="btn"
              onClick={handleAddToCart}
              style={{
                backgroundColor: '#27ae60',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                fontSize: '1.1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease-in-out'
              }}
            >
              Adicionar ao Carrinho
            </button>
            {showNotification && (
              <div style={{
                marginTop: '15px',
                backgroundColor: '#2ecc71',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                textAlign: 'center',
                transition: 'opacity 0.5s ease-in-out'
              }}>
                Produto adicionado ao carrinho!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}