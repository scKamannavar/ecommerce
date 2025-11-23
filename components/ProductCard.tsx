import React from 'react';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Default to first size if available, or none
    const defaultSize = product.sizes ? product.sizes[0] : undefined;
    addToCart(product, defaultSize);
  };

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-[4/5] w-full overflow-hidden bg-gray-100 relative">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          {/* Quick Add Button Overlay */}
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white"
            aria-label="Quick Add"
          >
            <Plus size={20} />
          </button>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
            <p className="mt-1 text-xs text-gray-500">{product.category}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};
