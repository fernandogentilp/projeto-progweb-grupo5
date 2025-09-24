// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedProducts from './FeaturedProducts';

function Home() {
  return (
    <div className="home-page">
      {/* Seção "Quem Somos" */}
      <section className="about-us-section" style={{ padding: "40px", textAlign: "center", backgroundColor: "#f9f9f9" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Quem Somos</h2>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}>
            A COMPIA é a sua loja virtual especializada em livros e materiais exclusivos. 
            Nossa missão é fornecer conteúdo de qualidade para todos que buscam conhecimento e inspiração, 
            garantindo uma experiência de compra simples e segura.
          </p>
        </div>
      </section>

      {/* Seção 1: Destaques da Semana */}
      <section className="featured-section">
        <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "2rem" }}>Destaques da Semana</h2>
        {/* Use o novo componente para os destaques */}
        <FeaturedProducts limit={4} />
      </section>
      
      {/* Seção 2: Ofertas Especiais */}
      <section className="promotions-section" style={{ backgroundColor: "#e8eef2", padding: "40px 0", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem" }}>Ofertas Especiais!</h2>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>Preços imperdíveis para você aproveitar agora.</p>
        <Link to="/catalogo" style={{
          backgroundColor: "#007BFF",
          color: "white",
          padding: "12px 25px",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold",
          marginTop: "20px",
          display: "inline-block"
        }}>Ver todas as Ofertas</Link>
      </section>

      {/* Seção 3: Depoimentos de Clientes */}
      <section className="testimonials-section" style={{ padding: "40px 0" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "30px" }}>O que nossos clientes dizem</h2>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" }}>
          <div style={{ maxWidth: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
            <p style={{ fontStyle: "italic", color: "#444" }}>"Encontrei exatamente o livro que procurava, e a entrega foi super rápida!"</p>
            <p><strong>- Maria S.</strong></p>
          </div>
          <div style={{ maxWidth: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
            <p style={{ fontStyle: "italic", color: "#444" }}>"Ótimo atendimento e uma seleção incrível de livros técnicos. Recomendo muito!"</p>
            <p><strong>- João P.</strong></p>
          </div>
          <div style={{ maxWidth: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
            <p style={{ fontStyle: "italic", color: "#444" }}>"A navegação é super fácil e os preços são justos. Minha nova loja de livros favorita!"</p>
            <p><strong>- Ana L.</strong></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;