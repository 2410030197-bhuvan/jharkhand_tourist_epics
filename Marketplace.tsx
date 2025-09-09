import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Star, MapPin, Heart } from 'lucide-react';
import { products } from '../data/products';

const Marketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.seller.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', 'handicraft', 'homestay', 'experience', 'food'];

  const categoryColors = {
    handicraft: 'bg-purple-100 text-purple-800',
    homestay: 'bg-green-100 text-green-800',
    experience: 'bg-blue-100 text-blue-800',
    food: 'bg-orange-100 text-orange-800'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Local Marketplace
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Support local artisans and communities. Discover authentic handicrafts, homestays, and unique experiences
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products or sellers..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[product.category as keyof typeof categoryColors]}`}>
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </span>
                </div>
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{product.location}</span>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">by {product.seller}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <div className="text-lg font-bold text-gray-900">
                    ₹{product.price.toLocaleString()}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Community Impact Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Supporting Local Communities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-green-100">Local Artisans</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">₹2M+</div>
              <div className="text-green-100">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-green-100">Villages Empowered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;