import React from 'react';

function ProductList({ products, setProducts }) {
  const handleRemove = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts)); // Atualiza o localStorage
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.length === 0 ? (
        <p className="text-slate-700">Nenhum produto encontrado.</p>
      ) : (
        products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-xl">
            <img
              src={product.photo}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl text-purple-900 font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-700 mt-2">{product.description}</p>
            <p className="text-lg text-gray-700 font-bold mt-2">{product.price}</p>
            <a
              href={`https://wa.me/${product.contact}`}
              className="text-white mt-4 inline-block bg-green-500 p-1 rounded-xl hover:bg-green-800"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              Comprar no WhatsApp
            </a>
            
            {/* Botão de Remover */}
           
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
