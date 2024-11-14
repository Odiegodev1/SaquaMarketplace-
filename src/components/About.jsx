import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';

function About() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Carrega os produtos do localStorage ao carregar o componente
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products'));
    if (savedProducts) {
      setProducts(savedProducts);
    }
  }, []);

  // Filtra os produtos com base na pesquisa
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-gray-900 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-white text-4xl mb-10">
        Marketplace <span className="bg-purple-900 p-1 text-center rounded-xl">Saquarema</span>
      </h1>

      <div className="flex flex-col gap-10 mt-20 items-start justify-start">
      <h1 className='text-4xl font-bold text-purple-900 bg-white p-2 w-[550px] rounded-xl shadow-2xl shadow-purple-600'>Produtos listados:</h1>

        <div className="text-white text-2xl font-semibold mt-10 w-full">
          
          {/* Passa os produtos filtrados para o ProductList */}
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </section>
  );
}

export default About;
