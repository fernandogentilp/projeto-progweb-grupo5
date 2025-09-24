import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(){
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      padding: '20px 0', // Diminui o espaçamento interno
      textAlign: 'center'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          gap: '20px',
          marginBottom: '10px' // Diminui o espaçamento
        }}>
          <li><Link to="/fale-conosco" style={{color: 'white', textDecoration: 'none'}}>Fale Conosco</Link></li>
          <li><Link to="/ajuda" style={{color: 'white', textDecoration: 'none'}}>Ajuda</Link></li>
          <li><Link to="/trabalhe-conosco" style={{color: 'white', textDecoration: 'none'}}>Trabalhe Conosco</Link></li>
          <li><Link to="/sobre" style={{color: 'white', textDecoration: 'none'}}>Sobre</Link></li>
          <li><Link to="/termos" style={{color: 'white', textDecoration: 'none'}}>Termos de Serviço</Link></li>
        </ul>

        <p style={{fontSize: '14px', margin: '0'}}>© {new Date().getFullYear()} COMPIA — Loja Virtual. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}