// src/components/ProductCard.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg p-4 bg-white">
      <img className="w-full h-40 object-cover" src={product.image} alt={product.name} />
      <div className="px-2 py-4">
        <div className="font-bold text-lg mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">${product.price.toFixed(2)}</p>
      </div>
      <div className="px-2 py-2">
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
