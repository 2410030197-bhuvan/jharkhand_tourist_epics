import React, { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import { destinations } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';

const Destinations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || destination.type === selectedType;
    return matchesSearch && matchesType;
  });

  const destinationTypes = ['all', 'eco-tourism', 'cultural', 'historical', 'adventure', 'spiritual'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Jharkhand's Destinations
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover pristine forests, ancient temples, tribal culture, and natural wonders across the state
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search destinations or locations..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {destinationTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredDestinations.length} of {destinations.length} destinations
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No destinations found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Map Section Placeholder */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Map</h3>
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Interactive map with AR previews coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;