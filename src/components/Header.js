import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import Logo from '../assets/icon.png';
import HeaderBackground from '../assets/header-fundo.png';
import '../css/Header.css';

export default function Header(){
  const { state } = useCart();
  const count = state.items.reduce((s,i)=>s+i.qty,0);
  return (
    <header style={{
      backgroundImage: `url(${HeaderBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: '15px 0'
    }}>
      <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', maxWidth: '1200px', margin: '0 auto'}}>
        {/* Lado Esquerdo: Apenas o Logo */}
        <div style={{display:'flex', alignItems:'center'}}>
          <img src={Logo} alt="Logo" style={{height:'100px', marginRight:'10px'}} />
        </div>

        {/* Lado Direito: Links de Navegação */}
        <div style={{display:'flex', alignItems:'center'}}>
          <nav className="nav-links">
            <Link to="/" style={{color:'white', textDecoration:'none', marginRight:'15px', fontSize: '18px'}}>Home</Link>
            <Link to="/catalogo" style={{color:'white', textDecoration:'none', marginRight:'15px', fontSize: '18px'}}>Catálogo</Link>
            <Link to="/cart" style={{color:'white', textDecoration:'none', fontSize: '18px'}}>Carrinho ({count})</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}