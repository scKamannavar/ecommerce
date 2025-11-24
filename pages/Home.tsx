import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "../constants";
import { ProductCard } from "../components/ProductCard";

export const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2070&auto=format&fit=crop"
            alt="Streetwear Collection"
            className="w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Premium Streetwear
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto opacity-90">
            Heavyweight hoodies, boxy tees, and essentials crafted for the
            modern street aesthetic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              className="px-8 py-3 bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Shop Collection
            </Link>
            <Link
              to="/shop?category=Men"
              className="px-8 py-3 border border-white text-white font-medium hover:bg-white/10 transition-colors duration-200"
            >
              Shop Men
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Trending Now
            </h2>
            <p className="mt-2 text-gray-500">
              The latest drops to upgrade your rotation.
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden sm:flex items-center text-sm font-medium text-black hover:underline group"
          >
            View All{" "}
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 lg:gap-x-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center sm:hidden">
          <Link
            to="/shop"
            className="text-sm font-medium text-black hover:underline inline-flex items-center"
          >
            View All <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Editorial/Banner */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Built to Last</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We don't cut corners. Our hoodies are made from 450GSM French
                Terry cotton, ensuring they stand the test of time and wash
                after wash. Experience the difference of true heavyweight
                quality.
              </p>
              <Link
                to="/shop"
                className="inline-block border-b border-black pb-1 hover:text-gray-600 transition-colors"
              >
                Explore our fabrics
              </Link>
            </div>
            <div className="order-1 md:order-2 aspect-square md:aspect-[4/3] overflow-hidden bg-gray-200">
              <img
                src="https://plus.unsplash.com/premium_photo-1673356302169-574db56b52cd?q=80&w=870&auto=format&fit=crop&"
                alt="Fabric detail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
