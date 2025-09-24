import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';
import Home from "./components/Home";
// Importe o componente que você criou para o Catálogo, se ele for diferente de ProductList.
// Por exemplo: import Catalogo from './components/Catalogo';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          {/* Rota da página inicial */}
          <Route path="/" element={<Home />} />
          
          {/* Rota para o Catálogo, usando ProductList como o componente */}
          <Route path="/catalogo" element={<ProductList />} />
          
          {/* As outras rotas da sua aplicação */}
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success/:orderId" element={<OrderSuccess />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}