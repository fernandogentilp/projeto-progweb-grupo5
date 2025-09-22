import React from 'react';

export default function Footer(){
  return (
    <footer>
      <div className="container">
        <p>© {new Date().getFullYear()} COMPIA — Loja Virtual. Projeto demo em React.</p>
      </div>
    </footer>
  );
}
