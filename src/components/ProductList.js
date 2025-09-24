import React, { useState } from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';

export default function ProductList({ limit }) {
  // Estado para armazenar a categoria selecionada
  const [activeCategory, setActiveCategory] = useState('Todos');
  // Estado para a busca
  const [searchQuery, setSearchQuery] = useState('');
  // Estado para a visibilidade dos filtros
  const [showFilters, setShowFilters] = useState(false);

  // 1. Filtra os produtos com base na categoria ativa
  const filteredByCategory = activeCategory === 'Todos'
    ? products
    : products.filter(p => p.category === activeCategory);

  // 2. Aplica o filtro de busca
  const filteredBySearch = filteredByCategory.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 3. Aplica o limite de produtos, se a prop existir
  const displayedProducts = limit
    ? filteredBySearch.slice(0, limit)
    : filteredBySearch;

  // Extrai as categorias únicas
  const allCategories = ['Todos', ...new Set(products.map(p => p.category))];

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        {/* Campo de pesquisa */}
        <input 
          type="text" 
          placeholder="Pesquisar livros..." 
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />
      </div>

      {/* Botão para mostrar/esconder filtros */}
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setShowFilters(!showFilters)}
          style={{
            padding: '10px 15px',
            backgroundColor: '#92a7beff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          {showFilters ? 'Esconder Filtros' : 'Mostrar Filtros'}
        </button>
      </div>

      {/* Renderização condicional dos botões de categoria */}
      {showFilters && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSearchQuery('');
              }}
              style={{
                padding: '8px 12px', /* Diminui o tamanho dos botões */
                border: '1px solid #ccc',
                borderRadius: '20px',
                backgroundColor: activeCategory === category ? '#8aa5c2ff' : 'white',
                color: activeCategory === category ? 'white' : 'black',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s',
                fontSize: '14px'
              }}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      
      <div className="grid" style={{ marginTop: 12 }}>
        {displayedProducts.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}