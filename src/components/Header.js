import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export default function Header(){
  const { state } = useCart();
  const count = state.items.reduce((s,i)=>s+i.qty,0);
  return (
    <header>
      <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{display:'flex', alignItems:'center'}}>
          <Link to="/" className="brand" style={{color:'white', textDecoration:'none'}}>COMPIA</Link>
          <nav className="nav-links" style={{color:'white'}}>
            <Link to="/" style={{color:'white', textDecoration:'none'}}>Home</Link>
            <Link to="/cart" style={{color:'white', textDecoration:'none'}}>Carrinho</Link>
          </nav>
        </div>
        <div>
          <Link to="/cart" className="btn secondary">Carrinho ({count})</Link>
        </div>
      </div>
    </header>
  );
}
