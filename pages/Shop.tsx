import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { Category } from '../types';

export const Shop: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category');

  const filteredProducts = useMemo(() => {
    if (!categoryParam) return PRODUCTS;
    return PRODUCTS.filter(p => p.category === categoryParam || (categoryParam === 'Men' && p.category === Category.UNISEX) || (categoryParam === 'Women' && p.category === Category.UNISEX));
  }, [categoryParam]);

  const categoryTitle = categoryParam ? categoryParam : 'All Products';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{categoryTitle}</h1>
        <div className="mt-4 md:mt-0 text-sm text-gray-500">
          Showing {filteredProducts.length} results
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 lg:gap-x-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};
