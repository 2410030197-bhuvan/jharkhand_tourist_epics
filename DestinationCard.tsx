import React from 'react';
import { MapPin, Star, Clock, IndianRupee } from 'lucide-react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  onClick?: () => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onClick }) => {
  const typeColors = {
    'eco-tourism': 'bg-green-100 text-green-800',
    'cultural': 'bg-purple-100 text-purple-800',
    'historical': 'bg-yellow-100 text-yellow-800',
    'adventure': 'bg-red-100 text-red-800',
    'spiritual': 'bg-blue-100 text-blue-800'
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={destination.images[0]}
          alt={destination.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${typeColors[destination.type]}`}>
            {destination.type.charAt(0).toUpperCase() + destination.type.slice(1)}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <div className="bg-white px-2 py-1 rounded-full flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{destination.rating}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{destination.location}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {destination.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{destination.duration}</span>
            </div>
            <span className="text-gray-300">•</span>
            <span>{destination.difficulty}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-lg font-bold text-gray-900">
            <IndianRupee className="h-5 w-5" />
            <span>{destination.price.toLocaleString()}</span>
            <span className="text-sm font-normal text-gray-600 ml-1">per person</span>
          </div>
          <span className="text-sm text-gray-500">{destination.reviews} reviews</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;