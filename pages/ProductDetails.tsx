import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Check, Truck, ShieldCheck } from 'lucide-react';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);
  const { addToCart } = useCart();
  
  // State for size selection
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes ? product.sizes[0] : undefined
  );

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/shop" className="text-blue-600 hover:underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Link to="/shop" className="inline-flex items-center text-sm text-gray-500 hover:text-black mb-8">
          <ArrowLeft size={16} className="mr-2" /> Back to Shop
        </Link>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse">
            <div className="aspect-w-1 aspect-h-1 w-full bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">{product.name}</h1>
            <p className="text-2xl font-medium text-gray-900 mb-8">${product.price}</p>

            <div className="prose prose-sm text-gray-500 mb-8">
              <p>{product.description}</p>
            </div>

            {/* Sizes */}
            {product.sizes && (
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Size</h3>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        border text-sm font-medium py-3 px-4 sm:flex-1 cursor-pointer focus:outline-none transition-all
                        ${selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50'}
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-black border border-transparent py-4 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mb-6"
            >
              Add to Cart
            </button>

            {/* Value Props */}
            <div className="space-y-4 pt-6 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-600">
                    <Truck size={18} className="mr-3" />
                    <span>Free shipping on orders over $200</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                    <ShieldCheck size={18} className="mr-3" />
                    <span>2-year warranty on all products</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                    <Check size={18} className="mr-3" />
                    <span>Ethically sourced materials</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
