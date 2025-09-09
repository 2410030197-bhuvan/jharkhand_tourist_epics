import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Navigation, Bus, Car, Train } from 'lucide-react';

interface TransportOption {
  id: string;
  type: 'bus' | 'taxi' | 'train';
  from: string;
  to: string;
  duration: string;
  cost: number;
  availability: 'available' | 'limited' | 'unavailable';
  nextDeparture: string;
  provider: string;
}

const TransportInfo: React.FC<{ destination: string }> = ({ destination }) => {
  const [transportOptions, setTransportOptions] = useState<TransportOption[]>([]);
  const [selectedType, setSelectedType] = useState<'all' | 'bus' | 'taxi' | 'train'>('all');

  useEffect(() => {
    // Simulate real-time transport data
    const mockTransportData: TransportOption[] = [
      {
        id: '1',
        type: 'bus',
        from: 'Ranchi',
        to: destination,
        duration: '2h 30m',
        cost: 150,
        availability: 'available',
        nextDeparture: '10:30 AM',
        provider: 'Jharkhand State Transport'
      },
      {
        id: '2',
        type: 'taxi',
        from: 'Ranchi',
        to: destination,
        duration: '1h 45m',
        cost: 1200,
        availability: 'available',
        nextDeparture: 'On Demand',
        provider: 'Jharkhand Cab Service'
      },
      {
        id: '3',
        type: 'train',
        from: 'Ranchi Junction',
        to: `${destination} Station`,
        duration: '3h 15m',
        cost: 85,
        availability: 'limited',
        nextDeparture: '2:15 PM',
        provider: 'Indian Railways'
      }
    ];

    setTransportOptions(mockTransportData);
  }, [destination]);

  const filteredOptions = transportOptions.filter(option => 
    selectedType === 'all' || option.type === selectedType
  );

  const getTransportIcon = (type: string) => {
    switch (type) {
      case 'bus': return <Bus className="h-5 w-5" />;
      case 'taxi': return <Car className="h-5 w-5" />;
      case 'train': return <Train className="h-5 w-5" />;
      default: return <Navigation className="h-5 w-5" />;
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'text-green-600 bg-green-100';
      case 'limited': return 'text-yellow-600 bg-yellow-100';
      case 'unavailable': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Navigation className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Transportation to {destination}</h3>
      </div>

      {/* Transport Type Filter */}
      <div className="flex space-x-2 mb-4">
        {['all', 'bus', 'taxi', 'train'].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type as any)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedType === type
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Real-time Transport Options */}
      <div className="space-y-3">
        {filteredOptions.map((option) => (
          <div key={option.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  {getTransportIcon(option.type)}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{option.provider}</h4>
                  <p className="text-sm text-gray-600">{option.from} → {option.to}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900">₹{option.cost}</div>
                <div className="text-sm text-gray-600">{option.duration}</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Next: {option.nextDeparture}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(option.availability)}`}>
                  {option.availability}
                </span>
              </div>
              
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Live Location Tracking */}
      <div className="mt-4 p-3 bg-green-50 rounded-lg">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-700 font-medium">Live tracking available for booked rides</span>
        </div>
      </div>
    </div>
  );
};

export default TransportInfo;