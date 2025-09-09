import React, { useState } from 'react';
import { Search, Star, MapPin, Languages, Award, Shield, IndianRupee, Calendar, Clock } from 'lucide-react';
import { guides } from '../data/guides';

const Guides: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedGuide, setSelectedGuide] = useState<any>(null);

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || 
                            guide.specialties.some(specialty => 
                              specialty.toLowerCase().includes(selectedSpecialty.toLowerCase())
                            );
    return matchesSearch && matchesSpecialty;
  });

  const specialties = ['all', 'Wildlife Tours', 'Cultural Tours', 'Adventure Sports', 'Eco-tourism', 'Photography'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Verified Local Guides
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with certified local guides for authentic cultural experiences and expert knowledge
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search guides or locations..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <select
                className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>
                    {specialty === 'all' ? 'All Specialties' : specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Blockchain Verification Notice */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-4 mb-8">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-blue-600" />
            <span className="text-blue-800 font-medium">All guides are blockchain-verified for authenticity and safety</span>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredGuides.map((guide) => (
            <div key={guide.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <img
                      src={guide.avatar}
                      alt={guide.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {guide.verified && (
                      <div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-1">
                        <Shield className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{guide.name}</h3>
                    <div className="flex items-center text-gray-600 mb-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{guide.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium ml-1">{guide.rating}</span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-600">{guide.reviews} reviews</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Languages className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Languages:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {guide.languages.map((language, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Specialties:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {guide.specialties.map((specialty, index) => (
                      <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-600">
                    <span>{guide.experience} years experience</span>
                  </div>
                  <div className="flex items-center text-lg font-bold text-gray-900">
                    <IndianRupee className="h-5 w-5" />
                    <span>{guide.pricePerDay.toLocaleString()}/day</span>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedGuide(guide)}
                  className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  View Profile & Book
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guide Booking Modal */}
        {selectedGuide && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={selectedGuide.avatar}
                      alt={selectedGuide.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{selectedGuide.name}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{selectedGuide.location}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-500 fill-current" />
                          <span className="font-medium ml-1">{selectedGuide.rating}</span>
                          <span className="text-gray-600 ml-1">({selectedGuide.reviews} reviews)</span>
                        </div>
                        {selectedGuide.verified && (
                          <div className="flex items-center text-green-600">
                            <Shield className="h-4 w-4 mr-1" />
                            <span className="text-sm font-medium">Blockchain Verified</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedGuide(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedGuide.languages.map((language: string, index: number) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedGuide.specialties.map((specialty: string, index: number) => (
                        <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-600">Experience</span>
                      <div className="font-semibold">{selectedGuide.experience} years</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Rate per day</span>
                      <div className="font-semibold flex items-center">
                        <IndianRupee className="h-4 w-4" />
                        {selectedGuide.pricePerDay.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Book This Guide</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Duration (days)</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                        <option>1 day</option>
                        <option>2 days</option>
                        <option>3 days</option>
                        <option>4 days</option>
                        <option>5+ days</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Book Now (Blockchain Secured)
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Message Guide
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Guides;