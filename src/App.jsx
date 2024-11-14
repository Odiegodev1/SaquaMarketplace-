import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Marketplace from './components/Martk';
import ProductList from './components/ProductList';

function App() {
  // Estado para armazenar a "página" atual
  const [currentPage, setCurrentPage] = useState('Hero');

  // Estado para armazenar os produtos
  const [products, setProducts] = useState([]);

  // Carregar produtos do localStorage
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products'));
    if (savedProducts) {
      setProducts(savedProducts);
    }
  }, []);

  // Função para alterar a página
  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Navegação */}
      <nav className="flex space-x-4 p-4 bg-gray-800 text-white">
        <button onClick={() => handleNavigate('Hero')} className="p-2 bg-blue-600 rounded">
          Início
        </button>
        <button onClick={() => handleNavigate('Hero')} className="p-2 bg-green-600 rounded">
          Sobre
        </button>
        <button onClick={() => handleNavigate('Marketplace')} className="p-2 bg-yellow-600 rounded">
          Cadastro de Produto
        </button>
        <button onClick={() => handleNavigate('about')} className="p-2 bg-red-600 rounded">
          Ver Produtos
        </button>
      </nav>

      {/* Conteúdo */}
      {currentPage === 'Hero' && <Hero onNavigate={handleNavigate} />}
      {currentPage === 'about' && <About onNavigate={handleNavigate} />}
      {currentPage === 'Marketplace' && (
        <Marketplace products={products} setProducts={setProducts} />
      )}
      {currentPage === 'productList' && <ProductList products={products} />}
    </div>
  );
}

export default App;
